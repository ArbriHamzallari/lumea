import type { L } from "@/lib/i18n";
import { business } from "./business";

/**
 * Frequently asked questions. Answers stay within facts Luméa has published.
 * Luméa is not a legal authority, so answers never describe official
 * procedures in detail — they point people to call.
 */

export type Faq = { id: string; q: L; a: L; link?: { route: "rooms" | "contact" | "services"; label: L } };

const [p1, p2] = business.phones.map((p) => p.display);

export const faqs: Faq[] = [
  {
    id: "contact",
    q: { sq: "Si mund të kontaktoj Luméa?", en: "How can I contact Luméa?" },
    a: {
      sq: `Mund të na telefononi në ${p1} ose ${p2}. Mund të na kontaktoni edhe në WhatsApp.`,
      en: `You can call us on ${p1} or ${p2}. You can also contact us on WhatsApp.`,
    },
  },
  {
    id: "hours",
    q: { sq: "A jeni të hapur 24 orë?", en: "Are you open 24 hours?" },
    a: {
      sq: "Po. Luméa është e hapur 24 orë në ditë, 7 ditë në javë.",
      en: "Yes. Luméa is open 24 hours a day, 7 days a week.",
    },
  },
  {
    id: "location",
    q: { sq: "Ku ndodhet Luméa Funeral Home?", en: "Where is Luméa Funeral Home located?" },
    a: {
      sq: "Luméa Funeral Home ndodhet në Rrugën Transballkanike, pranë ish-Hipotekës, Vlorë 9401.",
      en: "On Rruga Transballkanike, near the former Hipoteka building, Vlorë 9401.",
    },
    link: { route: "contact", label: { sq: "Harta dhe udhëzimet", en: "Map and directions" } },
  },
  {
    id: "rooms",
    q: { sq: "Sa salla pritjeje keni?", en: "How many reception rooms do you have?" },
    a: {
      sq: "Luméa ka katër salla pritjeje: Beata, Amara, Celeste dhe Eden.",
      en: "Luméa has four reception rooms: Beata, Amara, Celeste and Eden.",
    },
  },
  {
    id: "care",
    q: { sq: "A keni ambiente për kujdesin ndaj të ndjerit?", en: "Do you have facilities for the care of the deceased?" },
    a: {
      sq: "Po. Ambientet e dedikuara për ruajtjen, përgatitjen dhe kujdesin ndaj të ndjerit ndodhen në të njëjtën godinë me sallat e pritjes.",
      en: "Yes. Dedicated facilities for holding, preparing and caring for the deceased are in the same building as the reception rooms.",
    },
  },
  {
    id: "abroad",
    q: { sq: "A ofroni transport funeral jashtë Shqipërisë?", en: "Do you provide funeral transport outside Albania?" },
    a: {
      sq: "Po. Luméa ofron transport funeral brenda Shqipërisë dhe jashtë vendit, përfshirë riatdhesimin. Për rastet ndërkombëtare, kërkesat dhe dokumentacioni mund të ndryshojnë sipas shtetit. Na kontaktoni për informacion mbi rastin konkret.",
      en: "Yes. Luméa provides funeral transport within Albania and abroad, including repatriation. For international cases, requirements and paperwork can differ from country to country. Contact us for information about your case.",
    },
  },
  {
    id: "documents",
    q: { sq: "A ndihmoni me dokumentacionin?", en: "Do you help with the paperwork?" },
    a: {
      sq: "Po. Ju ndihmojmë me procedurat dhe dokumentacionin që lidhen me shërbimin funeral dhe ju udhëzojmë për hapat përkatës.",
      en: "Yes. We help with the procedures and paperwork involved in the funeral and guide you through the steps.",
    },
  },
  {
    id: "coffins",
    q: { sq: "A ofroni arkivole?", en: "Do you provide coffins?" },
    a: {
      sq: "Po. Ofrojmë arkivole në modele dhe çmime të ndryshme, si dhe aksesorë për ceremoninë.",
      en: "Yes. We offer coffins in a range of styles and prices, as well as accessories for the ceremony.",
    },
  },
  {
    id: "visit",
    q: { sq: "A mund të shoh ambientet para se të vij?", en: "Can I see the facilities before I come?" },
    a: {
      sq: "Po. Në faqen “Ambientet” mund të shikoni fotografitë e sallave, hollit, godinës dhe automjeteve.",
      en: "Yes. On the “Facilities” page you can see photographs of the rooms, the lobby, the building and the vehicles.",
    },
    link: { route: "rooms", label: { sq: "Shikoni ambientet", en: "See the facilities" } },
  },
  {
    id: "prices",
    q: { sq: "A i publikoni çmimet në website?", en: "Do you publish prices on the website?" },
    a: {
      sq: "Jo. Çmimi varet nga shërbimet që kërkoni dhe nga rrethanat konkrete. Ju lutemi, na kontaktoni për të diskutuar nevojat tuaja dhe për të marrë informacion mbi kostot.",
      en: "No. The price depends on the services you need and the specific circumstances. Please contact us to discuss your needs and to get information about costs.",
    },
  },
];

export function getFaqs(ids: string[]) {
  return ids.map((id) => faqs.find((f) => f.id === id)!).filter(Boolean);
}
