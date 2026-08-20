import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import type { BlogPost } from "@/lib/blogs";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        href={`/blogs/${post.slug}`}
        className="relative block overflow-hidden rounded-3xl border border-line"
        aria-label={`Read article: ${post.title}`}
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-brand-700 backdrop-blur">
            {post.category}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <p className="text-xs font-medium uppercase tracking-widest text-ink-soft">
          {post.dateDisplay} · {post.readingTime}
        </p>
        <h3 className="font-display mt-2 text-xl leading-snug text-ink">
          <Link href={`/blogs/${post.slug}`} className="transition-colors group-hover:text-brand-700">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-ink-soft">
          {post.excerpt}
        </p>
        <Link
          href={`/blogs/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600"
        >
          Read article
          <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
