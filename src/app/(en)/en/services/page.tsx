import { ServicesPage } from "@/views/ServicesPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "en",
  title: "Funeral services in Vlorë | Luméa Funeral Home",
  description: "Funeral arrangements, mortuary facilities, funeral transport, coffins and paperwork support from Luméa Funeral Home in Vlorë.",
  paths: routes.services,
  image: photos.hearseWithCoffin,
});

export default function Page() {
  return <ServicesPage locale="en" />;
}
