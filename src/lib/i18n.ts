export type Locale = "sq" | "en";
export const locales: Locale[] = ["sq", "en"];
export const defaultLocale: Locale = "sq";

/** Localised string. Both languages are required so they can never drift apart. */
export type L = Record<Locale, string>;

export const htmlLang: Record<Locale, string> = { sq: "sq-AL", en: "en" };
export const ogLocale: Record<Locale, string> = { sq: "sq_AL", en: "en_GB" };

/* ------------------------------------------------------------------ */
/* Routes                                                              */
/* ------------------------------------------------------------------ */

export const routes = {
  home: { sq: "/", en: "/en" },
  services: { sq: "/sherbimet", en: "/en/services" },
  rooms: { sq: "/ambientet", en: "/en/facilities" },
  about: { sq: "/rreth-nesh", en: "/en/about" },
  faq: { sq: "/pyetje-te-shpeshta", en: "/en/faq" },
  contact: { sq: "/kontakt", en: "/en/contact" },
  privacy: { sq: "/privatesia", en: "/en/privacy" },
} satisfies Record<string, L>;

export type RouteKey = keyof typeof routes;

export function href(key: RouteKey, locale: Locale) {
  return routes[key][locale];
}

/** Child URL under a localised section, e.g. /ambientet/salla-amara */
export function childHref(parent: "services" | "rooms", slug: L, locale: Locale) {
  return `${routes[parent][locale]}/${slug[locale]}`;
}
