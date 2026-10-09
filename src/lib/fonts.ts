import { Newsreader, Public_Sans } from "next/font/google";

/**
 * Two families only.
 * Newsreader — a reading serif with optical sizing: composed and literate,
 *   never ornamental. Headings and a few brand statements.
 * Public Sans — neutral, highly legible sans for everything practical:
 *   body, navigation, buttons, phone numbers, forms.
 * Both cover Albanian fully (ë, Ë, ç, Ç).
 */
export const serif = Newsreader({
  // "latin" already contains every Albanian letter (ë Ë ç Ç are Latin-1)
  subsets: ["latin"],
  // Only weight 400 is used. Measured (audit LUM-12): the variable font with
  // the optical-size axis was 131.8 KB; this static 400 file is 22.5 KB
  // (fonts on "/" 155 → 49 KB, mobile LCP 3.2 → 3.0 s). Trade-off: large
  // headings use the text cut instead of the display optical size.
  weight: "400",
  variable: "--font-newsreader",
  display: "swap",
});

export const sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});
