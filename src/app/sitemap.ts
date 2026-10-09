import type { MetadataRoute } from "next";
import { rooms } from "@/content/rooms";
import { services } from "@/content/services";
import { routes, childHref, type L } from "@/lib/i18n";
import { abs } from "@/lib/seo";

/**
 * Every indexable page, in both languages, each listing its counterpart.
 * No lastmod: a build timestamp on every URL would carry no information
 * (audit LUM-26).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pairs: { paths: L; priority: number }[] = [
    { paths: routes.home, priority: 1 },
    { paths: routes.contact, priority: 0.9 },
    { paths: routes.services, priority: 0.9 },
    { paths: routes.rooms, priority: 0.9 },
    ...services.map((s) => ({ paths: { sq: childHref("services", s.slug, "sq"), en: childHref("services", s.slug, "en") }, priority: 0.8 })),
    ...rooms.map((r) => ({ paths: { sq: childHref("rooms", r.slug, "sq"), en: childHref("rooms", r.slug, "en") }, priority: 0.8 })),
    { paths: routes.about, priority: 0.6 },
    { paths: routes.faq, priority: 0.6 },
    { paths: routes.privacy, priority: 0.2 },
  ];
  return pairs.flatMap(({ paths, priority }) =>
    (["sq", "en"] as const).map((loc) => ({
      url: abs(paths[loc]),
      priority: loc === "sq" ? priority : Math.max(0.1, priority - 0.1),
      alternates: { languages: { "sq-AL": abs(paths.sq), en: abs(paths.en), "x-default": abs(paths.sq) } },
    })),
  );
}
