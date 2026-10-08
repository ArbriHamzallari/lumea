import { PrivacyPage } from "@/views/PrivacyPage";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/i18n";

export const metadata = buildMetadata({
  locale: "sq",
  title: "Privatësia | Luméa Funeral Home Vlorë",
  description: "Si e trajton faqja e Luméa privatësinë: pa cookies statistikore, pa formular që ruan të dhëna dhe me hartë që ngarkohet vetëm kur e hapni.",
  paths: routes.privacy,
});

export default function Page() {
  return <PrivacyPage locale="sq" />;
}
