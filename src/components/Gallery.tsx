"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { IconArrow, IconArrowLeft, IconClose } from "./Icons";

export type GalleryItem = { src: string; width: number; height: number; blur: string; alt: string };

type Labels = { open: string; close: string; prev: string; next: string; dialog: string; counter: string };

type Props = {
  items: GalleryItem[];
  labels: Labels; // counter uses "{i}" and "{n}" placeholders
  layout?: "grid" | "mosaic" | "room";
  className?: string;
};

/**
 * Room layout: one large feature photo with two beside it, then rows of three.
 * The last row always closes cleanly — a leftover photo widens instead of
 * sitting alone (on phones: rows of two).
 */
function roomTile(i: number, n: number) {
  if (i === 0) return "col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto";
  const cls: string[] = [];
  // phones: 2 columns after the full-width feature
  const mobileOrphan = (n - 1) % 2 === 1 && i === n - 1;
  cls.push(mobileOrphan ? "col-span-2 aspect-[16/9]" : "aspect-[4/5]");
  // md+: 3 columns; items 1 and 2 sit beside the feature
  const rest = Math.max(0, n - 3);
  const rem = rest % 3;
  if (i >= 3 && rem === 1 && i === n - 1) cls.push("md:col-span-3 md:aspect-[21/9]");
  else if (i >= 3 && rem === 2 && i === n - 2) cls.push("md:col-span-2 md:aspect-auto");
  else cls.push("md:col-span-1 md:aspect-[4/5]");
  return cls.join(" ");
}

/** Plain grid (2 cols → 3 cols) with the same clean last row. */
function gridTile(i: number, n: number) {
  const cls: string[] = [];
  cls.push(n % 2 === 1 && i === n - 1 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]");
  const rem = n % 3;
  if (rem === 1 && i === n - 1) cls.push("md:col-span-3 md:aspect-[21/9]");
  else if (rem === 2 && i === n - 2) cls.push("md:col-span-2 md:aspect-auto");
  else cls.push("md:col-span-1 md:aspect-[4/3]");
  return cls.join(" ");
}

/**
 * Photo gallery with an accessible lightbox:
 * keyboard (← → Esc, focus trapped and restored), swipe on touch screens,
 * and only the open image at full size is ever loaded.
 */
export function Gallery({ items, labels, layout = "grid", className = "" }: Props) {
  const [index, setIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const grid =
    layout === "mosaic"
      ? "grid grid-cols-2 gap-2 md:grid-cols-12 md:gap-3"
      : layout === "room"
        ? "grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3"
        : "grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3";

  const tile = (i: number) => {
    if (layout === "mosaic") {
      // Editorial rhythm: one tall feature, then smaller frames
      const spans = ["col-span-2 md:col-span-6 md:row-span-2 aspect-[4/3] md:aspect-auto", "md:col-span-3 aspect-square", "md:col-span-3 aspect-square", "md:col-span-3 aspect-square", "md:col-span-3 aspect-square"];
      return spans[i % spans.length];
    }
    if (layout === "room") return roomTile(i, items.length);
    return gridTile(i, items.length);
  };

  return (
    <>
      <ul className={`${grid} ${className}`}>
        {items.map((it, i) => (
          <li key={it.src} className={`relative overflow-hidden bg-stone-100 ${tile(i)}`}>
            <button
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              type="button"
              onClick={() => setIndex(i)}
              className="group absolute inset-0 block size-full cursor-zoom-in"
              aria-label={`${labels.open}: ${it.alt}`}
            >
              <Image
                src={it.src}
                alt=""
                fill
                sizes={layout === "mosaic" && i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                placeholder="blur"
                blurDataURL={it.blur}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </button>
          </li>
        ))}
      </ul>
      {index !== null && (
        <Lightbox
          items={items}
          index={index}
          setIndex={setIndex}
          labels={labels}
          onClose={() => {
            const i = index;
            setIndex(null);
            requestAnimationFrame(() => triggerRefs.current[i]?.focus());
          }}
        />
      )}
    </>
  );
}

function Lightbox({
  items,
  index,
  setIndex,
  labels,
  onClose,
}: {
  items: GalleryItem[];
  index: number;
  setIndex: (i: number) => void;
  labels: Labels;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const n = items.length;
  const it = items[index];

  const go = useCallback((d: number) => setIndex((index + d + n) % n), [index, n, setIndex]);

  useEffect(() => {
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab" && ref.current) {
        // Only buttons that are rendered: the prev/next pairs swap with the breakpoint.
        const f = [...ref.current.querySelectorAll<HTMLElement>("button")].filter((b) => b.getClientRects().length > 0);
        const first = f[0];
        const last = f[f.length - 1];
        if (!ref.current.contains(document.activeElement)) {
          e.preventDefault();
          (e.shiftKey ? last : first).focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  const counter = labels.counter.replace("{i}", String(index + 1)).replace("{n}", String(n));

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={labels.dialog}
      className="enter fixed inset-0 z-[100] flex flex-col bg-[#141614]/[0.97] text-on-marble"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <p className="text-sm tabular-nums text-on-marble-muted" aria-live="polite">
          {counter}
        </p>
        <button ref={closeRef} type="button" onClick={onClose} className="inline-flex size-12 items-center justify-center hover:text-white">
          <IconClose />
          <span className="sr-only">{labels.close}</span>
        </button>
      </div>

      <div className="relative flex-1" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <Image
          key={it.src}
          src={it.src}
          alt={it.alt}
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={it.blur}
          className="object-contain px-2 sm:px-20"
          preload
        />
        {n > 1 && (
          <>
            <button type="button" onClick={() => go(-1)} className="absolute left-1 top-1/2 hidden size-14 -translate-y-1/2 items-center justify-center hover:text-white sm:inline-flex sm:left-4">
              <IconArrowLeft className="size-6" />
              <span className="sr-only">{labels.prev}</span>
            </button>
            <button type="button" onClick={() => go(1)} className="absolute right-1 top-1/2 hidden size-14 -translate-y-1/2 items-center justify-center hover:text-white sm:inline-flex sm:right-4">
              <IconArrow className="size-6" />
              <span className="sr-only">{labels.next}</span>
            </button>
          </>
        )}
      </div>

      <div className="flex items-center gap-3 px-4 py-4 sm:px-6">
        {n > 1 && (
          <button type="button" onClick={() => go(-1)} className="inline-flex size-12 shrink-0 items-center justify-center border border-white/20 sm:hidden">
            <IconArrowLeft className="size-5" />
            <span className="sr-only">{labels.prev}</span>
          </button>
        )}
        <p className="mx-auto max-w-2xl flex-1 text-center text-[0.95rem] leading-snug text-on-marble">{it.alt}</p>
        {n > 1 && (
          <button type="button" onClick={() => go(1)} className="inline-flex size-12 shrink-0 items-center justify-center border border-white/20 sm:hidden">
            <IconArrow className="size-5" />
            <span className="sr-only">{labels.next}</span>
          </button>
        )}
      </div>
    </div>
  );
}
