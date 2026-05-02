import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { CtaButton } from "@/components/CtaButton";
import { siteConfig } from "@/lib/siteConfig";

export default function HomePage() {
  const featuredServices = siteConfig.services.slice(0, 3);
  const featuredGallery = siteConfig.gallery.slice(0, 6);

  return (
    <>
      <Hero />

      {/* Manifesto strip */}
      <section className="bg-[color:var(--color-cream)] border-y border-[color:var(--color-hairline)]">
        <div className="container-page py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start">
            <p className="md:col-span-1 eyebrow">L&apos;atelier Hachani</p>
            <p className="md:col-span-2 text-balance text-2xl md:text-3xl leading-snug font-[family-name:var(--font-display)]">
              {siteConfig.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section
        eyebrow="Savoir-faire"
        title="Six métiers, un seul atelier."
        kicker="De la prise de cotes au scellement, chaque ouvrage est dessiné, forgé et posé par notre équipe — sans sous-traitance."
        tone="parchment"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredServices.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
        <div className="mt-12">
          <CtaButton href="/services" variant="outline">
            Tous nos savoir-faire
          </CtaButton>
        </div>
      </Section>

      {/* Gallery preview */}
      <Section
        eyebrow="Réalisations"
        title="Dernières pièces sorties d'atelier."
        tone="cream"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {featuredGallery.map((g) => (
            <div
              key={g.src}
              className="aspect-square relative overflow-hidden bg-[color:var(--color-parchment)]"
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                quality={90}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-12">
          <CtaButton href="/realisations" variant="outline">
            Voir la galerie
          </CtaButton>
        </div>
      </Section>

      {/* CTA band */}
      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-parchment)]">
        <div className="container-page py-14 md:py-20 text-center">
          <p className="eyebrow justify-center mb-5 text-[color:var(--color-ember)]">
            Un projet en tête
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[length:var(--text-h2)] leading-[0.98] tracking-tight max-w-2xl mx-auto text-balance">
            Échangeons sur votre projet — devis gratuit, sans engagement.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <CtaButton href="/contact" variant="primary">
              Demander un devis
            </CtaButton>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-mist)] hover:text-[color:var(--color-parchment)] transition-colors underline-offset-4 hover:underline"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
