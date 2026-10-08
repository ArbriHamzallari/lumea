import Link from "next/link";
import type { CSSProperties } from "react";
import { business, capFirst, mapEmbedSrc } from "@/content/business";
import { t } from "@/content/dictionary";
import { photos } from "@/content/images";
import { rooms } from "@/content/rooms";
import { services } from "@/content/services";
import { childHref, href, type L, type Locale } from "@/lib/i18n";
import { themeToCssVars } from "@/lib/color";
import { Photo } from "@/components/Photo";
import { MapEmbed } from "@/components/MapEmbed";
import { CallButtons, HelpLedger } from "@/components/Blocks";
import { IconArrow, IconPin } from "@/components/Icons";

/**
 * Home page. Order set by the owner: what Luméa offers → why one place →
 * the facilities → how to get in touch → where it is.
 * Every section answers one of three questions: what do you offer, where are
 * you, how do I reach you.
 */
const copy = {
  // Headline: "Shërbime funerale në Vlorë, 24 orë në ditë" — set on three deliberate lines
  h1: { sq: "Shërbime funerale", en: "Funeral services" },
  h1b: { sq: "në Vlorë,", en: "in Vlorë," },
  h1c: { sq: "24 orë në ditë", en: "24 hours a day" },
  lede: {
    sq: "Luméa Funeral Home ju ndihmon me organizimin e ceremonisë funerale, ofron salla pritjeje dhe kujdes për të ndjerin, si dhe transport brenda dhe jashtë vendit dhe ndihmë me dokumentacionin.",
    en: "Luméa Funeral Home helps you arrange the funeral ceremony and provides reception rooms, care of the deceased, transport within Albania and abroad, and help with paperwork.",
  },

  servicesTitle: { sq: "Shërbime funerale të plota", en: "Complete funeral services" },
  servicesBody: {
    sq: "Nga organizimi i ceremonisë deri te transporti dhe dokumentacioni, Luméa ju ndihmon me shërbimet që ju nevojiten.",
    en: "From arranging the ceremony to transport and paperwork, Luméa helps with the services you need.",
  },
  roomsItem: { sq: "Salla pritjeje", en: "Reception rooms" },
  roomsItemBody: {
    sq: "Katër salla pritjeje për ceremonitë dhe pritjen e ngushëllimeve.",
    en: "Four reception rooms for ceremonies and receiving condolences.",
  },

  oneTitle: { sq: "Gjithçka që ju nevojitet, në një vend", en: "Everything you need, in one place" },
  oneBody: {
    sq: "Sallat e pritjes dhe ambientet për kujdesin ndaj të ndjerit ndodhen në të njëjtën godinë. Ceremonia, transporti dhe dokumentacioni ndiqen nga i njëjti vend, ndaj familja ka një pikë të vetme kontakti.",
    en: "The reception rooms and the facilities for the care of the deceased are in the same building. The ceremony, transport and paperwork are arranged from the same place, so the family has a single point of contact.",
  },

  roomsTitle: { sq: "Ambientet e Luméa", en: "Luméa’s facilities" },
  roomsBody: {
    sq: "Luméa ka katër salla pritjeje, ambiente të dedikuara për kujdesin ndaj të ndjerit, holl dhe hapësira të përbashkëta.",
    en: "Luméa has four reception rooms, dedicated facilities for the care of the deceased, a lobby and shared spaces.",
  },
  roomsBody2: {
    sq: "Shikoni ambientet tona para se të na vizitoni.",
    en: "See our facilities before you visit.",
  },

  contactBody: {
    sq: "Për informacion ose organizim të shërbimeve funerale, mund të na kontaktoni në çdo orë.",
    en: "For information or to arrange funeral services, you can contact us at any hour.",
  },

  locationTitle: { sq: "Na gjeni në Vlorë", en: "Find us in Vlorë" },
} satisfies Record<string, L>;

export function HomePage({ locale }: { locale: Locale }) {
  const d = t(locale);
  const a = business.address;
  const c = (k: keyof typeof copy) => copy[k][locale];

  return (
    <>
      {/* HERO ---------------------------------------------------------- */}
      <section className="border-b border-line">
        <div className="wrap grid gap-8 pb-12 pt-8 md:pt-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
          <div className="flex flex-col justify-center lg:col-span-6 lg:py-6">
            <h1 className="display">
              <span className="block">{c("h1")}</span> <span className="block">{c("h1b")}</span> <span className="block">{c("h1c")}</span>
            </h1>
            <p className="lede mt-6 max-w-xl">{c("lede")}</p>
            <CallButtons locale={locale} className="mt-8" />
            <a href="#vendndodhja" className="mt-6 inline-flex items-start gap-2 self-start text-[0.98rem] text-ink-soft hover:text-ink">
              <IconPin className="mt-0.5 size-5 shrink-0 text-bronze" />
              <span>
                {a.street}, {a.landmark[locale]}, {a.city}
              </span>
            </a>
          </div>
          <div className="lg:col-span-6">
            <div className="inlay relative aspect-[4/3] overflow-hidden bg-stone-100 xl:aspect-[5/4]">
              <Photo photo={photos.facadeDusk} locale={locale} fill preload sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" position="62% 60%" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES ------------------------------------------------------ */}
      <section aria-labelledby="services-title" className="wrap grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2 id="services-title" className="h2">
              {c("servicesTitle")}
            </h2>
            <p className="mt-5 max-w-md">{c("servicesBody")}</p>
            <div className="relative mt-10 hidden aspect-[4/5] overflow-hidden bg-stone-100 lg:block">
              <Photo photo={photos.coffinFlowersBeata} locale={locale} fill sizes="38vw" className="object-cover" />
            </div>
          </div>
        </div>
        <ul className="divide-y divide-line border-y border-line lg:col-span-7">
          {services.map((s) => (
            <li key={s.id} className="py-7 md:py-8">
              <h3 className="h3">{s.shortTitle[locale]}</h3>
              <p className="mt-2 max-w-lg">{s.summary[locale]}</p>
              <Link href={childHref("services", s.slug, locale)} className="arrow-link mt-3 text-[0.98rem]">
                <span>{d.seeService}</span>
                <IconArrow />
              </Link>
            </li>
          ))}
          <li className="py-7 md:py-8">
            <h3 className="h3">{c("roomsItem")}</h3>
            <p className="mt-2 max-w-lg">{c("roomsItemBody")}</p>
            <Link href={href("rooms", locale)} className="arrow-link mt-3 text-[0.98rem]">
              <span>{d.seeFacilities}</span>
              <IconArrow />
            </Link>
          </li>
        </ul>
      </section>

      {/* ONE PLACE ----------------------------------------------------- */}
      <section aria-labelledby="one-title" className="border-t border-line">
        <div className="inlay relative aspect-[4/3] w-full overflow-hidden bg-stone-100 md:aspect-[21/9]">
          <Photo photo={photos.corridor} locale={locale} fill sizes="100vw" className="object-cover" position="50% 55%" />
        </div>
        <div className="wrap grid gap-8 py-16 md:py-24 lg:grid-cols-12 lg:gap-14">
          <h2 id="one-title" className="h2 lg:col-span-5">
            {c("oneTitle")}
          </h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[1.1rem] leading-[1.7]">{c("oneBody")}</p>
            <Link href={href("contact", locale)} className="btn btn-secondary mt-8">
              {d.talkToUs}
            </Link>
          </div>
        </div>
      </section>

      {/* FACILITIES ---------------------------------------------------- */}
      <section aria-labelledby="rooms-title" className="border-t border-line bg-stone-50 py-20 md:py-28">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 id="rooms-title" className="h2 lg:col-span-6">
              {c("roomsTitle")}
            </h2>
            <div className="lg:col-span-6">
              <p className="max-w-lg">{c("roomsBody")}</p>
              <p className="mt-2 max-w-lg">{c("roomsBody2")}</p>
            </div>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-5 lg:grid-cols-4">
            {rooms.map((r, i) => (
              <li key={r.id} style={themeToCssVars(r.theme) as CSSProperties} className={i % 2 === 1 ? "lg:mt-12" : ""}>
                <Link href={childHref("rooms", r.slug, locale)} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                    <Photo photo={r.cover} locale={locale} fill sizes="(min-width: 1024px) 24vw, 48vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                  </div>
                  <div className="h-1 bg-room" aria-hidden />
                  <h3 className="mt-4 font-serif text-[1.5rem] leading-tight text-room-dark md:text-[1.75rem]">
                    {locale === "sq" ? `Salla ${r.name}` : `The ${r.name} Room`}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
          <Link href={href("rooms", locale)} className="btn btn-secondary mt-12">
            {d.seeFacilities}
          </Link>
        </div>
      </section>

      {/* CONTACT ------------------------------------------------------- */}
      <section aria-labelledby="contact-title" className="border-t border-line">
        <div className="wrap grid gap-8 py-20 md:py-24 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 id="contact-title" className="h2">
              {d.available247}
            </h2>
            <p className="mt-4 max-w-sm">{c("contactBody")}</p>
            <Link href={href("contact", locale)} className="btn btn-primary mt-8">
              {d.contactUs}
            </Link>
          </div>
          <div className="lg:col-span-8">
            <HelpLedger locale={locale} hours={false} addressRow={false} />
          </div>
        </div>
      </section>

      {/* LOCATION ------------------------------------------------------ */}
      <section id="vendndodhja" aria-labelledby="location-title" className="scroll-mt-24 border-t border-line bg-stone-50 py-20 md:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 id="location-title" className="h2">
              {c("locationTitle")}
            </h2>
            <address className="mt-6 not-italic">
              <span className="block font-serif text-2xl text-ink">{a.street}</span>
              <span className="mt-1 block text-lg">{capFirst(a.landmark[locale])}</span>
              <span className="block text-lg">
                {a.city} {a.postalCode}
              </span>
            </address>
            <a href={business.googleMapsUrl} target="_blank" rel="noopener" className="btn btn-primary mt-8">
              {d.openMaps}
            </a>
          </div>
          <div className="lg:col-span-7">
            <MapEmbed src={mapEmbedSrc(locale)} title={d.map.title} loadLabel={d.map.load} note={d.map.note} address={`${a.street}, ${a.city}`} />
          </div>
        </div>
      </section>
    </>
  );
}
