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
          <header className="max-w-3xl mb-14 md:mb-20">
            {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
            {title && (
              <h2 className="text-balance text-[length:var(--text-h2)] leading-[1.05] tracking-tight">
                {title}
              </h2>
            )}
            {kicker && (
              <p className="mt-6 text-pretty text-lg md:text-xl text-[color:var(--color-smoke)] max-w-2xl">
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
