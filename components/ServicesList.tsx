"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import type { siteConfig } from "@/lib/siteConfig";

type Service = (typeof siteConfig)["services"][number];

interface Props {
  services: ReadonlyArray<Service>;
  tone?: "dark" | "light";
  withLinks?: boolean;
}

export function ServicesList({ services, tone = "dark", withLinks = false }: Props) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const isDark = tone === "dark";
  const borderColor = isDark
    ? "border-[color:var(--color-hairline-dark)]"
    : "border-[color:var(--color-hairline)]";
  const titleColor = isDark
    ? "text-[color:var(--color-parchment)]"
    : "text-[color:var(--color-ink)]";
  const bodyColor = isDark
    ? "text-[color:var(--color-mist)]"
    : "text-[color:var(--color-smoke)]";

  return (
    <ul className={`border-t ${borderColor}`}>
      {services.map((service, i) => {
        const n = String(i + 1).padStart(2, "0");
        const isOpen = openSlug === service.slug;

        return (
          <li key={service.slug} className={`border-b ${borderColor}`}>
            {/* Row — button for full a11y + touch support */}
            <button
              type="button"
              onClick={() => setOpenSlug(isOpen ? null : service.slug)}
              aria-expanded={isOpen}
              aria-controls={`service-${service.slug}-content`}
              className={`w-full flex items-center justify-between py-7 md:py-11 gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-iron)] focus-visible:ring-inset transition-colors duration-300 ${
                isOpen ? "opacity-100" : ""
              }`}
            >
              <div className="flex items-baseline gap-5 md:gap-12 min-w-0">
                <span
                  className="font-[family-name:var(--font-display)] text-[color:var(--color-iron)] shrink-0 leading-tight italic tracking-[-0.025em]"
                  style={{ fontSize: "var(--text-h2)" }}
                >
                  {n}
                </span>
                <span
                  className={`font-[family-name:var(--font-display)] leading-tight tracking-[-0.025em] transition-colors duration-300 min-w-0 break-words ${
                    isOpen
                      ? "text-[color:var(--color-iron)]"
                      : `${titleColor} group-hover:text-[color:var(--color-iron)]`
                  }`}
                  style={{ fontSize: "var(--text-h2)" }}
                >
                  {service.title}
                </span>
              </div>

              {/* Toggle icon */}
              <span
                className={`shrink-0 text-[color:var(--color-iron)] transition-transform duration-300 ${
                  isOpen ? "rotate-0" : ""
                }`}
                aria-hidden
              >
                {isOpen ? (
                  <Minus size={20} strokeWidth={1.5} />
                ) : (
                  <Plus size={20} strokeWidth={1.5} />
                )}
              </span>
            </button>

            {/* Expandable detail */}
            <div
              id={`service-${service.slug}-content`}
              className={`grid transition-all duration-500 ease-[var(--ease-out-expo)] overflow-hidden ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`pb-8 md:pb-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 ${bodyColor}`}
                >
                  <p className="text-sm md:text-base leading-relaxed text-pretty">
                    {service.summary}
                  </p>
                  <div>
                    <ul className="space-y-3">
                      {service.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3.5 text-xs leading-relaxed"
                        >
                          <span className="text-[color:var(--color-iron)] shrink-0 mt-0.5">
                            —
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {withLinks && (
                      <div className="mt-6 md:mt-8">
                        <Link
                          href={`/services/${service.slug}`}
                          className="group/link inline-flex items-center gap-2 eyebrow text-[10px] text-[color:var(--color-iron)] hover:text-[color:var(--color-ember)] transition-colors duration-300 py-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Découvrir ce service
                          <ArrowUpRight
                            size={11}
                            strokeWidth={2}
                            className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                          />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
