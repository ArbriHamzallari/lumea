import { AboutPage } from "@/views/AboutPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "en",
  title: "About Luméa | Funeral home in Vlorë",
  description: "Luméa Funeral Home in Vlorë is open 24 hours and provides reception rooms, mortuary facilities, funeral transport and paperwork support.",
  paths: routes.about,
  image: photos.facadeDuskVehicles,
});

export default function Page() {
  return <AboutPage locale="en" />;
}
