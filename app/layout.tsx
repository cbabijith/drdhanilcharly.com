import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/lib/content";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/sections/site-footer";
import MobileActionBar from "@/components/mobile-action-bar";
import AppointmentModal from "@/components/appointment-modal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Static 400 normal + italic only (headings are never bold) — a fraction of
// the full variable font, and true italics instead of synthetic ones.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dr. Dhanil Charly | Orthopaedic & Sports Surgeon, Thrissur",
    template: "%s | Dr. Dhanil Charly",
  },
  description: site.description,
  keywords: [
    "orthopedic doctor Thrissur",
    "knee specialist Thrissur",
    "shoulder arthroscopy Kerala",
    "sports surgeon Thrissur",
    "ACL surgery Thrissur",
    "regenerative orthopedics PRP",
    "Dr Dhanil Charly",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Dr. Dhanil Charly | Orthopaedic & Sports Surgeon, Thrissur",
    description: site.description,
    images: [{ url: "/images/doctor-hero.webp", width: 1000, height: 1000 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Dhanil Charly | Orthopaedic & Sports Surgeon, Thrissur",
    description: site.description,
  },
  icons: {
    icon: [
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/images/logo.png", type: "image/png", sizes: "300x188" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f7490",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Dhanil Charly",
  medicalSpecialty: ["Orthopedic", "SportsMedicine"],
  description: site.description,
  url: site.url,
  telephone: "+918078890229",
  email: site.email,
  image: `${site.url}/images/doctor-hero.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Aswini Hospital Limited, Aswini Junction, Karunakaran Nambiar Rd",
    addressLocality: "Thrissur",
    addressRegion: "Kerala",
    postalCode: "680020",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "13:00",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        <script
          // Gates scroll-reveal styles so content is never hidden without JS.
          dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js")` }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <MobileActionBar />
        <AppointmentModal />
      </body>
    </html>
  );
}
