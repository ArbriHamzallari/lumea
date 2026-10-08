import { RoomsPage } from "@/views/RoomsPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";
import { rooms } from "@/content/rooms";

export const metadata = buildMetadata({
  locale: "sq",
  title: "Shtëpi Funerale në Vlorë | Ambientet e Luméa",
  description: "Katër salla pritjeje, holl dhe ambiente të dedikuara për shërbimet funerale. Shikoni fotografitë e ambienteve të Luméa Funeral Home në Vlorë.",
  paths: routes.rooms,
  image: rooms[3].hero,
});

export default function Page() {
  return <RoomsPage locale="sq" />;
}
