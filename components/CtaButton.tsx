import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

type Props = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
  withArrow?: boolean;
};

const variantClass: Record<Variant, string> = {
  primary:
    "bg-[color:var(--color-iron)] text-[color:var(--color-parchment)] hover:bg-[color:var(--color-iron-deep)] focus-visible:bg-[color:var(--color-iron-deep)]",
  ghost:
    "bg-transparent text-[color:var(--color-ink)] hover:bg-[color:var(--color-cream)] focus-visible:bg-[color:var(--color-cream)]",
  outline:
    "bg-transparent text-[color:var(--color-ink)] ring-1 ring-[color:var(--color-ink)] hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-parchment)] focus-visible:bg-[color:var(--color-ink)] focus-visible:text-[color:var(--color-parchment)]",
};

export function CtaButton({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
  withArrow = true,
}: Props) {
  const base =
    "group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.16em] transition-colors duration-300 ease-[var(--ease-out-expo)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-iron)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-parchment)]";

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          size={16}
          strokeWidth={1.75}
          className="transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variantClass[variant]} ${className}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variantClass[variant]} ${className}`}>
      {inner}
    </Link>
  );
}
