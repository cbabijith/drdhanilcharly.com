import Image from "next/image";
import Reveal from "@/components/reveal";
import { ArrowUpRightIcon } from "@/components/icons";
import { expertiseAreas } from "@/lib/content";

const spans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative scroll-mt-24 overflow-hidden bg-night py-24 text-white lg:py-32">
      <div aria-hidden className="dot-grid absolute inset-0" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal variant="fade">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
              Areas of expertise
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-balance mt-4 text-4xl leading-[1.1] tracking-tight sm:text-5xl">
              Five specialities.{" "}
              <span className="text-brand-300 italic">One standard: excellence.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg leading-relaxed text-white/65">
              Fellowship-trained across the full spectrum of shoulder, knee and
              sports orthopaedics — from keyhole surgery to regenerative joint
              preservation.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {expertiseAreas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 3) * 100} className={`h-full ${spans[i]}`}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-night-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-300/40 hover:shadow-2xl hover:shadow-brand-500/20">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.imageAlt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-night-soft via-night-soft/20 to-transparent"
                  />
                  <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 font-display text-sm text-brand-200 backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl leading-snug text-white">
                    {area.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-white/65">
                    {area.description}
                  </p>
                  <a
                    href="#contact"
                    data-book-appointment
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors hover:text-brand-200"
                    aria-label={`Book a consultation about ${area.title}`}
                  >
                    Book consultation
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
