import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getServiceBySlug } from "@/content/services";
import { ServicePage } from "@/views/ServicePage";
import { buildMetadata } from "@/lib/seo";
import { childHref } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug.en }));
}

export async function generateMetadata({ params }: PageProps<"/en/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiceBySlug(slug, "en");
  if (!s) return {};
  return buildMetadata({
    locale: "en",
    title: s.seoTitle.en,
    description: s.seoDescription.en,
    paths: { sq: childHref("services", s.slug, "sq"), en: childHref("services", s.slug, "en") },
    image: s.photos[0],
  });
}

export default async function Page({ params }: PageProps<"/en/services/[slug]">) {
  const { slug } = await params;
  const s = getServiceBySlug(slug, "en");
  if (!s) notFound();
  return <ServicePage service={s} locale="en" />;
}
