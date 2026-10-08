import type { L } from "@/lib/i18n";
import { photos, type Photo } from "./images";

/**
 * Gallery groups for the facilities page. Groups only exist where real
 * photographs exist. Room photographs live with each room (rooms.ts).
 */
export type GalleryGroup = { id: string; title: L; intro: L; items: Photo[] };

export const galleryGroups: GalleryGroup[] = [
  {
    id: "jashte",
    title: { sq: "Hyrja dhe godina", en: "The entrance and building" },
    intro: {
      sq: "Luméa ndodhet në një godinë njëkatëshe në Rrugën Transballkanike, pranë ish-Hipotekës.",
      en: "Luméa is in a single-storey building on Rruga Transballkanike, near the former Hipoteka building.",
    },
    items: [photos.entranceNight, photos.facadeDay, photos.facadeHearse, photos.entranceDoor, photos.facadeDuskVehicles],
  },
  {
    id: "brenda",
    title: { sq: "Holli", en: "The lobby" },
    intro: {
      sq: "Holli dhe korridoret lidhin hyrjen me sallat e pritjes dhe ambientet e tjera të godinës.",
      en: "The lobby and corridors connect the entrance with the reception rooms and the rest of the building.",
    },
    items: [photos.corridor, photos.lobbyMural, photos.lobbyWindows, photos.lobbySeating, photos.muralDetail, photos.lounge],
  },
  {
    id: "automjetet",
    title: { sq: "Automjetet funerale", en: "Funeral vehicles" },
    intro: {
      sq: "Luméa disponon automjete për transportin funeral brenda dhe jashtë vendit.",
      en: "Luméa has its own vehicles for funeral transport within Albania and abroad.",
    },
    items: [photos.fleet, photos.hearseWithCoffin, photos.twoHearses, photos.hearseFlowers, photos.hearseNight, photos.hearseBlack, photos.hearseCourtyard],
  },
];
