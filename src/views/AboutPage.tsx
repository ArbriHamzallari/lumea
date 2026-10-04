import Link from "next/link";
import { business } from "@/content/business";
import { t } from "@/content/dictionary";
import { photos } from "@/content/images";
import { services } from "@/content/services";
import { childHref, href, type L, type Locale } from "@/lib/i18n";
import { Photo } from "@/components/Photo";
import { Breadcrumbs, ContactStrip, ExternalLink } from "@/components/Blocks";
import { IconArrow } from "@/components/Icons";

/**
 * About page — written only from published facts. There is deliberately no
 * founding story, team, or "years of experience" here: none were supplied.
 * When Luméa provides them, add a section below "who" (see README).
 */
const copy = {
  h1: { sq: "Rreth Luméa", en: "About Luméa" },
  lede: {
    sq: "Luméa Funeral Home është shtëpi funerale në Vlorë, në Rrugën Transballkanike, pranë ish Hipotekës. Është e hapur 24 orë në ditë, 7 ditë në javë.",
    en: "Luméa Funeral Home is a funeral home in Vlorë, on Rruga Transballkanike near ish Hipoteka. It is open 24 hours a day, 7 days a week.",
  },
  oneRoofTitle: { sq: "Nën të njëjtën çati", en: "Under one roof" },
  oneRoofBody: {
    sq: "Në godinën e Luméa ndodhen katër sallat e pritjes dhe ambientet e morgut. Këtu ndiqen edhe transporti funeral, organizimi i ceremonisë dhe dokumentet. Familja mund t’i drejtojë këto nevoja nga një vend i vetëm.",
    en: "The Luméa building houses four reception rooms and mortuary facilities. Funeral transport, ceremony arrangements and paperwork are also handled from here. The family can deal with these needs from one place.",
  },
  buildingTitle: { sq: "Godina", en: "The building" },
  buildingBody: {
    sq: "Një godinë njëkatëshe me tabelën LUMÉA mbi hyrje. Brenda ndodhen holli dhe korridoret me mermer që të çojnë te sallat.",
    en: "A single-storey building with the LUMÉA sign above the entrance. Inside are the lobby and marble corridors leading to the rooms.",
  },
  realTitle: { sq: "Fotografi të ambienteve", en: "Photographs of the premises" },
  realBody: {
    sq: "Fotografitë në këtë faqe tregojnë ambientet, sallat dhe automjetet e Luméa. Ato janë fotografi të vendit dhe jo fotografi stoku apo pamje të krijuara në kompjuter.",
    en: "The photographs on this website show Luméa’s premises, rooms and vehicles. They are photographs of the actual location, not stock photography or computer-generated images.",
  },
  careCaption: { sq: "Pastrimi i ambienteve të Luméa", en: "Cleaning the Luméa premises" },
  followTitle: { sq: "Na ndiqni", en: "Follow us" },
  followBody: {
    sq: "Në Instagram, Luméa publikon fotografi të ambienteve dhe njoftime.",
    en: "On Instagram, Luméa shares photographs of its premises and updates.",
  },
} satisfies Record<string, L>;

export function AboutPage({ locale }: { locale: Locale }) {
  const d = t(locale);
  return (
    <>
      <header className="wrap pb-14 pt-8 md:pb-20 md:pt-12">
        <Breadcrumbs locale={locale} items={[{ name: d.nav.about }]} />
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <h1 className="display lg:col-span-5">{copy.h1[locale]}</h1>
          <p className="lede lg:col-span-7 lg:pt-3">{copy.lede[locale]}</p>
        </div>
      </header>

      <div className="inlay relative aspect-[4/3] w-full overflow-hidden bg-stone-100 md:aspect-[21/9]">
        <Photo photo={photos.facadeDuskVehicles} locale={locale} fill preload sizes="100vw" className="object-cover" position="50% 60%" />
      </div>

      <section aria-labelledby="one-roof" className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <h2 id="one-roof" className="h2">
            {copy.oneRoofTitle[locale]}
          </h2>
          <p className="mt-5 text-[1.08rem] leading-[1.75]">{copy.oneRoofBody[locale]}</p>
        </div>
        <ul className="divide-y divide-line border-y border-line lg:col-span-6 lg:col-start-7">
          {services.map((s) => (
            <li key={s.id}>
              <Link href={childHref("services", s.slug, locale)} className="arrow-link flex w-full justify-between py-4 text-[1.05rem]">
                <span>{s.title[locale]}</span>
                <IconArrow />
              </Link>
            </li>
          ))}
          <li>
            <Link href={href("rooms", locale)} className="arrow-link flex w-full justify-between py-4 text-[1.05rem]">
              <span>{locale === "sq" ? "Katër salla pritjeje" : "Four reception rooms"}</span>
              <IconArrow />
            </Link>
          </li>
        </ul>
      </section>

      <section aria-labelledby="building" className="border-t border-line bg-stone-50">
        <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 id="building" className="h2">
              {copy.buildingTitle[locale]}
            </h2>
            <p className="mt-5">{copy.buildingBody[locale]}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:col-span-8">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden bg-stone-100">
              <Photo photo={photos.lobbyWindows} locale={locale} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
              <Photo photo={photos.entranceNight} locale={locale} fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
              <Photo photo={photos.lobbyMural} locale={locale} fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="real" className="border-t border-line">
        <div className="wrap grid items-center gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-14">
          <figure className="lg:col-span-4">
            <div className="relative mx-auto aspect-[9/14] max-w-xs overflow-hidden bg-stone-100 lg:mx-0">
              <Photo photo={photos.cleaning} locale={locale} fill sizes="320px" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-muted">{copy.careCaption[locale]}</figcaption>
          </figure>
          <div className="lg:col-span-7 lg:col-start-6">
            <h2 id="real" className="h2">
              {copy.realTitle[locale]}
            </h2>
            <p className="mt-5 max-w-xl text-[1.08rem] leading-[1.75]">{copy.realBody[locale]}</p>
            <h3 className="h3 mt-12">{copy.followTitle[locale]}</h3>
            <p className="mt-3 max-w-xl">{copy.followBody[locale]}</p>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              <ExternalLink href={business.social.instagram} className="link">
                Instagram · @lumeafuneralhome
              </ExternalLink>
              <ExternalLink href={business.googleMapsUrl} className="link">
                {d.googleReviews}
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip locale={locale} />
    </>
  );
}
