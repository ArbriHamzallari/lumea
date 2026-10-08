import type { L } from "@/lib/i18n";
import { photos, type Photo } from "./images";

/**
 * LUMÉA SERVICES
 *
 * Source: Luméa's door signage, the Luméa Instagram profile and the owner's
 * copy. Nothing here goes beyond those sources. No prices are listed.
 *
 * Copy style (owner's rules): short, plain and direct. No "01/02" numbering,
 * no repeated phrases across pages, no emotional or marketing language.
 */

export type ServiceId = "organizimi" | "kujdesi" | "transporti" | "dokumentacioni" | "arkivolet";

export type Service = {
  id: ServiceId;
  slug: L;
  /** Short name — home page list. */
  shortTitle: L;
  /** Full name — services page and the service's own page (H1). */
  title: L;
  /** One line — home page list. */
  summary: L;
  /** One to three short paragraphs — services page and the service page intro. */
  body: L[];
  /** Call to action on the services page. */
  cta: "contact" | "talk";
  includes: L[];
  /** Optional practical note on the service page. */
  note?: L;
  photos: Photo[];
  faqIds: string[];
  related: ServiceId[];
  seoTitle: L;
  seoDescription: L;
};

export const services: Service[] = [
  {
    id: "organizimi",
    slug: { sq: "organizimi-i-ceremonise", en: "funeral-arrangements" },
    shortTitle: { sq: "Organizimi i ceremonisë", en: "Funeral arrangements" },
    title: { sq: "Organizimi i ceremonisë", en: "Funeral arrangements" },
    summary: {
      sq: "Organizimi dhe koordinimi i ceremonisë funerale dhe pritjes së ngushëllimeve.",
      en: "Organising and coordinating the funeral ceremony and the receiving of condolences.",
    },
    body: [
      {
        sq: "Luméa ju ndihmon me organizimin dhe koordinimin e ceremonisë funerale dhe pritjes së ngushëllimeve.",
        en: "Luméa helps you organise and coordinate the funeral ceremony and the receiving of condolences.",
      },
      {
        sq: "Mund të na kontaktoni që në fillim të procesit për të diskutuar hapat dhe shërbimet që ju nevojiten.",
        en: "You can contact us from the very start to talk through the steps and the services you need.",
      },
    ],
    cta: "contact",
    includes: [
      { sq: "Organizimi dhe koordinimi i ceremonisë", en: "Organising and coordinating the ceremony" },
      { sq: "Pritja e ngushëllimeve në një nga katër sallat", en: "Receiving condolences in one of the four reception rooms" },
      { sq: "Kujdesi për të ndjerin", en: "Care of the deceased" },
      { sq: "Transporti funeral", en: "Funeral transport" },
      { sq: "Procedurat dhe dokumentacioni", en: "Paperwork and procedures" },
    ],
    photos: [photos.coffinFlowersBeata, photos.corridor],
    faqIds: ["rooms", "hours", "prices"],
    related: ["kujdesi", "transporti", "dokumentacioni"],
    seoTitle: {
      sq: "Organizimi i Ceremonisë Funerale | Luméa Funeral Home Vlorë",
      en: "Funeral Arrangements in Vlorë | Luméa Funeral Home",
    },
    seoDescription: {
      sq: "Organizimi dhe koordinimi i ceremonisë funerale dhe pritjes së ngushëllimeve në Vlorë. Luméa Funeral Home, e hapur 24/7.",
      en: "Organising and coordinating the funeral ceremony and the receiving of condolences in Vlorë. Luméa Funeral Home, open 24/7.",
    },
  },
  {
    id: "kujdesi",
    slug: { sq: "kujdesi-per-te-ndjerin", en: "care-of-the-deceased" },
    shortTitle: { sq: "Kujdesi për të ndjerin", en: "Care of the deceased" },
    title: { sq: "Kujdesi për të ndjerin", en: "Care of the deceased" },
    summary: {
      sq: "Ambiente të dedikuara për ruajtjen, përgatitjen dhe kujdesin për të ndjerin.",
      en: "Dedicated facilities for holding, preparing and caring for the deceased.",
    },
    body: [
      {
        sq: "Në godinën e Luméa ndodhen ambiente të dedikuara për ruajtjen, përgatitjen dhe kujdesin për të ndjerin deri në ceremoninë funerale.",
        en: "The Luméa building has dedicated facilities for holding, preparing and caring for the deceased until the funeral.",
      },
    ],
    cta: "contact",
    includes: [
      { sq: "Ambiente të dedikuara brenda godinës së Luméa", en: "Dedicated facilities inside the Luméa building" },
      { sq: "Ruajtja e të ndjerit deri në ceremoni", en: "Holding the deceased until the ceremony" },
      { sq: "Përgatitja dhe kujdesi për të ndjerin", en: "Preparation and care of the deceased" },
    ],
    note: {
      sq: "Nga respekti për të ndjerët dhe familjet e tyre, nuk publikojmë fotografi të këtyre ambienteve.",
      en: "Out of respect for the deceased and their families, we do not publish photographs of these facilities.",
    },
    photos: [photos.corridor, photos.cleaning],
    faqIds: ["care", "hours"],
    related: ["organizimi", "transporti"],
    seoTitle: {
      sq: "Kujdesi për të Ndjerin | Luméa Funeral Home Vlorë",
      en: "Care of the Deceased | Luméa Funeral Home Vlorë",
    },
    seoDescription: {
      sq: "Ambiente të dedikuara për ruajtjen, përgatitjen dhe kujdesin për të ndjerin, në të njëjtën godinë me sallat e pritjes. Luméa, Vlorë.",
      en: "Dedicated facilities for holding, preparing and caring for the deceased, in the same building as the reception rooms. Luméa, Vlorë.",
    },
  },
  {
    id: "transporti",
    slug: { sq: "transporti-funeral", en: "funeral-transport" },
    shortTitle: { sq: "Transport funeral", en: "Funeral transport" },
    title: { sq: "Transport funeral në Shqipëri dhe jashtë vendit", en: "Funeral transport in Albania and abroad" },
    summary: {
      sq: "Transport brenda Shqipërisë dhe jashtë vendit, përfshirë shërbimet e riatdhesimit.",
      en: "Transport within Albania and abroad, including repatriation.",
    },
    body: [
      {
        sq: "Luméa ofron transport funeral brenda Shqipërisë dhe transport ndërkombëtar.",
        en: "Luméa provides funeral transport within Albania and internationally.",
      },
      {
        sq: "Për rastet nga jashtë Shqipërisë, ofrojmë edhe asistencë për riatdhesimin dhe procedurat përkatëse.",
        en: "For cases from outside Albania, we also help with repatriation and the related procedures.",
      },
      {
        sq: "Çdo rast mund të ketë kërkesa të ndryshme dokumentacioni dhe transporti. Për informacion të saktë, na kontaktoni.",
        en: "Each case can have different paperwork and transport requirements. For accurate information, contact us.",
      },
    ],
    cta: "talk",
    includes: [
      { sq: "Transport funeral brenda Shqipërisë", en: "Funeral transport within Albania" },
      { sq: "Transport funeral ndërkombëtar", en: "International funeral transport" },
      { sq: "Asistencë për riatdhesimin dhe procedurat përkatëse", en: "Help with repatriation and the related procedures" },
    ],
    photos: [photos.hearseWithCoffin, photos.twoHearses, photos.hearseNight, photos.fleet],
    faqIds: ["abroad", "documents"],
    related: ["dokumentacioni", "organizimi"],
    seoTitle: {
      sq: "Transport Funeral në Shqipëri dhe Jashtë Vendit | Luméa",
      en: "Funeral Transport in Albania and Abroad | Luméa",
    },
    seoDescription: {
      sq: "Transport funeral brenda Shqipërisë dhe jashtë vendit, përfshirë riatdhesimin. Luméa Funeral Home, Vlorë, e disponueshme 24/7.",
      en: "Funeral transport within Albania and abroad, including repatriation. Luméa Funeral Home, Vlorë, available 24/7.",
    },
  },
  {
    id: "dokumentacioni",
    slug: { sq: "procedurat-dhe-dokumentacioni", en: "paperwork-and-procedures" },
    shortTitle: { sq: "Dokumentacioni", en: "Paperwork" },
    title: { sq: "Procedurat dhe dokumentacioni", en: "Paperwork and procedures" },
    summary: {
      sq: "Ndihmë me procedurat dhe dokumentacionin e nevojshëm për organizimin e funeralit.",
      en: "Help with the procedures and paperwork needed to arrange a funeral.",
    },
    body: [
      {
        sq: "Ju ndihmojmë me procedurat dhe dokumentacionin që lidhen me organizimin e shërbimit funeral.",
        en: "We help with the procedures and paperwork involved in arranging the funeral.",
      },
      {
        sq: "Në rastet kur kërkohet dokumentacion nga institucione të ndryshme, ju udhëzojmë për hapat që duhen ndjekur.",
        en: "Where documents are needed from different institutions, we guide you through the steps to follow.",
      },
    ],
    cta: "contact",
    includes: [
      { sq: "Procedurat që lidhen me shërbimin funeral", en: "The procedures involved in the funeral" },
      { sq: "Dokumentacioni i nevojshëm", en: "The required paperwork" },
      { sq: "Udhëzime për hapat që duhen ndjekur", en: "Guidance on the steps to follow" },
    ],
    note: {
      sq: "Luméa nuk është institucion shtetëror. Dokumentet zyrtare lëshohen nga institucionet përkatëse.",
      en: "Luméa is not a government office. Official documents are issued by the relevant institutions.",
    },
    photos: [photos.entranceDoor, photos.lobbyWindows],
    faqIds: ["documents", "abroad"],
    related: ["organizimi", "transporti"],
    seoTitle: {
      sq: "Dokumentacion dhe Procedura Funerale | Luméa",
      en: "Funeral Paperwork and Procedures | Luméa",
    },
    seoDescription: {
      sq: "Ndihmë me procedurat dhe dokumentacionin që lidhen me shërbimin funeral në Vlorë. Luméa Funeral Home, e disponueshme 24/7.",
      en: "Help with the procedures and paperwork involved in a funeral in Vlorë. Luméa Funeral Home, available 24/7.",
    },
  },
  {
    id: "arkivolet",
    slug: { sq: "arkivole-dhe-aksesore", en: "coffins-and-accessories" },
    shortTitle: { sq: "Arkivole dhe aksesorë", en: "Coffins and accessories" },
    title: { sq: "Arkivole dhe aksesorë", en: "Coffins and accessories" },
    summary: {
      sq: "Larmishmëri arkivolesh të cilësisë italiane, me çmime të ndryshme dhe të arsyeshme.",
      en: "A wide range of Italian-quality coffins, at different and reasonable prices.",
    },
    body: [
      {
        sq: "Luméa ofron arkivole në modele të ndryshme, së bashku me aksesorët e nevojshëm për ceremoninë.",
        en: "Luméa offers coffins in a range of styles, together with the accessories needed for the ceremony.",
      },
      {
        sq: "Kemi larmishmëri arkivolesh të cilësisë italiane, me çmime të ndryshme dhe të arsyeshme.",
        en: "We have a wide range of Italian-quality coffins, at different and reasonable prices.",
      },
      {
        sq: "Për modelet dhe informacionin mbi çmimet, na kontaktoni.",
        en: "For the available models and prices, contact us.",
      },
    ],
    cta: "contact",
    includes: [
      { sq: "Arkivole të cilësisë italiane, në modele të ndryshme", en: "Italian-quality coffins in a range of styles" },
      { sq: "Çmime të ndryshme dhe të arsyeshme", en: "Different and reasonable prices" },
      { sq: "Aksesorë për ceremoninë", en: "Accessories for the ceremony" },
    ],
    photos: [photos.coffinDisplay, photos.coffinFlowersBeata],
    faqIds: ["coffins", "prices"],
    related: ["organizimi", "transporti"],
    seoTitle: {
      sq: "Arkivole dhe Aksesorë | Luméa Funeral Home Vlorë",
      en: "Coffins and Accessories | Luméa Funeral Home Vlorë",
    },
    seoDescription: {
      sq: "Arkivole të cilësisë italiane në modele të ndryshme, me çmime të ndryshme dhe të arsyeshme, dhe aksesorë për ceremoninë. Luméa, Vlorë.",
      en: "Italian-quality coffins in a range of styles, at different and reasonable prices, with accessories for the ceremony. Luméa, Vlorë.",
    },
  },
];

export function getServiceBySlug(slug: string, locale: "sq" | "en") {
  return services.find((s) => s.slug[locale] === slug);
}
export function getService(id: ServiceId) {
  return services.find((s) => s.id === id)!;
}
