import Image from "next/image";
import Reveal from "@/components/reveal";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { doctor } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Photo composition */}
        <Reveal variant="left" className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 -translate-x-4 translate-y-4 rounded-[2.4rem] border-2 border-brand-200/80"
            />
            <div className="relative aspect-[2/3] overflow-hidden rounded-[2rem] shadow-xl shadow-ink/15">
              <Image
                src="/images/doctor-about.webp"
                alt="Dr. Dhanil Charly in consultation"
                fill
                sizes="(max-width: 1024px) 80vw, 32vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 w-max -translate-x-1/2 rounded-2xl border border-line bg-white/95 px-6 py-4 text-center shadow-xl shadow-ink/10 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                Consultant at
              </p>
              <p className="font-display text-lg text-ink">Aswini Hospital, Thrissur</p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal variant="fade">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
              About the doctor
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-balance mt-4 text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Surgery with precision.{" "}
              <span className="text-brand-700 italic">Care without compromise.</span>
            </h2>
          </Reveal>

          {doctor.about.map((paragraph, i) => (
            <Reveal key={i} delay={160 + i * 80}>
              <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={320}>
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {doctor.roles.map((role) => (
                <li key={role} className="flex items-center gap-3 text-[0.95rem] font-medium text-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600/10 text-brand-700">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {role}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                data-book-appointment
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/25"
              >
                Book a consultation
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <p className="text-sm font-medium text-ink-soft">{doctor.credentials}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
