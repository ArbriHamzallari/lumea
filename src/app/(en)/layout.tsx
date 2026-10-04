import type { Viewport } from "next";
import "../globals.css";
import { serif, sans } from "@/lib/fonts";
import { SiteShell } from "@/components/SiteShell";

export const viewport: Viewport = { themeColor: "#faf7f2", width: "device-width", initialScale: 1 };

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <SiteShell locale="en">{children}</SiteShell>
      </body>
    </html>
  );
}
