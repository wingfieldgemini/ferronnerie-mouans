import Image from "next/image";
import type { ReactNode } from "react";

interface Props {
  imageSrc: string;
  imageAlt?: string;
  minHeight?: string;
  children: ReactNode;
}

export function PageHero({
  imageSrc,
  imageAlt = "",
  minHeight = "min-h-[55vh] md:min-h-[75vh]",
  children,
}: Props) {
  return (
    <section
      className={`relative overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-parchment)] flex flex-col ${minHeight}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover opacity-35"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)] via-[color:var(--color-ink)]/45 to-[color:var(--color-ink)]/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-ink)]/80 via-[color:var(--color-ink)]/25 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[color:var(--color-ink)]/55 to-transparent"
      />
      <div className="h-20 relative z-10 shrink-0" />
      <div className="relative z-10 flex-1 flex flex-col justify-end container-page pb-12 md:pb-28">
        {children}
      </div>
      <div className="relative z-10 border-t border-[color:var(--color-hairline-dark)]" />
    </section>
  );
}
