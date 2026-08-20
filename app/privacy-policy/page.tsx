import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { privacySections } from "@/lib/content";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How drdhanilcharly.com collects, uses and protects visitor data — comments, media, cookies and your rights.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-36 lg:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 right-[-8%] h-96 w-96 rounded-full bg-brand-200/50 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <Reveal variant="fade">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600"
            >
              <ArrowRightIcon className="h-4 w-4 rotate-180" />
              Back to home
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-balance mt-6 text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Privacy <span className="text-brand-700 italic">policy</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              How this website collects, uses and protects your information.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <div className="space-y-10">
            {privacySections.map((section, i) => (
              <Reveal key={section.heading} delay={Math.min(i * 40, 200)}>
                <div className="rounded-3xl border border-line bg-white p-7 sm:p-9">
                  <h2 className="font-display text-2xl text-ink">{section.heading}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="leading-[1.85] text-ink-soft">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
