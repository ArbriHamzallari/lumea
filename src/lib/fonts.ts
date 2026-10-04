import { Newsreader, Public_Sans } from "next/font/google";

/**
 * Two families only.
 * Newsreader — a reading serif with optical sizing: composed and literate,
 *   never ornamental. Headings and a few brand statements.
 * Public Sans — neutral, highly legible sans for everything practical:
 *   body, navigation, buttons, phone numbers, forms.
 * Both cover Albanian fully (ë, Ë, ç, Ç).
 */
export const serif = Newsreader({
  // "latin" already contains every Albanian letter (ë Ë ç Ç are Latin-1)
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});

export const sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});
