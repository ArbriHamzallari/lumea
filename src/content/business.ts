/**
 * BUSINESS INFORMATION — single source of truth.
 *
 * Every phone number, address and link on the website is read from here.
 * Change a value once and it updates everywhere (pages, footer, structured data).
 *
 * Values marked `null` are not yet known. Anything that depends on them is
 * hidden automatically until a real value is filled in. Never put a guessed
 * value here.
 */

export const business = {
  name: "Luméa Funeral Home Vlorë",
  shortName: "Luméa",
  legalName: null as string | null, // [LEGAL_NAME] — e.g. registered company name (NIPT holder)

  /** Phone numbers exactly as published by Luméa (door signage + Instagram). */
  phones: [
    { display: "+355 69 35 000 40", e164: "+355693500040" },
    { display: "+355 69 35 000 41", e164: "+355693500041" },
  ],

  /**
   * WhatsApp number (digits only, international format, no "+").
   * TODO(confirm): assumed to be the first phone number — confirm with Luméa
   * that this number is active on WhatsApp.
   */
  whatsapp: "355693500040" as string | null,

  email: null as string | null, // [EMAIL]

  address: {
    street: "Rruga Transballkanike",
    landmark: { sq: "pranë ish Hipotekës", en: "near ish Hipoteka" },
    city: "Vlorë",
    postalCode: "9401",
    country: { sq: "Shqipëri", en: "Albania" },
    countryCode: "AL",
  },

  /**
   * Map pin as shown on Luméa's Google Business Profile
   * (place "Luméa Shtepi Funerale Vlore - Luméa Funeral Home Vlore").
   * NOTE: the Google profile currently lists the street as "Rruga Gjergj
   * Kastrioti" — see README "Open questions".
   */
  geo: { lat: 40.4711229, lng: 19.4835863 },

  /** Google Business Profile / Maps link supplied by the owner. */
  googleMapsUrl: "https://maps.app.goo.gl/gvuH28B4L58N7UQeA",

  /** Open 24 hours, 7 days a week (door signage, Instagram, Google profile). */
  hours: { open24h: true },

  social: {
    instagram: "https://www.instagram.com/lumeafuneralhome/",
    /** Luméa's Facebook page (permanent id-based address). */
    facebook: "https://www.facebook.com/profile.php?id=61593308293717" as string | null,
  },

  /** Year founded — unknown, do not display until confirmed. */
  foundingYear: null as number | null,
} as const;

export const phonePrimary = business.phones[0];

/** Capitalise the first letter — for the landmark when it starts a line ("Pranë ish Hipotekës"). */
export const capFirst = (s: string) => s.charAt(0).toLocaleUpperCase("sq-AL") + s.slice(1);

export function telHref(e164: string) {
  return `tel:${e164}`;
}

export function whatsappHref(text?: string) {
  if (!business.whatsapp) return null;
  const q = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${business.whatsapp}${q}`;
}

export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${business.geo.lat}%2C${business.geo.lng}`;

export const mapEmbedSrc = (lang: "sq" | "en") =>
  `https://www.google.com/maps?q=${business.geo.lat},${business.geo.lng}&hl=${lang}&z=17&output=embed`;

/** Site URL — set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.yourdomain.al). */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
