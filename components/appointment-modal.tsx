"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { CalendarIcon, CheckIcon, CloseIcon, WhatsAppIcon } from "@/components/icons";

/**
 * Global appointment popup.
 *
 * Any element with `data-book-appointment` opens it (click delegation, so
 * server components can trigger it without prop drilling or context).
 * Collects a few patient details plus a preferred date & time slot, then
 * forwards the request to the clinic via a prefilled WhatsApp message —
 * zero backend, zero performance cost.
 */

const TIME_SLOTS = [
  "Morning · 9:00 – 11:00 AM",
  "Midday · 11:00 AM – 1:30 PM",
  "Afternoon · 1:30 – 3:30 PM",
  "Evening · 3:30 – 5:30 PM",
] as const;

const CONCERNS = [
  "Shoulder pain / dislocation",
  "Knee pain / ACL injury",
  "Sports injury",
  "Arthritis / joint pain",
  "Regenerative (PRP) therapy",
  "Other",
] as const;

const inputClasses =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-soft/60 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200";

export default function AppointmentModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Click delegation: any [data-book-appointment] element opens the modal.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if ((e.target as Element).closest("[data-book-appointment]")) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setSent(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    // Slight delay so the opening transition doesn't steal focus mid-animation
    const t = setTimeout(() => firstFieldRef.current?.focus(), 80);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [open, close]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const date = String(data.get("date") ?? "");
    const slot = String(data.get("slot") ?? "");
    const concern = String(data.get("concern") ?? "");
    const notes = String(data.get("notes") ?? "").trim();

    const lines = [
      `Appointment request — ${site.name}`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      concern ? `Concern: ${concern}` : "",
      date ? `Preferred date: ${new Date(`${date}T00:00`).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" })}` : "",
      slot ? `Preferred time: ${slot}` : "",
      notes ? `\nDetails: ${notes}` : "",
    ].filter(Boolean);

    const url = `${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    // New tab when possible; direct navigation if a popup blocker interferes
    // (common in in-app browsers), so the request always gets through.
    const win = window.open(url, "_blank", "noopener");
    if (!win) window.location.href = url;
    setSent(true);
  }

  if (!open) return null;

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-night/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={close}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-title"
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-[1.75rem] border border-line bg-white shadow-2xl animate-[modalIn_.35s_var(--ease-spring)] sm:rounded-[1.75rem]"
      >
        {/* Header */}
        <div className="relative overflow-hidden bg-night px-7 py-6">
          <div aria-hidden className="dot-grid absolute inset-0" />
          <div
            aria-hidden
            className="absolute -top-16 left-1/2 h-32 w-80 -translate-x-1/2 rounded-full bg-brand-500/40 blur-3xl"
          />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-brand-300">
                <CalendarIcon className="h-3.5 w-3.5" />
                Book appointment
              </p>
              <h2 id="appointment-title" className="font-display mt-1.5 text-2xl text-white">
                Request your consultation
              </h2>
              <p className="mt-1 text-sm text-white/60">
                {site.address.short} · Mon–Sat 9 AM – 5:30 PM
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close booking form"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <CloseIcon className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        {/* Body / Success */}
        {sent ? (
          <div className="flex flex-col items-center px-7 py-12 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600/10 text-brand-600">
              <CheckIcon className="h-8 w-8" />
            </span>
            <p className="font-display mt-5 text-2xl text-ink">Request prepared</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
              WhatsApp opened with your details prefilled — press send there and
              the clinic will confirm your slot shortly.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-7 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col overflow-y-auto px-7 py-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink">Your name</span>
                <input
                  ref={firstFieldRef}
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="e.g. Arun Kumar"
                  className={inputClasses}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink">Phone / WhatsApp</span>
                <input
                  required
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[0-9+()\s-]{7,16}"
                  title="Enter a valid phone number"
                  placeholder="+91 ·····"
                  className={inputClasses}
                />
              </label>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink">Preferred date</span>
                <input
                  required
                  type="date"
                  name="date"
                  min={today}
                  className={inputClasses}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-ink">Time slot</span>
                <select
                  required
                  name="slot"
                  defaultValue={TIME_SLOTS[0]}
                  className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2340536f%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10`}
                >
                  {TIME_SLOTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">What concerns you?</span>
              <select
                name="concern"
                defaultValue={CONCERNS[0]}
                className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2340536f%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10`}
              >
                {CONCERNS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-4 block">
              <span className="mb-1.5 block text-sm font-semibold text-ink">
                Anything else? <span className="font-normal text-ink-soft">(optional)</span>
              </span>
              <textarea
                name="notes"
                rows={2}
                placeholder="Briefly describe your symptoms…"
                className={`${inputClasses} resize-none`}
              />
            </label>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/35"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Send request on WhatsApp
            </button>
            <p className="mt-3.5 text-center text-xs leading-relaxed text-ink-soft">
              Opens WhatsApp with your details prefilled — the clinic confirms
              your slot personally. Nothing is stored on this site.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
