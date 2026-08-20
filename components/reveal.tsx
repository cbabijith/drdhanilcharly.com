"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode, type RefObject } from "react";
import type { JSX } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds */
  delay?: number;
  variant?: "up" | "fade" | "zoom" | "left" | "right";
  as?: keyof JSX.IntrinsicElements;
};

/**
 * Fades/slides content in the first time it enters the viewport.
 * Styles live in globals.css under `html.js .reveal`, so the page
 * renders fully visible when JS is unavailable.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as RefObject<HTMLDivElement>}
      className={`reveal ${className ?? ""}`}
      data-variant={variant}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
