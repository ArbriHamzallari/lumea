import type { L } from "@/lib/i18n";
import { business } from "./business";

/**
 * Frequently asked questions. Every answer is limited to facts Luméa has
 * published. Luméa is not a legal authority, so answers never describe
 * official procedures in detail — they point people to call.
 */

export type Faq = { id: string; q: L; a: L; link?: { route: "rooms" | "contact" | "services"; label: L } };

const [p1, p2] = business.phones.map((p) => p.display);

export const faqs: Faq[] = [
  {
    id: "start",
    q: { sq: "Dikush i afërt sapo ka ndërruar jetë. Çfarë duhet të bëj së pari?", en: "Someone close to me has just died. What should I do first?" },
    a: {
      sq: `Telefononi Luméa në ${p1} ose ${p2}, në çdo orë. Nuk është e nevojshme t’i keni të gjitha informacionet gati. Gjatë telefonatës do t’ju shpjegojmë çfarë duhet të bëni më tej.`,
      en: `Call Luméa on ${p1} or ${p2} at any hour. You do not need to have everything ready. We will explain what to do next during the call.`,
    },
  },
  {
    id: "hours",
    q: { sq: "A jeni të hapur natën dhe në fundjavë?", en: "Are you open at night and at weekends?" },
    a: {
      sq: "Po. Luméa është e hapur 24 orë në ditë, 7 ditë në javë.",
      en: "Yes. Luméa is open 24 hours a day, 7 days a week.",
    },
  },
  {
    id: "location",
    q: { sq: "Ku ndodheni?", en: "Where are you?" },
    a: {
      sq: "Na gjeni në Rrugën Transballkanike, pranë ish Hipotekës, Vlorë 9401. Në faqen e kontaktit gjeni edhe hartën dhe udhëzimet.",
      en: "You can find us on Rruga Transballkanike, near ish Hipoteka, Vlorë 9401. The contact page also includes the map and directions.",
    },
    link: { route: "contact", label: { sq: "Harta dhe udhëzimet", en: "Map and directions" } },
  },
  {
    id: "rooms",
    q: { sq: "Sa salla pritjeje keni?", en: "How many reception rooms do you have?" },
    a: {
      sq: "Kemi katër salla: Beata, Amara, Celeste dhe Eden. Secila ka pamje dhe ngjyrë të ndryshme.",
      en: "We have four rooms: Beata, Amara, Celeste and Eden. Each has a different colour and appearance.",
    },
    link: { route: "rooms", label: { sq: "Shikoni sallat", en: "See the rooms" } },
  },
  {
    id: "morgue",
    q: { sq: "A keni ambiente morgu?", en: "Do you have mortuary facilities?" },
    a: {
      sq: "Po. Ambientet e morgut ndodhen në të njëjtën godinë me sallat e pritjes. I ndjeri ruhet dhe përgatitet aty deri në ceremoni.",
      en: "Yes. The mortuary facilities are in the same building as the reception rooms. The deceased is held and prepared there until the ceremony.",
    },
  },
  {
    id: "abroad",
    q: { sq: "A mund ta transportoni të ndjerin jashtë Shqipërisë ose nga jashtë në Shqipëri?", en: "Can you transport the deceased abroad or bring them to Albania from another country?" },
    a: {
      sq: "Po. Luméa kryen transport funeral brenda Shqipërisë dhe jashtë saj, përfshirë riatdhesimin. Na telefononi për të diskutuar hapat dhe dokumentet për rastin tuaj.",
      en: "Yes. Luméa provides funeral transport within Albania and abroad, including repatriation. Call us to discuss the steps and documents required for your situation.",
    },
  },
  {
    id: "documents",
    q: { sq: "A më ndihmoni me dokumentet?", en: "Can you help with the paperwork?" },
    a: {
      sq: "Po. Luméa ju ndihmon me procedurat në bashki dhe dokumentacionin e nevojshëm. Dokumentet zyrtare lëshohen nga institucionet përkatëse.",
      en: "Yes. Luméa helps with municipal procedures and the required paperwork. Official documents are issued by the relevant authorities.",
    },
  },
  {
    id: "coffins",
    q: { sq: "A ofroni arkivole?", en: "Do you provide coffins?" },
    a: {
      sq: "Po. Kemi arkivole në modele dhe ngjyra të ndryshme, së bashku me aksesorët përkatës.",
      en: "Yes. We offer coffins in different styles and finishes, together with related accessories.",
    },
    link: { route: "services", label: { sq: "Të gjitha shërbimet", en: "All services" } },
  },
  {
    id: "prices",
    q: { sq: "A mund t’i shoh çmimet në faqe?", en: "Can I see prices on the website?" },
    a: {
      sq: "Çmimet nuk publikohen në faqe. Për informacion mbi koston, na telefononi dhe do t’ju tregojmë çfarë përfshin shërbimi që ju nevojitet.",
      en: "Prices are not published on the website. For information about costs, call us and we will explain what is included in the service you need.",
    },
  },
];

export function getFaqs(ids: string[]) {
  return ids.map((id) => faqs.find((f) => f.id === id)!).filter(Boolean);
}
