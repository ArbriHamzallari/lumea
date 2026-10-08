import { HomePage } from "@/views/HomePage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";

export const metadata = buildMetadata({
  locale: "en",
  title: "Funeral Services in Vlorë | Luméa Funeral Home",
  description: "Funeral services in Vlorë, available 24/7. Funeral arrangements, reception rooms, care of the deceased, funeral transport and help with paperwork.",
  paths: routes.home,
});

export default function Page() {
  return <HomePage locale="en" />;
}
