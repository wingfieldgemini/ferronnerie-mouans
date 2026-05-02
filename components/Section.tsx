import type { ReactNode } from "react";

type Tone = "parchment" | "cream" | "ink";

type Props = {
  eyebrow?: string;
  title?: ReactNode;
  kicker?: ReactNode;
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
};

const toneClass: Record<Tone, string> = {
  parchment: "bg-parchment text-ink",
  cream: "bg-cream text-ink",
  ink: "bg-ink text-parchment",
};

export function Section({
  eyebrow,
  title,
  kicker,
  children,
  tone = "parchment",
  id,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`relative py-[var(--space-section)] ${toneClass[tone]} ${className}`}
    >
      <div className="container-page relative z-10">
        {(eyebrow || title || kicker) && (
          <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-24 items-end">
            <div className="lg:col-span-7">
              {eyebrow && <p className="eyebrow mb-8">{eyebrow}</p>}
              {title && (
                <h2 className="text-balance text-[length:var(--text-h2)] leading-[0.98] tracking-[-0.025em] font-medium">
                  {title}
                </h2>
              )}
            </div>
            {kicker && (
              <p className="lg:col-span-5 text-pretty text-base md:text-lg text-[color:var(--color-smoke)] leading-relaxed lg:max-w-md lg:justify-self-end">
                {kicker}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
