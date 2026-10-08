import type { Locale } from "@/lib/i18n";

/**
 * Interface text (navigation, buttons, labels). Page copy lives with each page.
 * Calls to action follow the owner's list: "Telefononi tani", "Na shkruani në
 * WhatsApp", "Shikoni shërbimet", "Shikoni ambientet", "Na gjeni në Google
 * Maps", "Mësoni më shumë".
 */
const sq = {
  skip: "Kaloni te përmbajtja",
  nav: {
    home: "Kryefaqja",
    services: "Shërbimet",
    rooms: "Ambientet",
    about: "Rreth nesh",
    faq: "Pyetje të shpeshta",
    contact: "Kontakt",
    privacy: "Privatësia",
  },
  menu: "Menuja",
  closeMenu: "Mbyllni menunë",
  mainNav: "Navigimi kryesor",
  langLabel: "Gjuha",
  switchTo: "Shikojeni këtë faqe në anglisht",

  // Calls to action
  call: "Telefononi",
  callNow: "Telefononi tani",
  callShort: "Telefononi",
  whatsapp: "WhatsApp",
  writeWhatsapp: "Na shkruani në WhatsApp",
  contactUs: "Na kontaktoni",
  talkToUs: "Flisni me ne",
  seeService: "Shikoni shërbimin",
  seeServices: "Shikoni shërbimet",
  seeFacilities: "Shikoni ambientet",
  seeRoom: "Shikoni sallën",
  learnMore: "Mësoni më shumë",
  directions: "Udhëzime",
  openMaps: "Hapeni në Google Maps",
  findOnMaps: "Na gjeni në Google Maps",
  googleReviews: "Vlerësimet në Google",

  open24: "Hapur 24 orë, 7 ditë në javë",
  available247: "Në dispozicion 24/7",
  address: "Adresa",
  phone: "Telefon",
  hours: "Orari",
  allRooms: "Të gjitha sallat",
  breadcrumb: "Vendndodhja në faqe",
  home: "Kryefaqja",
  actionBar: "Kontakt i shpejtë",

  footerLine1: "Shërbime funerale në Vlorë, të disponueshme 24 orë në ditë, 7 ditë në javë.",
  footerLine2: "Organizim ceremonie, salla pritjeje, kujdes për të ndjerin, transport funeral dhe ndihmë me dokumentacionin.",
  footerNav: "Faqet",
  footerContact: "Kontakt",
  rights: "Të gjitha të drejtat e rezervuara.",

  contactLine: "Mund të na telefononi në çdo orë ose të na shkruani në WhatsApp.",

  gallery: {
    open: "Hapni fotografinë",
    close: "Mbyllni",
    prev: "Fotografia e mëparshme",
    next: "Fotografia tjetër",
    counter: "{i} nga {n}",
    dialog: "Shikuesi i fotografive",
  },
  map: {
    title: "Harta e vendndodhjes së Luméa",
    load: "Shfaqni hartën",
    note: "Harta ngarkohet vetëm kur zgjidhni ta hapni.",
  },
  room: {
    photos: "Fotografitë",
    videoCaption: "Shikoni Sallën {name} në video.",
    videoLabel: "Një shëtitje e shkurtër në Sallën {name}.",
    prev: "Salla e mëparshme",
    next: "Salla tjetër",
    roomsNav: "Sallat e tjera",
    contactTitle: "Keni pyetje për këtë sallë?",
  },
  service: {
    includes: "Çfarë përfshin",
    faq: "Pyetje për këtë shërbim",
    related: "Shërbime të tjera",
  },
  notFound: {
    title: "Kjo faqe nuk u gjet",
    body: "Faqja që kërkuat nuk ekziston ose është zhvendosur. Kthehuni në kryefaqe ose na telefononi në çdo orë.",
    back: "Kthehuni në kryefaqe",
  },
};

type Dict = typeof sq;

const en: Dict = {
  skip: "Skip to content",
  nav: {
    home: "Home",
    services: "Services",
    rooms: "Facilities",
    about: "About",
    faq: "FAQ",
    contact: "Contact",
    privacy: "Privacy",
  },
  menu: "Menu",
  closeMenu: "Close menu",
  mainNav: "Main navigation",
  langLabel: "Language",
  switchTo: "View this page in Albanian",

  call: "Call",
  callNow: "Call now",
  callShort: "Call",
  whatsapp: "WhatsApp",
  writeWhatsapp: "Message us on WhatsApp",
  contactUs: "Contact us",
  talkToUs: "Talk to us",
  seeService: "View the service",
  seeServices: "See our services",
  seeFacilities: "See the facilities",
  seeRoom: "View the room",
  learnMore: "Learn more",
  directions: "Directions",
  openMaps: "Open in Google Maps",
  findOnMaps: "Find us on Google Maps",
  googleReviews: "Reviews on Google",

  open24: "Open 24 hours, 7 days a week",
  available247: "Available 24/7",
  address: "Address",
  phone: "Phone",
  hours: "Hours",
  allRooms: "All rooms",
  breadcrumb: "Breadcrumb",
  home: "Home",
  actionBar: "Quick contact",

  footerLine1: "Funeral services in Vlorë, available 24 hours a day, 7 days a week.",
  footerLine2: "Funeral arrangements, reception rooms, care of the deceased, funeral transport and help with paperwork.",
  footerNav: "Pages",
  footerContact: "Contact",
  rights: "All rights reserved.",

  contactLine: "You can call us at any hour or message us on WhatsApp.",

  gallery: {
    open: "Open photograph",
    close: "Close",
    prev: "Previous photograph",
    next: "Next photograph",
    counter: "{i} of {n}",
    dialog: "Photo viewer",
  },
  map: {
    title: "Map showing Luméa’s location",
    load: "Show map",
    note: "The map loads only when you choose to open it.",
  },
  room: {
    photos: "Photographs",
    videoCaption: "See the {name} Room in video.",
    videoLabel: "A short walk through the {name} Room.",
    prev: "Previous room",
    next: "Next room",
    roomsNav: "Other rooms",
    contactTitle: "Questions about this room?",
  },
  service: {
    includes: "What it includes",
    faq: "Questions about this service",
    related: "Other services",
  },
  notFound: {
    title: "This page could not be found",
    body: "The page you were looking for does not exist or has moved. Return to the home page or call us at any hour.",
    back: "Back to the home page",
  },
};

export const dictionaries: Record<Locale, Dict> = { sq, en };
export const t = (locale: Locale) => dictionaries[locale];
export type { Dict };
