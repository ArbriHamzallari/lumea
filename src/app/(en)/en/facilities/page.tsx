import { RoomsPage } from "@/views/RoomsPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { rooms } from "@/content/rooms";

export const metadata = buildMetadata({
  locale: "en",
  title: "Facilities and reception rooms | Luméa Funeral Home Vlorë",
  description: "See Luméa’s four reception rooms in Vlorë: Beata, Amara, Celeste and Eden, together with the lobby, entrance and funeral vehicles.",
  paths: routes.rooms,
  image: rooms[3].hero,
});

export default function Page() {
  return <RoomsPage locale="en" />;
}
