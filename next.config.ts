import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export — deploy the `out/` folder to any static host/CDN.
  output: "export",
  // Images are pre-optimized (WebP, exact sizes) via scripts/optimize-images.mjs,
  // so the built-in optimizer is unnecessary and would block static export.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
