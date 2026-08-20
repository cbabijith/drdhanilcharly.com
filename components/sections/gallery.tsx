"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/content";
import { CloseIcon, ArrowRightIcon } from "@/components/icons";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length)),
    [],
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    [],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    dialogRef.current?.focus();
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, showPrev, showNext]);

  const current = openIndex !== null ? galleryImages[openIndex] : null;

  return (
    <section id="gallery" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
              Gallery
            </p>
            <h2 className="font-display text-balance mt-4 text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
              Inside the practice,{" "}
              <span className="text-brand-700 italic">close to every patient</span>
            </h2>
          </div>
          <p className="max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
            Consultations, procedures and patient moments from the clinic at
            Aswini Hospital, Thrissur.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="mt-14 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Open image: ${img.alt}`}
              className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-600/20"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={760}
                height={507}
                sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 22vw"
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="absolute bottom-3 left-3 right-3 translate-y-2 text-left text-[0.8rem] font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          tabIndex={-1}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-night/95 p-4 backdrop-blur-md sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 z-10"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 rotate-180 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 z-10"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 z-10"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>

          <figure
            className="max-h-full max-w-4xl animate-[fadeZoom_.4s_var(--ease-out-expo)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={1100}
              height={734}
              className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-2xl"
              priority
            />
            <figcaption className="mt-4 flex items-center justify-between gap-4 text-sm text-white/80">
              <span>{current.alt}</span>
              <span className="shrink-0 tabular-nums text-white/50">
                {(openIndex ?? 0) + 1} / {galleryImages.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
