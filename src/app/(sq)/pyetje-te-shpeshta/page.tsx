import { FaqPage } from "@/views/FaqPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "sq",
  title: "Pyetje të shpeshta | Luméa Funeral Home Vlorë",
  description: "Përgjigje për orarin, kontaktin, sallat e pritjes, kujdesin për të ndjerin, transportin funeral, dokumentacionin, arkivolet dhe çmimet.",
  paths: routes.faq,
  image: photos.lobbyMural,
});

export default function Page() {
  return <FaqPage locale="sq" />;
}
