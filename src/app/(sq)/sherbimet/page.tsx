import { ServicesPage } from "@/views/ServicesPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "sq",
  title: "Shërbime funerale në Vlorë | Luméa Funeral Home",
  description: "Organizimi i ceremonisë, ambientet e morgut, transporti funeral, arkivolet dhe ndihma me dokumentet. Shërbimet e Luméa Funeral Home në Vlorë.",
  paths: routes.services,
  image: photos.hearseWithCoffin,
});

export default function Page() {
  return <ServicesPage locale="sq" />;
}
