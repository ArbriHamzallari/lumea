import { AboutPage } from "@/views/AboutPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "sq",
  title: "Rreth Luméa Funeral Home | Vlorë",
  description: "Luméa Funeral Home është shtëpi funerale në Rrugën Transballkanike, Vlorë, e hapur 24/7. Shërbime funerale, salla pritjeje, transport dhe dokumentacion.",
  paths: routes.about,
  image: photos.facadeDuskVehicles,
});

export default function Page() {
  return <AboutPage locale="sq" />;
}
