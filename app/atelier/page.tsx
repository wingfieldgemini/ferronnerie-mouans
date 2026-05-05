import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "L'atelier",
  description: `Découvrez l'atelier ${siteConfig.legalName} : un ferronnier d'art à ${siteConfig.contact.address.city}, fidèle aux gestes de la forge traditionnelle.`,
};

export default function AtelierPage() {
  return (
    <>
      {/* ── PAGE HERO ─── dark ─────────────────── */}
      <section
        className="relative text-[color:var(--color-parchment)] flex flex-col min-h-[80vh]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 100% 0%, rgba(184,150,46,0.04) 0%, transparent 70%), var(--color-ink)",
        }}
      >
        <div className="h-20 shrink-0" />
        <div className="flex-1 flex flex-col justify-end container-page pb-20 md:pb-28">
          <Reveal>
            <p className="eyebrow text-[color:var(--color-ember)] mb-4">L&apos;atelier</p>
            <div className="w-16 h-px bg-[color:var(--color-iron)] mb-8" />
            <h1
              className="font-[family-name:var(--font-display)] leading-[0.88] tracking-tight text-balance max-w-4xl"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Enraciné dans
              <br />
              <em className="font-[300] not-italic text-[color:var(--color-ember)]">
                le pays grassois.
              </em>
            </h1>
          </Reveal>
        </div>
        <div className="border-t border-[color:var(--color-hairline-dark)]" />
      </section>

      {/* ── STORY ─── light ─────────────────────── */}
      <section className="bg-parchment text-ink">
        <div className="container-page py-[var(--space-section)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            <div className="lg:col-span-6 space-y-7">
              <Reveal>
                <p className="eyebrow text-[color:var(--color-iron)] mb-2">Khemaies Hachani</p>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-[color:var(--color-smoke)] text-base md:text-lg leading-relaxed">
                  Implanté à {siteConfig.contact.address.city}, à la lisière du
                  massif du Tanneron, notre atelier travaille le fer comme une
                  matière vivante. Chaque projet commence par une visite du lieu
                  et un dessin à la main : nous croyons qu&apos;une pièce de fer
                  ne se dimensionne pas seulement aux cotes, mais à la lumière,
                  au paysage et à l&apos;usage de ceux qui la franchiront chaque
                  jour.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-[color:var(--color-smoke)] text-base md:text-lg leading-relaxed">
                  Notre savoir-faire couvre l&apos;ensemble du parcours :
                  relevés, dessins techniques, débit, soudure TIG/MIG,
                  traitement antirouille, finition et pose. Nous ne sous-traitons
                  aucune étape essentielle — vous parlez avec celui qui forge
                  votre ouvrage.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-[color:var(--color-smoke)] text-base md:text-lg leading-relaxed">
                  Nous intervenons sur l&apos;ensemble du bassin cannois et du
                  Pays de Grasse : {siteConfig.serviceArea.join(", ")}.
                </p>
              </Reveal>
            </div>

            <Reveal delay={60} className="lg:col-span-6">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/assets/gallery/staircase-exterior-modern.png"
                  alt="Escalier métallique extérieur, atelier Hachani"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── VALUES ─── dark ──────────────────────── */}
      <section className="bg-ink text-parchment">
        <div className="container-page py-[var(--space-section)]">
          <Reveal>
            <p className="eyebrow text-[color:var(--color-ember)] mb-8">Notre exigence</p>
            <h2
              className="font-[family-name:var(--font-display)] leading-[0.92] tracking-tight mb-16 md:mb-20"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Quatre engagements.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[color:var(--color-hairline-dark)]">
            {siteConfig.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <article className="bg-[color:var(--color-ink)] p-10 md:p-16 h-full">
                  <p
                    className="font-[family-name:var(--font-display)] text-[color:var(--color-iron)] leading-none mb-8"
                    style={{ fontSize: "clamp(3rem, 2rem + 3vw, 5rem)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="font-[family-name:var(--font-display)] text-[color:var(--color-parchment)] leading-tight mb-5"
                    style={{ fontSize: "clamp(1.5rem, 1rem + 2vw, 2.5rem)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-[color:var(--color-mist)] leading-relaxed text-sm md:text-base">
                    {v.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─── light ───────────────────────── */}
      <section className="bg-parchment text-ink border-t border-[color:var(--color-hairline)]">
        <div className="container-page py-[var(--space-section)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <p className="eyebrow text-[color:var(--color-iron)] mb-8">Prochaine étape</p>
              <h2
                className="font-[family-name:var(--font-display)] leading-[0.92] tracking-tight text-balance"
                style={{ fontSize: "var(--text-h2)" }}
              >
                Visitons votre
                <br />
                <em className="font-[300] not-italic text-[color:var(--color-iron)]">
                  projet ensemble.
                </em>
              </h2>
            </Reveal>
            <Reveal delay={100} className="lg:justify-self-end">
              <CtaButton href="/contact" variant="primary" onDark={false}>
                Prendre rendez-vous
              </CtaButton>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
