import Image from "next/image";
import Reveal from "@/components/reveal";
import { ArrowRightIcon, PhoneIcon, SparkleIcon, ActivityIcon, ShieldIcon } from "@/components/icons";
import { doctor, heroHighlights, site } from "@/lib/content";

const highlightIcons = [ActivityIcon, ShieldIcon, SparkleIcon];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-brand-200/45 blur-3xl animate-blob" />
        <div className="absolute bottom-[-30%] left-[-12%] h-[30rem] w-[30rem] rounded-full bg-brand-100/70 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(11 27 51 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(11 27 51 / 0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 0%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-40">
        {/* Copy */}
        <div className="max-w-2xl">
          <Reveal variant="fade">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white/70 py-1.5 pl-2 pr-4 text-[0.8rem] font-semibold tracking-wide text-brand-700 backdrop-blur">
              <span className="relative flex h-5 w-5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400/50 animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
              </span>
              Fellowship-trained Arthroscopy &amp; Sports Surgeon
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-balance mt-6 text-[2.75rem] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.4rem]">
              Precision care for{" "}
              <span className="relative whitespace-nowrap text-brand-700 italic">
                shoulders
              </span>{" "}
              &amp;{" "}
              <span className="relative whitespace-nowrap text-brand-700 italic">
                knees
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Advanced keyhole surgery, sports medicine and regenerative joint
              care in Thrissur — personalised treatment that gets you back to
              the life you love.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                data-book-appointment
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/35"
              >
                Book a Consultation
                <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/70 px-7 py-3.5 text-base font-semibold text-ink backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50"
              >
                <PhoneIcon className="h-4.5 w-4.5 text-brand-600" />
                {site.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-9 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-ink-soft">
              <span className="text-ink">{doctor.name}</span>
              <span aria-hidden className="text-brand-400">—</span>
              {doctor.credentials.split(" · ").map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5">
                  <span aria-hidden className="h-1 w-1 rounded-full bg-gold-400" />
                  {c}
                </span>
              ))}
            </p>
          </Reveal>
        </div>

        {/* Portrait composition */}
        <Reveal delay={250} variant="zoom" className="relative mx-auto w-full max-w-[26rem] lg:max-w-[30rem]">
          <div className="relative">
            {/* Spinning dashed halo */}
            <div
              aria-hidden
              className="absolute -left-4 -top-6 h-32 w-32 rounded-full border-2 border-dashed border-brand-300/70 animate-spin-slow sm:-left-10 sm:-top-10 sm:h-40 sm:w-40"
            />
            <div
              aria-hidden
              className="absolute -bottom-8 -right-2 font-display text-8xl leading-none text-brand-200 select-none sm:-right-6"
            >
              +
            </div>

            <div className="relative overflow-hidden rounded-t-[11rem] rounded-b-[2rem] border-[6px] border-white shadow-2xl shadow-ink/20 ring-1 ring-brand-200/80">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/doctor-hero.webp"
                  alt="Portrait of Dr. Dhanil Charly, consultant orthopaedic surgeon"
                  fill
                  sizes="(max-width: 1024px) 90vw, 34vw"
                  className="object-cover object-top"
                  preload
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-brand-900/25 via-transparent to-transparent"
                />
              </div>
            </div>

            {/* Floating highlight cards */}
            {heroHighlights.map((h, i) => {
              const Icon = highlightIcons[i] ?? ActivityIcon;
              const pos = [
                "left-0 top-[16%] -translate-x-[10%] sm:-translate-x-[22%]",
                "right-0 top-[46%] translate-x-[8%] sm:translate-x-[18%]",
                "bottom-[8%] left-[4%] sm:left-[8%]",
              ][i];
              return (
                <div
                  key={h.label}
                  className={`absolute ${pos} flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 shadow-xl shadow-ink/10 backdrop-blur-md animate-float`}
                  style={{ animationDelay: `${i * 1.6}s` }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{h.label}</span>
                    <span className="block text-xs text-ink-soft">{h.sub}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
