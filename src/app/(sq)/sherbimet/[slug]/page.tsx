import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getServiceBySlug } from "@/content/services";
import { ServicePage } from "@/views/ServicePage";
import { buildMetadata } from "@/lib/seo";
import { childHref } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug.sq }));
}

export async function generateMetadata({ params }: PageProps<"/sherbimet/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiceBySlug(slug, "sq");
  if (!s) return {};
  return buildMetadata({
    locale: "sq",
    title: s.seoTitle.sq,
    description: s.seoDescription.sq,
    paths: { sq: childHref("services", s.slug, "sq"), en: childHref("services", s.slug, "en") },
    image: s.photos[0],
  });
}

export default async function Page({ params }: PageProps<"/sherbimet/[slug]">) {
  const { slug } = await params;
  const s = getServiceBySlug(slug, "sq");
  if (!s) notFound();
  return <ServicePage service={s} locale="sq" />;
}
