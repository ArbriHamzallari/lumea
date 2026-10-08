import Link from "next/link";
import type { ReactNode } from "react";
import { business, directionsHref, telHref, whatsappHref, phonePrimary } from "@/content/business";
import { t } from "@/content/dictionary";
import { href, type Locale, type RouteKey } from "@/lib/i18n";
import { buildAlternateMap } from "@/lib/alternates";
import { siteSchema } from "@/lib/schema";
import { HeaderNav, LangSwitch } from "./HeaderNav";
import { Logo } from "./Logo";
import { IconClock, IconDirections, IconFacebook, IconInstagram, IconPhone, IconPin, IconWhatsApp } from "./Icons";
import { JsonLd } from "./JsonLd";

const NAV: RouteKey[] = ["services", "rooms", "about", "faq", "contact"];

export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const d = t(locale);
  const alternates = buildAlternateMap();
  const items = NAV.map((k) => ({ href: href(k, locale), label: d.nav[k as keyof typeof d.nav] }));
  const phones = business.phones.map((p) => ({ display: p.display, href: telHref(p.e164) }));
  const a = business.address;
  const wa = whatsappHref();

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper">
        {d.skip}
      </a>
      <JsonLd data={siteSchema(locale)} />

      {/* Utility line — availability and both numbers, always visible on desktop */}
      <div className="hidden border-b border-line bg-stone-50 text-[0.85rem] text-ink-soft lg:block">
        <div className="wrap flex h-9 items-center justify-between gap-6">
          <p className="flex items-center gap-2">
            <IconClock className="size-4 text-bronze" />
            {d.open24}
            <span aria-hidden className="mx-2 text-line-strong">·</span>
            <span>
              {a.street}, {a.landmark[locale]}, {a.city}
            </span>
          </p>
          <p className="flex items-center gap-5">
            {phones.map((p) => (
              <a key={p.href} href={p.href} className="font-semibold text-ink hover:text-bronze">
                {p.display}
              </a>
            ))}
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-paper">
        <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-4 lg:h-[4.75rem]">
          <Link href={href("home", locale)} className="text-ink">
            <Logo />
          </Link>
          <div className="flex items-center gap-2 lg:gap-4 xl:gap-6">
            <HeaderNav
              items={items}
              homeHref={href("home", locale)}
              phones={phones}
              alternates={alternates}
              locale={locale}
              labels={{ menu: d.menu, close: d.closeMenu, nav: d.mainNav, call: d.call, open24: d.open24, langLabel: d.langLabel, switchTo: d.switchTo }}
            />
            <div className="hidden items-center gap-2 lg:flex">
              <a href={telHref(phonePrimary.e164)} className="btn btn-primary !min-h-11 !px-4 text-[0.95rem]">
                <IconPhone className="size-4" />
                {d.call}
              </a>
              {wa && (
                <a href={wa} target="_blank" rel="noopener" className="btn btn-secondary hidden !min-h-11 !px-4 text-[0.95rem] xl:inline-flex">
                  <IconWhatsApp className="size-4" />
                  {d.whatsapp}
                </a>
              )}
            </div>
            <LangSwitch alternates={alternates} locale={locale} label={d.langLabel} switchTo={d.switchTo} className="hidden lg:flex" />
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>

      <Footer locale={locale} />

      {/* Mobile action bar: call, WhatsApp, directions — always one tap away */}
      <nav
        aria-label={d.actionBar}
        className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper pb-[env(safe-area-inset-bottom)] lg:hidden"
      >
        <ul className={`grid h-[var(--action-h)] ${wa ? "grid-cols-3" : "grid-cols-2"} divide-x divide-line`}>
          <li>
            <a href={telHref(phonePrimary.e164)} className="flex h-full flex-col items-center justify-center gap-1 bg-ink text-paper">
              <IconPhone />
              <span className="text-[0.8rem] font-semibold">{d.callShort}</span>
            </a>
          </li>
          {wa && (
            <li>
              <a href={wa} className="flex h-full flex-col items-center justify-center gap-1 text-ink" target="_blank" rel="noopener">
                <IconWhatsApp />
                <span className="text-[0.8rem] font-semibold">{d.whatsapp}</span>
              </a>
            </li>
          )}
          <li>
            <a href={directionsHref} className="flex h-full flex-col items-center justify-center gap-1 text-ink" target="_blank" rel="noopener">
              <IconDirections />
              <span className="text-[0.8rem] font-semibold">{d.directions}</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

function Footer({ locale }: { locale: Locale }) {
  const d = t(locale);
  const a = business.address;
  const wa = whatsappHref();
  const year = new Date().getFullYear();
  const pages: RouteKey[] = ["services", "rooms", "about", "faq", "contact"];

  return (
    <footer className="bg-marble text-on-marble-muted">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <div className="text-on-marble [--paper:var(--marble)]">
            <Logo variant="stacked" className="items-start [&>svg]:self-start" />
          </div>
          <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-on-marble">{d.footerLine1}</p>
          <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed">{d.footerLine2}</p>
          <a href={telHref(phonePrimary.e164)} className="btn btn-on-dark mt-7">
            <IconPhone className="size-4" />
            {d.callNow}
          </a>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-on-marble">{d.footerContact}</h2>
          <ul className="mt-5 space-y-4 text-[0.95rem]">
            {business.phones.map((p) => (
              <li key={p.e164} className="flex gap-3">
                <IconPhone className="mt-0.5 size-5 shrink-0 text-gold" />
                <a href={telHref(p.e164)} className="font-semibold text-on-marble hover:underline">
                  {p.display}
                </a>
              </li>
            ))}
            {wa && (
              <li className="flex gap-3">
                <IconWhatsApp className="mt-0.5 size-5 shrink-0 text-gold" />
                <a href={wa} target="_blank" rel="noopener" className="text-on-marble hover:underline">
                  WhatsApp
                </a>
              </li>
            )}
            <li className="flex gap-3">
              <IconPin className="mt-0.5 size-5 shrink-0 text-gold" />
              <address className="not-italic">
                {a.street}, {a.landmark[locale]}
                <br />
                {a.city} {a.postalCode}, {a.country[locale]}
              </address>
            </li>
            {business.social.facebook && (
              <li className="flex gap-3">
                <IconFacebook className="mt-0.5 size-5 shrink-0 text-gold" />
                <a href={business.social.facebook} target="_blank" rel="noopener" className="text-on-marble hover:underline">
                  Facebook
                </a>
              </li>
            )}
            <li className="flex gap-3">
              <IconInstagram className="mt-0.5 size-5 shrink-0 text-gold" />
              <a href={business.social.instagram} target="_blank" rel="noopener" className="text-on-marble hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-on-marble">{d.footerNav}</h2>
          <ul className="mt-5 space-y-2.5 text-[0.95rem]">
            {pages.map((k) => (
              <li key={k}>
                <Link href={href(k, locale)} className="hover:text-on-marble hover:underline">
                  {d.nav[k as keyof typeof d.nav]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-6 text-[0.85rem] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. {d.rights}
          </p>
          <div className="flex items-center gap-6">
            <Link href={href("privacy", locale)} className="hover:text-on-marble hover:underline">
              {d.nav.privacy}
            </Link>
            <LangSwitch alternates={buildAlternateMap()} locale={locale} label={d.langLabel} switchTo={d.switchTo} className="[&_.text-ink]:text-on-marble [&_a]:text-on-marble-muted [&_a:hover]:text-on-marble" />
          </div>
        </div>
      </div>
    </footer>
  );
}
