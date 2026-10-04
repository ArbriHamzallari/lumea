import { PrivacyPage } from "@/views/PrivacyPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";

export const metadata = buildMetadata({
  locale: "en",
  title: "Privacy | Luméa Funeral Home Vlorë",
  description: "Information about how the Luméa website handles data, the contact form, the map and links to third-party services.",
  paths: routes.privacy,
});

export default function Page() {
  return <PrivacyPage locale="en" />;
}
