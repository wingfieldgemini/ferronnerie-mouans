import type { ReactNode } from "react";

type Tone = "light" | "cream" | "dark";

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
  light: "bg-parchment text-ink",
  cream: "bg-cream text-ink",
  dark: "bg-ink text-parchment",
};

const eyebrowColor: Record<Tone, string> = {
  light: "text-[color:var(--color-iron)]",
  cream: "text-[color:var(--color-iron-deep)]",
  dark: "text-[color:var(--color-ember)]",
};

const kickerColor: Record<Tone, string> = {
  light: "text-[color:var(--color-smoke)]",
  cream: "text-[color:var(--color-smoke)]",
  dark: "text-[color:var(--color-mist)]",
};

export function Section({
  eyebrow,
  title,
  kicker,
  children,
  tone = "dark",
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
              {eyebrow && (
                <p className={`eyebrow mb-6 md:mb-8 ${eyebrowColor[tone]}`}>
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="text-balance text-[length:var(--text-h2)] leading-[0.95] tracking-[-0.025em]">
                  {title}
                </h2>
              )}
            </div>
            {kicker && (
              <p
                className={`lg:col-span-5 text-pretty text-base md:text-lg leading-relaxed lg:max-w-md lg:justify-self-end ${kickerColor[tone]}`}
              >
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
