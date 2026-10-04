import { ContactPage } from "@/views/ContactPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "sq",
  title: "Kontakt dhe vendndodhja | Luméa Funeral Home Vlorë",
  description: "Telefononi Luméa në +355 69 35 000 40 ose +355 69 35 000 41, 24 orë. Rruga Transballkanike, pranë ish Hipotekës, Vlorë 9401.",
  paths: routes.contact,
  image: photos.entranceNight,
});

export default function Page() {
  return <ContactPage locale="sq" />;
}
