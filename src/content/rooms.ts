import type { L } from "@/lib/i18n";
import { photo, type Photo } from "./images";
import { deriveRoomTheme, type RoomTheme } from "@/lib/color";
import type { ServiceId } from "./services";

/**
 * LUMÉA ROOMS
 *
 * To add a room: append an object to `rooms` below. The room page, the
 * /ambientet listing, the sitemap, metadata and colour theme are all generated
 * from this data — no new page design is needed.
 *
 * Colours: `primaryColor` was sampled from the real upholstery in the room
 * photographs (chairs, sofa, curtains), then adjusted to the colour the eye
 * reads under the room's lighting. The rest of the palette is derived from it
 * automatically (see src/lib/color.ts). If Luméa has an official colour
 * reference for a room, replace the value here.
 *
 * Facts only: capacity and accessibility are `null` because they have not been
 * supplied. They are hidden until a real value is entered.
 */

export type Room = {
  id: string;
  name: string; // e.g. "Beata"
  slug: L;
  primaryColor: string;
  colorName: L;
  theme: RoomTheme;
  hero: Photo; // wide view, room page hero
  /** Portrait view where the room colour reads clearly — used for previews. */
  cover: Photo;
  images: Photo[];
  video?: { src: string; poster: string };
  shortDescription: L; // room page, under the colour
  listDescription: L; // facilities page listing
  fullDescription: L; // "About the room"
  characteristics: L[];
  capacity: L | null; // [CAPACITY] — not provided
  accessibility: L | null; // [ACCESSIBILITY] — not provided
  relatedServices: ServiceId[];
  seoTitle: L;
  seoDescription: L;
};

/** Characteristics shared by all four rooms, visible in every set of photos. */
const shared: L[] = [
  { sq: "Karrige prej kadifeje përgjatë të dy mureve", en: "Velvet chairs along both walls" },
  { sq: "Divan në fund të sallës, poshtë dritares", en: "A sofa at the far end, beneath the window" },
  { sq: "Dysheme mermeri e bardhë me bordurë të errët", en: "White marble floor with a dark inlaid border" },
  { sq: "Mure me panele dekorative në ngjyrë fildishi", en: "Ivory walls with decorative panelling" },
  { sq: "Llambadarë dhe drita muri", en: "Chandeliers and wall lights" },
  { sq: "Kavalet për një fotografi ose njoftim", en: "An easel for a photograph or notice" },
  { sq: "Tavolina të vogla anësore", en: "Small side tables" },
  { sq: "Kondicionim ajri", en: "Air conditioning" },
];

function build(r: Omit<Room, "theme" | "cover"> & { coverSrc: string }): Room {
  const { coverSrc, ...rest } = r;
  const cover = r.images.find((p) => p.src === coverSrc) ?? r.hero;
  return { ...rest, cover, theme: deriveRoomTheme(r.primaryColor) };
}

export const rooms: Room[] = [
  /* ---------------------------------------------------------------- */
  build({
    id: "beata",
    name: "Beata",
    slug: { sq: "salla-beata", en: "beata-room" },
    primaryColor: "#6B4A35",
    colorName: { sq: "Kafe", en: "Brown" },
    coverSrc: "/images/salla/beata-divani-dhe-dritarja.jpg",
    hero: photo("/images/salla/beata-pamje-e-plote.jpg", {
      sq: "Salla Beata parë nga hyrja, me karrige kafe në të dy anët dhe divanin në fund.",
      en: "The Beata Room seen from the entrance, with brown chairs on both sides and the sofa at the far end.",
    }),
    images: [
      photo("/images/salla/beata-arkivol-me-lule.jpg", {
        sq: "Arkivol druri me lule në Sallën Beata, me karriget kafe në sfond.",
        en: "A wooden coffin with flowers in the Beata Room, with brown chairs in the background.",
      }, "google-profile"),
      photo("/images/salla/beata-divani-dhe-dritarja.jpg", {
        sq: "Divani kafe prej kadifeje dhe perdet kafe në fund të Sallës Beata.",
        en: "The brown velvet sofa and brown curtains at the end of the Beata Room.",
      }),
      photo("/images/salla/beata-nga-korridori.jpg", {
        sq: "Salla Beata parë nga korridori përmes derës së hapur.",
        en: "The Beata Room seen from the corridor through the open door.",
      }),
      photo("/images/salla/beata-pamje-anesore.jpg", {
        sq: "Pamje anësore e Sallës Beata me rreshtat e karrigeve dhe tavolinat e vogla.",
        en: "Side view of the Beata Room with rows of chairs and small tables.",
      }),
      photo("/images/salla/beata-karriget-dhe-divani.jpg", {
        sq: "Karriget kafe, kavaleti dhe divani në Sallën Beata.",
        en: "Brown chairs, the easel and sofa in the Beata Room.",
      }),
      photo("/images/salla/beata-pamje-gjatesore.jpg", {
        sq: "Salla Beata në gjatësi, me llambadarë dhe drita muri.",
        en: "The length of the Beata Room, with chandeliers and wall lights.",
      }),
      photo("/images/salla/beata-tavolina-dhe-divani.jpg", {
        sq: "Tavolinë e vogël me sipërfaqe mermeri përpara divanit në Sallën Beata.",
        en: "A small marble-topped table in front of the sofa in the Beata Room.",
      }),
    ],
    video: { src: "/video/salla-beata.mp4", poster: "/video/salla-beata-poster.jpg" },
    shortDescription: { sq: "Salla Beata ka karrige prej kadifeje përgjatë mureve, divan në fund të sallës, perde kafe dhe dysheme mermeri të bardhë.", en: "The Beata Room has velvet chairs along the walls, a sofa at the far end, brown curtains and a white marble floor." },
    listDescription: { sq: "Salla Beata ka karrige prej kadifeje përgjatë mureve, një divan në fund dhe perde kafe.", en: "The Beata Room has velvet chairs along the walls, a sofa at the far end and brown curtains." },
    fullDescription: { sq: "Salla Beata është e organizuar me karrige prej kadifeje përgjatë të dy mureve, duke lënë qendrën e sallës të lirë. Në fund ndodhet divani, poshtë dritares me perde kafe. Dyshemeja është prej mermeri të bardhë dhe muret janë në ngjyrë fildishi.", en: "The Beata Room has velvet chairs along both walls, leaving the centre of the room open. The sofa is at the far end beneath the window with brown curtains. The room has white marble flooring and ivory walls." },
    characteristics: shared,
    capacity: null,
    accessibility: null,
    relatedServices: ["organizimi", "arkivolet"],
    seoTitle: { sq: "Salla Beata | Luméa Funeral Home Vlorë", en: "The Beata Room | Luméa Funeral Home Vlorë" },
    seoDescription: { sq: "Shikoni Sallën Beata në Luméa Funeral Home në Vlorë, me karrige dhe divan prej kadifeje, mermer të bardhë dhe ndriçim të butë.", en: "See the Beata Room at Luméa Funeral Home in Vlorë, with velvet seating, white marble and soft lighting." },
  }),

  /* ---------------------------------------------------------------- */
  build({
    id: "amara",
    name: "Amara",
    slug: { sq: "salla-amara", en: "amara-room" },
    primaryColor: "#7D1F2A",
    colorName: { sq: "Bordo", en: "Burgundy" },
    coverSrc: "/images/salla/amara-divani-dhe-dritarja.jpg",
    hero: photo("/images/salla/amara-pamje-e-plote.jpg", {
      sq: "Salla Amara me karrige dhe divan bordo dhe perde bordo.",
      en: "The Amara Room with burgundy chairs, sofa and curtains.",
    }),
    images: [
      photo("/images/salla/amara-pamje-gjatesore.jpg", {
        sq: "Salla Amara në gjatësi, me llambadarë dhe rreshta karrigesh bordo.",
        en: "The length of the Amara Room, with chandeliers and rows of burgundy chairs.",
      }),
      photo("/images/salla/amara-hyrja-e-salles.jpg", {
        sq: "Këndi i ndenjes pranë hyrjes së Sallës Amara, me divan dhe karrige bordo.",
        en: "The seating area near the entrance of the Amara Room, with a burgundy sofa and chairs.",
      }, "google-profile"),
      photo("/images/salla/amara-divani-dhe-dritarja.jpg", {
        sq: "Divani bordo poshtë dritares me perde bordo në Sallën Amara.",
        en: "The burgundy sofa beneath the window with burgundy curtains in the Amara Room.",
      }),
      photo("/images/salla/amara-kendi-i-divanit.jpg", {
        sq: "Divani, kavaleti dhe karriget në fund të Sallës Amara.",
        en: "The sofa, easel and chairs at the end of the Amara Room.",
      }),
      photo("/images/salla/amara-divani-afer.jpg", {
        sq: "Divani bordo prej kadifeje në Sallën Amara me dritat e murit.",
        en: "The burgundy velvet sofa in the Amara Room with wall lights.",
      }),
    ],
    video: { src: "/video/salla-amara.mp4", poster: "/video/salla-amara-poster.jpg" },
    shortDescription: { sq: "Salla Amara ka karrige dhe divan prej kadifeje bordo, perde bordo, mure të çelura dhe dysheme mermeri të bardhë.", en: "The Amara Room has burgundy velvet chairs and sofa, burgundy curtains, pale walls and white marble flooring." },
    listDescription: { sq: "Salla Amara ka karrige dhe divan prej kadifeje, perde bordo dhe mure në ngjyrë fildishi.", en: "The Amara Room has velvet chairs and sofa, burgundy curtains and pale ivory walls." },
    fullDescription: { sq: "Salla Amara ka karrige dhe divan bordo përgjatë hapësirës së sallës, ndërsa pranë hyrjes ndodhet një kënd i vogël ndenjeje. Në fund është vendosur divani kryesor, poshtë dritares. Muret e çelura dhe mermeri i bardhë krijojnë një kontrast me ngjyrën bordo.", en: "The Amara Room has burgundy chairs and a sofa arranged throughout the room, with a small seating area near the entrance. The main sofa is at the far end beneath the window. Pale walls and white marble contrast with the burgundy furnishings." },
    characteristics: [
      ...shared.slice(0, 2),
      { sq: "Kënd ndenjeje pranë hyrjes së sallës", en: "A seating area near the room’s entrance" },
      ...shared.slice(2),
    ],
    capacity: null,
    accessibility: null,
    relatedServices: ["organizimi", "arkivolet"],
    seoTitle: { sq: "Salla Amara | Luméa Funeral Home Vlorë", en: "The Amara Room | Luméa Funeral Home Vlorë" },
    seoDescription: { sq: "Shikoni Sallën Amara në Luméa Funeral Home në Vlorë, me karrige dhe divan bordo, perde bordo dhe hapësirë ndenjeje pranë hyrjes.", en: "See the Amara Room at Luméa Funeral Home in Vlorë, with burgundy velvet seating, curtains and a small seating area near the entrance." },
  }),

  /* ---------------------------------------------------------------- */
  build({
    id: "celeste",
    name: "Celeste",
    slug: { sq: "salla-celeste", en: "celeste-room" },
    primaryColor: "#1F3354",
    colorName: { sq: "Blu", en: "Blue" },
    coverSrc: "/images/salla/celeste-divani-dhe-dritarja.jpg",
    hero: photo("/images/salla/celeste-pamje-e-plote-me-arkivol.jpg", {
      sq: "Salla Celeste në gjatësi, me karrige blu në të dy anët dhe një arkivol në fund të sallës.",
      en: "The full length of the Celeste Room, with blue chairs on both sides and a coffin at the far end.",
    }, "google-profile"),
    images: [
      photo("/images/salla/celeste-divani-dhe-dritarja.jpg", {
        sq: "Divani i errët dhe perdet blu poshtë dritares në Sallën Celeste.",
        en: "The dark sofa and blue curtains beneath the window in the Celeste Room.",
      }),
      photo("/images/salla/celeste-nga-hyrja.jpg", {
        sq: "Salla Celeste parë nga hyrja, me korridorin në plan të parë.",
        en: "The Celeste Room seen from the entrance, with the corridor in the foreground.",
      }),
      photo("/images/salla/celeste-pamje-gjatesore.jpg", {
        sq: "Pamje gjatësore e Sallës Celeste nga dera.",
        en: "A lengthwise view of the Celeste Room from the door.",
      }),
      photo("/images/salla/celeste-kendi-i-divanit.jpg", {
        sq: "Divani, kavaleti dhe karriget blu në fund të Sallës Celeste.",
        en: "The sofa, easel and blue chairs at the end of the Celeste Room.",
      }),
      photo("/images/salla/celeste-karriget-anesore.jpg", {
        sq: "Karriget blu prej kadifeje përgjatë murit në Sallën Celeste.",
        en: "Blue velvet chairs along the wall of the Celeste Room.",
      }),
      photo("/images/salla/celeste-llambadari.jpg", {
        sq: "Llambadari dhe dritat e murit në Sallën Celeste.",
        en: "The chandelier and wall lights in the Celeste Room.",
      }),
    ],
    video: { src: "/video/salla-celeste.mp4", poster: "/video/salla-celeste-poster.jpg" },
    shortDescription: { sq: "Salla Celeste ka karrige prej kadifeje blu, një divan të errët, perde blu, mure të çelura dhe dysheme mermeri.", en: "The Celeste Room has blue velvet chairs, a dark sofa, blue curtains, pale walls and marble flooring." },
    listDescription: { sq: "Salla Celeste ka karrige prej kadifeje blu, një divan të errët dhe perde blu në një hapësirë të gjatë dhe të ndriçuar.", en: "The Celeste Room has blue velvet chairs, a dark sofa and blue curtains in a long, bright space." },
    fullDescription: { sq: "Salla Celeste është e vetmja sallë blu e Luméa. Karriget dhe perdet blu dallojnë mbi muret e çelura dhe mermerin e bardhë. Salla është e gjatë, me karrige në të dy anët dhe divanin në fund, poshtë dritares.", en: "The Celeste Room is Luméa’s blue room. The blue chairs and curtains stand out against the pale walls and white marble. The room is long, with chairs on both sides and the sofa at the far end beneath the window." },
    characteristics: shared,
    capacity: null,
    accessibility: null,
    relatedServices: ["organizimi", "arkivolet"],
    seoTitle: { sq: "Salla Celeste | Luméa Funeral Home Vlorë", en: "The Celeste Room | Luméa Funeral Home Vlorë" },
    seoDescription: { sq: "Shikoni Sallën Celeste në Luméa Funeral Home në Vlorë, me karrige blu prej kadifeje, divan të errët, perde blu dhe mermer të bardhë.", en: "See the Celeste Room at Luméa Funeral Home in Vlorë, with blue velvet chairs, a dark sofa, blue curtains and white marble." },
  }),

  /* ---------------------------------------------------------------- */
  build({
    id: "eden",
    name: "Eden",
    slug: { sq: "salla-eden", en: "eden-room" },
    primaryColor: "#1F4A3F",
    colorName: { sq: "Jeshile", en: "Green" },
    coverSrc: "/images/salla/eden-divani-dhe-dritarja.jpg",
    hero: photo("/images/salla/eden-pamje-e-plote.jpg", {
      sq: "Salla Eden me karrige jeshile në të dy anët dhe divanin jeshil në fund.",
      en: "The Eden Room with green chairs on both sides and the green sofa at the far end.",
    }, "google-profile"),
    images: [
      photo("/images/salla/eden-divani-dhe-dritarja.jpg", {
        sq: "Divani jeshil prej kadifeje dhe perdet e gjelbra poshtë dritares në Sallën Eden.",
        en: "The green velvet sofa and green curtains beneath the window in the Eden Room.",
      }),
      photo("/images/salla/eden-nga-korridori.jpg", {
        sq: "Salla Eden parë nga korridori me mermer të errët.",
        en: "The Eden Room seen from the dark-marble corridor.",
      }),
      photo("/images/salla/eden-pamje-anesore.jpg", {
        sq: "Pamje anësore e Sallës Eden me rreshtat e karrigeve jeshile.",
        en: "Side view of the Eden Room with rows of green chairs.",
      }),
      photo("/images/salla/eden-dritarja-detaj.jpg", {
        sq: "Detaj i dritares me pamje kopshti dhe perdet e gjelbra në Sallën Eden.",
        en: "Detail of the window with a garden view and green curtains in the Eden Room.",
      }),
      photo("/images/salla/eden-divani-afer.jpg", {
        sq: "Divani jeshil nga afër me kavaletin pranë tij.",
        en: "A closer view of the green sofa with the easel beside it.",
      }),
      photo("/images/salla/eden-karriget.jpg", {
        sq: "Karriget jeshile prej kadifeje përgjatë murit të Sallës Eden.",
        en: "Green velvet chairs along the wall of the Eden Room.",
      }),
      photo("/images/salla/eden-divani-me-kavalet.jpg", {
        sq: "Divani dhe kavaleti në fund të Sallës Eden.",
        en: "The sofa and easel at the end of the Eden Room.",
      }),
    ],
    video: { src: "/video/salla-eden.mp4", poster: "/video/salla-eden-poster.jpg" },
    shortDescription: { sq: "Salla Eden ka karrige dhe divan prej kadifeje jeshile, perde të gjelbra dhe dysheme mermeri të bardhë.", en: "The Eden Room has green velvet chairs and sofa, green curtains and white marble flooring." },
    listDescription: { sq: "Salla Eden ka karrige dhe divan prej kadifeje jeshile, perde të gjelbra dhe ndriçim të butë.", en: "The Eden Room has green velvet chairs and sofa, green curtains and soft lighting." },
    fullDescription: { sq: "Salla Eden ka karrige dhe divan jeshil, perde të gjelbra dhe mure në ngjyrë fildishi. Karriget janë vendosur përgjatë mureve, ndërsa divani ndodhet në fund, poshtë dritares së madhe. Pranë tij ka një kavalet për fotografi ose njoftime.", en: "The Eden Room has green chairs and sofa, green curtains and ivory walls. The chairs are arranged along the walls, while the sofa sits at the far end beneath the large window. An easel beside it can hold a photograph or notice." },
    characteristics: shared,
    capacity: null,
    accessibility: null,
    relatedServices: ["organizimi", "arkivolet"],
    seoTitle: { sq: "Salla Eden | Luméa Funeral Home Vlorë", en: "The Eden Room | Luméa Funeral Home Vlorë" },
    seoDescription: { sq: "Shikoni Sallën Eden në Luméa Funeral Home në Vlorë, me karrige dhe divan jeshil, perde të gjelbra dhe mermer të bardhë.", en: "See the Eden Room at Luméa Funeral Home in Vlorë, with green velvet seating, green curtains and white marble." },
  }),
];

export function getRoomBySlug(slug: string, locale: "sq" | "en") {
  return rooms.find((r) => r.slug[locale] === slug);
}
