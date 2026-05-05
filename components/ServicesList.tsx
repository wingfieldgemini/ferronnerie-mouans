import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { siteConfig } from "@/lib/siteConfig";

type Service = (typeof siteConfig)["services"][number];

interface Props {
  services: ReadonlyArray<Service>;
  tone?: "dark" | "light";
  withLinks?: boolean;
}

export function ServicesList({ services, tone = "dark", withLinks = false }: Props) {
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
        return (
          <li key={service.slug} className={`group border-b ${borderColor}`}>
            {/* Row */}
            <div className="flex items-center justify-between py-9 md:py-11 gap-6 cursor-default">
              <div className="flex items-baseline gap-6 md:gap-12 min-w-0">
                <span
                  className="font-[family-name:var(--font-display)] text-[color:var(--color-iron)] shrink-0 leading-none italic"
                  style={{ fontSize: "clamp(1rem, 0.75rem + 0.75vw, 1.375rem)" }}
                >
                  {n}
                </span>
                <span
                  className={`font-[family-name:var(--font-display)] leading-tight tracking-[-0.025em] transition-colors duration-500 group-hover:text-[color:var(--color-iron)] truncate ${titleColor}`}
                  style={{ fontSize: "clamp(1.75rem, 0.75rem + 3.5vw, 4rem)" }}
                >
                  {service.title}
                </span>
              </div>
              <ArrowUpRight
                size={24}
                strokeWidth={1.25}
                className="shrink-0 text-[color:var(--color-iron)] opacity-0 translate-x-1.5 -translate-y-1.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-[var(--ease-out-expo)]"
              />
            </div>

            {/* Expandable detail — hover + focus-within accordion */}
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] transition-all duration-700 ease-[var(--ease-out-expo)] overflow-hidden">
              <div className="overflow-hidden">
                <div
                  className={`pb-10 md:pb-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 ${bodyColor}`}
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
                      <div className="mt-8">
                        <Link
                          href={`/services/${service.slug}`}
                          className="group/link inline-flex items-center gap-2 eyebrow text-[9px] text-[color:var(--color-iron)] hover:text-[color:var(--color-ember)] transition-colors duration-300"
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
