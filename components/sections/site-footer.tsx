import Link from "next/link";
import { doctor, navLinks, services, site } from "@/lib/content";
import { MailIcon, MapPinIcon, PhoneIcon, ArrowUpRightIcon } from "@/components/icons";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-night text-white/70">
      <div aria-hidden className="dot-grid absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl text-white">{site.name}</p>
            <p className="mt-1 text-sm font-medium tracking-wide text-brand-300">
              {doctor.credentials}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Consultant orthopaedic surgeon specialising in shoulder &amp; knee
              arthroscopy, sports injuries, regenerative joint care and complex
              trauma — serving patients from Aswini Hospital, Thrissur.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Specialties
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 4).map((s) => (
                <li key={s.title}>
                  <Link href="/#specialties" className="transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
              Contact
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 transition-colors hover:text-white"
                >
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                  <span>
                    {site.address.short}
                    <span className="mt-1 flex items-center gap-1 font-semibold text-brand-300">
                      Directions
                      <ArrowUpRightIcon className="h-3.5 w-3.5" />
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <span aria-hidden className="text-white/25">·</span>
            <p>Consultations by appointment · {site.address.short}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
