import type { siteConfig } from "@/lib/siteConfig";

type Service = (typeof siteConfig)["services"][number];

type Props = {
  service: Service;
  index: number;
  tone?: "dark" | "light";
};

export function ServiceCard({ service, index, tone = "dark" }: Props) {
  const number = String(index + 1).padStart(2, "0");
  const isDark = tone === "dark";

  return (
    <article
      className={`group flex flex-col p-8 md:p-10 border-t transition-colors duration-500 ${
        isDark
          ? "border-[color:var(--color-hairline-dark)] hover:border-[color:var(--color-iron)]"
          : "border-[color:var(--color-hairline)] hover:border-[color:var(--color-iron)]"
      }`}
    >
      <div className="flex items-baseline justify-between mb-8">
        <span className="font-[family-name:var(--font-display)] text-5xl text-[color:var(--color-iron)] leading-none">
          {number}
        </span>
      </div>

      <h3
        className={`font-[family-name:var(--font-display)] text-3xl md:text-4xl leading-tight tracking-tight mb-4 ${
          isDark ? "text-[color:var(--color-parchment)]" : "text-[color:var(--color-ink)]"
        }`}
      >
        {service.title}
      </h3>

      <p
        className={`text-sm leading-relaxed text-pretty mb-8 flex-1 ${
          isDark ? "text-[color:var(--color-mist)]" : "text-[color:var(--color-smoke)]"
        }`}
      >
        {service.summary}
      </p>

      <ul className="space-y-2.5 mt-auto">
        {service.bullets.map((b) => (
          <li
            key={b}
            className={`flex items-start gap-3 text-xs ${
              isDark ? "text-[color:var(--color-mist)]" : "text-[color:var(--color-smoke)]"
            }`}
          >
            <span className="text-[color:var(--color-iron)] shrink-0 mt-px">—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
