import { marqueeItems } from "@/lib/content";
import { PlusIcon } from "@/components/icons";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <section
      aria-label="Areas of expertise"
      className="relative overflow-hidden border-y border-white/10 bg-night py-5"
    >
      <div className="flex w-max animate-marquee gap-0 hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= marqueeItems.length}
            className="flex items-center gap-6 pr-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-200/90"
          >
            {item}
            <PlusIcon className="h-3.5 w-3.5 text-gold-400" />
          </span>
        ))}
      </div>
      {/* Edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-night to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-night to-transparent"
      />
    </section>
  );
}
