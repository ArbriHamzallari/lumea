# Luméa Funeral Home Vlorë — website

Bilingual (Albanian default, English) website for Luméa Funeral Home, Vlorë.
Next.js 16 (App Router, fully static) · TypeScript · Tailwind CSS 4.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages prerendered)
npm start
```

Set the real domain before deploying (used for canonical URLs, hreflang, sitemap, Open Graph and structured data):

```bash
NEXT_PUBLIC_SITE_URL=https://www.your-domain.al
```

---

## Editing content

All content lives in `src/content/`. Layout code never needs to change for normal edits.

| What | File |
| --- | --- |
| Phone numbers, WhatsApp, address, map pin, Instagram, opening hours | `src/content/business.ts` |
| Services (text, what's included, photos, SEO title/description) | `src/content/services.ts` |
| Rooms (colour, photos, descriptions, SEO) | `src/content/rooms.ts` |
| Questions & answers | `src/content/faqs.ts` |
| Gallery groups on the facilities page | `src/content/gallery.ts` |
| Photo alt texts (both languages) | `src/content/images.ts` |
| Buttons, navigation, form labels | `src/content/dictionary.ts` |

Every text field has both `sq` and `en`, so the two languages always carry the same facts.

**Values set to `null`** (email, Facebook page, founding year, legal name, room capacity, accessibility) are hidden automatically. Fill in a real value and it appears everywhere it belongs, including the structured data.

### Adding a room

Append an object to `rooms` in `src/content/rooms.ts`, with its `primaryColor` taken from the real upholstery. The page at `/ambientet/<slug>` and `/en/facilities/<slug>`, the listing, navigation, sitemap, metadata and the whole colour theme are generated from it.

### Adding photos

Put the optimised JPEG in `public/images/...`, add its dimensions and blur placeholder to `src/content/image-manifest.json` (the script that produced the current set is described at the top of `images.ts`), then register it with `photo(src, { sq, en })`.

---

## Site structure

| Albanian (canonical) | English |
| --- | --- |
| `/` | `/en` |
| `/sherbimet` + 5 service pages | `/en/services` + 5 |
| `/ambientet` + 4 room pages | `/en/facilities` + 4 |
| `/rreth-nesh` | `/en/about` |
| `/pyetje-te-shpeshta` | `/en/faq` |
| `/kontakt` | `/en/contact` |
| `/privatesia` | `/en/privacy` |

`/sitemap.xml` (with hreflang alternates) and `/robots.txt` are generated.

## Room colour system

Each room has one source colour (`primaryColor`), sampled from its chairs, sofa and curtains. `src/lib/color.ts` derives the page tint, section tint, border and accent colours in OKLCH, keeping Luméa's ivory lightness and borrowing only the room's hue, and checks WCAG contrast for every pair. The colours are registered CSS properties, so moving from one room to the next shifts the whole page gently from one room's colour to the other. Reduced-motion preferences are respected.

---

## Open questions for Luméa (please confirm)

1. **Address**: the owner's brief and Luméa's Instagram say *Rruga Transballkanike, pranë ish Hipotekës*. The Google Business Profile says *Rruga Gjergj Kastrioti*. The website uses Transballkanike. Google and the website should match (NAP consistency).
2. **WhatsApp**: assumed to be +355 69 35 000 40. Confirm it is active on WhatsApp, or set `whatsapp: null`.
3. **Domain**: set `NEXT_PUBLIC_SITE_URL`, then add the website URL to the Google Business Profile (currently empty).
4. **Logo**: the mark in `src/components/Logo.tsx` is a faithful SVG redraw. Replace it with the official vector file.
5. **Email, Facebook page**: the Facebook link supplied is a post in a group, not a business page.
6. **Coffin photographs in the room folders** (`*_n.jpg`, square): these are 3D renders, not photographs (curtains and walls don't match the real rooms), so they are not used. The `IMG_672x.JPG` collages and `IMG_3100` (bedroom) are not used either.
7. **Photos from the Google Business Profile** are used (marked `source: "google-profile"` in `images.ts`). Confirm Luméa owns the rights or took them.
8. **Not yet supplied, so not shown**: room capacities, parking, accessibility details, team, history, prices, areas served.
