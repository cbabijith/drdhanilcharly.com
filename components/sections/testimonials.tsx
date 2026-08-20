import Image from "next/image";
import Reveal from "@/components/reveal";
import { QuoteIcon, StarIcon } from "@/components/icons";
import { testimonials } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 border-y border-line bg-white py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal variant="fade">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
                Patient stories
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-balance mt-4 text-[2.05rem] leading-[1.14] tracking-tight sm:leading-[1.1] text-ink sm:text-5xl">
                Trusted by patients{" "}
                <span className="text-brand-700 italic">across Kerala</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160} variant="fade">
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-3.5 shadow-sm">
              <span className="flex gap-0.5 text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              <span className="text-sm font-semibold text-ink">5.0 rated care</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-600/10">
                <QuoteIcon className="h-8 w-8 text-brand-200" />
                <span className="mt-4 flex gap-1 text-gold-400" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4" />
                  ))}
                </span>
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink-soft">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  {t.avatar ? (
                    <Image
                      src={t.avatar}
                      alt={`Photo of ${t.name}`}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-100"
                    />
                  ) : (
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600/10 text-sm font-bold text-brand-700 ring-2 ring-brand-100">
                      {initials(t.name)}
                    </span>
                  )}
                  <span>
                    <span className="block text-sm font-semibold text-ink">{t.name}</span>
                    <span className="block text-xs text-ink-soft">Verified patient</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
