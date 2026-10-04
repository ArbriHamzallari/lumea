import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { rooms, getRoomBySlug } from "@/content/rooms";
import { RoomPage } from "@/views/RoomPage";
import { buildMetadata } from "@/lib/seo";
import { childHref } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug.en }));
}

export async function generateMetadata({ params }: PageProps<"/en/facilities/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug, "en");
  if (!room) return {};
  return buildMetadata({
    locale: "en",
    title: room.seoTitle.en,
    description: room.seoDescription.en,
    paths: { sq: childHref("rooms", room.slug, "sq"), en: childHref("rooms", room.slug, "en") },
    image: room.hero,
  });
}

export default async function Page({ params }: PageProps<"/en/facilities/[slug]">) {
  const { slug } = await params;
  const room = getRoomBySlug(slug, "en");
  if (!room) notFound();
  return <RoomPage room={room} locale="en" />;
}
