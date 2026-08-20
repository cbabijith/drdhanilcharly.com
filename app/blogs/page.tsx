import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/reveal";
import BlogCard from "@/components/blog-card";
import { blogPosts } from "@/lib/blogs";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Blog — Shoulder & Knee Health Articles",
  description:
    "Expert articles by Dr. Dhanil Charly on rotator cuff tears, shoulder dislocation, non-surgical treatments, PRP therapy and injury prevention.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden pb-14 pt-36 lg:pb-20 lg:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 right-[-8%] h-96 w-96 rounded-full bg-brand-200/50 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(11 27 51 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(11 27 51 / 0.04) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%)",
            }}
          />
        </div>
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
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
            <h1 className="font-display text-balance mt-6 max-w-3xl text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
              The specialist&apos;s{" "}
              <span className="text-brand-700 italic">journal</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Straightforward, expert guidance on shoulder and knee health —
              written by Dr. Dhanil Charly for real patients.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 100} className="h-full">
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
