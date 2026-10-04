import { rooms } from "@/content/rooms";
import { services } from "@/content/services";
import { routes, childHref, type Locale } from "./i18n";

/**
 * Map of every page URL → its counterpart in the other language.
 * Built on the server and handed to the language switcher, so the switcher
 * always lands on the equivalent page rather than the home page.
 */
export function buildAlternateMap(): Record<string, string> {
  const map: Record<string, string> = {};
  const pair = (sq: string, en: string) => {
    map[sq] = en;
    map[en] = sq;
  };
  for (const r of Object.values(routes)) pair(r.sq, r.en);
  for (const s of services) pair(childHref("services", s.slug, "sq"), childHref("services", s.slug, "en"));
  for (const r of rooms) pair(childHref("rooms", r.slug, "sq"), childHref("rooms", r.slug, "en"));
  return map;
}

export function localeFromPath(path: string): Locale {
  return path === "/en" || path.startsWith("/en/") ? "en" : "sq";
}
