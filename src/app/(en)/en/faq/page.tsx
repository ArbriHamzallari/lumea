import { FaqPage } from "@/views/FaqPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "en",
  title: "Frequently asked questions | Luméa Funeral Home Vlorë",
  description: "Answers to common questions about opening hours, reception rooms, mortuary facilities, funeral transport, paperwork and coffins.",
  paths: routes.faq,
  image: photos.lobbyMural,
});

export default function Page() {
  return <FaqPage locale="en" />;
}
