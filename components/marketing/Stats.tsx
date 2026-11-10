"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Renders the FINAL number by default (so server HTML, crawlers and no-JS
 * visitors see "10+", never "0+"). Once JS runs and the number scrolls into
 * view, it counts up from 0. Skipped for reduced-motion users.
 */
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(target * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {val.toLocaleString("en-GB")}
        {suffix}
      </span>
      <span className="sr-only">
        {target.toLocaleString("en-GB")}
        {suffix}
      </span>
    </>
  );
}

const stats = [
  { target: 10, suffix: "+", label: "Years teaching experience" },
  { target: 150, suffix: "+", label: "Families supported" },
  { target: 50, suffix: "+", label: "Qualified tutors" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 rounded-3xl bg-brand-deepGreen text-white overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-white/15">
      {stats.map((s) => (
        <div key={s.label} className="px-6 py-8 text-center">
          <p className="font-serif text-5xl font-bold text-brand-yellow">
            <CountUp target={s.target} suffix={s.suffix} />
          </p>
          <p className="mt-2 text-sm sm:text-base text-white/85">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
