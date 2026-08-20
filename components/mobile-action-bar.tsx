"use client";

import { site } from "@/lib/content";
import { CalendarIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

/**
 * Sticky bottom action bar for phones — the three actions patients
 * need most, always one tap away. Hidden from md upwards.
 */
export default function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 md:hidden"
      role="navigation"
      aria-label="Quick contact actions"
    >
      <div className="border-t border-line bg-white/90 shadow-[0_-8px_30px_-12px_rgb(11_27_51/0.25)] backdrop-blur-xl pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-3">
          <a
            href={site.phoneHref}
            className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-semibold text-ink transition-colors active:bg-brand-50"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600/10 text-brand-700">
              <PhoneIcon className="h-4 w-4" />
            </span>
            Call
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-semibold text-ink transition-colors active:bg-brand-50"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600/10 text-brand-700">
              <WhatsAppIcon className="h-4 w-4" />
            </span>
            WhatsApp
          </a>
          <a
            href="/#contact"
            data-book-appointment
            className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-semibold text-ink transition-colors active:bg-brand-50"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white shadow-md shadow-brand-600/30">
              <CalendarIcon className="h-4 w-4" />
            </span>
            Book
          </a>
        </div>
      </div>
    </div>
  );
}
