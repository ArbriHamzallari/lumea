import { AboutPage } from "@/views/AboutPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "sq",
  title: "Rreth Luméa | Shtëpi funerale në Vlorë",
  description: "Luméa Funeral Home në Vlorë është e hapur 24 orë dhe ofron salla pritjeje, ambiente morgu, transport funeral dhe ndihmë me dokumentet.",
  paths: routes.about,
  image: photos.facadeDuskVehicles,
});

export default function Page() {
  return <AboutPage locale="sq" />;
}
