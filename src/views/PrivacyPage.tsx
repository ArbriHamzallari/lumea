import { business } from "@/content/business";
import { t } from "@/content/dictionary";
import type { Locale } from "@/lib/i18n";
import { Breadcrumbs } from "@/components/Blocks";

/**
 * Describes exactly what this website does technically. If analytics,
 * cookies or a server-side form are ever added, update this page first.
 */
const content = {
  sq: {
    h1: "Privatësia",
    intro: `Kjo faqe përdoret nga ${business.name} për t’ju dhënë informacion dhe për ta bërë më të lehtë kontaktin me ne. Faqja nuk ka formularë dhe nuk ju kërkon të dhëna personale.`,
    sections: [
      { h: "Çfarë nuk mbledhim", p: "Faqja nuk përdor cookies për reklama ose statistika dhe nuk krijon llogari përdoruesi." },
      {
        h: "WhatsApp",
        p: "Butonat e WhatsApp hapin aplikacionin dhe ju vendosni nëse do të dërgoni mesazh. Faqja nuk i ruan mesazhet; pasi ta dërgoni, mesazhi trajtohet sipas kushteve të WhatsApp.",
      },
      {
        h: "Harta",
        p: "Harta e Google nuk ngarkohet automatikisht. Ajo shfaqet vetëm kur zgjidhni “Shfaqni hartën”. Në atë moment Google mund të vendosë cookies ose të përpunojë të dhëna sipas politikave të veta.",
      },
      {
        h: "Lidhjet e jashtme",
        p: "Lidhjet e jashtme, përfshirë WhatsApp, Google Maps, Facebook dhe Instagram, ju drejtojnë te shërbime të palëve të treta, të cilat kanë politikat e tyre të privatësisë.",
      },
      { h: "Njoftime për të ndjerët", p: "Kjo faqe nuk publikon të dhëna personale për të ndjerët ose familjet e tyre." },
    ],
    contact: "Për çdo pyetje mbi privatësinë, na telefononi në",
  },
  en: {
    h1: "Privacy",
    intro: `This website is used by ${business.name} to give you information and make it easier to contact us. The website has no forms and does not ask you for personal data.`,
    sections: [
      { h: "What we do not collect", p: "The website does not use advertising or analytics cookies and does not create user accounts." },
      {
        h: "WhatsApp",
        p: "The WhatsApp buttons open the app and you decide whether to send a message. The website does not store messages; once sent, a message is handled under WhatsApp’s terms.",
      },
      {
        h: "The map",
        p: "The Google map does not load automatically. It appears only when you choose “Show map”. At that point, Google may set cookies or process data according to its own policies.",
      },
      {
        h: "External links",
        p: "External links, including WhatsApp, Google Maps, Facebook and Instagram, take you to third-party services that have their own privacy policies.",
      },
      { h: "Notices about the deceased", p: "This website does not publish personal information about the deceased or their families." },
    ],
    contact: "For any questions about privacy, please call",
  },
};

export function PrivacyPage({ locale }: { locale: Locale }) {
  const d = t(locale);
  const c = content[locale];
  return (
    <article className="wrap pb-24 pt-8 md:pt-12">
      <Breadcrumbs locale={locale} items={[{ name: d.nav.privacy }]} />
      <h1 className="display mt-10">{c.h1}</h1>
      <p className="lede mt-6 max-w-2xl">{c.intro}</p>
      <div className="mt-12 max-w-2xl divide-y divide-line border-y border-line">
        {c.sections.map((s) => (
          <section key={s.h} className="py-7">
            <h2 className="h3">{s.h}</h2>
            <p className="mt-3">{s.p}</p>
          </section>
        ))}
      </div>
      <p className="mt-8 max-w-2xl">
        {c.contact}{" "}
        <a href={`tel:${business.phones[0].e164}`} className="link font-semibold">
          {business.phones[0].display}
        </a>
        .
      </p>
    </article>
  );
}
