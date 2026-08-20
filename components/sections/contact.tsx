import Reveal from "@/components/reveal";
import BookingForm from "@/components/booking-form";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  ArrowUpRightIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { site } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line bg-white py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Info */}
        <div>
          <Reveal variant="fade">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
              Visit or call
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-balance mt-4 text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Book your <span className="text-brand-700 italic">consultation</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">
              Consultations are at Aswini Hospital in central Thrissur. Call,
              message or drop by — we&apos;ll make sure you&apos;re seen promptly.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Reveal delay={200} className="h-full">
              <a
                href={site.phoneHref}
                className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-ink-soft">
                    Call
                  </span>
                  <span className="mt-1 block font-semibold text-ink group-hover:text-brand-700">
                    {site.phoneDisplay}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={280} className="h-full">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-ink-soft">
                    WhatsApp
                  </span>
                  <span className="mt-1 block font-semibold text-ink group-hover:text-brand-700">
                    Message the clinic
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={360} className="h-full sm:col-span-2">
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-start gap-3 rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-ink-soft">
                    Visit
                  </span>
                  <span className="mt-1 block leading-relaxed text-ink">
                    {site.address.lines.join(", ")}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    Get directions
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={440} className="h-full sm:col-span-2">
              <div className="flex h-full items-start gap-3 rounded-2xl border border-line bg-paper p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-ink-soft">
                    Consulting hours
                  </span>
                  <dl className="mt-1 space-y-1">
                    {site.hours.map((h) => (
                      <div key={h.days} className="flex items-baseline justify-between gap-4 text-ink">
                        <dt className="font-medium">{h.days}</dt>
                        <dd className="text-ink-soft">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={500} variant="fade">
            <p className="mt-6 flex items-center gap-2 text-sm text-ink-soft">
              <MailIcon className="h-4 w-4 text-brand-600" />
              Prefer email?{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-brand-700 hover:underline">
                {site.email}
              </a>
            </p>
          </Reveal>
        </div>

        {/* Booking form */}
        <Reveal delay={200} variant="right">
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
