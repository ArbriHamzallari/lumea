import Link from "next/link";
import { business, capFirst, telHref, whatsappHref } from "@/content/business";
import { t } from "@/content/dictionary";
import type { Faq } from "@/content/faqs";
import type { Photo as PhotoT } from "@/content/images";
import { href, type Locale } from "@/lib/i18n";
import { breadcrumbSchema } from "@/lib/schema";
import type { GalleryItem } from "./Gallery";
import { IconClock, IconExternal, IconPhone, IconPin, IconWhatsApp } from "./Icons";
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
/* Contact list — phones, WhatsApp and optionally hours and address    */
/* ------------------------------------------------------------------ */

export function HelpLedger({ locale, hours = true, addressRow = true }: { locale: Locale; hours?: boolean; addressRow?: boolean }) {
  const d = t(locale);
  const a = business.address;
  const wa = whatsappHref();
  const row = "grid grid-cols-[1.5rem_1fr] items-start gap-x-4 gap-y-1 py-5 sm:grid-cols-[1.5rem_8rem_1fr] sm:items-center";
  const label = "text-sm text-muted sm:text-[0.95rem]";
  return (
    <ul data-shared="help-ledger" className="divide-y divide-[var(--room-line)] border-y border-[var(--room-line)]">
      {business.phones.map((p) => (
        <li key={p.e164} className={row}>
          <IconPhone className="size-5 text-room-accent" />
          <span className={label}>{d.phone}</span>
          <a href={telHref(p.e164)} className="col-start-2 whitespace-nowrap text-[1.35rem] font-semibold tracking-tight text-ink tabular-nums hover:text-room-accent sm:col-start-auto sm:text-[1.4rem] xl:text-2xl">
            {p.display}
          </a>
        </li>
      ))}
      {wa && (
        <li className={row}>
          <IconWhatsApp className="size-5 text-room-accent" />
          <span className={label}>WhatsApp</span>
          <a href={wa} target="_blank" rel="noopener" className="col-start-2 whitespace-nowrap text-lg font-semibold text-ink tabular-nums hover:text-room-accent sm:col-start-auto">
            {business.phones[0].display}
          </a>
        </li>
      )}
      {hours && (
        <li className={row}>
          <IconClock className="size-5 text-room-accent" />
          <span className={label}>{d.hours}</span>
          <span className="col-start-2 text-lg font-semibold text-ink sm:col-start-auto">{d.open24}</span>
        </li>
      )}
      {addressRow && (
        <li className={row}>
          <IconPin className="size-5 text-room-accent" />
          <span className={label}>{d.address}</span>
          <address className="col-start-2 not-italic text-ink sm:col-start-auto">
            <span className="text-lg font-semibold">{a.street}</span>
            <br />
            {capFirst(a.landmark[locale])}, {a.city} {a.postalCode}
          </address>
        </li>
      )}
    </ul>
  );
}

/** The two main calls to action, used together across the site. */
export function CallButtons({ locale, className = "", waText }: { locale: Locale; className?: string; waText?: string }) {
  const d = t(locale);
  const wa = whatsappHref(waText);
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a href={telHref(business.phones[0].e164)} className="btn btn-primary">
        <IconPhone className="size-4" />
        {d.callNow}
      </a>
      {wa && (
        <a href={wa} target="_blank" rel="noopener" className="btn btn-secondary">
          <IconWhatsApp className="size-4" />
          {d.writeWhatsapp}
        </a>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Contact strip — closes inner pages: a title, one line, two buttons  */
/* ------------------------------------------------------------------ */

export function ContactStrip({ locale, title, text }: { locale: Locale; title?: string; text?: string }) {
  const d = t(locale);
  return (
    <section data-shared="contact-strip" className="border-t border-[var(--room-line)] bg-room-light">
      <div className="wrap flex flex-col gap-6 py-14 md:flex-row md:items-end md:justify-between md:py-16">
        <div>
          <h2 className="h2">{title ?? d.talkToUs}</h2>
          <p className="mt-3 max-w-xl">{text ?? d.contactLine}</p>
        </div>
        <CallButtons locale={locale} className="shrink-0" />
      </div>
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
