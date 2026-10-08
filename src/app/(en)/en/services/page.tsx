import { ServicesPage } from "@/views/ServicesPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "en",
  title: "Luméa’s Funeral Services | Vlorë",
  description: "Funeral arrangements, care of the deceased, funeral transport in Albania and abroad, paperwork and coffins. Luméa Funeral Home, Vlorë.",
  paths: routes.services,
  image: photos.hearseWithCoffin,
});

export default function Page() {
  return <ServicesPage locale="en" />;
}
