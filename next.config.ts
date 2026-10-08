import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    deviceSizes: [480, 640, 828, 1080, 1280, 1600, 1920, 2400],
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
  // Multiple root layouts (sq / en) → one global 404 for unmatched URLs
  experimental: { globalNotFound: true },
};

export default nextConfig;
