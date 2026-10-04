import type { L } from "@/lib/i18n";
import { photos, type Photo } from "./images";

/**
 * LUMÉA SERVICES
 *
 * Source: Luméa's door signage ("Shërbime Funerali · Salla Pritjeje · Ambiente
 * Morgu · Transport Funerali (brenda & jashtë vendit)"), the Luméa Instagram
 * profile ("Arkivole & aksesorë kompletues · Përgatitje dhe kujdes · Transport
 * funeral kombëtar & ndërkombëtar · Organizimi i plotë i ceremonisë &
 * dokumentacionit · Shërbim profesional 24/7") and the owner's brief.
 *
 * Nothing here goes beyond those sources. No prices are listed because none
 * were supplied.
 */

export type ServiceId = "organizimi" | "pergatitja" | "transporti" | "dokumentacioni" | "arkivolet";

export type Service = {
  id: ServiceId;
  slug: L;
  title: L;
  /** One line used in lists. */
  summary: L;
  /** Optional different line for the /sherbimet listing (falls back to summary). */
  pageSummary?: L;
  /** Optional different "includes" list for the /sherbimet listing. */
  listIncludes?: L[];
  /** Opening paragraph on the detail page. */
  intro: L;
  includes: L[];
  /** Optional practical note — only statements we can stand behind. */
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
    title: { sq: "Organizimi i ceremonisë", en: "Funeral arrangements" },
    summary: { sq: "Ndihmë me organizimin e ceremonisë funerale, nga përgatitjet deri te pritja e ngushëllimeve.", en: "Help with arranging the funeral, from the preparations to the receiving of condolences." },
    intro: { sq: "Pas një humbjeje, shumë gjëra duhen rregulluar në pak kohë. Luméa ju ndihmon me organizimin e ceremonisë, sallën e pritjes, përgatitjen e të ndjerit, transportin dhe dokumentet, në mënyrë që familja të mos ketë nevojë t’i ndjekë të gjitha veçmas.", en: "After a loss, many things have to be arranged in a short time. Luméa helps with the funeral arrangements, reception room, preparation of the deceased, transport and paperwork, so the family does not have to handle everything separately." },
    includes: [
      { sq: "Koordinimi i ceremonisë dhe i pritjes së ngushëllimeve", en: "Coordinating the ceremony and receiving condolences" },
      { sq: "Një nga katër sallat e pritjes së Luméa", en: "One of Luméa’s four reception rooms" },
      { sq: "Përgatitja dhe kujdesi për të ndjerin", en: "Preparation and care of the deceased" },
      { sq: "Transporti funeral", en: "Funeral transport" },
      { sq: "Ndjekja e procedurave dhe e dokumenteve", en: "Handling procedures and paperwork" },
    ],
    photos: [photos.coffinFlowersBeata, photos.corridor],
    faqIds: ["hours", "start", "rooms", "prices"],
    related: ["dokumentacioni", "transporti", "arkivolet"],
    seoTitle: { sq: "Organizimi i ceremonisë funerale në Vlorë | Luméa", en: "Funeral arrangements in Vlorë | Luméa" },
    seoDescription: { sq: "Luméa ndihmon me organizimin e ceremonisë funerale në Vlorë, nga salla dhe përgatitja deri te transporti dhe dokumentet. Hapur 24 orë.", en: "Luméa helps arrange the funeral in Vlorë, including the room, preparation, transport and paperwork. Open 24 hours." },
  },
  {
    id: "pergatitja",
    slug: { sq: "ambientet-e-morgut", en: "mortuary-care" },
    title: { sq: "Ambiente morgu, përgatitje dhe kujdes", en: "Mortuary facilities, preparation and care" },
    summary: { sq: "Ambiente morgu në të njëjtën godinë me sallat e pritjes, për ruajtjen dhe përgatitjen e të ndjerit.", en: "Mortuary facilities in the same building as the reception rooms, for holding and preparing the deceased." },
    listIncludes: [
      { sq: "Ambientet e morgut në godinën e Luméa", en: "Mortuary facilities inside the Luméa building" },
      { sq: "Ruajtja e të ndjerit deri në ceremoni", en: "Holding the deceased until the ceremony" },
      { sq: "Përgatitja dhe kujdesi për të ndjerin", en: "Preparation and care of the deceased" },
    ],
    intro: { sq: "Ambientet e morgut të Luméa ndodhen në të njëjtën godinë me sallat e pritjes. Këtu i ndjeri ruhet dhe përgatitet deri në kohën e ceremonisë.", en: "Luméa’s mortuary facilities are in the same building as the reception rooms. The deceased is held and prepared here until the time of the ceremony." },
    includes: [
      { sq: "Ambiente morgu brenda godinës së Luméa", en: "Mortuary facilities inside the Luméa building" },
      { sq: "Ruajtja e të ndjerit deri në ceremoni", en: "Holding the deceased until the ceremony" },
      { sq: "Përgatitja dhe kujdesi për të ndjerin", en: "Preparation and care of the deceased" },
    ],
    note: { sq: "Për respekt ndaj të ndjerit dhe familjeve të tyre, në këtë faqe nuk publikojmë fotografi të ambienteve të morgut.", en: "Out of respect for the deceased and their families, we do not publish photographs of the mortuary areas on this website." },
    photos: [photos.corridor, photos.cleaning],
    faqIds: ["morgue", "hours", "start"],
    related: ["organizimi", "transporti"],
    seoTitle: { sq: "Ambiente morgu dhe kujdes për të ndjerin | Luméa", en: "Mortuary facilities and care | Luméa Vlorë" },
    seoDescription: { sq: "Ambiente morgu në të njëjtën godinë me sallat e pritjes. Ruajtje, përgatitje dhe kujdes për të ndjerin deri në ceremoninë funerale.", en: "Mortuary facilities in the same building as the reception rooms, with holding, preparation and care of the deceased until the funeral." },
  },
  {
    id: "transporti",
    slug: { sq: "transporti-funeral", en: "funeral-transport" },
    title: { sq: "Transport funeral në Shqipëri dhe jashtë vendit", en: "Funeral transport in Albania and abroad" },
    summary: { sq: "Transport funeral brenda vendit dhe jashtë tij, përfshirë riatdhesimin.", en: "Funeral transport within Albania and abroad, including repatriation." },
    intro: { sq: "Luméa kryen transport funeral brenda Shqipërisë dhe jashtë saj. Shërbimi përfshin edhe riatdhesimin, pra sjelljen e të ndjerit në Shqipëri nga jashtë ose transportimin e tij nga Shqipëria drejt një shteti tjetër.", en: "Luméa provides funeral transport within Albania and abroad. This includes repatriation, whether bringing the deceased to Albania from another country or transporting them from Albania to another country." },
    includes: [
      { sq: "Transport funeral brenda Shqipërisë", en: "Funeral transport within Albania" },
      { sq: "Transport funeral ndërkombëtar dhe riatdhesim", en: "International funeral transport and repatriation" },
      { sq: "Automjete funerale të Luméa", en: "Luméa funeral vehicles" },
    ],
    note: { sq: "Për transportin jashtë vendit, na telefononi për të mësuar hapat dhe dokumentet që duhen për rastin tuaj.", en: "For transport abroad, call us to discuss the steps and documents required for your situation." },
    photos: [photos.hearseWithCoffin, photos.twoHearses, photos.hearseNight, photos.fleet],
    faqIds: ["abroad", "hours", "start"],
    related: ["dokumentacioni", "organizimi"],
    seoTitle: { sq: "Transport funeral në Shqipëri dhe jashtë vendit | Luméa", en: "Funeral transport and repatriation | Luméa Vlorë" },
    seoDescription: { sq: "Transport funeral brenda Shqipërisë dhe jashtë saj, përfshirë riatdhesimin. Luméa Funeral Home në Vlorë është e hapur 24 orë.", en: "Funeral transport within Albania and abroad, including repatriation, from Luméa Funeral Home in Vlorë. Open 24 hours." },
  },
  {
    id: "dokumentacioni",
    slug: { sq: "procedurat-dhe-dokumentet", en: "paperwork-and-procedures" },
    title: { sq: "Procedurat dhe dokumentet", en: "Paperwork and procedures" },
    summary: { sq: "Ndihmë me procedurat në bashki dhe me dokumentacionin që lidhet me funeralin.", en: "Help with municipal procedures and the paperwork involved in a funeral." },
    pageSummary: { sq: "Ndihmë me procedurat në bashki dhe me dokumentacionin e nevojshëm.", en: "Help with municipal procedures and the required paperwork." },
    intro: { sq: "Pas një humbjeje, familja duhet të ndjekë disa procedura zyrtare në një kohë kur këto gjëra mund të jenë veçanërisht të vështira. Luméa ju ndihmon me procedurat në bashki dhe me dokumentacionin e nevojshëm.", en: "After a death, the family has to handle several official procedures at a time when even routine tasks can feel difficult. Luméa helps with municipal procedures and the required paperwork." },
    includes: [
      { sq: "Ndjekja e procedurave në bashki", en: "Handling municipal procedures" },
      { sq: "Përgatitja e dokumentacionit të nevojshëm", en: "Preparing the required documentation" },
    ],
    note: { sq: "Luméa nuk është institucion shtetëror. Dokumentet zyrtare lëshohen nga institucionet përkatëse; ne ju ndihmojmë me hapat dhe procedurat që duhen ndjekur.", en: "Luméa is not a government office. Official documents are issued by the relevant authorities; we help you understand and handle the steps involved." },
    photos: [photos.entranceDoor, photos.lobbyWindows],
    faqIds: ["documents", "abroad", "start"],
    related: ["organizimi", "transporti"],
    seoTitle: { sq: "Procedurat dhe dokumentet për funeralin | Luméa Vlorë", en: "Funeral paperwork and procedures | Luméa Vlorë" },
    seoDescription: { sq: "Luméa ju ndihmon me procedurat në bashki dhe dokumentacionin që lidhet me funeralin, në mënyrë që familja të mos përballet vetëm me këtë pjesë.", en: "Luméa helps with municipal procedures and the paperwork involved in a funeral, so the family does not have to handle this part alone." },
  },
  {
    id: "arkivolet",
    slug: { sq: "arkivole-dhe-aksesore", en: "coffins-and-accessories" },
    title: { sq: "Arkivole dhe aksesorë", en: "Coffins and accessories" },
    summary: { sq: "Arkivole në modele dhe ngjyra të ndryshme, së bashku me aksesorët përkatës.", en: "Coffins in different styles and finishes, together with related accessories." },
    intro: { sq: "Luméa ofron arkivole dhe aksesorët përkatës për ceremoninë. Fotografitë më poshtë tregojnë disa nga modelet që gjenden në ambientet tona.", en: "Luméa provides coffins and related funeral accessories. The photographs below show some of the styles available on our premises." },
    includes: [
      { sq: "Arkivole në modele dhe ngjyra të ndryshme", en: "Coffins in different styles and finishes" },
      { sq: "Aksesorë për ceremoninë", en: "Funeral accessories" },
    ],
    photos: [photos.coffinDisplay, photos.coffinFlowersBeata],
    faqIds: ["coffins", "prices"],
    related: ["organizimi", "transporti"],
    seoTitle: { sq: "Arkivole dhe aksesorë funeralë në Vlorë | Luméa", en: "Coffins and funeral accessories | Luméa Vlorë" },
    seoDescription: { sq: "Arkivole në modele dhe ngjyra të ndryshme, së bashku me aksesorët përkatës. Shikoni disa nga modelet në ambientet e Luméa në Vlorë.", en: "Coffins in different styles and finishes, together with related funeral accessories. See selected models at Luméa in Vlorë." },
  },
];

export function getServiceBySlug(slug: string, locale: "sq" | "en") {
  return services.find((s) => s.slug[locale] === slug);
}
export function getService(id: ServiceId) {
  return services.find((s) => s.id === id)!;
}
