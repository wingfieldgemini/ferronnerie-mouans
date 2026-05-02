import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaButton } from "@/components/CtaButton";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Savoir-faire",
  description:
    "Portails, garde-corps, escaliers, clôtures, verrières et structures sur-mesure — l'ensemble des savoir-faire de l'atelier.",
};

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Savoir-faire"
        title={
          <>
            Six métiers, <span className="italic text-[color:var(--color-iron)]">une</span> exigence.
          </>
        }
        kicker="De la pièce ornementale traditionnelle à la structure contemporaine en acier brut, notre atelier maîtrise toute la chaîne : conception, dessin technique, forge, finition et pose."
        tone="parchment"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {siteConfig.services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Méthode"
        title="Du premier rendez-vous à la pose."
        tone="cream"
      >
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: "01", t: "Visite & écoute", d: "Nous venons sur place comprendre le lieu, ses contraintes et votre intention." },
            { n: "02", t: "Dessin & devis", d: "Croquis à la main, plans techniques et chiffrage clair, sans engagement." },
            { n: "03", t: "Forge en atelier", d: "Découpe, soudure et façonnage par nos compagnons, suivi photo possible." },
            { n: "04", t: "Pose & finition", d: "Installation soignée, finition antirouille adaptée à l'environnement marin." },
          ].map((step) => (
            <li key={step.n} className="bg-[color:var(--color-parchment)] p-8 border border-[color:var(--color-hairline)]">
              <p className="font-[family-name:var(--font-display)] text-4xl text-[color:var(--color-iron)] mb-4">
                {step.n}
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-2xl mb-3 leading-tight">
                {step.t}
              </h3>
              <p className="text-sm text-[color:var(--color-smoke)] leading-relaxed">
                {step.d}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="ink">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow justify-center text-[color:var(--color-ember)] mb-6">Devis gratuit</p>
          <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h1)] leading-tight text-balance">
            Parlons de votre ouvrage.
          </h2>
          <p className="mt-6 text-[color:var(--color-mist)] text-lg max-w-xl mx-auto">
            Un projet en tête ? Décrivez-le en quelques lignes — nous vous
            rappelons sous 48 h ouvrées.
          </p>
          <div className="mt-10">
            <CtaButton href="/contact" variant="primary">Demander un devis</CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
