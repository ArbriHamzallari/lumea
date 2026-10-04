import { PrivacyPage } from "@/views/PrivacyPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";

export const metadata = buildMetadata({
  locale: "sq",
  title: "Privatësia | Luméa Funeral Home Vlorë",
  description: "Informacion mbi mënyrën si faqja e Luméa trajton të dhënat, formularin e kontaktit, hartën dhe lidhjet me shërbimet e palëve të treta.",
  paths: routes.privacy,
});

export default function Page() {
  return <PrivacyPage locale="sq" />;
}
