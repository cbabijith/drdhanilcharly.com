"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/content";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/icons";

const ANCHOR_IDS = navLinks
  .filter((l) => l.href.startsWith("/#"))
  .map((l) => l.href.slice(2));

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy — highlight the nav link for the home-page section in view.
  useEffect(() => {
    if (!isHome) return;
    const sections = ANCHOR_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [isHome]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const isActive = (href: string) =>
    href === "/blogs" ? pathname.startsWith("/blogs") : isHome && active === href.slice(2);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/85 shadow-[0_1px_0_0_var(--color-line),0_12px_32px_-16px_rgb(11_27_51/0.18)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" aria-label={`${site.name} — back to home`} onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt={`${site.name} logo`}
            width={140}
            height={88}
            className="h-11 w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                isActive(link.href) ? "text-brand-700" : "text-ink-soft hover:text-ink"
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand-600 transition-transform duration-300 ${
                  isActive(link.href)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            data-book-appointment
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/25 md:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            Book Appointment
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/80 text-ink backdrop-blur transition-colors hover:bg-brand-50 lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-[4.5rem] z-40 bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col justify-between px-8 pb-16 pt-8">
          <ul className="space-y-2">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
                className={`transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <Link
                  href={link.href}
                  onClick={close}
                  className="group flex items-center justify-between border-b border-line py-4"
                >
                  <span className="font-display text-3xl text-ink transition-colors group-hover:text-brand-700">
                    {link.label}
                  </span>
                  <span className="text-xs font-semibold tracking-widest text-brand-600">
                    0{i + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div
            style={{ transitionDelay: open ? "400ms" : "0ms" }}
            className={`transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <a
              href={site.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-700"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
            <p className="mt-4 text-center text-sm text-ink-soft">
              {site.address.short} · Mon–Sat 9 AM – 5:30 PM
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
