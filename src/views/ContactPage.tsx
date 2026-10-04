import { business, capFirst, directionsHref, mapEmbedSrc } from "@/content/business";
import { t } from "@/content/dictionary";
import { photos } from "@/content/images";
import type { L, Locale } from "@/lib/i18n";
import { Photo } from "@/components/Photo";
import { MapEmbed } from "@/components/MapEmbed";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs, ExternalLink, HelpLedger } from "@/components/Blocks";

const copy = {
  h1: { sq: "Kontakt", en: "Contact" },
  lede: {
    sq: "Luméa është e hapur 24 orë në ditë, 7 ditë në javë. Për ndihmë të menjëhershme, mënyra më e shpejtë është të na telefononi.",
    en: "Luméa is open 24 hours a day, 7 days a week. For immediate help, the quickest way to reach us is by phone.",
  },
  findTitle: { sq: "Si të na gjeni", en: "How to find us" },
  findBody: {
    sq: "Luméa ndodhet në Rrugën Transballkanike në Vlorë, pranë ish Hipotekës. Kërkoni godinën njëkatëshe me tabelën LUMÉA FUNERAL HOME mbi hyrje.",
    en: "Luméa is on Rruga Transballkanike in Vlorë, near ish Hipoteka. Look for the single-storey building with the LUMÉA FUNERAL HOME sign above the entrance.",
  },
  writeTitle: { sq: "Preferoni të shkruani?", en: "Prefer to write?" },
} satisfies Record<string, L>;

export function ContactPage({ locale }: { locale: Locale }) {
  const d = t(locale);
  const a = business.address;
  return (
    <>
      <header className="wrap pb-12 pt-8 md:pb-16 md:pt-12">
        <Breadcrumbs locale={locale} items={[{ name: d.nav.contact }]} />
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <h1 className="display lg:col-span-5">{copy.h1[locale]}</h1>
          <p className="lede lg:col-span-7 lg:pt-3">{copy.lede[locale]}</p>
        </div>
        <div className="mt-12">
          <HelpLedger locale={locale} />
        </div>
      </header>

      <section aria-labelledby="find" className="border-t border-line bg-stone-50">
        <div className="wrap grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 id="find" className="h2">
              {copy.findTitle[locale]}
            </h2>
            <address className="mt-6 not-italic">
              <span className="block font-serif text-2xl text-ink">{a.street}</span>
              <span className="mt-1 block text-lg">
                {capFirst(a.landmark[locale])}
                <br />
                {a.city} {a.postalCode}, {a.country[locale]}
              </span>
            </address>
            <p className="mt-5 max-w-md">{copy.findBody[locale]}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={directionsHref} target="_blank" rel="noopener" className="btn btn-primary">
                {d.directions}
              </a>
              <a href={business.googleMapsUrl} target="_blank" rel="noopener" className="btn btn-secondary">
                {d.openMaps}
              </a>
            </div>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden bg-stone-100">
              <Photo photo={photos.facadeHearse} locale={locale} fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <MapEmbed src={mapEmbedSrc(locale)} title={d.map.title} loadLabel={d.map.load} note={d.map.note} address={`${a.street}, ${a.city}`} />
            <ExternalLink href={business.googleMapsUrl} className="link mt-5 text-[0.98rem]">
              {d.googleReviews}
            </ExternalLink>
          </div>
        </div>
      </section>

      {business.whatsapp && (
        <section aria-labelledby="write" className="border-t border-line">
          <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 id="write" className="h2">
                {copy.writeTitle[locale]}
              </h2>
              <p className="mt-4">{d.form.intro}</p>
            </div>
            <div className="max-w-xl lg:col-span-7 lg:col-start-6">
              <ContactForm labels={d.form} whatsapp={business.whatsapp} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
