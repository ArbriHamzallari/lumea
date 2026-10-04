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
    intro: `Kjo faqe përdoret nga ${business.name} për të dhënë informacion dhe për ta bërë kontaktin më të lehtë. Ne përpiqemi të mbledhim sa më pak të dhëna të jetë e nevojshme për funksionimin e faqes.`,
    sections: [
      { h: "Çfarë nuk mbledhim", p: "Faqja nuk përdor cookies për reklama ose statistika dhe nuk krijon llogari përdoruesi." },
      {
        h: "Formulari i kontaktit",
        p: "Formulari nuk e dërgon informacionin në një server për të ruajtur një kërkesë. Kur shtypni butonin, hapet WhatsApp me mesazhin e përgatitur dhe ju vendosni nëse do ta dërgoni. Pasi ta dërgoni, mesazhi trajtohet sipas kushteve të WhatsApp.",
      },
      {
        h: "Harta",
        p: "Harta e Google nuk ngarkohet automatikisht. Ajo shfaqet vetëm kur zgjidhni “Shfaq hartën”. Në atë moment Google mund të vendosë cookies ose të përpunojë të dhëna sipas politikave të veta.",
      },
      {
        h: "Lidhjet e jashtme",
        p: "Lidhjet për telefonin, WhatsApp, Google Maps dhe Instagram të çojnë në shërbime të palëve të treta, të cilat kanë politikat e tyre të privatësisë.",
      },
      { h: "Njoftime për të ndjerët", p: "Kjo faqe nuk publikon të dhëna personale për të ndjerët ose familjet e tyre." },
    ],
    contact: "Për çdo pyetje mbi privatësinë, na telefononi në",
  },
  en: {
    h1: "Privacy",
    intro: `This website is used by ${business.name} to provide information and make it easier to get in touch. We aim to collect as little data as necessary for the website to function.`,
    sections: [
      { h: "What we do not collect", p: "The website does not use advertising or analytics cookies and does not create user accounts." },
      {
        h: "The contact form",
        p: "The form does not send your information to a server to store a request. When you press the button, WhatsApp opens with the prepared message and you decide whether to send it. Once sent, the message is handled under WhatsApp’s terms.",
      },
      {
        h: "The map",
        p: "The Google map does not load automatically. It appears only when you choose “Show map”. At that point, Google may set cookies or process data according to its own policies.",
      },
      {
        h: "External links",
        p: "Links to the phone, WhatsApp, Google Maps and Instagram lead to third-party services that have their own privacy policies.",
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
