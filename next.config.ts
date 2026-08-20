import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standard (non-export) build: every route is still prerendered as static
  // HTML, and Vercel serves them from its edge CDN with immutable asset
  // caching and automatic compression — the fastest setup for this site.
  images: {
    // Edge optimizer negotiates AVIF (30-50% smaller than the source WebP)
    // with automatic fallbacks for older browsers, cached at the CDN edge.
    formats: ["image/avif", "image/webp"],
    qualities: [80],
    minimumCacheTTL: 31536000,
    deviceSizes: [400, 640, 768, 1024, 1280, 1536],
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
