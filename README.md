# Dr. Dhanil Charly — Practice Website

A modern, premium rebuild of [drdhanilcharly.com](https://drdhanilcharly.com/) as a
fully static Next.js site — cleaner design, tasteful motion, and near-instant loads.

## Stack

- **Next.js 16** (App Router, `output: "export"` → pure static HTML in `out/`)
- **Tailwind CSS v4** (design tokens + animation library in `app/globals.css`)
- **Bun** as the package manager and script runner
- **Fraunces + Inter** self-hosted via `next/font`
- Zero animation libraries — all motion is CSS + a tiny IntersectionObserver reveal

## Develop

```bash
bun install
bun run dev        # http://localhost:3000
```

## Build & deploy

```bash
bun run build      # production build (all routes prerendered static)
bun run start      # serve the production build locally (what Vercel runs)
```

### Deploy on Vercel (recommended)

The repo is Vercel-ready with zero configuration:

1. Push to GitHub (this repo: `git@github.com:cbabijith/drdhanilcharly.com.git`).
2. In Vercel: **Add New → Project → Import** the GitHub repo.
3. Vercel auto-detects Next.js + Bun — just click **Deploy**.
4. Optional: add the custom domain `drdhanilcharly.com` in
   **Project → Settings → Domains** and point DNS at Vercel.

Every `git push` to `main` deploys production automatically; pull requests get
preview deployments.

Performance choices baked in:

- Every route is prerendered static HTML served from Vercel's edge CDN.
- Images are pre-optimized WebP at exact render sizes and served with a
  `Cache-Control: immutable` one-year cache — no on-demand transform hop.
- Fonts are self-hosted via `next/font` (no external requests, no layout shift).
- No animation/UI libraries — all motion is CSS + one tiny IntersectionObserver.
- Security headers (`X-Content-Type-Options`, `Referrer-Policy`,
  `X-Frame-Options`) and `poweredByHeader: false` are set in `next.config.ts`.

## Structure

```
app/
  layout.tsx           # shared header/footer, fonts, SEO metadata, JSON-LD
  page.tsx             # home: hero, marquee, about, expertise, services,
                       #   dislocation spotlight, testimonials, gallery,
                       #   blog preview, CTA, contact
  blogs/page.tsx       # article listing
  blogs/[slug]/        # 6 full article pages
  privacy-policy/      # privacy policy page
  globals.css          # theme tokens, keyframes, scroll-reveal system
components/
  site-header.tsx      # sticky glass nav, scrollspy, mobile menu
  mobile-action-bar.tsx# sticky Call/WhatsApp/Book bar (phones)
  reveal.tsx           # IntersectionObserver scroll-reveal wrapper
  booking-form.tsx     # appointment form → prefilled WhatsApp message
  lightbox gallery     # components/sections/gallery.tsx
  icons.tsx            # inline SVG icon set (no icon library)
  sections/            # hero, marquee, about, expertise, services,
                       #   dislocation-spotlight, testimonials, gallery,
                       #   blog-preview, cta-band, contact, site-footer
lib/content.ts         # site copy, services, expertise, dislocation,
                       #   gallery, testimonials, contact info, privacy
lib/blogs.ts           # all 6 blog articles (full content)
scripts/optimize-images.mjs  # regenerates public/images from _assets (sharp)
_assets/               # original images downloaded from the live site
```

## Editing content

All text (doctor bio, services, testimonials, phone/hours/address) lives in
`lib/content.ts` — change it there and every section updates.

## Notes

- Images are pre-optimized WebP at exact render sizes; rerun
  `node scripts/optimize-images.mjs` only after replacing files in `_assets/`.
- Scroll reveals are progressive enhancement: content renders fully visible
  without JS or with `prefers-reduced-motion`.
