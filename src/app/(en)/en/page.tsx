import { HomePage } from "@/views/HomePage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";

export const metadata = buildMetadata({
  locale: "en",
  title: "Luméa Funeral Home Vlorë | Funeral home open 24 hours",
  description: "Funeral home in Vlorë, open 24 hours. Four reception rooms, mortuary facilities, funeral transport in Albania and abroad, funeral arrangements and paperwork support.",
  paths: routes.home,
});

export default function Page() {
  return <HomePage locale="en" />;
}
