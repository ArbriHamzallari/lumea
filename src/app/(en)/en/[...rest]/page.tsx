import { notFound } from "next/navigation";

/**
 * Any unknown /en/... address renders the English not-found page
 * (src/app/(en)/en/not-found.tsx) with a 404 status, instead of the
 * Albanian global 404 (audit LUM-15).
 */
export default function UnknownEnglishPage() {
  notFound();
}
