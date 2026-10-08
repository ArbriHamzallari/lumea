import { ServicesPage } from "@/views/ServicesPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "sq",
  title: "Shërbimet funerale të Luméa | Vlorë",
  description: "Organizimi i ceremonisë, kujdesi për të ndjerin, transport funeral në Shqipëri dhe jashtë vendit, dokumentacioni dhe arkivolet. Luméa Funeral Home, Vlorë.",
  paths: routes.services,
  image: photos.hearseWithCoffin,
});

export default function Page() {
  return <ServicesPage locale="sq" />;
}
