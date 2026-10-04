import { business, siteUrl } from "@/content/business";
import { photos } from "@/content/images";
import { services } from "@/content/services";
import { routes, childHref, type Locale } from "./i18n";
import { abs } from "./seo";

/**
 * Structured data (JSON-LD). Only verified information is included:
 * no ratings, no reviews, no price range, no service area beyond the address.
 *
 * Schema.org has no dedicated "FuneralHome" type, so the business is a
 * LocalBusiness with additionalType pointing at the Wikidata entity for
 * "funeral home" (Q1466031).
 */

const BUSINESS_ID = `${siteUrl}/#business`;
const WEBSITE_ID = `${siteUrl}/#website`;

export function siteSchema(locale: Locale) {
  const a = business.address;
  const sameAs = [business.social.instagram, business.social.facebook, business.googleMapsUrl].filter(Boolean);

  const localBusiness: Record<string, unknown> = {
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    additionalType: "https://www.wikidata.org/wiki/Q1466031",
    name: business.name,
    alternateName: ["Luméa Funeral Home", "Luméa Shtëpi Funerale Vlorë"],
    url: abs(routes.home[locale]),
    logo: `${siteUrl}/logo.png`,
    image: [abs(photos.facadeDusk.src), abs(photos.entranceNight.src), abs(photos.fleet.src)],
    telephone: business.phones[0].e164,
    contactPoint: business.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: p.e164,
      contactType: "customer service",
      availableLanguage: ["sq", "en"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${a.street}, ${a.landmark.sq}`,
      addressLocality: a.city,
      postalCode: a.postalCode,
      addressCountry: a.countryCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lng },
    hasMap: business.googleMapsUrl,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "sq" ? "Shërbimet" : "Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title[locale], url: abs(childHref("services", s.slug, locale)) },
      })),
    },
  };
  if (business.email) localBusiness.email = business.email;
  if (business.foundingYear) localBusiness.foundingDate = String(business.foundingYear);

  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusiness,
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: siteUrl,
        name: business.name,
        inLanguage: ["sq-AL", "en"],
        publisher: { "@id": BUSINESS_ID },
      },
    ],
  };
}

/** The current page (last crumb) carries no `item` URL, as Google recommends. */
export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.path && i < items.length - 1 ? { item: abs(it.path) } : {}),
    })),
  };
}
