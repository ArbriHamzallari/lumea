import Link from "next/link";
import { t } from "@/content/dictionary";
import { faqs } from "@/content/faqs";
import { href, type L, type Locale } from "@/lib/i18n";
import { Breadcrumbs, ContactStrip } from "@/components/Blocks";

const copy = {
  lede: {
    sq: "Këtu gjeni përgjigje për pyetjet që na bëhen më shpesh. Nëse nuk gjeni informacionin që kërkoni, na telefononi në çdo orë.",
    en: "Here you will find answers to the questions we are asked most often. If you cannot find what you need, call us at any hour.",
  },
  jump: { sq: "Pyetjet", en: "Questions" },
} satisfies Record<string, L>;

/**
 * All answers are shown open: someone under stress should not have to click
 * to read. FAQPage structured data is intentionally not used — Google limits
 * those rich results to government and health sites.
 */
export function FaqPage({ locale }: { locale: Locale }) {
  const d = t(locale);
  return (
    <>
      <header className="wrap pb-12 pt-8 md:pb-16 md:pt-12">
        <Breadcrumbs locale={locale} items={[{ name: d.nav.faqLong }]} />
        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <h1 className="display lg:col-span-6">{d.nav.faqLong}</h1>
          <p className="lede lg:col-span-6 lg:pt-3">{copy.lede[locale]}</p>
        </div>
      </header>

      <div className="wrap grid gap-12 border-t border-line pb-20 pt-12 lg:grid-cols-12 lg:gap-14 lg:pt-16">
        <nav aria-label={copy.jump[locale]} className="hidden lg:col-span-4 lg:block">
          <ol className="sticky top-32 space-y-2.5 text-[0.98rem]">
            {faqs.map((f) => (
              <li key={f.id}>
                <a href={`#${f.id}`} className="text-ink-soft hover:text-ink hover:underline">
                  {f.q[locale]}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="divide-y divide-line lg:col-span-8">
          {faqs.map((f) => (
            <section key={f.id} id={f.id} aria-labelledby={`${f.id}-q`} className="scroll-mt-28 py-8 first:pt-0">
              <h2 id={`${f.id}-q`} className="h3">
                {f.q[locale]}
              </h2>
              <p className="mt-3 max-w-2xl text-[1.06rem] leading-[1.75]">{f.a[locale]}</p>
              {f.link && (
                <Link href={href(f.link.route, locale)} className="link mt-3 inline-block">
                  {f.link.label[locale]}
                </Link>
              )}
            </section>
          ))}
        </div>
      </div>

      <ContactStrip locale={locale} />
    </>
  );
}
