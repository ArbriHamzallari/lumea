import { FaqPage } from "@/views/FaqPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "sq",
  title: "Pyetje të shpeshta për funeralin | Luméa Vlorë",
  description: "Përgjigje për pyetjet më të zakonshme rreth orarit, sallave, morgut, transportit funeral, dokumenteve dhe arkivoleve.",
  paths: routes.faq,
  image: photos.lobbyMural,
});

export default function Page() {
  return <FaqPage locale="sq" />;
}
