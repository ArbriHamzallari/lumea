import Link from "next/link";
import type { CSSProperties } from "react";
import { t } from "@/content/dictionary";
import { rooms, type Room } from "@/content/rooms";
import { themeToCssVars } from "@/lib/color";
import { childHref, href, type Locale } from "@/lib/i18n";
import { Photo } from "@/components/Photo";
import { Gallery } from "@/components/Gallery";
import { Breadcrumbs, CallButtons, ContactStrip, galleryLabels, toGallery } from "@/components/Blocks";
import { IconArrow, IconArrowLeft } from "@/components/Icons";

/**
 * One template for every room. The photographs carry the page: name, one
 * plain line, contact, then the pictures and the video. No furniture lists or
 * colour names (owner's copy rules). The room colour lives only in the
 * subtle page tint, set by the surrounding RoomScope.
 */
export function RoomPage({ room, locale }: { room: Room; locale: Locale }) {
  const d = t(locale);
  const r = room;
  const i = rooms.findIndex((x) => x.id === r.id);
  const prev = rooms[(i - 1 + rooms.length) % rooms.length];
  const next = rooms[(i + 1) % rooms.length];
  const waText = locale === "sq" ? `Përshëndetje Luméa, kam një pyetje për Sallën ${r.name}.` : `Hello Luméa, I have a question about the ${r.name} Room.`;
  const roomLabel = locale === "sq" ? `Salla ${r.name}` : `The ${r.name} Room`;

  return (
    <article>
      {/* HERO ------------------------------------------------------------ */}
      <header className="wrap pb-14 pt-6 md:pb-20 md:pt-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Breadcrumbs locale={locale} items={[{ name: d.nav.rooms, path: href("rooms", locale) }, { name: roomLabel }]} />
          <Link href={href("rooms", locale)} className="arrow-link hidden text-sm text-ink-soft sm:inline-flex">
            <IconArrowLeft />
            <span>{d.allRooms}</span>
          </Link>
        </div>

        {/* Mobile: name → photograph → text. Desktop: photograph left, text right. */}
        <div className="mt-8 grid gap-x-14 gap-y-6 lg:mt-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr]">
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:pt-10">
            <h1 className="font-serif text-[clamp(2.75rem,2rem+4vw,5.25rem)] leading-[0.98] tracking-[-0.02em] text-room-dark">{roomLabel}</h1>
          </div>

          <div className="lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <div className="relative p-2 ring-1 ring-[var(--room-line)] md:p-3">
              <div className="inlay relative aspect-[4/5] overflow-hidden bg-room-light sm:aspect-[4/3] lg:aspect-[5/6]">
                <Photo photo={r.hero} locale={locale} fill preload sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:col-span-5 lg:col-start-8 lg:row-start-2">
            <p className="lede max-w-md">{r.intro[locale]}</p>
            {r.capacity && <p className="mt-3 max-w-md">{r.capacity[locale]}</p>}
            {r.accessibility && <p className="mt-3 max-w-md">{r.accessibility[locale]}</p>}
            <CallButtons locale={locale} waText={waText} className="mt-8" />
          </div>
        </div>
      </header>

      {/* PHOTOGRAPHS + VIDEO -------------------------------------------- */}
      <section aria-labelledby="room-photos" className="bg-room-light py-16 md:py-20">
        <div className="wrap">
          <h2 id="room-photos" className="h2 mb-8">
            {d.room.photos}
          </h2>
          <Gallery layout="room" items={toGallery([r.hero, ...r.images], locale)} labels={galleryLabels(locale)} />

          {r.video && (
            <figure className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-8">
              <div className="w-full max-w-[17rem] p-2 ring-1 ring-[var(--room-line)]">
                <video
                  className="aspect-[464/832] w-full bg-room-pale object-cover"
                  controls
                  muted
                  playsInline
                  preload="none"
                  poster={r.video.poster}
                  aria-label={d.room.videoLabel.replace("{name}", r.name)}
                >
                  <source src={r.video.src} type="video/mp4" />
                </video>
              </div>
              <figcaption className="max-w-xs font-serif text-xl text-room-dark">{d.room.videoCaption.replace("{name}", r.name)}</figcaption>
            </figure>
          )}
        </div>
      </section>

      <ContactStrip locale={locale} title={d.room.contactTitle} />

      {/* ROOM-TO-ROOM NAVIGATION ----------------------------------------- */}
      <nav aria-label={d.room.roomsNav} className="border-t border-[var(--room-line)] bg-paper">
        <div className="wrap grid grid-cols-2 md:grid-cols-[1fr_auto_1fr]">
          <RoomLink room={prev} locale={locale} dir="prev" label={d.room.prev} />
          <Link href={href("rooms", locale)} className="col-span-2 row-start-2 flex items-center justify-center border-t border-line py-5 text-sm font-semibold text-ink-soft hover:text-ink md:col-span-1 md:row-start-auto md:border-x md:border-t-0 md:px-10">
            {d.allRooms}
          </Link>
          <RoomLink room={next} locale={locale} dir="next" label={d.room.next} />
        </div>
      </nav>
    </article>
  );
}

function RoomLink({ room, locale, dir, label }: { room: Room; locale: Locale; dir: "prev" | "next"; label: string }) {
  return (
    <Link
      href={childHref("rooms", room.slug, locale)}
      style={themeToCssVars(room.theme) as CSSProperties}
      className={`group flex items-center gap-4 py-7 ${dir === "next" ? "flex-row-reverse text-right md:pl-10" : "md:pr-10"}`}
    >
      {dir === "prev" ? <IconArrowLeft className="size-5 shrink-0 text-room-accent" /> : <IconArrow className="size-5 shrink-0 text-room-accent" />}
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">{label}</span>
        <span className="mt-1 block font-serif text-2xl text-room-dark md:text-3xl">{locale === "sq" ? `Salla ${room.name}` : `The ${room.name} Room`}</span>
      </span>
    </Link>
  );
}
