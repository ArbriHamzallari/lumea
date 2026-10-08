import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { serif, sans } from "@/lib/fonts";
import { SiteShell } from "@/components/SiteShell";
import { business, telHref } from "@/content/business";
import { t } from "@/content/dictionary";

// Next.js adds the noindex robots tag to 404 responses itself.
export const metadata: Metadata = {
  title: "Faqja nuk u gjet | Luméa Funeral Home Vlorë",
};

export default function GlobalNotFound() {
  const d = t("sq");
  const e = t("en");
  return (
    <html lang="sq-AL" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SiteShell locale="sq">
          <section className="wrap py-24 md:py-32">
            <p className="eyebrow">404</p>
            <h1 className="display mt-4 max-w-2xl">{d.notFound.title}</h1>
            <p className="lede mt-6 max-w-xl">{d.notFound.body}</p>
            <p lang="en" className="mt-4 max-w-xl text-muted">
              {e.notFound.title}. {e.notFound.body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={telHref(business.phones[0].e164)} className="btn btn-primary">
                {business.phones[0].display}
              </a>
              <Link href="/" className="btn btn-secondary">
                {d.notFound.back}
              </Link>
              <Link href="/en" lang="en" className="btn btn-secondary">
                {e.notFound.back}
              </Link>
            </div>
          </section>
        </SiteShell>
      </body>
    </html>
  );
}
