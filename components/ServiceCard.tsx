import { Check } from "lucide-react";
import type { siteConfig } from "@/lib/siteConfig";

type Service = (typeof siteConfig)["services"][number];

type Props = {
  service: Service;
  index: number;
};

export function ServiceCard({ service, index }: Props) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative flex flex-col h-full bg-[color:var(--color-parchment)] border border-[color:var(--color-hairline)] p-8 md:p-10 transition-colors duration-500 hover:border-[color:var(--color-iron)]">
      <div className="flex items-baseline justify-between gap-6 mb-8">
        <span className="font-[family-name:var(--font-display)] text-5xl text-[color:var(--color-iron)] leading-none">
          {number}
        </span>
        <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mist)]">
          / Savoir-faire
        </span>
      </div>

      <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl leading-[1.05] tracking-tight mb-5">
        {service.title}
      </h3>

      <p className="text-[color:var(--color-smoke)] text-base leading-relaxed mb-8 text-pretty">
        {service.summary}
      </p>

      <ul className="mt-auto space-y-3 pt-6 border-t border-[color:var(--color-hairline)]">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-[color:var(--color-smoke)]">
            <Check
              size={16}
              strokeWidth={1.75}
              className="mt-0.5 shrink-0 text-[color:var(--color-iron)]"
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
