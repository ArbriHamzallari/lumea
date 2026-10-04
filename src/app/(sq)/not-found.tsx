import Link from "next/link";
import { business, telHref } from "@/content/business";
import { t } from "@/content/dictionary";
import { href } from "@/lib/i18n";

export default function NotFound() {
  const d = t("sq");
  return (
    <section className="wrap py-24 md:py-32">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 max-w-2xl">{d.notFound.title}</h1>
      <p className="lede mt-6 max-w-xl">{d.notFound.body}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={telHref(business.phones[0].e164)} className="btn btn-primary">
          {business.phones[0].display}
        </a>
        <Link href={href("home", "sq")} className="btn btn-secondary">
          {d.notFound.back}
        </Link>
      </div>
    </section>
  );
}
