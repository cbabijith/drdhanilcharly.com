import Image from "next/image";
import Reveal from "@/components/reveal";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";
import { dislocation } from "@/lib/content";

export default function DislocationSpotlight() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Copy */}
          <div>
            <Reveal variant="fade">
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-brand-700 backdrop-blur">
                {dislocation.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-balance mt-5 text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl">
                {dislocation.heading.split("&")[0]}&amp;
                <span className="text-brand-700 italic">{dislocation.heading.split("&")[1]}</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
                {dislocation.intro}
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {dislocation.reasons.map((r, i) => (
                <Reveal key={r.title} delay={200 + i * 90}>
                  <div className="flex items-start gap-4 rounded-2xl border border-line bg-white/80 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/10">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{r.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{r.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={480} variant="fade">
              <p className="mt-7 border-l-4 border-gold-400 pl-4 text-[0.95rem] italic leading-relaxed text-ink-soft">
                {dislocation.note}
              </p>
            </Reveal>
          </div>

          {/* Imagery */}
          <Reveal delay={200} variant="right" className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2.4rem] border-2 border-dashed border-brand-200"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/20">
                <Image
                  src={dislocation.images.primary}
                  alt={dislocation.images.primaryAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 38vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-3 w-40 overflow-hidden rounded-2xl border-4 border-white shadow-xl shadow-ink/20 sm:-right-6 sm:w-52">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={dislocation.images.secondary}
                    alt={dislocation.images.secondaryAlt}
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Process */}
        <div className="mt-24 lg:mt-32">
          <Reveal variant="fade">
            <h3 className="text-center font-display text-3xl tracking-tight text-ink sm:text-4xl">
              How it <span className="text-brand-700 italic">works</span>
            </h3>
          </Reveal>
          <div className="relative mt-12 grid gap-6 md:grid-cols-3">
            <div
              aria-hidden
              className="absolute left-[16%] right-[16%] top-9 hidden border-t-2 border-dashed border-brand-200 md:block"
            />
            {dislocation.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 140}>
                <div className="relative flex h-full flex-col items-center rounded-3xl border border-line bg-white p-7 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-600/15">
                  <span className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-brand-600 font-display text-2xl text-white shadow-lg shadow-brand-600/30">
                    {i + 1}
                  </span>
                  <p className="mt-5 font-display text-xl text-ink">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} variant="fade">
            <div className="mt-12 text-center">
              <a
                href="#contact"
                data-book-appointment
                className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/35"
              >
                Get expert shoulder care today
                <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
