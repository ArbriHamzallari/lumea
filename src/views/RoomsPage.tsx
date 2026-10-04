import Link from "next/link";
import type { CSSProperties } from "react";
import { t } from "@/content/dictionary";
import { galleryGroups } from "@/content/gallery";
import { rooms } from "@/content/rooms";
import { themeToCssVars } from "@/lib/color";
import { childHref, type L, type Locale } from "@/lib/i18n";
import { Photo } from "@/components/Photo";
import { Gallery } from "@/components/Gallery";
import { Breadcrumbs, ContactStrip, galleryLabels, toGallery } from "@/components/Blocks";
import { IconArrow } from "@/components/Icons";

const copy = {
  h1: { sq: "Ambientet e Luméa", en: "Luméa’s facilities" },
  lede: {
    sq: "Luméa ka katër salla pritjeje, një holl dhe korridore me mermer. Shikoni ambientet në fotografi dhe njihuni me hapësirën para se të vini.",
    en: "Luméa has four reception rooms, a lobby and marble corridors. See the premises in photographs and get to know the space before you visit.",
  },
  roomsTitle: { sq: "Sallat e pritjes", en: "The reception rooms" },
  roomsBody: {
    sq: "Të katër sallat kanë të njëjtën bazë organizimi, por secila ka ngjyrën dhe pamjen e vet.",
    en: "All four rooms share the same basic layout, but each has its own colour and appearance.",
  },
  otherSpaces: { sq: "Pjesa tjetër e godinës", en: "The rest of the building" },
} satisfies Record<string, L>;

export function RoomsPage({ locale }: { locale: Locale }) {
  const d = t(locale);
  return (
    <>
      <header className="wrap pb-12 pt-8 md:pb-16 md:pt-12">
        <Breadcrumbs locale={locale} items={[{ name: d.nav.rooms }]} />
        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h1 className="display lg:col-span-7">{copy.h1[locale]}</h1>
          <p className="lede lg:col-span-5">{copy.lede[locale]}</p>
        </div>
      </header>

      {/* Room index — a quick colour key, useful on phones */}
      <nav aria-label={copy.roomsTitle[locale]} className="wrap">
        <ul className="grid grid-cols-2 border-t border-line sm:grid-cols-4">
          {rooms.map((r) => (
            <li key={r.id} style={themeToCssVars(r.theme) as CSSProperties} className="border-b border-line sm:border-b-0 sm:border-r sm:last:border-r-0 [&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-r">
              <a href={`#${r.id}`} className="flex items-center gap-3 px-1 py-4 sm:px-4">
                <span aria-hidden className="size-3.5 shrink-0 bg-room" />
                <span className="font-serif text-xl text-ink">{r.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section aria-labelledby="rooms-title" className="mt-14 md:mt-20">
        <div className="wrap mb-10 grid gap-4 lg:grid-cols-12">
          <h2 id="rooms-title" className="h2 lg:col-span-5">
            {copy.roomsTitle[locale]}
          </h2>
          <p className="max-w-xl lg:col-span-6 lg:col-start-7">{copy.roomsBody[locale]}</p>
        </div>

        <ol>
          {rooms.map((r, i) => {
            const flip = i % 2 === 1;
            return (
              <li key={r.id} id={r.id} style={themeToCssVars(r.theme) as CSSProperties} className="scroll-mt-28 border-t border-[var(--room-line)] bg-room-pale">
                <Link href={childHref("rooms", r.slug, locale)} className="group wrap grid items-center gap-8 py-12 md:py-16 lg:grid-cols-12 lg:gap-14">
                  <div className={`relative lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                    <div className="inlay relative aspect-[4/3] overflow-hidden bg-stone-100">
                      <Photo
                        photo={r.hero}
                        locale={locale}
                        fill
                        sizes="(min-width: 1024px) 56vw, 100vw"
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
                        preload={i === 0}
                      />
                    </div>
                  </div>
                  <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-4">
                      <span aria-hidden className="h-px w-10 bg-room" />
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-room-accent">
                        {d.room.room} · {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 font-serif text-5xl leading-none text-room-dark md:text-6xl">{r.name}</h3>
                    <p className="mt-5 flex items-center gap-2.5 text-[0.98rem] text-ink-soft">
                      <span aria-hidden className="inline-block h-4 w-8 bg-room" />
                      {d.room.color}: {r.colorName[locale]}
                    </p>
                    <p className="mt-5 max-w-md text-[1.05rem]">{r.listDescription[locale]}</p>
                    <span className="arrow-link mt-7 text-room-dark">
                      <span>{locale === "sq" ? `Shikoni Sallën ${r.name}` : `View the ${r.name} Room`}</span>
                      <IconArrow />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-labelledby="other-title" id="galeria" className="border-t border-line py-20 md:py-28">
        <div className="wrap">
          <h2 id="other-title" className="h2">
            {copy.otherSpaces[locale]}
          </h2>
          <div className="mt-12 space-y-16 md:space-y-20">
            {galleryGroups.map((g) => (
              <section key={g.id} aria-labelledby={`g-${g.id}`} className="grid gap-6 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-3">
                  <h3 id={`g-${g.id}`} className="h3">
                    {g.title[locale]}
                  </h3>
                  <p className="mt-3 text-[0.98rem] text-muted">{g.intro[locale]}</p>
                </div>
                <div className="lg:col-span-9">
                  <Gallery items={toGallery(g.items, locale)} labels={galleryLabels(locale)} />
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip locale={locale} />
    </>
  );
}
