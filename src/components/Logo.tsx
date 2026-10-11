import Image from "next/image";

/**
 * Luméa mark: the official symbol (fan of rays, wings, flame), cut from the
 * logo supplied by the owner. The wordmark beside it is set in text.
 *
 * Two files: the original (black rays) for light backgrounds, and one with
 * ivory rays for the dark footer. Both are 632 × 263 with a transparent
 * background. A vector version from the designer would be sharper at large
 * sizes; this one is crisp up to about 200 px wide.
 */
export function LogoMark({ className = "", onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <Image
      src={onDark ? "/images/site/logo-mark-dark.webp" : "/images/site/logo-mark.webp"}
      alt=""
      width={632}
      height={263}
      unoptimized
      loading="eager"
      className={className}
    />
  );
}

export function Logo({ variant = "horizontal", className = "", onDark = false }: { variant?: "horizontal" | "stacked"; className?: string; onDark?: boolean }) {
  if (variant === "stacked") {
    return (
      <span className={`inline-flex flex-col items-center gap-2 ${className}`}>
        <LogoMark className="h-12 w-auto" onDark={onDark} />
        <span className="font-sans text-[1.65rem] font-medium leading-none tracking-[0.22em] pl-[0.22em]">LUMÉA</span>
        <span className="font-sans text-[0.68rem] font-medium leading-none tracking-[0.32em] pl-[0.32em] opacity-80">FUNERAL HOME</span>
      </span>
    );
  }
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-auto sm:h-9" onDark={onDark} />
      <span className="flex flex-col">
        <span className="font-sans text-[1.15rem] font-medium leading-none tracking-[0.2em] sm:text-[1.3rem]">LUMÉA</span>{" "}
        <span className="mt-1 font-sans text-[0.58rem] font-medium leading-none tracking-[0.3em] opacity-75 sm:text-[0.62rem]">FUNERAL HOME</span>
      </span>
    </span>
  );
}
