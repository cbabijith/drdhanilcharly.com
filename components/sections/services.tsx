import Image from "next/image";
import Reveal from "@/components/reveal";
import { ArrowUpRightIcon } from "@/components/icons";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="specialties" className="scroll-mt-24 border-y border-line bg-white py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal variant="fade">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
              Specialties
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-balance mt-4 text-[2.05rem] leading-[1.14] tracking-tight sm:leading-[1.1] text-ink sm:text-5xl">
              Advanced care, <span className="text-brand-700 italic">tailored to you</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              From keyhole surgery to regenerative therapy — every treatment plan
              is built around your body, your sport and your recovery.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-600/15">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-700 backdrop-blur">
                    {service.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[1.35rem] leading-snug text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    data-book-appointment
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600"
                    aria-label={`Book a consultation about ${service.title}`}
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
