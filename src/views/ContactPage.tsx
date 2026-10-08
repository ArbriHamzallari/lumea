import { business, capFirst, mapEmbedSrc, whatsappHref } from "@/content/business";
import { t } from "@/content/dictionary";
import { photos } from "@/content/images";
import type { L, Locale } from "@/lib/i18n";
import { Photo } from "@/components/Photo";
import { MapEmbed } from "@/components/MapEmbed";
import { Breadcrumbs, ExternalLink, HelpLedger } from "@/components/Blocks";
import { IconClock, IconFacebook, IconInstagram, IconWhatsApp } from "@/components/Icons";

const copy = {
  h1: { sq: "Na kontaktoni", en: "Contact us" },
  lede: {
    sq: "Luméa Funeral Home është në dispozicion 24 orë në ditë, 7 ditë në javë.",
    en: "Luméa Funeral Home is available 24 hours a day, 7 days a week.",
  },
  lede2: {
    sq: "Për ndihmë ose informacion, mënyra më e shpejtë është të na telefononi.",
    en: "For help or information, the quickest way to reach us is by phone.",
  },
  findTitle: { sq: "Na gjeni në Vlorë", en: "Find us in Vlorë" },
} satisfies Record<string, L>;

export function ContactPage({ locale }: { locale: Locale }) {
  const d = t(locale);
  const a = business.address;
  const wa = whatsappHref();
  return (
    <>
      <header className="wrap pb-14 pt-8 md:pb-20 md:pt-12">
        <Breadcrumbs locale={locale} items={[{ name: d.nav.contact }]} />
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <h1 className="display lg:col-span-5">{copy.h1[locale]}</h1>
          <div className="lg:col-span-7 lg:pt-3">
            <p className="lede">{copy.lede[locale]}</p>
            <p className="lede mt-3">{copy.lede2[locale]}</p>
          </div>
        </div>
        <div className="mt-12">
          <HelpLedger locale={locale} hours={false} addressRow={false} />
          <div className="mt-8 flex flex-col gap-x-8 gap-y-5 sm:flex-row sm:items-center">
            {wa && (
              <a href={wa} target="_blank" rel="noopener" className="btn btn-primary">
                <IconWhatsApp className="size-4" />
                {d.writeWhatsapp}
              </a>
            )}
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[1.02rem]">
              {business.social.facebook && (
                <li>
                  <a href={business.social.facebook} target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-semibold text-ink hover:text-bronze">
                    <IconFacebook className="size-5 text-bronze" />
                    Facebook
                  </a>
                </li>
              )}
              <li>
                <a href={business.social.instagram} target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-semibold text-ink hover:text-bronze">
                  <IconInstagram className="size-5 text-bronze" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
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
              <span className="mt-1 block text-lg">{capFirst(a.landmark[locale])}</span>
              <span className="block text-lg">
                {a.city} {a.postalCode}, {a.country[locale]}
              </span>
            </address>
            <a href={business.googleMapsUrl} target="_blank" rel="noopener" className="btn btn-primary mt-7">
              {d.openMaps}
            </a>
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

      <section aria-labelledby="hours" className="border-t border-line">
        <div className="wrap flex flex-col gap-3 py-14 md:flex-row md:items-baseline md:gap-14 md:py-16">
          <h2 id="hours" className="h2">
            {d.hours}
          </h2>
          <p className="flex items-center gap-3 text-xl text-ink">
            <IconClock className="size-6 text-bronze" />
            {d.open24}.
          </p>
        </div>
      </section>
    </>
  );
}
