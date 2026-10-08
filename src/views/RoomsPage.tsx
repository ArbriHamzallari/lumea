import Link from "next/link";
import type { CSSProperties } from "react";
import { business } from "@/content/business";
import { t } from "@/content/dictionary";
import { galleryGroups } from "@/content/gallery";
import { rooms } from "@/content/rooms";
import { themeToCssVars } from "@/lib/color";
import { childHref, href, type L, type Locale } from "@/lib/i18n";
import { Photo } from "@/components/Photo";
import { Gallery } from "@/components/Gallery";
import { Breadcrumbs, galleryLabels, toGallery } from "@/components/Blocks";
import { IconArrow } from "@/components/Icons";

const copy = {
  h1: { sq: "Ambientet e Luméa", en: "Luméa’s facilities" },
  lede: {
    sq: "Luméa Funeral Home është e pajisur me katër salla pritjeje dhe ambiente të tjera të dedikuara për shërbimet funerale.",
    en: "Luméa Funeral Home has four reception rooms and other facilities dedicated to funeral services.",
  },
  lede2: {
    sq: "Shikoni fotografitë për të pasur një ide më të qartë për ambientet para se të na vizitoni.",
    en: "Look through the photographs to get a clearer idea of the facilities before you visit.",
  },
  otherSpaces: { sq: "Ambiente të tjera", en: "Other spaces" },
  visitTitle: { sq: "Vizitoni ambientet", en: "Visit the facilities" },
  visitBody: {
    sq: "Për të mësuar më shumë ose për të marrë udhëzime për të na gjetur, na kontaktoni.",
    en: "To find out more or to get directions, contact us.",
  },
} satisfies Record<string, L>;

export function RoomsPage({ locale }: { locale: Locale }) {
  const d = t(locale);
  return (
    <>
      <header className="wrap pb-12 pt-8 md:pb-16 md:pt-12">
        <Breadcrumbs locale={locale} items={[{ name: d.nav.rooms }]} />
        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h1 className="display lg:col-span-6">{copy.h1[locale]}</h1>
          <div className="lg:col-span-6">
            <p className="lede">{copy.lede[locale]}</p>
            <p className="lede mt-3">{copy.lede2[locale]}</p>
          </div>
        </div>
      </header>

      <ol aria-label={locale === "sq" ? "Sallat e pritjes" : "The reception rooms"}>
        {rooms.map((r, i) => {
          const flip = i % 2 === 1;
          const label = locale === "sq" ? `Salla ${r.name}` : `The ${r.name} Room`;
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
                  <h2 className="font-serif text-4xl leading-tight text-room-dark md:text-5xl">{label}</h2>
                  <p className="mt-4 max-w-md text-[1.05rem]">{r.intro[locale]}</p>
                  <span className="arrow-link mt-6 text-room-dark">
                    <span>{d.seeRoom}</span>
                    <IconArrow />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>

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

      <section aria-labelledby="visit-title" className="border-t border-line bg-stone-50">
        <div className="wrap flex flex-col gap-6 py-14 md:flex-row md:items-end md:justify-between md:py-16">
          <div>
            <h2 id="visit-title" className="h2">
              {copy.visitTitle[locale]}
            </h2>
            <p className="mt-3 max-w-xl">{copy.visitBody[locale]}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href={href("contact", locale)} className="btn btn-primary">
              {d.contactUs}
            </Link>
            <a href={business.googleMapsUrl} target="_blank" rel="noopener" className="btn btn-secondary">
              {d.findOnMaps}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
