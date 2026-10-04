import { HomePage } from "@/views/HomePage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";

export const metadata = buildMetadata({
  locale: "sq",
  title: "Luméa Funeral Home Vlorë | Shtëpi funerale 24 orë",
  description: "Shtëpi funerale në Vlorë, e hapur 24 orë. Katër salla, ambiente morgu, transport funeral brenda dhe jashtë vendit, organizim ceremonie dhe ndihmë me dokumentet.",
  paths: routes.home,
});

export default function Page() {
  return <HomePage locale="sq" />;
}
