import { ContactPage } from "@/views/ContactPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "en",
  title: "Contact and location | Luméa Funeral Home Vlorë",
  description: "Call Luméa on +355 69 35 000 40 or +355 69 35 000 41, 24 hours a day. Rruga Transballkanike, near ish Hipoteka, Vlorë 9401.",
  paths: routes.contact,
  image: photos.entranceNight,
});

export default function Page() {
  return <ContactPage locale="en" />;
}
