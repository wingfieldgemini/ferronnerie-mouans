import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CtaButton } from "@/components/CtaButton";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Sélection de réalisations sorties de notre atelier : portails, garde-corps, escaliers et structures en fer forgé.",
};

export default function RealisationsPage() {
  return (
    <>
      <Section
        eyebrow="Réalisations"
        title={
          <>
            Pièces sorties d&apos;atelier,
            <br />
            <span className="italic text-[color:var(--color-iron)]">posées</span> sur la Côte d&apos;Azur.
          </>
        }
        kicker="Une sélection d'ouvrages réalisés au cours des dernières années — chaque pièce est conçue sur-mesure, jamais reproduite à l'identique."
        tone="parchment"
      >
        <GalleryGrid items={siteConfig.gallery} />
      </Section>

      <Section tone="cream">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow mb-6">Votre projet</p>
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-balance">
              Vous reconnaissez un style qui vous parle&nbsp;?
            </h2>
            <p className="mt-6 text-[color:var(--color-smoke)] text-lg max-w-xl">
              Nous adaptons chaque dessin à votre lieu — partagez-nous une
              inspiration, une photo, un croquis.
            </p>
          </div>
          <div className="md:justify-self-end">
            <CtaButton href="/contact" variant="primary">
              Discuter du projet
            </CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
