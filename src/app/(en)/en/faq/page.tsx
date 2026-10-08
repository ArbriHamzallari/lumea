import { FaqPage } from "@/views/FaqPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { photos } from "@/content/images";

export const metadata = buildMetadata({
  locale: "en",
  title: "Frequently Asked Questions | Luméa Funeral Home Vlorë",
  description: "Answers about opening hours, contact, reception rooms, care of the deceased, funeral transport, paperwork, coffins and prices.",
  paths: routes.faq,
  image: photos.lobbyMural,
});

export default function Page() {
  return <FaqPage locale="en" />;
}
