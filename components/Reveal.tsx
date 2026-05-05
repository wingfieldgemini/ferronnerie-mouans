"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "up" | "x";
}

export function Reveal({ children, delay = 0, className = "", variant = "up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = "";
          obs.unobserve(el);
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -48px 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${variant === "x" ? "reveal-x" : "reveal"} ${className}`}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
