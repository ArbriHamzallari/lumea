"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IconClose, IconMenu, IconPhone } from "./Icons";

type Item = { href: string; label: string };
type Props = {
  items: Item[];
  homeHref: string;
  labels: { menu: string; close: string; nav: string; call: string; open24: string; langLabel: string; switchTo: string };
  phones: { display: string; href: string }[];
  alternates: Record<string, string>;
  locale: "sq" | "en";
};

function isActive(pathname: string, href: string, homeHref: string) {
  if (href === homeHref) return pathname === homeHref;
  return pathname === href || pathname.startsWith(href + "/");
}

export function LangSwitch({ alternates, locale, label, switchTo, className = "" }: { alternates: Record<string, string>; locale: "sq" | "en"; label: string; switchTo: string; className?: string }) {
  const pathname = usePathname();
  const other = alternates[pathname] ?? (locale === "sq" ? "/en" : "/");
  return (
    <div className={`flex items-center text-sm font-semibold tracking-wide ${className}`} aria-label={label} role="group">
      {locale === "sq" ? (
        <>
          <span aria-current="true" className="px-1.5 py-2 text-ink">
            SQ
          </span>
          <span aria-hidden className="text-line-strong">/</span>
          <a href={other} hrefLang="en" lang="en" className="px-1.5 py-2 text-muted underline-offset-4 hover:text-ink hover:underline" title={switchTo}>
            EN
          </a>
        </>
      ) : (
        <>
          <a href={other} hrefLang="sq" lang="sq" className="px-1.5 py-2 text-muted underline-offset-4 hover:text-ink hover:underline" title={switchTo}>
            SQ
          </a>
          <span aria-hidden className="text-line-strong">/</span>
          <span aria-current="true" className="px-1.5 py-2 text-ink">
            EN
          </span>
        </>
      )}
    </div>
  );
}

/** Compact language link for the mobile header: always visible, 44 px target (audit LUM-02). */
function MobileLangLink({ alternates, locale, switchTo }: { alternates: Record<string, string>; locale: "sq" | "en"; switchTo: string }) {
  const pathname = usePathname();
  const target = locale === "sq" ? "en" : "sq";
  const other = alternates[pathname] ?? (locale === "sq" ? "/en" : "/");
  return (
    <a
      href={other}
      hrefLang={target}
      lang={target}
      className="inline-flex h-11 min-w-11 items-center justify-center px-2 text-sm font-semibold tracking-wide text-ink-soft underline-offset-4 hover:text-ink hover:underline lg:hidden"
    >
      {target.toUpperCase()}
      <span className="sr-only"> — {switchTo}</span>
    </a>
  );
}

export function HeaderNav({ items, homeHref, labels, phones, alternates, locale }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a,button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>("a,button");
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Desktop */}
      <nav aria-label={labels.nav} className="hidden lg:block">
        <ul className="flex items-center gap-0.5 xl:gap-1">
          {items.map((it) => {
            const active = isActive(pathname, it.href, homeHref);
            return (
              <li key={it.href}>
                <Link
                  href={it.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative block whitespace-nowrap px-2 py-2 text-[0.92rem] transition-colors xl:px-3 xl:text-[0.95rem] ${active ? "text-ink" : "text-ink-soft hover:text-ink"}`}
                >
                  {it.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-2 -bottom-px h-px xl:inset-x-3 bg-room-accent transition-opacity ${active ? "opacity-100" : "opacity-0"}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <MobileLangLink alternates={alternates} locale={locale} switchTo={labels.switchTo} />

      {/* Mobile trigger */}
      <button
        ref={buttonRef}
        type="button"
        className="-mr-2 inline-flex size-12 items-center justify-center text-ink lg:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <IconClose /> : <IconMenu />}
        <span className="sr-only">{open ? labels.close : labels.menu}</span>
      </button>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 top-[var(--header-h)] bottom-[calc(var(--action-h)+env(safe-area-inset-bottom))] z-40 overflow-y-auto overscroll-contain border-t border-line bg-paper lg:hidden"
      >
        <nav aria-label={labels.nav} className="wrap pb-10 pt-6">
          <ul className="divide-y divide-line border-y border-line">
            {items.map((it) => {
              const active = isActive(pathname, it.href, homeHref);
              return (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 font-serif text-2xl text-ink"
                  >
                    {it.label}
                    {active && <span aria-hidden className="size-1.5 rounded-full bg-room-accent" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 space-y-3">
            <p className="eyebrow">{labels.open24}</p>
            {phones.map((p) => (
              <a key={p.href} href={p.href} className="flex items-center gap-3 py-1 text-xl font-semibold text-ink">
                <IconPhone className="size-5 text-bronze" />
                {p.display}
              </a>
            ))}
          </div>
          <LangSwitch alternates={alternates} locale={locale} label={labels.langLabel} switchTo={labels.switchTo} className="mt-8 -ml-1.5 text-base" />
        </nav>
      </div>
    </>
  );
}
