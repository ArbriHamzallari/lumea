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
    title: { sq: "Godina dhe hyrja", en: "The building and entrance" },
    intro: {
      sq: "Luméa ndodhet në një godinë njëkatëshe në Rrugën Transballkanike, me tabelën LUMÉA mbi hyrje.",
      en: "Luméa is in a single-storey building on Rruga Transballkanike, with the LUMÉA sign above the entrance.",
    },
    items: [photos.entranceNight, photos.facadeDay, photos.facadeHearse, photos.entranceDoor, photos.facadeDuskVehicles],
  },
  {
    id: "brenda",
    title: { sq: "Holli dhe korridoret", en: "The lobby and corridors" },
    intro: {
      sq: "Nga hyrja, holli dhe korridoret me mermer të çojnë te sallat.",
      en: "From the entrance, the lobby and marble corridors lead to the rooms.",
    },
    items: [photos.corridor, photos.lobbyMural, photos.lobbyWindows, photos.lobbySeating, photos.muralDetail, photos.lounge],
  },
  {
    id: "automjetet",
    title: { sq: "Automjetet funerale", en: "Funeral vehicles" },
    intro: {
      sq: "Automjetet me të cilat Luméa kryen transportin funeral.",
      en: "The vehicles Luméa uses for funeral transport.",
    },
    items: [photos.fleet, photos.hearseWithCoffin, photos.twoHearses, photos.hearseFlowers, photos.hearseNight, photos.hearseBlack, photos.hearseCourtyard],
  },
];
