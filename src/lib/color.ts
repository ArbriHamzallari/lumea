/**
 * Room colour system.
 *
 * Each room supplies ONE colour (its primaryColor, sampled from the real
 * upholstery). Everything else — the page tints, borders, accents — is
 * derived here in the OKLab/OKLCH colour space: surfaces keep Luméa's ivory
 * lightness and borrow only the room's hue, so tints stay natural instead of
 * turning grey, muddy or neon.
 *
 * Every derived pair is contrast-checked; if a pairing falls below WCAG AA
 * the accent is darkened until it passes. Accessibility wins over novelty.
 */

type RGB = [number, number, number];

const PAPER = "#FAF7F2"; // Luméa base ivory (matches --paper in globals.css)
const INK = "#1E1B17";

function hexToRgb(hex: string): RGB {
  const h = hex.replace("#", "");
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) as RGB;
}
function rgbToHex([r, g, b]: RGB) {
  return "#" + [r, g, b].map((v) => Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, "0")).join("");
}

const toLin = (c: number) => {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};
const fromLin = (c: number) => 255 * (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);

function rgbToOklab([r, g, b]: RGB): RGB {
  const [lr, lg, lb] = [toLin(r), toLin(g), toLin(b)];
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}
function oklabToRgb([L, a, b]: RGB): RGB {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    fromLin(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
    fromLin(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
    fromLin(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
  ];
}

/** Mix `amount` (0–1) of colour `a` into colour `b`, in OKLab. */
export function mix(a: string, b: string, amount: number) {
  const A = rgbToOklab(hexToRgb(a));
  const B = rgbToOklab(hexToRgb(b));
  return rgbToHex(oklabToRgb(A.map((v, i) => v * amount + B[i] * (1 - amount)) as RGB));
}

/**
 * A tint that keeps Luméa's ivory lightness but takes the room's hue:
 * set lightness L and chroma C directly in OKLCH, hue from the room colour.
 * (Mixing a dark colour into ivory would only make it greyer.)
 */
function tint(hex: string, L: number, C: number) {
  const [, a, b] = rgbToOklab(hexToRgb(hex));
  const h = Math.atan2(b, a);
  return rgbToHex(oklabToRgb([L, C * Math.cos(h), C * Math.sin(h)]));
}

export function luminance(hex: string) {
  const [r, g, b] = hexToRgb(hex).map(toLin);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
export function contrast(a: string, b: string) {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
}

/** Darken `fg` toward ink until it reaches `min` contrast on `bg`. */
function ensureContrast(fg: string, bg: string, min: number) {
  let c = fg;
  for (let i = 0; i < 20 && contrast(c, bg) < min; i++) c = mix(INK, c, 0.12 * (i + 1));
  return c;
}

export type RoomTheme = {
  primary: string; // the physical room colour
  pale: string; // page background — almost neutral, just warmed by the room
  light: string; // tinted sections
  line: string; // borders, hairlines, image frames
  accent: string; // text accents & links (AA on pale and light)
  dark: string; // headings in room colour (AAA on pale)
  onPrimary: string; // text on primary buttons
};

export function deriveRoomTheme(primary: string): RoomTheme {
  const pale = mix(tint(primary, 0.962, 0.016), PAPER, 0.6); // ivory, warmed by the room
  const light = mix(tint(primary, 0.93, 0.024), PAPER, 0.6); // tinted sections
  const line = mix(tint(primary, 0.82, 0.045), PAPER, 0.85); // hairlines & frames
  const accent = ensureContrast(ensureContrast(primary, pale, 4.5), light, 4.5);
  const dark = ensureContrast(mix(primary, INK, 0.7), pale, 7);
  const onPrimary = contrast(PAPER, primary) >= 4.5 ? PAPER : INK;
  return { primary, pale, light, line, accent, dark, onPrimary };
}

export function themeToCssVars(t: RoomTheme): Record<string, string> {
  return {
    "--room": t.primary,
    "--room-pale": t.pale,
    "--room-light": t.light,
    "--room-line": t.line,
    "--room-accent": t.accent,
    "--room-dark": t.dark,
    "--room-on": t.onPrimary,
  };
}
