import Link from "next/link";
import { business, capFirst, directionsHref, telHref, whatsappHref } from "@/content/business";
import { t } from "@/content/dictionary";
import type { Faq } from "@/content/faqs";
import type { Photo as PhotoT } from "@/content/images";
import { href, type L, type Locale } from "@/lib/i18n";
import { breadcrumbSchema } from "@/lib/schema";
import type { GalleryItem } from "./Gallery";
import { IconArrow, IconClock, IconDirections, IconExternal, IconPhone, IconPin, IconWhatsApp } from "./Icons";
import { JsonLd } from "./JsonLd";

export function toGallery(items: PhotoT[], locale: Locale): GalleryItem[] {
  return items.map((p) => ({ src: p.src, width: p.width, height: p.height, blur: p.blur, alt: p.alt[locale] }));
}

export function galleryLabels(locale: Locale) {
  const g = t(locale).gallery;
  return { open: g.open, close: g.close, prev: g.prev, next: g.next, dialog: g.dialog, counter: g.counter };
}

/* ------------------------------------------------------------------ */

export function Breadcrumbs({ locale, items }: { locale: Locale; items: { name: string; path?: string }[] }) {
  const d = t(locale);
  const all = [{ name: d.home, path: href("home", locale) }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label={d.breadcrumb} className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((it, i) => (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className="text-line-strong">
                  /
                </span>
              )}
              {it.path && i < all.length - 1 ? (
                <Link href={it.path} className="hover:text-ink hover:underline">
                  {it.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-ink-soft">
                  {it.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* The help ledger — every way to reach Luméa, as calm ruled rows      */
/* ------------------------------------------------------------------ */

export function HelpLedger({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const d = t(locale);
  const a = business.address;
  const wa = whatsappHref();
  const row = "grid grid-cols-[1.5rem_1fr] items-start gap-x-4 gap-y-1 py-5 sm:grid-cols-[1.5rem_9rem_1fr_auto] sm:items-center";
  const label = "text-sm text-muted sm:text-[0.95rem]";
  return (
    <ul data-shared="help-ledger" className="divide-y divide-[var(--room-line)] border-y border-[var(--room-line)]">
      {business.phones.map((p, i) => (
        <li key={p.e164} className={row}>
          <IconPhone className="size-5 text-room-accent sm:mt-0" />
          <span className={label}>
            {d.phone} {business.phones.length > 1 ? i + 1 : ""}
          </span>
          <a href={telHref(p.e164)} className="col-start-2 whitespace-nowrap text-[1.35rem] font-semibold tracking-tight text-ink tabular-nums hover:text-room-accent sm:col-start-auto sm:text-[1.4rem] xl:text-2xl">
            {p.display}
          </a>
          <a href={telHref(p.e164)} className="arrow-link hidden text-[0.95rem] sm:inline-flex" aria-hidden tabIndex={-1}>
            <span>{d.call}</span>
            <IconArrow />
          </a>
        </li>
      ))}
      {wa && (
        <li className={row}>
          <IconWhatsApp className="size-5 text-room-accent" />
          <span className={label}>WhatsApp</span>
          <a href={wa} target="_blank" rel="noopener" className="col-start-2 text-lg font-semibold text-ink hover:text-room-accent sm:col-start-auto">
            {business.phones[0].display}
          </a>
          <span className="hidden sm:block" />
        </li>
      )}
      <li className={row}>
        <IconClock className="size-5 text-room-accent" />
        <span className={label}>{d.hours}</span>
        <span className="col-start-2 text-lg font-semibold text-ink sm:col-start-auto">{d.open24}</span>
        <span className="hidden sm:block" />
      </li>
      {!compact && (
        <li className={row}>
          <IconPin className="size-5 text-room-accent" />
          <span className={label}>{d.address}</span>
          <address className="col-start-2 not-italic text-ink sm:col-start-auto">
            <span className="text-lg font-semibold">{a.street}</span>
            <br />
            {capFirst(a.landmark[locale])}, {a.city} {a.postalCode}
          </address>
          <a href={directionsHref} target="_blank" rel="noopener" className="arrow-link col-start-2 text-[0.95rem] sm:col-start-auto">
            <IconDirections className="size-4" />
            <span>{d.directions}</span>
          </a>
        </li>
      )}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Contact strip — closes inner pages, once                            */
/* ------------------------------------------------------------------ */

export function ContactStrip({ locale, title }: { locale: Locale; title?: string }) {
  const d = t(locale);
  const wa = whatsappHref();
  const copy: L = {
    sq: "Mund të na telefononi në çdo orë. Nëse preferoni të shkruani, na kontaktoni në WhatsApp.",
    en: "You can call us at any hour. If you prefer to write, contact us on WhatsApp.",
  };
  return (
    <section data-shared="contact-strip" className="border-t border-[var(--room-line)] bg-room-light">
      <div className="wrap grid gap-8 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <h2 className="h2">{title ?? (locale === "sq" ? "Flisni me ne" : "Talk to us")}</h2>
          <p className="mt-4 max-w-md">{wa ? copy[locale] : copy[locale].split(". ")[0] + "."}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={telHref(business.phones[0].e164)} className="btn btn-primary">
              <IconPhone className="size-4" />
              <span className="whitespace-nowrap tabular-nums">{business.phones[0].display}</span>
            </a>
            {wa && (
              <a href={wa} target="_blank" rel="noopener" className="btn btn-secondary">
                <IconWhatsApp className="size-4" /> {d.whatsapp}
              </a>
            )}
          </div>
        </div>
        <div className="lg:col-span-8">
          <HelpLedger locale={locale} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export const STEPS: { title: L; body: L }[] = [
  {
    title: { sq: "Na telefononi", en: "Call us" },
    body: {
      sq: "Na telefononi në cilëndo orë. Nuk është e nevojshme t’i keni të gjitha informacionet gati.",
      en: "Call us at any hour. You do not need to have everything ready.",
    },
  },
  {
    title: { sq: "Flasim për atë që ju nevojitet", en: "We talk through what you need" },
    body: {
      sq: "Na tregoni çfarë ka ndodhur dhe çfarë ju nevojitet. Ne ju shpjegojmë hapat e mëtejshëm.",
      en: "Tell us what has happened and what you need. We will explain the next steps.",
    },
  },
  {
    title: { sq: "Ne merremi me organizimin", en: "We take care of the arrangements" },
    body: {
      sq: "Luméa ndjek pjesët që keni zgjedhur, nga ceremonia dhe salla deri te transporti dhe dokumentet.",
      en: "Luméa handles the parts you need, from the ceremony and room to transport and paperwork.",
    },
  },
];

export function Steps({ locale, title }: { locale: Locale; title: string }) {
  return (
    <section data-shared="steps" aria-labelledby="steps-title">
      <h2 id="steps-title" className="h3">
        {title}
      </h2>
      <ol className="mt-6 grid gap-px overflow-hidden border border-[var(--room-line)] bg-[var(--room-line)] md:grid-cols-3">
        {STEPS.map((s, i) => (
          <li key={i} className="bg-room-pale p-6 md:p-7">
            <span className="font-serif text-3xl text-gold-deep" aria-hidden>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-sans text-lg font-semibold text-ink">{s.title[locale]}</h3>
            <p className="mt-2 text-[0.98rem]">{s.body[locale]}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function FaqAccordion({ items, locale }: { items: Faq[]; locale: Locale }) {
  return (
    <div data-shared="faq" className="divide-y divide-[var(--room-line)] border-y border-[var(--room-line)]">
      {items.map((f) => (
        <details key={f.id} className="group py-1">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-3 text-[1.08rem] font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {f.q[locale]}
            <span aria-hidden className="relative size-4 shrink-0 text-room-accent">
              <span className="absolute inset-x-0 top-1/2 h-px bg-current" />
              <span className="absolute inset-y-0 left-1/2 w-px bg-current transition-transform duration-300 group-open:scale-y-0" />
            </span>
          </summary>
          <div className="pb-5 pr-10">
            <p>{f.a[locale]}</p>
            {f.link && (
              <Link href={href(f.link.route, locale)} className="link mt-2 inline-block">
                {f.link.label[locale]}
              </Link>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}

export function ExternalLink({ href: url, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={url} target="_blank" rel="noopener" className={`inline-flex items-center gap-1.5 ${className}`}>
      {children}
      <IconExternal />
    </a>
  );
}
