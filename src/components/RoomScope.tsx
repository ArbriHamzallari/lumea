"use client";

import { usePathname } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";

/**
 * Persistent wrapper for the facilities section. It reads the current room
 * from the URL and sets that room's colour variables. Because the wrapper
 * survives client-side navigation and the variables are registered CSS
 * properties, moving between rooms smoothly shifts the whole page from one
 * room's colour to the next. Returning to the room list fades back to
 * Luméa's neutral ivory.
 */
export function RoomScope({ themes, children }: { themes: Record<string, Record<string, string>>; children: ReactNode }) {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean).pop() ?? "";
  const vars = themes[slug];
  return (
    <div className="room-scope" style={vars as CSSProperties | undefined}>
      {children}
    </div>
  );
}
