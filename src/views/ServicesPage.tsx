import Link from "next/link";
import type { CSSProperties } from "react";
import { t } from "@/content/dictionary";
import { rooms } from "@/content/rooms";
import { services } from "@/content/services";
import { themeToCssVars } from "@/lib/color";
import { childHref, href, type L, type Locale } from "@/lib/i18n";
import { Photo } from "@/components/Photo";
import { Breadcrumbs, ContactStrip } from "@/components/Blocks";
import { IconArrow } from "@/components/Icons";

const copy = {
  h1: { sq: "Shërbimet funerale të Luméa", en: "Luméa’s funeral services" },
  lede: {
    sq: "Luméa Funeral Home ofron shërbime funerale në Vlorë dhe transport funeral brenda dhe jashtë Shqipërisë.",
    en: "Luméa Funeral Home provides funeral services in Vlorë and funeral transport within Albania and abroad.",
  },
  lede2: {
    sq: "Mund të na kontaktoni për organizimin e plotë të ceremonisë ose vetëm për shërbimin që ju nevojitet.",
    en: "You can contact us to arrange the whole funeral or only the service you need.",
  },
  roomsTitle: { sq: "Salla pritjeje", en: "Reception rooms" },
  roomsBody: {
    sq: "Luméa ka katër salla pritjeje të dedikuara për ceremonitë dhe pritjen e ngushëllimeve.",
    en: "Luméa has four reception rooms for ceremonies and receiving condolences.",
  },
} satisfies Record<string, L>;

export function ServicesPage({ locale }: { locale: Locale }) {
  const d = t(locale);
  return (
    <>
      <header className="wrap pb-14 pt-8 md:pb-20 md:pt-12">
        <Breadcrumbs locale={locale} items={[{ name: d.nav.services }]} />
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <h1 className="display lg:col-span-6">{copy.h1[locale]}</h1>
          <div className="lg:col-span-6 lg:pt-3">
            <p className="lede">{copy.lede[locale]}</p>
            <p className="lede mt-3">{copy.lede2[locale]}</p>
          </div>
        </div>
      </header>

      <ul className="border-t border-line">
        {services.map((s, i) => {
          const flip = i % 2 === 1;
          const detail = childHref("services", s.slug, locale);
          return (
            <li key={s.id} className="border-b border-line">
              <article className="wrap grid items-center gap-8 py-12 md:py-16 lg:grid-cols-12 lg:gap-14">
                <div className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <Photo photo={s.photos[0]} locale={locale} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" preload={i === 0} />
                  </div>
                </div>
                <div className={`lg:col-span-6 ${flip ? "lg:order-1" : "lg:col-start-7"}`}>
                  <h2 className="h2">
                    <Link href={detail} className="hover:text-bronze">
                      {s.title[locale]}
                    </Link>
                  </h2>
                  <div className="mt-4 max-w-xl space-y-3 text-[1.05rem]">
                    {s.body.map((p) => (
                      <p key={p.en}>{p[locale]}</p>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <Link href={href("contact", locale)} className="btn btn-primary">
                      {s.cta === "talk" ? d.talkToUs : d.contactUs}
                    </Link>
                    <Link href={detail} className="arrow-link">
                      <span>{d.learnMore}</span>
                      <IconArrow />
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          );
        })}

        {/* Reception rooms point to the facilities section */}
        <li className="border-b border-line bg-stone-50">
          <article className="wrap grid items-center gap-8 py-12 md:py-16 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <ul className="grid grid-cols-4 gap-1.5">
                {rooms.map((r) => (
                  <li key={r.id} style={themeToCssVars(r.theme) as CSSProperties}>
                    <Link href={childHref("rooms", r.slug, locale)} className="group block">
                      <div className="relative aspect-[3/5] overflow-hidden bg-stone-100">
                        <Photo photo={r.cover} locale={locale} fill sizes="12vw" className="object-cover" />
                      </div>
                      <div className="h-1 bg-room" aria-hidden />
                      <span className="mt-2 block text-center font-serif text-lg text-room-dark">{r.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <h2 className="h2">{copy.roomsTitle[locale]}</h2>
              <p className="mt-4 max-w-xl text-[1.05rem]">{copy.roomsBody[locale]}</p>
              <Link href={href("rooms", locale)} className="btn btn-secondary mt-7">
                {d.seeFacilities}
              </Link>
            </div>
          </article>
        </li>
      </ul>

      <ContactStrip locale={locale} />
    </>
  );
}
