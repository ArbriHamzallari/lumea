import { RoomsPage } from "@/views/RoomsPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { rooms } from "@/content/rooms";

export const metadata = buildMetadata({
  locale: "en",
  title: "Funeral Home in Vlorë | Luméa’s Facilities",
  description: "Four reception rooms, a lobby and dedicated facilities for funeral services. See photographs of Luméa Funeral Home in Vlorë.",
  paths: routes.rooms,
  image: rooms[3].hero,
});

export default function Page() {
  return <RoomsPage locale="en" />;
}
