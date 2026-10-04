import { rooms } from "@/content/rooms";
import { themeToCssVars } from "@/lib/color";
import { RoomScope } from "@/components/RoomScope";

const themes = Object.fromEntries(rooms.map((r) => [r.slug.en, themeToCssVars(r.theme)]));

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RoomScope themes={themes}>{children}</RoomScope>;
}
