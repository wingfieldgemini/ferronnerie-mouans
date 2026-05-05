import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Required in Next.js 15+ — without this, quality= props are ignored
    qualities: [80, 85, 90, 95],
  },
};

export default config;
