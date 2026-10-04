"use client";

import { useState } from "react";
import { IconPin } from "./Icons";

/**
 * Click-to-load Google map. Nothing is requested from Google (no cookies,
 * no tracking, no heavy script) until the visitor asks for the map.
 */
export function MapEmbed({ src, title, loadLabel, note, address }: { src: string; title: string; loadLabel: string; note: string; address: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-line bg-stone-50 md:aspect-[16/11]">
      {loaded ? (
        <iframe src={src} title={title} className="absolute inset-0 size-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
          {/* Abstract street grid — decorative */}
          <svg aria-hidden className="absolute inset-0 size-full text-line" preserveAspectRatio="none" viewBox="0 0 400 300">
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <path d="M120 0 L105 300" strokeWidth="6" />
              <path d="M0 95 L400 80" />
              <path d="M0 190 L400 205" />
              <path d="M260 0 L270 300" />
              <path d="M0 40 L400 30" />
              <path d="M330 0 L345 300" />
              <path d="M0 255 L400 262" />
            </g>
          </svg>
          <span className="relative inline-flex size-12 items-center justify-center rounded-full bg-paper text-bronze ring-1 ring-line">
            <IconPin className="size-6" />
          </span>
          <p className="relative max-w-xs font-serif text-xl text-ink">{address}</p>
          <button type="button" onClick={() => setLoaded(true)} className="btn btn-secondary relative bg-paper">
            {loadLabel}
          </button>
          <p className="relative text-sm text-muted">{note}</p>
        </div>
      )}
    </div>
  );
}
