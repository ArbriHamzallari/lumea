import { RoomsPage } from "@/views/RoomsPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { rooms } from "@/content/rooms";

export const metadata = buildMetadata({
  locale: "sq",
  title: "Ambientet dhe sallat e pritjes | Luméa Funeral Home Vlorë",
  description: "Shikoni katër sallat e pritjes të Luméa në Vlorë: Beata, Amara, Celeste dhe Eden, së bashku me hollin, hyrjen dhe automjetet funerale.",
  paths: routes.rooms,
  image: rooms[3].hero,
});

export default function Page() {
  return <RoomsPage locale="sq" />;
}
