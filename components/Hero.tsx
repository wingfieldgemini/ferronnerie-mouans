import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[720px] flex flex-col overflow-hidden bg-[color:var(--color-ink)]">
      {/* Full-bleed background */}
      <Image
        src="/assets/gallery/gate-ornate-traditional.png"
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover opacity-40"
      />

      {/* Layered gradient: deep at bottom, darkened vignette at top, side sweep */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)] via-[color:var(--color-ink)]/40 to-[color:var(--color-ink)]/65"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-ink)]/75 via-[color:var(--color-ink)]/20 to-transparent"
      />
      {/* Subtle top vignette to anchor the header */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[color:var(--color-ink)]/50 to-transparent"
      />

      {/* Fixed header spacer */}
      <div className="h-20 relative z-10 shrink-0" />

      {/* Main content — grows + aligns to bottom */}
      <div className="relative z-10 flex-1 flex flex-col justify-end container-page pb-12 md:pb-16">
        <div className="max-w-5xl">
          <p className="eyebrow text-[color:var(--color-iron)] mb-10 md:mb-12">
            Ferronnier d&apos;art · {siteConfig.contact.address.city}
          </p>

          <h1
            className="font-[family-name:var(--font-display)] leading-[0.88] tracking-[-0.04em] text-[color:var(--color-parchment)]"
            style={{ fontSize: "clamp(4rem, 1.5rem + 7.5vw, 8.5rem)" }}
          >
            L&apos;art
            <br />
            du fer
            <br />
            <em
              className="italic text-[color:var(--color-ember)] not-italic"
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(4.5rem, 1.5rem + 8.5vw, 9.75rem)",
                letterSpacing: "-0.05em",
                lineHeight: 0.82,
                display: "block",
              }}
            >
              forgé.
            </em>
          </h1>

          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
            <p className="text-[color:var(--color-mist)] text-sm md:text-base leading-relaxed max-w-xs">
              Portails, garde-corps et escaliers
              <br />
              pour les demeures d&apos;exception
              <br />
              de la Côte d&apos;Azur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-[color:var(--color-iron)] text-[color:var(--color-ink)] px-7 py-3.5 label hover:bg-[color:var(--color-iron-deep)] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-iron)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-ink)]"
              >
                Demander un devis
                <ArrowUpRight size={14} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/realisations"
                className="inline-flex items-center gap-2 text-[color:var(--color-parchment)]/70 label hover:text-[color:var(--color-parchment)] transition-colors duration-300"
              >
                Voir les réalisations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative z-10 flex items-center justify-between container-page py-8 md:py-10 border-t border-white/10 shrink-0">
        <div className="hidden md:grid grid-cols-4 gap-6 flex-1">
          {[
            { k: "Atelier", v: "Mouans-Sartoux" },
            { k: "Forge", v: "Tradition manuelle" },
            { k: "Zone", v: "Côte d'Azur" },
            { k: "Devis", v: "Gratuit · 48h" },
          ].map((m) => (
            <div key={m.k} className="flex flex-col gap-1.5">
              <p className="label text-[color:var(--color-mist)] text-[9px] tracking-[0.22em]">{m.k}</p>
              <p className="font-[family-name:var(--font-display)] text-[color:var(--color-parchment)] leading-none tracking-tight"
                style={{ fontSize: "clamp(1.1rem, 0.8rem + 0.8vw, 1.5rem)" }}>
                {m.v}
              </p>
            </div>
          ))}
        </div>
        <div className="md:hidden flex-1" />
        <ArrowDown
          size={18}
          strokeWidth={1.25}
          className="text-[color:var(--color-mist)]/70 animate-bounce shrink-0"
          aria-hidden
        />
      </div>
    </section>
  );
}
