import { HomePage } from "@/views/HomePage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";

export const metadata = buildMetadata({
  locale: "sq",
  title: "Shërbime funerale në Vlorë | Luméa Funeral Home",
  description: "Shërbime funerale në Vlorë, të disponueshme 24/7. Organizim ceremonie, salla pritjeje, kujdes për të ndjerin, transport funeral dhe ndihmë me dokumentacionin.",
  paths: routes.home,
});

export default function Page() {
  return <HomePage locale="sq" />;
}
