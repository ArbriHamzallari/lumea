import { AboutPage } from "@/views/AboutPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "en",
  title: "About Luméa Funeral Home | Vlorë",
  description: "Luméa Funeral Home is a funeral home on Rruga Transballkanike, Vlorë, open 24/7. Funeral services, reception rooms, transport and paperwork.",
  paths: routes.about,
  image: photos.facadeDuskVehicles,
});

export default function Page() {
  return <AboutPage locale="en" />;
}
