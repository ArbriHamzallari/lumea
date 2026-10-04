import type { Metadata } from "next";
import { business, siteUrl } from "@/content/business";
import { photos, type Photo } from "@/content/images";
import { ogLocale, type Locale } from "./i18n";

export const abs = (path: string) => `${siteUrl}${path === "/" ? "" : path}` || siteUrl;

type PageMeta = {
  locale: Locale;
  /** Full title — written per page, never auto-templated. */
  title: string;
  description: string;
  /** This page's path in each language (both required → correct hreflang). */
  paths: Record<Locale, string>;
  image?: Photo;
  noindex?: boolean;
};

/**
 * One function builds every page's metadata: title, description, canonical,
 * hreflang alternates, Open Graph, Twitter card and robots.
 */
export function buildMetadata({ locale, title, description, paths, image = photos.facadeDusk, noindex }: PageMeta): Metadata {
  const url = abs(paths[locale]);
  return {
    metadataBase: new URL(siteUrl),
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        "sq-AL": abs(paths.sq),
        en: abs(paths.en),
        "x-default": abs(paths.sq),
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: business.name,
      title,
      description,
      locale: ogLocale[locale],
      alternateLocale: ogLocale[locale === "sq" ? "en" : "sq"],
      images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt[locale] }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.src],
    },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
  };
}
