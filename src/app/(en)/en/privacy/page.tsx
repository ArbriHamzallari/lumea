import { PrivacyPage } from "@/views/PrivacyPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";

export const metadata = buildMetadata({
  locale: "en",
  title: "Privacy | Luméa Funeral Home Vlorë",
  description: "How the Luméa website handles privacy: no analytics cookies, no form that stores data, and a map that loads only when you open it.",
  paths: routes.privacy,
});

export default function Page() {
  return <PrivacyPage locale="en" />;
}
