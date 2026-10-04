import Link from "next/link";
import { business, capFirst, mapEmbedSrc, telHref, whatsappHref, phonePrimary, directionsHref } from "@/content/business";
import { t } from "@/content/dictionary";
import { photos } from "@/content/images";
import { rooms } from "@/content/rooms";
import { services } from "@/content/services";
import { childHref, href, type L, type Locale } from "@/lib/i18n";
import { themeToCssVars } from "@/lib/color";
import { Photo } from "@/components/Photo";
import { Gallery } from "@/components/Gallery";
import { MapEmbed } from "@/components/MapEmbed";
import { HelpLedger, Steps, toGallery, galleryLabels, ExternalLink } from "@/components/Blocks";
import { IconArrow, IconPhone, IconWhatsApp } from "@/components/Icons";

const copy = {
  eyebrow: { sq: "Luméa Funeral Home · Vlorë", en: "Luméa Funeral Home · Vlorë" },
  h1: { sq: "Shtëpi funerale në Vlorë,", en: "A funeral home in Vlorë," },
  h1b: { sq: "e hapur 24 orë.", en: "open 24 hours." },
  lede: {
    sq: "Luméa ju ndihmon me organizimin e ceremonisë funerale, sallën e pritjes, ambientet e morgut, transportin brenda dhe jashtë vendit dhe dokumentet. Të gjitha mund t’i ndiqni nga një vend, në Rrugën Transballkanike.",
    en: "Luméa helps with funeral arrangements, the reception room, mortuary facilities, transport within Albania and abroad, and paperwork. All of this can be handled from one place on Rruga Transballkanike.",
  },
  findUs: { sq: "Si të na gjeni", en: "How to find us" },
  heroCaption: { sq: "Hyrja e Luméa në mbrëmje", en: "The Luméa entrance in the evening" },

  helpTitle: { sq: "Nëse ju duhet ndihmë tani", en: "If you need help now" },
  helpBody: {
    sq: "Mund të na telefononi në cilëndo orë. Luméa është e hapur 24 orë në ditë, 7 ditë në javë, përfshirë natën dhe fundjavat.",
    en: "You can call us at any hour. Luméa is open 24 hours a day, 7 days a week, including nights and weekends.",
  },

  servicesEyebrow: { sq: "Shërbimet", en: "Services" },
  servicesTitle: { sq: "Çfarë mund të ndiqni me Luméa", en: "What Luméa can take care of" },
  servicesBody: {
    sq: "Nga ceremonia dhe salla e pritjes deri te transporti dhe dokumentet, mund të merreni me të gjitha në një vend.",
    en: "From the ceremony and reception room to transport and paperwork, everything can be handled in one place.",
  },
  roomsItem: { sq: "Sallat e pritjes", en: "Reception rooms" },
  roomsItemBody: {
    sq: "Katër salla për pritjen e ngushëllimeve dhe homazhet: Beata, Amara, Celeste dhe Eden.",
    en: "Four rooms for receiving condolences and paying respects: Beata, Amara, Celeste and Eden.",
  },

  roomsEyebrow: { sq: "Ambientet", en: "Facilities" },
  roomsTitle: { sq: "Katër salla, secila me karakterin e vet.", en: "Four rooms, each with its own character." },
  roomsBody: {
    sq: "Shikoni fotografitë e katër sallave dhe njihuni me ambientet para se të vini.",
    en: "See photographs of all four rooms and get to know the space before you visit.",
  },

  statement: {
    sq: "Sallat e pritjes dhe ambientet e morgut ndodhen në të njëjtën godinë. Nga i njëjti vend ndiqen edhe ceremonia, transporti dhe dokumentet.",
    en: "The reception rooms and mortuary facilities are in the same building. The ceremony, transport and paperwork can also be handled from the same place.",
  },
  facts: [
    { k: { sq: "24 / 7", en: "24 / 7" }, v: { sq: "E hapur çdo ditë, gjatë gjithë ditës", en: "Open every day, all day" } },
    { k: { sq: "4 salla", en: "4 rooms" }, v: { sq: "Beata, Amara, Celeste, Eden", en: "Beata, Amara, Celeste, Eden" } },
    { k: { sq: "Brenda dhe jashtë vendit", en: "In Albania and abroad" }, v: { sq: "Transport funeral dhe riatdhesim", en: "Funeral transport and repatriation" } },
  ] as { k: L; v: L }[],

  stepsTitle: { sq: "Si fillon", en: "How it starts" },

  galleryEyebrow: { sq: "Para se të vini", en: "Before you visit" },
  galleryTitle: { sq: "Shikoni ambientet para se të vini.", en: "See the premises before you visit." },
  galleryBody: {
    sq: "Fotografitë në këtë faqe tregojnë ambientet, sallat dhe automjetet e Luméa.",
    en: "The photographs on this website show Luméa’s premises, rooms and vehicles.",
  },
  galleryLink: { sq: "Shikoni të gjitha ambientet", en: "See all the facilities" },

  locationEyebrow: { sq: "Vendndodhja", en: "Location" },
  locationTitle: { sq: "Na gjeni në Vlorë", en: "Find us in Vlorë" },
};

export function HomePage({ locale }: { locale: Locale }) {
  const d = t(locale);
  const wa = whatsappHref();
  const a = business.address;
  const c = <K extends keyof typeof copy>(k: K) => (copy[k] as L)[locale];

  return (
    <>
      {/* HERO ---------------------------------------------------------- */}
      <section className="border-b border-line">
        <div className="wrap grid gap-8 pb-12 pt-8 md:pt-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
          <div className="flex flex-col justify-center lg:col-span-6 lg:py-6">
            <p className="eyebrow">{c("eyebrow")}</p>
            <h1 className="display mt-4">
              <span className="block">{c("h1")}</span> <span className="block">{c("h1b")}</span>
            </h1>
            <p className="lede mt-6 max-w-xl">{c("lede")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={telHref(phonePrimary.e164)} className="btn btn-primary">
                <IconPhone className="size-[1.1rem]" />
                <span className="whitespace-nowrap tabular-nums">
                  <span className="sr-only">{d.call} </span>
                  {phonePrimary.display}
                </span>
              </a>
              {wa && (
                <a href={wa} target="_blank" rel="noopener" className="btn btn-secondary">
                  <IconWhatsApp className="size-[1.1rem]" /> {d.whatsapp}
                </a>
              )}
            </div>
            <a href="#vendndodhja" className="arrow-link mt-5 self-start text-[0.98rem]">
              <span>{c("findUs")}</span>
              <IconArrow />
            </a>
          </div>
          <figure className="enter-delay lg:col-span-6">
            <div className="inlay relative aspect-[4/3] overflow-hidden bg-stone-100 xl:aspect-[5/4]">
              <Photo photo={photos.facadeDusk} locale={locale} fill preload sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" position="62% 60%" />
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-muted">
              <span>{c("heroCaption")}</span>
              <span className="hidden sm:inline">
                {a.street}, {a.city}
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* IMMEDIATE HELP ------------------------------------------------ */}
      <section aria-labelledby="help-title" className="bg-stone-50">
        <div className="wrap grid gap-8 py-14 md:py-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 id="help-title" className="h2">
              {c("helpTitle")}
            </h2>
            <p className="mt-4 max-w-sm">{c("helpBody")}</p>
          </div>
          <div className="lg:col-span-8">
            <HelpLedger locale={locale} />
          </div>
        </div>
      </section>

      {/* SERVICES ------------------------------------------------------ */}
      <section aria-labelledby="services-title" className="wrap grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow">{c("servicesEyebrow")}</p>
            <h2 id="services-title" className="h2 mt-3">
              {c("servicesTitle")}
            </h2>
            <p className="mt-5 max-w-md">{c("servicesBody")}</p>
            <div className="relative mt-10 hidden aspect-[4/5] overflow-hidden bg-stone-100 lg:block">
              <Photo photo={photos.coffinFlowersBeata} locale={locale} fill sizes="38vw" className="object-cover" />
            </div>
          </div>
        </div>
        <ol className="lg:col-span-7 lg:pt-2">
          {services.map((s, i) => (
            <li key={s.id} className="border-t border-line first:border-t-0 lg:first:border-t">
              <Link href={childHref("services", s.slug, locale)} className="group grid grid-cols-[2.75rem_1fr] gap-x-4 py-7 md:grid-cols-[3.5rem_1fr_auto] md:py-8">
                <span className="font-serif text-2xl text-gold-deep md:text-3xl" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="h3 block text-ink transition-colors group-hover:text-bronze">{s.title[locale]}</span>
                  <span className="mt-2 block max-w-lg">{s.summary[locale]}</span>
                </span>
                <IconArrow className="col-start-2 mt-4 size-5 text-bronze transition-transform group-hover:translate-x-1 md:col-start-auto md:mt-2" />
              </Link>
            </li>
          ))}
          <li className="border-y border-line">
            <Link href={href("rooms", locale)} className="group grid grid-cols-[2.75rem_1fr] gap-x-4 py-7 md:grid-cols-[3.5rem_1fr_auto] md:py-8">
              <span className="font-serif text-2xl text-gold-deep md:text-3xl" aria-hidden>
                {String(services.length + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="h3 block text-ink transition-colors group-hover:text-bronze">{c("roomsItem")}</span>
                <span className="mt-2 block max-w-lg">{c("roomsItemBody")}</span>
              </span>
              <IconArrow className="col-start-2 mt-4 size-5 text-bronze transition-transform group-hover:translate-x-1 md:col-start-auto md:mt-2" />
            </Link>
          </li>
        </ol>
      </section>

      {/* ROOMS --------------------------------------------------------- */}
      <section aria-labelledby="rooms-title" className="border-t border-line bg-stone-50 py-20 md:py-28">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow">{c("roomsEyebrow")}</p>
              <h2 id="rooms-title" className="h2 mt-3">
                {c("roomsTitle")}
              </h2>
            </div>
            <p className="max-w-md lg:col-span-5">{c("roomsBody")}</p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-5 lg:grid-cols-4">
            {rooms.map((r, i) => (
              <li key={r.id} style={themeToCssVars(r.theme) as React.CSSProperties} className={i % 2 === 1 ? "lg:mt-12" : ""}>
                <Link href={childHref("rooms", r.slug, locale)} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                    <Photo photo={r.cover} locale={locale} fill sizes="(min-width: 1024px) 24vw, 48vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                  </div>
                  <div className="h-1.5 bg-room" aria-hidden />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted">{d.room.room}</p>
                  <h3 className="mt-1 font-serif text-[1.7rem] leading-tight text-room-dark md:text-3xl">{r.name}</h3>
                  <p className="mt-1 flex items-center gap-2 text-[0.95rem] text-ink-soft">
                    <span aria-hidden className="inline-block size-2.5 bg-room" />
                    {r.colorName[locale]}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <Link href={href("rooms", locale)} className="arrow-link mt-12">
            <span>{d.seeRooms}</span>
            <IconArrow />
          </Link>
        </div>
      </section>

      {/* STATEMENT ----------------------------------------------------- */}
      <section className="border-t border-line">
        <div className="inlay relative aspect-[4/3] w-full overflow-hidden bg-stone-100 md:aspect-[21/9]">
          <Photo photo={photos.corridor} locale={locale} fill sizes="100vw" className="object-cover" position="50% 55%" />
        </div>
        <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <p className="font-serif text-[1.55rem] leading-[1.35] text-ink md:text-[2.1rem] lg:col-span-8">{c("statement")}</p>
          <dl className="grid content-start gap-6 lg:col-span-4 lg:col-start-9">
            {copy.facts.map((f) => (
              <div key={f.k.en} className="border-t border-line pt-4">
                <dt className="font-serif text-2xl text-ink">{f.k[locale]}</dt>
                <dd className="mt-1 text-[0.98rem] text-muted">{f.v[locale]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* HOW IT STARTS ------------------------------------------------- */}
      <div className="wrap pb-20 md:pb-28">
        <Steps locale={locale} title={c("stepsTitle")} />
      </div>

      {/* GALLERY PREVIEW ----------------------------------------------- */}
      <section aria-labelledby="gallery-title" className="border-t border-line py-20 md:py-28">
        <div className="wrap">
          <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow">{c("galleryEyebrow")}</p>
              <h2 id="gallery-title" className="h2 mt-3">
                {c("galleryTitle")}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="max-w-md">{c("galleryBody")}</p>
              <Link href={href("rooms", locale)} className="arrow-link mt-3">
                <span>{c("galleryLink")}</span>
                <IconArrow />
              </Link>
            </div>
          </div>
          <Gallery
            layout="mosaic"
            labels={galleryLabels(locale)}
            items={toGallery([photos.entranceNight, photos.lobbyMural, photos.coffinDisplay, photos.lounge, photos.hearseWithCoffin], locale)}
          />
        </div>
      </section>

      {/* LOCATION ------------------------------------------------------ */}
      <section id="vendndodhja" aria-labelledby="location-title" className="border-t border-line bg-stone-50 py-20 md:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow">{c("locationEyebrow")}</p>
            <h2 id="location-title" className="h2 mt-3">
              {c("locationTitle")}
            </h2>
            <address className="mt-6 not-italic">
              <span className="block font-serif text-2xl text-ink">{a.street}</span>
              <span className="mt-1 block text-lg">
                {capFirst(a.landmark[locale])}, {a.city} {a.postalCode}
              </span>
            </address>
            <p className="mt-5 max-w-md">{locale === "sq" ? "Luméa ndodhet në Rrugën Transballkanike, pranë ish Hipotekës, në një godinë njëkatëshe me tabelën LUMÉA mbi hyrje." : "Luméa is on Rruga Transballkanike, near ish Hipoteka, in a single-storey building with the LUMÉA sign above the entrance."}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={directionsHref} target="_blank" rel="noopener" className="btn btn-primary">
                {d.directions}
              </a>
              <a href={business.googleMapsUrl} target="_blank" rel="noopener" className="btn btn-secondary">
                {d.openMaps}
              </a>
            </div>
            <ExternalLink href={business.googleMapsUrl} className="link mt-6 text-[0.98rem]">
              {d.googleReviews}
            </ExternalLink>
          </div>
          <div className="lg:col-span-7">
            <MapEmbed src={mapEmbedSrc(locale)} title={d.map.title} loadLabel={d.map.load} note={d.map.note} address={`${a.street}, ${a.city}`} />
          </div>
        </div>
      </section>
    </>
  );
}
