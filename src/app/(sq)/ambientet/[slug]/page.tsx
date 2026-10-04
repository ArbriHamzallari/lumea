import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { rooms, getRoomBySlug } from "@/content/rooms";
import { RoomPage } from "@/views/RoomPage";
import { buildMetadata } from "@/lib/seo";
import { childHref } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug.sq }));
}

export async function generateMetadata({ params }: PageProps<"/ambientet/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug, "sq");
  if (!room) return {};
  return buildMetadata({
    locale: "sq",
    title: room.seoTitle.sq,
    description: room.seoDescription.sq,
    paths: { sq: childHref("rooms", room.slug, "sq"), en: childHref("rooms", room.slug, "en") },
    image: room.hero,
  });
}

export default async function Page({ params }: PageProps<"/ambientet/[slug]">) {
  const { slug } = await params;
  const room = getRoomBySlug(slug, "sq");
  if (!room) notFound();
  return <RoomPage room={room} locale="sq" />;
}
