import Link from "next/link";
import { business, telHref, whatsappHref } from "@/content/business";
import { t } from "@/content/dictionary";
import { getFaqs } from "@/content/faqs";
import { getService, type Service } from "@/content/services";
import { rooms } from "@/content/rooms";
import { themeToCssVars } from "@/lib/color";
import { childHref, href, type Locale } from "@/lib/i18n";
import { Photo } from "@/components/Photo";
import { Gallery } from "@/components/Gallery";
import { Breadcrumbs, ContactStrip, FaqAccordion, Steps, galleryLabels, toGallery } from "@/components/Blocks";
import { IconArrow, IconPhone, IconWhatsApp } from "@/components/Icons";

export function ServicePage({ service: s, locale }: { service: Service; locale: Locale }) {
  const d = t(locale);
  const wa = whatsappHref();
  const faqs = getFaqs(s.faqIds);
  const showRooms = s.id === "organizimi";

  return (
    <article>
      <header className="wrap pb-14 pt-8 md:pb-20 md:pt-12">
        <Breadcrumbs locale={locale} items={[{ name: d.nav.services, path: href("services", locale) }, { name: s.title[locale] }]} />
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6 lg:pt-6">
            <h1 className="display">{s.title[locale]}</h1>
            <p className="lede mt-6 max-w-xl">{s.intro[locale]}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={telHref(business.phones[0].e164)} className="btn btn-primary">
                <IconPhone className="size-4" />
                <span className="whitespace-nowrap tabular-nums">
                  <span className="sr-only">{d.call} </span>
                  {business.phones[0].display}
                </span>
              </a>
              {wa && (
                <a href={wa} target="_blank" rel="noopener" className="btn btn-secondary">
                  <IconWhatsApp className="size-4" /> {d.whatsapp}
                </a>
              )}
            </div>
            <p className="mt-4 text-sm text-muted">{d.open24}</p>
          </div>
          <div className="enter-delay lg:col-span-6">
            <div className="inlay relative aspect-[4/3] overflow-hidden bg-stone-100 lg:aspect-[4/5]">
              <Photo photo={s.photos[0]} locale={locale} fill preload sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </header>

      <section aria-labelledby="includes" className="border-t border-line bg-stone-50">
        <div className="wrap grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 id="includes" className="h2">
              {d.service.includes}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-line border-y border-line">
              {s.includes.map((x) => (
                <li key={x.en} className="flex items-start gap-4 py-4 text-[1.1rem] text-ink">
                  <span aria-hidden className="mt-[0.8rem] h-px w-5 shrink-0 bg-gold" />
                  {x[locale]}
                </li>
              ))}
            </ul>
            {s.note && <p className="mt-6 max-w-2xl text-[0.98rem] text-muted">{s.note[locale]}</p>}
          </div>
        </div>
      </section>

      {showRooms && (
        <section aria-labelledby="svc-rooms" className="border-t border-line">
          <div className="wrap py-16 md:py-20">
            <h2 id="svc-rooms" className="h3">
              {locale === "sq" ? "Sallat ku mund të mbahet pritja" : "Rooms available for the reception"}
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {rooms.map((r) => (
                <li key={r.id} style={themeToCssVars(r.theme) as React.CSSProperties}>
                  <Link href={childHref("rooms", r.slug, locale)} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                      <Photo photo={r.cover} locale={locale} fill sizes="(min-width: 768px) 24vw, 48vw" className="object-cover" />
                    </div>
                    <div className="h-1 bg-room" aria-hidden />
                    <span className="mt-2 flex items-baseline justify-between gap-2">
                      <span className="font-serif text-xl text-room-dark">{r.name}</span>
                      <span className="text-sm text-muted">{r.colorName[locale]}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {s.photos.length > 1 && (
        <section aria-label={d.room.photos} className="border-t border-line">
          <div className="wrap py-16 md:py-20">
            <Gallery items={toGallery(s.photos, locale)} labels={galleryLabels(locale)} />
          </div>
        </section>
      )}

      <div className="wrap border-t border-line py-16 md:py-20">
        <Steps locale={locale} title={d.service.how} />
      </div>

      {faqs.length > 0 && (
        <section aria-labelledby="svc-faq" className="border-t border-line">
          <div className="wrap grid gap-8 py-16 md:py-20 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 id="svc-faq" className="h2">
                {d.service.faq}
              </h2>
              <Link href={href("faq", locale)} className="arrow-link mt-4">
                <span>{d.nav.faqLong}</span>
                <IconArrow />
              </Link>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={faqs} locale={locale} />
            </div>
          </div>
        </section>
      )}

      <section aria-labelledby="svc-related" className="border-t border-line">
        <div className="wrap py-12 md:py-14">
          <h2 id="svc-related" className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
            {d.service.related}
          </h2>
          <ul className="mt-4 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-10">
            {s.related.map((id) => {
              const r = getService(id);
              return (
                <li key={id}>
                  <Link href={childHref("services", r.slug, locale)} className="arrow-link text-[1.05rem]">
                    <span>{r.title[locale]}</span>
                    <IconArrow />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <ContactStrip locale={locale} />
    </article>
  );
}
