"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { ArrowRightIcon } from "@/components/icons";

const concerns = [
  "Shoulder pain / dislocation",
  "Knee pain / ACL injury",
  "Sports injury",
  "Arthritis / joint pain",
  "Regenerative (PRP) therapy",
  "Other",
];

const inputClasses =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-soft/60 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState(concerns[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = [
      `Hello, I'd like to book a consultation with ${site.name}.`,
      ``,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Concern: ${concern}`,
      message ? `\nDetails: ${message}` : "",
    ].join("\n");
    window.open(`${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-line bg-white p-7 shadow-2xl shadow-ink/10 sm:p-9"
    >
      <h3 className="font-display text-2xl text-ink">Request an appointment</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        Fill this in and we&apos;ll continue on WhatsApp — the clinic will confirm
        your slot personally.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Your name</span>
          <input
            required
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Arun Kumar"
            className={inputClasses}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Phone</span>
          <input
            required
            type="tel"
            name="phone"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 ·····"
            className={inputClasses}
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-sm font-semibold text-ink">What concerns you?</span>
        <select
          name="concern"
          value={concern}
          onChange={(e) => setConcern(e.target.value)}
          className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2340536f%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10`}
        >
          {concerns.map((c) => (
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
          name="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Briefly describe your symptoms or injury…"
          className={`${inputClasses} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/35"
      >
        Continue on WhatsApp
        <ArrowRightIcon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
      <p className="mt-4 text-center text-xs text-ink-soft">
        Opens WhatsApp with your details prefilled — nothing is stored on this site.
      </p>
    </form>
  );
}
