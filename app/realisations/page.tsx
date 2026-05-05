import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Sélection de réalisations sorties de notre atelier : portails, garde-corps, escaliers et structures en fer forgé.",
};

export default function RealisationsPage() {
  return (
    <>
      {/* ── PAGE HERO ─── dark ─────────────────── */}
      <PageHero
        imageSrc="/assets/hero/realisations.webp"
        imageAlt=""
        minHeight="min-h-[50vh] md:min-h-[65vh]"
      >
        <Reveal>
          <p className="eyebrow text-[color:var(--color-ember)] mb-4">Réalisations</p>
          <div className="w-16 h-px bg-[color:var(--color-iron)] mb-8" />
          <h1
            className="font-[family-name:var(--font-display)] leading-[0.88] tracking-tight text-balance max-w-3xl"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Pièces sorties
            <br />
            d&apos;atelier,
            <br />
            <em className="font-[300] not-italic text-[color:var(--color-ember)]">
              posées sur la Côte d&apos;Azur.
            </em>
          </h1>
          <p className="mt-8 text-[color:var(--color-mist)] text-base leading-relaxed max-w-lg text-pretty">
            Chaque pièce est conçue sur-mesure, jamais reproduite à
            l&apos;identique. Une sélection d&apos;ouvrages récents.
          </p>
        </Reveal>
      </PageHero>

      {/* ── GALLERY ─── dark (seamless continuation) */}
      <section className="bg-ink">
        <div className="container-page py-[var(--space-section)]">
          <Reveal>
            <GalleryGrid items={siteConfig.gallery} />
          </Reveal>
        </div>
      </section>

      {/* ── CTA ─── light ───────────────────────── */}
      <section className="bg-parchment text-ink border-t border-[color:var(--color-hairline)]">
        <div className="container-page py-[var(--space-section)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="eyebrow text-[color:var(--color-iron)] mb-8">Votre projet</p>
              <h2
                className="font-[family-name:var(--font-display)] leading-[0.92] tracking-tight text-balance"
                style={{ fontSize: "var(--text-h2)" }}
              >
                Un style qui
                <br />
                <em className="font-[300] not-italic text-[color:var(--color-iron)]">
                  vous parle&nbsp;?
                </em>
              </h2>
              <p className="mt-6 text-[color:var(--color-smoke)] text-base md:text-lg max-w-md text-pretty">
                Nous adaptons chaque dessin à votre lieu — partagez-nous une
                inspiration, une photo, un croquis.
              </p>
            </Reveal>
            <Reveal delay={100} className="lg:justify-self-end">
              <CtaButton href="/contact" variant="primary" onDark={false}>
                Discuter du projet
              </CtaButton>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
