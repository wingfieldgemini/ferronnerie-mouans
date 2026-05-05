import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline" | "text";

interface Props {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
  withArrow?: boolean;
  onDark?: boolean;
}

export function CtaButton({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
  withArrow = true,
  onDark = true,
}: Props) {
  const base =
    "group inline-flex items-center gap-2.5 label transition-all duration-300 ease-[var(--ease-out-expo)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants: Record<Variant, string> = {
    primary: [
      "px-7 py-3.5",
      "bg-[color:var(--color-iron)] text-[color:var(--color-ink)]",
      "hover:bg-[color:var(--color-iron-deep)]",
      "focus-visible:ring-[color:var(--color-iron)]",
      onDark
        ? "focus-visible:ring-offset-[color:var(--color-ink)]"
        : "focus-visible:ring-offset-[color:var(--color-parchment)]",
    ].join(" "),

    ghost: [
      "px-7 py-3.5",
      "bg-transparent",
      onDark
        ? "text-[color:var(--color-parchment)] hover:text-[color:var(--color-iron)]"
        : "text-[color:var(--color-ink)] hover:text-[color:var(--color-iron)]",
      "focus-visible:ring-[color:var(--color-iron)]",
      onDark
        ? "focus-visible:ring-offset-[color:var(--color-ink)]"
        : "focus-visible:ring-offset-[color:var(--color-parchment)]",
    ].join(" "),

    outline: [
      "px-7 py-3.5",
      "bg-transparent ring-1",
      onDark
        ? "ring-[color:var(--color-parchment)]/25 text-[color:var(--color-parchment)] hover:ring-[color:var(--color-iron)] hover:text-[color:var(--color-iron)]"
        : "ring-[color:var(--color-ink)]/30 text-[color:var(--color-ink)] hover:ring-[color:var(--color-iron)] hover:text-[color:var(--color-iron)]",
      "focus-visible:ring-[color:var(--color-iron)]",
      onDark
        ? "focus-visible:ring-offset-[color:var(--color-ink)]"
        : "focus-visible:ring-offset-[color:var(--color-parchment)]",
    ].join(" "),

    text: [
      "gap-1.5",
      "bg-transparent",
      onDark
        ? "text-[color:var(--color-mist)] hover:text-[color:var(--color-parchment)]"
        : "text-[color:var(--color-smoke)] hover:text-[color:var(--color-ink)]",
      "focus-visible:ring-[color:var(--color-iron)]",
      onDark
        ? "focus-visible:ring-offset-[color:var(--color-ink)]"
        : "focus-visible:ring-offset-[color:var(--color-parchment)]",
    ].join(" "),
  };

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          size={14}
          strokeWidth={2}
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
        className={`${base} ${variants[variant]} ${className}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {inner}
    </Link>
  );
}
