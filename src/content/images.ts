import manifest from "./image-manifest.json";
import type { L } from "@/lib/i18n";

/**
 * Photo registry. Dimensions and blur placeholders come from
 * image-manifest.json (generated when the photos were processed), so layout
 * never shifts while images load.
 *
 * `source` records where each photograph came from, so usage rights can be
 * checked: "owner" = supplied by Luméa for this website,
 * "google-profile" = published on Luméa's Google Business Profile.
 */

type ManifestEntry = { w: number; h: number; blur: string };
const m = manifest as Record<string, ManifestEntry>;

export type Photo = {
  src: string;
  width: number;
  height: number;
  blur: string;
  alt: L;
  source: "owner" | "google-profile";
};

export function photo(src: string, alt: L, source: Photo["source"] = "owner"): Photo {
  const e = m[src];
  if (!e) throw new Error(`Image missing from manifest: ${src}`);
  return { src, width: e.w, height: e.h, blur: e.blur, alt, source };
}

/* ------------------------------------------------------------------ */
/* Building, entrance, interior spaces                                 */
/* ------------------------------------------------------------------ */

export const photos = {
  facadeDusk: photo(
    "/images/site/fasada-ne-mbremje.jpg",
    {
      sq: "Fasada e Luméa Funeral Home në Vlorë në mbrëmje, me hyrjen dhe ndriçimin e ndezur.",
      en: "The front of Luméa Funeral Home in Vlorë in the evening, with the entrance and lights illuminated.",
    },
    "google-profile",
  ),
  facadeDuskVehicles: photo(
    "/images/site/fasada-dhe-automjetet-ne-muzg.jpg",
    {
      sq: "Godina e Luméa në muzg, me dy automjete funerale të parkuara përpara.",
      en: "The Luméa building at dusk with two funeral vehicles parked in front.",
    },
    "google-profile",
  ),
  entranceNight: photo(
    "/images/site/hyrja-e-ndricuar-naten.jpg",
    {
      sq: "Hyrja e Luméa natën, me tabelën e ndriçuar mbi derë.",
      en: "The Luméa entrance at night, with the illuminated sign above the door.",
    },
    "google-profile",
  ),
  facadeDay: photo(
    "/images/site/fasada-gjate-dites.jpg",
    {
      sq: "Pamje anësore e godinës së Luméa gjatë ditës.",
      en: "Side view of the Luméa building during the day.",
    },
    "google-profile",
  ),
  fleet: photo(
    "/images/site/automjetet-perpara-fasades.jpg",
    {
      sq: "Tre automjete me shenjën e Luméa të parkuara përpara godinës.",
      en: "Three Luméa-branded vehicles parked in front of the building.",
    },
    "google-profile",
  ),
  facadeHearse: photo(
    "/images/site/fasada-me-automjetin-funeral.jpg",
    {
      sq: "Tabela LUMÉA Funeral Home mbi hyrje dhe automjeti funeral përpara.",
      en: "The LUMÉA Funeral Home sign above the entrance with a funeral vehicle in front.",
    },
  ),
  hearseCourtyard: photo(
    "/images/site/automjeti-funeral-ne-oborr.jpg",
    {
      sq: "Automjeti funeral i Luméa në oborr pranë godinës.",
      en: "Luméa’s funeral vehicle in the courtyard beside the building.",
    },
  ),
  entranceDoor: photo(
    "/images/site/dera-e-hyrjes.jpg",
    {
      sq: "Dera prej xhami e hyrjes me informacionet e shërbimeve dhe numrat e telefonit.",
      en: "The glass entrance door displaying service information and phone numbers.",
    },
  ),
  corridor: photo(
    "/images/site/korridori-kryesor.jpg",
    {
      sq: "Korridori kryesor me dysheme mermeri dhe mural në mur.",
      en: "The main corridor with marble flooring and a mural on the wall.",
    },
    "google-profile",
  ),
  lobbyMural: photo(
    "/images/site/holli-me-murale.jpg",
    {
      sq: "Holli me divan dhe mural peizazhi.",
      en: "The lobby with a sofa and landscape mural.",
    },
    "google-profile",
  ),
  lobbySeating: photo(
    "/images/site/holli-ndenje.jpg",
    {
      sq: "Vend ndenjeje në hollin e Luméa.",
      en: "Seating area in the Luméa lobby.",
    },
    "google-profile",
  ),
  lobbyWindows: photo(
    "/images/site/holli-dritaret.jpg",
    {
      sq: "Holli me dritare të mëdha nga ana e rrugës.",
      en: "The lobby with tall windows facing the street.",
    },
    "google-profile",
  ),
  muralDetail: photo(
    "/images/site/murali-detaj.jpg",
    {
      sq: "Detaj i muralit në holl, pranë dritares, me një bimë në vazo.",
      en: "Detail of the lobby mural beside a window, with a potted plant.",
    },
    "google-profile",
  ),
  lounge: photo(
    "/images/site/ambient-ndenjeje.jpg",
    {
      sq: "Ambient ndenjeje me divan të bardhë, karrige kafe dhe tavolina të vogla.",
      en: "A seating area with a white sofa, brown chairs and small tables.",
    },
    "google-profile",
  ),
  cleaning: photo(
    "/images/site/pastrimi-i-ambienteve.jpg",
    {
      sq: "Pastrimi i një ambienti pranë dritares në Luméa.",
      en: "Cleaning an area beside a window at Luméa.",
    },
  ),

  /* Services ------------------------------------------------------- */
  coffinFlowersBeata: photo(
    "/images/sherbime/arkivol-me-lule-salla-beata.jpg",
    {
      sq: "Arkivol druri me lule në Sallën Beata.",
      en: "A wooden coffin with flowers in the Beata Room.",
    },
    "google-profile",
  ),
  coffinDisplay: photo(
    "/images/sherbime/arkivolet-ne-ekspozim.jpg",
    {
      sq: "Arkivole në modele dhe ngjyra të ndryshme në ambientin e ekspozimit.",
      en: "Coffins in different styles and finishes in the display area.",
    },
    "google-profile",
  ),
  hearseWithCoffin: photo(
    "/images/sherbime/automjeti-funeral-me-arkivol.jpg",
    {
      sq: "Automjeti funeral me derën e pasme të hapur, me arkivol dhe lule brenda.",
      en: "A funeral vehicle with the rear door open, showing a coffin and flowers inside.",
    },
    "google-profile",
  ),
  hearseNight: photo(
    "/images/sherbime/automjeti-funeral-naten.jpg",
    {
      sq: "Pamje përpara e një automjeti funeral të Luméa me dritat e ndezura.",
      en: "Front view of a Luméa funeral vehicle with its headlights on.",
    },
    "google-profile",
  ),
  hearseFlowers: photo(
    "/images/sherbime/automjeti-funeral-me-lule.jpg",
    {
      sq: "Automjeti funeral i Luméa me lule mbi çati.",
      en: "Luméa’s funeral vehicle with flowers on the roof.",
    },
    "google-profile",
  ),
  twoHearses: photo(
    "/images/sherbime/dy-automjete-funerale-ne-muzg.jpg",
    {
      sq: "Dy automjete funerale të Luméa përpara godinës në muzg.",
      en: "Two Luméa funeral vehicles in front of the building at dusk.",
    },
    "google-profile",
  ),
  hearseBlack: photo(
    "/images/sherbime/automjeti-funeral-i-zi.jpg",
    {
      sq: "Automjet funeral i zi me shenjën e Luméa.",
      en: "A black Luméa-branded funeral vehicle.",
    },
    "google-profile",
  ),
} satisfies Record<string, Photo>;
