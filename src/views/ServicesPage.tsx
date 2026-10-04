import Link from "next/link";
import { t } from "@/content/dictionary";
import { photos } from "@/content/images";
import { rooms } from "@/content/rooms";
import { services } from "@/content/services";
import { themeToCssVars } from "@/lib/color";
import { childHref, href, type L, type Locale } from "@/lib/i18n";
import { Photo } from "@/components/Photo";
import { Breadcrumbs, ContactStrip, Steps } from "@/components/Blocks";
import { IconArrow } from "@/components/Icons";

const copy = {
  h1: { sq: "Shërbimet e Luméa", en: "Luméa’s services" },
  lede: {
    sq: "Luméa ju ndihmon me organizimin e funeralit në Vlorë: sallën e pritjes, përgatitjen e të ndjerit, transportin brenda dhe jashtë vendit, arkivolin dhe dokumentet. Mund të na drejtoheni për të gjithë shërbimin ose vetëm për pjesën që ju nevojitet.",
    en: "Luméa helps arrange funerals in Vlorë, including the reception room, preparation of the deceased, transport within Albania and abroad, the coffin and paperwork. You can come to us for the full service or only for the part you need.",
  },
  roomsTitle: { sq: "Sallat e pritjes", en: "Reception rooms" },
  roomsBody: {
    sq: "Katër salla për pritjen e ngushëllimeve dhe homazhet. Shikoni fotografitë dhe detajet e secilës sallë.",
    en: "Four rooms for receiving condolences and paying respects. See photographs and details of each room.",
  },
  stepsTitle: { sq: "Si fillon", en: "How it starts" },
} satisfies Record<string, L>;

export function ServicesPage({ locale }: { locale: Locale }) {
  const d = t(locale);
  return (
    <>
      <header className="wrap pb-14 pt-8 md:pb-20 md:pt-12">
        <Breadcrumbs locale={locale} items={[{ name: d.nav.services }]} />
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <h1 className="display lg:col-span-6">{copy.h1[locale]}</h1>
          <p className="lede lg:col-span-6 lg:pt-3">{copy.lede[locale]}</p>
        </div>
      </header>

      <ol className="border-t border-line">
        {services.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <li key={s.id} className="border-b border-line">
              <article className="wrap grid items-center gap-8 py-12 md:py-16 lg:grid-cols-12 lg:gap-14">
                <div className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <Photo photo={s.photos[0]} locale={locale} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" preload={i === 0} />
                  </div>
                </div>
                <div className={`lg:col-span-6 ${flip ? "lg:order-1" : "lg:col-start-7"}`}>
                  <span className="font-serif text-3xl text-gold-deep" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="h2 mt-2">
                    <Link href={childHref("services", s.slug, locale)} className="hover:text-bronze">
                      {s.title[locale]}
                    </Link>
                  </h2>
                  <p className="mt-4 max-w-xl text-[1.05rem]">{(s.pageSummary ?? s.summary)[locale]}</p>
                  <ul className="mt-5 space-y-1.5 text-[0.98rem] text-ink-soft">
                    {(s.listIncludes ?? s.includes).slice(0, 3).map((x) => (
                      <li key={x.en} className="flex gap-3">
                        <span aria-hidden className="mt-[0.65rem] h-px w-3 shrink-0 bg-gold" />
                        {x[locale]}
                      </li>
                    ))}
                  </ul>
                  <Link href={childHref("services", s.slug, locale)} className="arrow-link mt-6">
                    <span>{locale === "sq" ? "Shikoni shërbimin" : "View the service"}</span>
                    <IconArrow />
                  </Link>
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
                  <li key={r.id} style={themeToCssVars(r.theme) as React.CSSProperties}>
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
              <span className="font-serif text-3xl text-gold-deep" aria-hidden>
                {String(services.length + 1).padStart(2, "0")}
              </span>
              <h2 className="h2 mt-2">{copy.roomsTitle[locale]}</h2>
              <p className="mt-4 max-w-xl text-[1.05rem]">{copy.roomsBody[locale]}</p>
              <Link href={href("rooms", locale)} className="arrow-link mt-6">
                <span>{d.seeRooms}</span>
                <IconArrow />
              </Link>
            </div>
          </article>
        </li>
      </ol>

      <div className="wrap py-20 md:py-24">
        <Steps locale={locale} title={copy.stepsTitle[locale]} />
      </div>

      <figure className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100 md:aspect-[21/8]">
        <Photo photo={photos.twoHearses} locale={locale} fill sizes="100vw" className="object-cover" position="50% 65%" />
      </figure>

      <ContactStrip locale={locale} />
    </>
  );
}
