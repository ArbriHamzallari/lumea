import { ContactPage } from "@/views/ContactPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "sq",
  title: "Kontakt | Luméa Funeral Home Vlorë",
  description: "Telefononi +355 69 35 000 40 ose +355 69 35 000 41, ose na shkruani në WhatsApp. Në dispozicion 24/7. Rruga Transballkanike, pranë ish Hipotekës, Vlorë.",
  paths: routes.contact,
  image: photos.entranceNight,
});

export default function Page() {
  return <ContactPage locale="sq" />;
}
