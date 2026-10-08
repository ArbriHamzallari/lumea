import { business, capFirst } from "@/content/business";
import { t } from "@/content/dictionary";
import { photos } from "@/content/images";
import { type L, type Locale } from "@/lib/i18n";
import { Photo } from "@/components/Photo";
import { Breadcrumbs, ContactStrip } from "@/components/Blocks";

/**
 * About page — written only from published facts. No founding story, team or
 * "years of experience": none were supplied. When Luméa provides them, add a
 * section after "one place" (see README).
 */
const copy = {
  h1: { sq: "Rreth Luméa", en: "About Luméa" },
  p1: {
    sq: "Luméa Funeral Home është një shtëpi funerale në Vlorë, e vendosur në Rrugën Transballkanike, pranë ish Hipotekës.",
    en: "Luméa Funeral Home is a funeral home in Vlorë, on Rruga Transballkanike near ish Hipoteka.",
  },
  p2: {
    sq: "Ne ofrojmë shërbime funerale, ambiente pritjeje, kujdes për të ndjerin, transport funeral dhe asistencë me dokumentacionin.",
    en: "We provide funeral services, reception rooms, care of the deceased, funeral transport and help with paperwork.",
  },
  p3: {
    sq: "Luméa është e hapur 24 orë në ditë, 7 ditë në javë.",
    en: "Luméa is open 24 hours a day, 7 days a week.",
  },
  oneTitle: { sq: "Një vend për të gjitha shërbimet", en: "One place for every service" },
  one1: {
    sq: "Në të njëjtën godinë ndodhen sallat e pritjes dhe ambientet e dedikuara për kujdesin ndaj të ndjerit.",
    en: "The reception rooms and the dedicated facilities for the care of the deceased are in the same building.",
  },
  one2: {
    sq: "Luméa koordinon gjithashtu organizimin e ceremonisë, transportin dhe procedurat që lidhen me shërbimin funeral.",
    en: "Luméa also coordinates the ceremony, the transport and the procedures involved in the funeral.",
  },
  one3: {
    sq: "Qëllimi ynë është që familjet të kenë një pikë të vetme kontakti për shërbimet që u nevojiten në këto ditë të vështira.",
    en: "Our aim is for families to have a single point of contact for the services they need during these difficult days.",
  },
  whereTitle: { sq: "Ku ndodhemi", en: "Where we are" },
} satisfies Record<string, L>;

export function AboutPage({ locale }: { locale: Locale }) {
  const d = t(locale);
  const a = business.address;
  const c = (k: keyof typeof copy) => copy[k][locale];
  return (
    <>
      <header className="wrap pb-14 pt-8 md:pb-20 md:pt-12">
        <Breadcrumbs locale={locale} items={[{ name: d.nav.about }]} />
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <h1 className="display lg:col-span-5">{c("h1")}</h1>
          <div className="lg:col-span-7 lg:pt-3">
            <p className="lede">{c("p1")}</p>
            <p className="lede mt-3">{c("p2")}</p>
            <p className="lede mt-3">{c("p3")}</p>
          </div>
        </div>
      </header>

      <div className="inlay relative aspect-[4/3] w-full overflow-hidden bg-stone-100 md:aspect-[21/9]">
        <Photo photo={photos.facadeDuskVehicles} locale={locale} fill preload sizes="100vw" className="object-cover" position="50% 60%" />
      </div>

      <section aria-labelledby="one-place" className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <h2 id="one-place" className="h2">
            {c("oneTitle")}
          </h2>
          <div className="mt-5 space-y-3 text-[1.08rem] leading-[1.75]">
            <p>{c("one1")}</p>
            <p>{c("one2")}</p>
            <p>{c("one3")}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:col-span-6 lg:col-start-7">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden bg-stone-100">
            <Photo photo={photos.lobbyWindows} locale={locale} fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
            <Photo photo={photos.entranceNight} locale={locale} fill sizes="(min-width: 1024px) 23vw, 50vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
            <Photo photo={photos.lobbyMural} locale={locale} fill sizes="(min-width: 1024px) 23vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section aria-labelledby="where" className="border-t border-line bg-stone-50">
        <div className="wrap flex flex-col gap-6 py-14 md:flex-row md:items-end md:justify-between md:py-16">
          <div>
            <h2 id="where" className="h2">
              {c("whereTitle")}
            </h2>
            <address className="mt-5 not-italic">
              <span className="block font-serif text-2xl text-ink">{a.street}</span>
              <span className="mt-1 block text-lg">{capFirst(a.landmark[locale])}</span>
              <span className="block text-lg">
                {a.city} {a.postalCode}
              </span>
            </address>
          </div>
          <a href={business.googleMapsUrl} target="_blank" rel="noopener" className="btn btn-primary shrink-0">
            {d.findOnMaps}
          </a>
        </div>
      </section>

      <ContactStrip locale={locale} />
    </>
  );
}
