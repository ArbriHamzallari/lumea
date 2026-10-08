import { ContactPage } from "@/views/ContactPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "en",
  title: "Contact | Luméa Funeral Home Vlorë",
  description: "Call +355 69 35 000 40 or +355 69 35 000 41, or message us on WhatsApp. Available 24/7. Rruga Transballkanike, near ish Hipoteka, Vlorë.",
  paths: routes.contact,
  image: photos.entranceNight,
});

export default function Page() {
  return <ContactPage locale="en" />;
}
