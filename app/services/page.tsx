import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ServicesList } from "@/components/ServicesList";
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
      {/* ── PAGE HERO ─── dark ─────────────────── */}
      <section
        className="relative text-[color:var(--color-parchment)] flex flex-col min-h-[60vh] md:min-h-[80vh]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 100% 0%, rgba(184,150,46,0.04) 0%, transparent 70%), var(--color-ink)",
        }}
      >
        <div className="h-20 shrink-0" />
        <div className="flex-1 flex flex-col justify-end container-page pb-12 md:pb-28">
          <Reveal>
            <p className="eyebrow text-[color:var(--color-ember)] mb-4">Savoir-faire</p>
            <div className="w-16 h-px bg-[color:var(--color-iron)] mb-8" />
            <h1
              className="font-[family-name:var(--font-display)] leading-[0.88] tracking-tight text-balance max-w-4xl"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Six métiers,
              <br />
              <em className="font-[300] not-italic text-[color:var(--color-ember)]">
                une exigence.
              </em>
            </h1>
            <p className="mt-8 text-[color:var(--color-mist)] text-base md:text-lg leading-relaxed max-w-xl text-pretty">
              De la pièce ornementale traditionnelle à la structure
              contemporaine en acier brut, notre atelier maîtrise toute
              la chaîne : conception, forge, finition, pose.
            </p>
          </Reveal>
        </div>
        <div className="border-t border-[color:var(--color-hairline-dark)]" />
      </section>

      {/* ── SERVICES LIST ─── light ─────────────── */}
      <section className="bg-parchment text-ink">
        <div className="container-page py-[var(--space-section)]">
          <Reveal>
            <ServicesList services={siteConfig.services} tone="light" withLinks />
          </Reveal>
        </div>
      </section>

      {/* ── PROCESS ─── dark ────────────────────── */}
      <section className="bg-ink text-parchment">
        <div className="container-page py-[var(--space-section)]">
          <Reveal>
            <p className="eyebrow text-[color:var(--color-ember)] mb-8">Méthode</p>
            <h2
              className="font-[family-name:var(--font-display)] leading-[0.92] tracking-tight mb-16 md:mb-20"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Du premier rendez-vous
              <br />
              <em className="font-[300] not-italic text-[color:var(--color-ember)]">à la pose.</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--color-hairline-dark)]">
            {[
              {
                n: "01",
                t: "Visite & écoute",
                d: "Nous venons sur place comprendre le lieu, ses contraintes et votre intention.",
              },
              {
                n: "02",
                t: "Dessin & devis",
                d: "Croquis à la main, plans techniques et chiffrage clair, sans engagement.",
              },
              {
                n: "03",
                t: "Forge en atelier",
                d: "Découpe, soudure et façonnage par nos compagnons, suivi photo possible.",
              },
              {
                n: "04",
                t: "Pose & finition",
                d: "Installation soignée, finition antirouille adaptée à l'environnement marin.",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="bg-[color:var(--color-ink)] p-8 md:p-12 h-full">
                  <p
                    className="font-[family-name:var(--font-display)] text-[color:var(--color-iron)] leading-none mb-8"
                    style={{ fontSize: "clamp(3rem, 2rem + 3vw, 5rem)" }}
                  >
                    {step.n}
                  </p>
                  <h3
                    className="font-[family-name:var(--font-display)] text-[color:var(--color-parchment)] leading-tight mb-4"
                    style={{ fontSize: "clamp(1.4rem, 1rem + 1.5vw, 2rem)" }}
                  >
                    {step.t}
                  </h3>
                  <p className="text-[color:var(--color-mist)] text-sm leading-relaxed">
                    {step.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─── light ───────────────────────── */}
      <section className="bg-parchment text-ink border-t border-[color:var(--color-hairline)]">
        <div className="container-page py-[var(--space-section)]">
          <Reveal>
            <p className="eyebrow text-[color:var(--color-iron)] mb-8">Devis gratuit</p>
            <h2
              className="font-[family-name:var(--font-display)] leading-[0.92] tracking-tight text-balance max-w-3xl"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Parlons de
              <br />
              <em className="font-[300] not-italic text-[color:var(--color-iron)]">
                votre ouvrage.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 md:mt-14">
              <CtaButton href="/contact" variant="primary" onDark={false}>
                Demander un devis
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
