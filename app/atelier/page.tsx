import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { CtaButton } from "@/components/CtaButton";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "L'atelier",
  description: `Découvrez l'atelier ${siteConfig.legalName} : un ferronnier d'art à ${siteConfig.contact.address.city}, fidèle aux gestes de la forge traditionnelle.`,
};

export default function AtelierPage() {
  return (
    <>
      <Section
        eyebrow="L'atelier"
        title={
          <>
            Un atelier de ferronnerie d&apos;art,
            <br />
            <span className="italic text-[color:var(--color-iron)]">enraciné</span> dans le pays grassois.
          </>
        }
        kicker="L'atelier Hachani conçoit et forge des ouvrages en fer pour les architectes, maîtres d'œuvre et particuliers de la Côte d'Azur. Une démarche d'artisan : peu de pièces, beaucoup de soin."
        tone="parchment"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed text-[color:var(--color-smoke)]">
            <p>
              Implanté à {siteConfig.contact.address.city}, à la lisière du
              massif du Tanneron, notre atelier travaille le fer comme une
              matière vivante. Chaque projet commence par une visite du lieu
              et un dessin à la main : nous croyons qu&apos;une pièce de fer
              ne se dimensionne pas seulement aux cotes, mais à la lumière,
              au paysage et à l&apos;usage de ceux qui la franchiront chaque
              jour.
            </p>
            <p>
              Notre savoir-faire couvre l&apos;ensemble du parcours :
              relevés, dessins techniques, débit, soudure TIG/MIG,
              traitement antirouille, finition et pose. Nous ne sous-traitons
              aucune étape essentielle — vous parlez avec celui qui forge
              votre ouvrage.
            </p>
            <p>
              Nous intervenons sur l&apos;ensemble du bassin cannois et du
              Pays de Grasse : {siteConfig.serviceArea.join(", ")}.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/assets/gallery/staircase-exterior-modern.png"
                alt="Escalier métallique extérieur, atelier Hachani"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Notre exigence" title="Quatre engagements." tone="cream">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[color:var(--color-hairline)] border border-[color:var(--color-hairline)]">
          {siteConfig.values.map((v, i) => (
            <article
              key={v.title}
              className="bg-[color:var(--color-cream)] p-10 md:p-14"
            >
              <p className="font-[family-name:var(--font-display)] text-4xl text-[color:var(--color-iron)] mb-6">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl mb-4 leading-tight">
                {v.title}
              </h3>
              <p className="text-[color:var(--color-smoke)] leading-relaxed">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-[color:var(--color-ember)] mb-6">Prochaine étape</p>
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-tight text-balance">
              Visitons votre projet ensemble.
            </h2>
          </div>
          <div className="md:justify-self-end">
            <CtaButton href="/contact" variant="primary">
              Prendre rendez-vous
            </CtaButton>
          </div>
        </div>
      </Section>
    </>
  );
}
