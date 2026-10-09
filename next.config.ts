import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    deviceSizes: [480, 640, 828, 1080, 1280, 1600, 1920, 2400],
    // Optimised images are cached for 30 days (audit LUM-21)
    minimumCacheTTL: 2592000,
  },
  poweredByHeader: false,
  // Old service addresses → current ones (permanent), so earlier links never 404
  async redirects() {
    return [
      { source: "/sherbimet/ambientet-e-morgut", destination: "/sherbimet/kujdesi-per-te-ndjerin", permanent: true },
      { source: "/sherbimet/procedurat-dhe-dokumentet", destination: "/sherbimet/procedurat-dhe-dokumentacioni", permanent: true },
      { source: "/en/services/mortuary-care", destination: "/en/services/care-of-the-deceased", permanent: true },
    ];
  },
  async headers() {
    // Photos and videos are not content-hashed: rename a file when replacing it.
    const media = "public, max-age=2592000, stale-while-revalidate=86400";
    return [
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: media }] },
      { source: "/video/:path*", headers: [{ key: "Cache-Control", value: media }] },
      {
        // Hardening for every response (audit LUM-14). A full Content-Security-Policy
        // still needs a report-only trial before it can be enforced.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  // Multiple root layouts (sq / en) → one global 404 for unmatched URLs
  experimental: { globalNotFound: true },
};

export default nextConfig;
