import Link from "next/link";
import type { CSSProperties } from "react";
import { business, telHref, whatsappHref } from "@/content/business";
import { t } from "@/content/dictionary";
import { rooms, type Room } from "@/content/rooms";
import { getService } from "@/content/services";
import { themeToCssVars } from "@/lib/color";
import { childHref, href, type Locale } from "@/lib/i18n";
import { Photo } from "@/components/Photo";
import { Gallery } from "@/components/Gallery";
import { Breadcrumbs, ContactStrip, galleryLabels, toGallery } from "@/components/Blocks";
import { IconArrow, IconArrowLeft, IconPhone, IconWhatsApp } from "@/components/Icons";

/**
 * One template for every room. The room's data — photographs, colour, name —
 * determines its visual identity; nothing here is specific to one room.
 * Colours come from the surrounding RoomScope (CSS variables).
 */
export function RoomPage({ room, locale }: { room: Room; locale: Locale }) {
  const d = t(locale);
  const r = room;
  const i = rooms.findIndex((x) => x.id === r.id);
  const prev = rooms[(i - 1 + rooms.length) % rooms.length];
  const next = rooms[(i + 1) % rooms.length];
  const wa = whatsappHref(locale === "sq" ? `Përshëndetje Luméa, kam një pyetje për Sallën ${r.name}.` : `Hello Luméa, I have a question about the ${r.name} Room.`);
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

        {/* Mobile order: name → photograph → colour → description. Desktop: photograph left, text right. */}
        <div className="mt-8 grid gap-x-14 gap-y-6 lg:mt-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr]">
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:pt-10">
            <p className="eyebrow">{d.room.room}</p>
            <h1 className="mt-2 font-serif text-[clamp(3.5rem,2.5rem+5vw,6.5rem)] leading-[0.95] tracking-[-0.025em] text-room-dark">
              <span className="sr-only">{locale === "sq" ? "Salla " : ""}</span>
              {r.name}
              <span className="sr-only">{locale === "en" ? " Room" : ""}</span>
            </h1>
          </div>

          <div className="lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <div className="relative p-2 ring-1 ring-[var(--room-line)] md:p-3">
              <div className="inlay relative aspect-[4/5] overflow-hidden bg-room-light sm:aspect-[4/3] lg:aspect-[5/6]">
                <Photo photo={r.hero} locale={locale} fill preload sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>

          <div className="enter-delay flex flex-col lg:col-span-5 lg:col-start-8 lg:row-start-2">
            {/* Colour indicator: a swatch of the real room colour + its name */}
            <div className="flex items-center gap-4 lg:mt-2">
              <span aria-hidden className="flex h-10 w-24 overflow-hidden ring-1 ring-black/5">
                <span className="w-1/2 bg-room" />
                <span className="w-1/4 bg-[var(--room-line)]" />
                <span className="w-1/4 bg-room-light" />
              </span>
              <span className="text-[0.95rem] leading-tight">
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted">{d.room.color}</span>
                <span className="text-ink">{r.colorName[locale]}</span>
              </span>
            </div>

            <p className="lede mt-7 max-w-md">{r.shortDescription[locale]}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:mt-auto lg:pt-10">
              <a href={telHref(business.phones[0].e164)} className="btn btn-primary">
                <IconPhone className="size-4" />
                <span className="whitespace-nowrap tabular-nums">
                  <span className="sr-only">{d.call} </span>
                  {business.phones[0].display}
                </span>
              </a>
              {wa && (
                <a href={wa} target="_blank" rel="noopener" className="btn btn-secondary">
                  <IconWhatsApp className="size-4" /> {d.whatsapp}
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT + DETAILS + VIDEO -------------------------------------- */}
      <section aria-labelledby="about-room" className="border-t border-[var(--room-line)]">
        <div className="wrap grid gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-14">
          <div className={r.video ? "lg:col-span-7" : "lg:col-span-8"}>
            <h2 id="about-room" className="h2">
              {d.room.about}
            </h2>
            <p className="mt-6 max-w-2xl text-[1.08rem] leading-[1.75]">{r.fullDescription[locale]}</p>
            {r.capacity && <p className="mt-4">{r.capacity[locale]}</p>}
            {r.accessibility && <p className="mt-4">{r.accessibility[locale]}</p>}

            <h3 className="mt-12 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-room-accent">{d.room.details}</h3>
            <ul className="mt-4 grid border-t border-[var(--room-line)] sm:grid-cols-2 sm:gap-x-8">
              {r.characteristics.map((c) => (
                <li key={c.en} className="flex items-start gap-3 border-b border-[var(--room-line)] py-3 text-[1rem]">
                  <span aria-hidden className="mt-[0.6rem] size-1.5 shrink-0 bg-room" />
                  {c[locale]}
                </li>
              ))}
            </ul>
          </div>

          {r.video && (
            <figure className="lg:col-span-4 lg:col-start-9">
              <div className="mx-auto max-w-[19rem] p-2 ring-1 ring-[var(--room-line)] lg:mx-0">
                <video
                  className="aspect-[464/832] w-full bg-room-light object-cover"
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
              <figcaption className="mx-auto mt-3 max-w-[19rem] text-[0.95rem] text-ink-soft lg:mx-0">
                {d.room.videoCaption.replace("{name}", r.name)}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* PHOTOGRAPHS ----------------------------------------------------- */}
      <section aria-labelledby="room-photos" className="bg-room-light py-16 md:py-20">
        <div className="wrap">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 id="room-photos" className="h2">
              {d.room.photos}
            </h2>
            <p className="text-sm text-muted">{r.images.length + 1}</p>
          </div>
          <Gallery layout="room" items={toGallery([r.hero, ...r.images], locale)} labels={galleryLabels(locale)} />
        </div>
      </section>

      {/* RELATED SERVICES ------------------------------------------------ */}
      <section aria-labelledby="room-related" className="border-t border-[var(--room-line)]">
        <div className="wrap py-12 md:py-14">
          <h2 id="room-related" className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-room-accent">
            {d.room.related}
          </h2>
          <ul className="mt-4 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-10">
            {r.relatedServices.map((id) => {
              const s = getService(id);
              return (
                <li key={id}>
                  <Link href={childHref("services", s.slug, locale)} className="arrow-link text-[1.05rem]">
                    <span>{s.title[locale]}</span>
                    <IconArrow />
                  </Link>
                </li>
              );
            })}
          </ul>
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
        <span className={`mt-1 flex items-center gap-2.5 font-serif text-2xl text-room-dark md:text-3xl ${dir === "next" ? "flex-row-reverse" : ""}`}>
          <span aria-hidden className="size-3 shrink-0 bg-room" />
          {room.name}
        </span>
      </span>
    </Link>
  );
}
