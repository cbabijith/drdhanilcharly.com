import Reveal from "@/components/reveal";
import { PhoneIcon, WhatsAppIcon, MapPinIcon, CalendarIcon } from "@/components/icons";
import { site } from "@/lib/content";

export default function CtaBand() {
  return (
    <section className="px-5 pb-24 sm:px-8 lg:pb-32">
      <Reveal variant="zoom" className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-night px-6 py-16 text-center sm:px-12 lg:py-24">
          <div aria-hidden className="dot-grid absolute inset-0" />
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/30 blur-3xl"
          />
          <div className="relative">
            <Reveal variant="fade">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
                Take the first step
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-balance mx-auto mt-4 max-w-3xl text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ready to move{" "}
                <span className="text-brand-300 italic">without pain?</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                Book a consultation today — most patients are seen within the
                week, and every plan starts with listening.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  data-book-appointment
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-night transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/20 sm:w-auto"
                >
                  <CalendarIcon className="h-5 w-5 text-brand-600" />
                  Book your appointment
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300/60 hover:bg-white/10 sm:w-auto"
                >
                  <PhoneIcon className="h-5 w-5 text-brand-300" />
                  {site.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={400} variant="fade">
              <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/60">
                <MapPinIcon className="h-4 w-4 text-brand-300" />
                {site.address.short} · Mon–Sat 9 AM – 5:30 PM
              </p>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
