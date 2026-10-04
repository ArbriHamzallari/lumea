/**
 * Luméa mark — redrawn as SVG from the logo on Luméa's signage and
 * Instagram (fan of light rays, gold wings, gold flame).
 *
 * TODO(brand): replace with the official vector logo file when available.
 * Keep the same component API so nothing else needs to change.
 */

const CX = 32;
const CY = 29;

function rays() {
  const out: string[] = [];
  const n = 7;
  const spread = 104; // degrees
  const wedge = 6.2; // degrees per ray
  for (let i = 0; i < n; i++) {
    const mid = -spread / 2 + (spread / (n - 1)) * i;
    const r = i === 3 ? 25 : 23 - Math.abs(i - 3) * 0.6;
    const a1 = ((mid - wedge / 2 - 90) * Math.PI) / 180;
    const a2 = ((mid + wedge / 2 - 90) * Math.PI) / 180;
    const p = (a: number, rad: number) => `${(CX + Math.cos(a) * rad).toFixed(2)},${(CY + Math.sin(a) * rad).toFixed(2)}`;
    out.push(`M${p(a1, 6)} L${p(a1, r)} L${p(a2, r)} L${p(a2, 6)} Z`);
  }
  return out.join(" ");
}

const RAYS = rays();
const WING =
  "M30 27.6 C24 22.4 14.5 19.8 2.5 20.6 C7.5 22.6 11 24.3 13.6 25.6 C10.2 25.7 7.4 26.2 5 27.1 C11 28.2 16 29.6 19.2 30.6 C17 31 15 31.6 13.4 32.4 C19.6 32.8 25.6 31.9 30 30.2 Z";
const FEATHERS = "M6 21.6 C14 22.2 21.8 24.4 28.6 28.2 M8.4 27 C15.4 27.6 22.2 28.8 28.8 29.6 M15.8 32 C21 31.8 25.6 31 29 30";

export function LogoMark({ className = "", title }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <path d={RAYS} fill="currentColor" />
      <g fill="var(--gold)">
        <path d={WING} />
        <path d={WING} transform="translate(64 0) scale(-1 1)" />
      </g>
      <g fill="none" stroke="var(--paper)" strokeWidth="0.45" strokeLinecap="round" opacity="0.7">
        <path d={FEATHERS} />
        <path d={FEATHERS} transform="translate(64 0) scale(-1 1)" />
      </g>
      <path d="M32 24.4 C33.9 27.2 34.6 29.4 34.6 31 C34.6 33.1 33.4 34.6 32 35.6 C30.6 34.6 29.4 33.1 29.4 31 C29.4 29.4 30.1 27.2 32 24.4 Z" fill="var(--gold)" />
    </svg>
  );
}

export function Logo({ variant = "horizontal", className = "" }: { variant?: "horizontal" | "stacked"; className?: string }) {
  if (variant === "stacked") {
    return (
      <span className={`inline-flex flex-col items-center gap-1.5 ${className}`}>
        <LogoMark className="h-12 w-auto" />
        <span className="font-sans text-[1.65rem] font-medium leading-none tracking-[0.22em] pl-[0.22em]">LUMÉA</span>
        <span className="font-sans text-[0.68rem] font-medium leading-none tracking-[0.32em] pl-[0.32em] opacity-80">FUNERAL HOME</span>
      </span>
    );
  }
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-auto sm:h-9" />
      <span className="flex flex-col">
        <span className="font-sans text-[1.15rem] font-medium leading-none tracking-[0.2em] sm:text-[1.3rem]">LUMÉA</span>{" "}
        <span className="mt-1 font-sans text-[0.58rem] font-medium leading-none tracking-[0.3em] opacity-75 sm:text-[0.62rem]">FUNERAL HOME</span>
      </span>
    </span>
  );
}
