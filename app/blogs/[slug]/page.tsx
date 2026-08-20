import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import { blogPosts, getPost } from "@/lib/blogs";
import { site } from "@/lib/content";
import { ArrowRightIcon, ArrowUpRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import type { Block } from "@/lib/blogs";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.cover }],
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.t) {
    case "h2":
      return (
        <h2 key={i} className="font-display mt-12 text-3xl tracking-tight text-ink first:mt-0">
          {block.v}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="mt-8 text-xl font-semibold text-ink">
          {block.v}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="mt-5 leading-[1.85] text-ink-soft">
          {block.v}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 space-y-2.5">
          {block.v.map((item, j) => (
            <li key={j} className="flex items-start gap-3 leading-relaxed text-ink-soft">
              <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="mt-8 rounded-2xl border-l-4 border-gold-400 bg-brand-50 px-6 py-5 font-display text-lg italic leading-relaxed text-ink"
        >
          {block.v}
        </blockquote>
      );
    case "img":
      return (
        <div key={i} className="relative mt-8 aspect-[3/2] overflow-hidden rounded-3xl border border-line">
          <Image
            src={block.src}
            alt={block.alt}
            fill
            sizes="(max-width: 768px) 92vw, 768px"
            className="object-cover"
          />
        </div>
      );
    case "table":
      return (
        <div key={i} className="mt-8 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="bg-night text-white">
                {block.head.map((h, j) => (
                  <th key={j} className="px-5 py-3.5 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j} className={j % 2 === 0 ? "bg-white" : "bg-paper"}>
                  {row.map((cell, k) => (
                    <td key={k} className={`px-5 py-3.5 ${k === 0 ? "font-semibold text-ink" : "text-ink-soft"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default async function BlogArticlePage({
  params,
}: PageProps<"/blogs/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);
  const fallback = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const suggestions = related.length > 0 ? related : fallback;

  return (
    <>
      <article className="pb-20 pt-36 lg:pt-44">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <Reveal variant="fade">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600"
            >
              <ArrowRightIcon className="h-4 w-4 rotate-180" />
              All articles
            </Link>
          </Reveal>

          <header className="mt-6">
            <Reveal variant="fade">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest">
                <span className="rounded-full bg-brand-600/10 px-3 py-1 text-brand-700">
                  {post.category}
                </span>
                <span className="text-ink-soft">
                  {post.dateDisplay} · {post.readingTime}
                </span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-balance mt-5 text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 border-l-4 border-brand-200 pl-5 text-lg leading-relaxed text-ink-soft">
                {post.excerpt}
              </p>
            </Reveal>
          </header>

          <Reveal delay={200} variant="zoom">
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-line shadow-2xl shadow-ink/10">
              <Image
                src={post.cover}
                alt={post.coverAlt}
                fill
                sizes="(max-width: 768px) 92vw, 768px"
                className="object-cover"
                preload
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12">{post.blocks.map(renderBlock)}</div>
          </Reveal>

          {/* Article CTA */}
          <Reveal variant="fade">
            <div className="relative mt-16 overflow-hidden rounded-3xl bg-night p-8 sm:p-10">
              <div aria-hidden className="dot-grid absolute inset-0" />
              <div
                aria-hidden
                className="absolute -top-24 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/25 blur-3xl"
              />
              <div className="relative text-center">
                <p className="font-display text-2xl text-white sm:text-3xl">
                  Experiencing shoulder or knee pain?
                </p>
                <p className="mt-3 text-white/65">
                  Book a consultation with {site.name} at {site.address.short}.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-night transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/20"
                  >
                    <PhoneIcon className="h-4 w-4 text-brand-600" />
                    Call {site.phoneDisplay}
                  </a>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300/60 hover:bg-white/10"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-brand-300" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Related */}
      {suggestions.length > 0 && (
        <section className="border-t border-line bg-white py-16 lg:py-20">
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              Keep <span className="text-brand-700 italic">reading</span>
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {suggestions.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blogs/${p.slug}`}
                  className="group flex items-center gap-5 rounded-3xl border border-line bg-paper p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/10"
                >
                  <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src={p.cover}
                      alt={p.coverAlt}
                      fill
                      sizes="120px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-bold uppercase tracking-widest text-brand-600">
                      {p.category}
                    </p>
                    <p className="mt-1 line-clamp-2 font-semibold leading-snug text-ink group-hover:text-brand-700">
                      {p.title}
                    </p>
                  </div>
                  <ArrowUpRightIcon className="ml-auto h-5 w-5 shrink-0 text-ink-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-700" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
