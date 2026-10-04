import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    deviceSizes: [480, 640, 828, 1080, 1280, 1600, 1920, 2400],
  },
  poweredByHeader: false,
  // Multiple root layouts (sq / en) → one global 404 for unmatched URLs
  experimental: { globalNotFound: true },
};

export default nextConfig;
