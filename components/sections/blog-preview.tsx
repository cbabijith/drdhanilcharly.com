import Link from "next/link";
import Reveal from "@/components/reveal";
import BlogCard from "@/components/blog-card";
import { ArrowRightIcon } from "@/components/icons";
import { latestPosts } from "@/lib/blogs";

export default function BlogPreview() {
  const posts = latestPosts(3);
  return (
    <section className="scroll-mt-24 border-y border-line bg-white py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal variant="fade">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
                From the blog
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-balance mt-4 text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
                Learn from the{" "}
                <span className="text-brand-700 italic">specialist</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160} variant="fade">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50"
            >
              View all articles
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 120} className="h-full">
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
