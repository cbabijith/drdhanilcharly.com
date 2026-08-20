import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standard (non-export) build: every route is still prerendered as static
  // HTML, and Vercel serves them from its edge CDN with immutable asset
  // caching and automatic compression — the fastest setup for this site.
  //
  // Images are pre-optimized (WebP, exact render sizes) via
  // scripts/optimize-images.mjs, so the built-in optimizer is unnecessary —
  // direct immutable CDN delivery is faster than on-demand transforms.
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Pre-optimized images never change → cache them forever.
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
