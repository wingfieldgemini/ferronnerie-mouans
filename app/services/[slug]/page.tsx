import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/siteConfig";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    openGraph: {
      title: `${service.title} · ${siteConfig.name}`,
      description: service.summary,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceImages = siteConfig.gallery.filter(
    (g) => g.category === service.category,
  );

  const relatedServices = siteConfig.services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* ── PAGE HERO ─── dark ─────────────────── */}
      <PageHero
        imageSrc={serviceImages[0]?.src ?? "/assets/gallery/portail-09.webp"}
        imageAlt=""
        minHeight="min-h-[55vh] md:min-h-[75vh]"
      >
        <Reveal>
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 eyebrow text-[9px] text-[color:var(--color-mist)] mb-8">
            <Link href="/services" className="hover:text-[color:var(--color-iron)] transition-colors">
              Savoir-faire
            </Link>
            <span>/</span>
            <span className="text-[color:var(--color-iron)]">{service.title}</span>
          </nav>
          <p className="eyebrow text-[color:var(--color-ember)] mb-4">
            {service.category}
          </p>
          <div className="w-16 h-px bg-[color:var(--color-iron)] mb-8" />
          <h1
            className="font-[family-name:var(--font-display)] leading-[0.88] tracking-tight text-balance max-w-4xl"
            style={{ fontSize: "var(--text-h1)" }}
          >
            {service.title}
          </h1>
          <p className="mt-8 text-[color:var(--color-mist)] text-base md:text-lg leading-relaxed max-w-xl text-pretty">
            {service.summary}
          </p>
        </Reveal>
      </PageHero>

      {/* ── DESCRIPTION ─── light ──────────────── */}
      <section className="bg-parchment text-ink">
        <div className="container-page py-[var(--space-section)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            {/* Long description */}
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow text-[color:var(--color-iron)] mb-8">Notre approche</p>
                <p
                  className="font-[family-name:var(--font-display)] text-[color:var(--color-ink)] leading-snug tracking-tight text-pretty"
                  style={{ fontSize: "var(--text-lead)" }}
                >
                  {service.longDescription}
                </p>
              </Reveal>
            </div>

            {/* Feature bullets */}
            <Reveal delay={80} className="lg:col-span-5">
              <div className="bg-cream p-8 md:p-10">
                <p className="eyebrow text-[color:var(--color-iron)] text-[10px] mb-6">
                  Inclus dans ce service
                </p>
                <ul className="space-y-5">
                  {service.bullets.map((b, i) => (
                    <li key={b} className="flex items-start gap-4">
                      <span
                        className="font-[family-name:var(--font-display)] text-[color:var(--color-iron)] shrink-0 leading-none"
                        style={{ fontSize: "1.5rem" }}
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[color:var(--color-smoke)] text-sm leading-relaxed pt-1">
                        {b}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-[color:var(--color-hairline)]">
                  <CtaButton href="/contact" variant="primary" onDark={false}>
                    Demander un devis
                  </CtaButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── GALLERY ─── dark ───────────────────── */}
      {serviceImages.length > 0 && (
        <section className="bg-ink text-parchment">
          <div className="container-page py-[var(--space-section)]">
            <Reveal>
              <p className="eyebrow text-[color:var(--color-ember)] mb-8">
                Nos réalisations
              </p>
              <h2
                className="font-[family-name:var(--font-display)] leading-[0.92] tracking-tight mb-14 md:mb-16"
                style={{ fontSize: "var(--text-h2)" }}
              >
                {service.category} réalisés
                <br />
                <em className="font-[300] not-italic text-[color:var(--color-ember)]">
                  sur la Côte d&apos;Azur.
                </em>
              </h2>
            </Reveal>

            <div className="-mx-[clamp(1.5rem,1rem+3.5vw,4rem)]">
              {/* Mobile: horizontal scroll */}
              <div className="flex md:hidden gap-1 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-[clamp(1.5rem,1rem+3.5vw,4rem)]">
                {serviceImages.map((img) => (
                  <div
                    key={img.src}
                    className="flex-none w-[72vw] aspect-square relative overflow-hidden group bg-[color:var(--color-hairline-dark)] snap-start"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      quality={80}
                      sizes="72vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-[color:var(--color-parchment)] text-xs leading-snug line-clamp-2">
                        {img.alt}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="md:hidden px-[clamp(1.5rem,1rem+3.5vw,4rem)] mt-2 eyebrow text-[color:var(--color-mist)] text-[9px] opacity-60">
                Faire défiler →
              </p>

              {/* Desktop: responsive grid */}
              <div
                className={`hidden md:grid gap-1.5 ${
                  serviceImages.length >= 4
                    ? "grid-cols-2 lg:grid-cols-3"
                    : serviceImages.length === 3
                    ? "grid-cols-3"
                    : "grid-cols-2"
                }`}
              >
                {serviceImages.map((img, idx) => (
                  <div
                    key={img.src}
                    className={`relative overflow-hidden group bg-[color:var(--color-hairline-dark)] ${
                      serviceImages.length >= 4 && idx === 0
                        ? "col-span-2 lg:col-span-1 aspect-[3/2]"
                        : "aspect-square"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      quality={85}
                      sizes={
                        serviceImages.length >= 4 && idx === 0
                          ? "(max-width: 1024px) 66vw, 33vw"
                          : "33vw"
                      }
                      className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-[color:var(--color-parchment)] text-xs leading-snug">
                        {img.alt}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Reveal delay={100}>
              <div className="mt-12">
                <CtaButton href="/realisations" variant="outline">
                  Voir toutes les réalisations
                </CtaButton>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── PROCESSUS ─── light ────────────────── */}
      <section className="bg-parchment text-ink">
        <div className="container-page py-[var(--space-section)]">
          <Reveal>
            <p className="eyebrow text-[color:var(--color-iron)] mb-8">Méthode</p>
            <h2
              className="font-[family-name:var(--font-display)] leading-[0.92] tracking-tight mb-16 md:mb-20"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Du premier contact
              <br />
              <em className="font-[300] not-italic text-[color:var(--color-iron)]">
                à la pose.
              </em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--color-hairline)]">
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
                d: "Découpe, soudure et façonnage dans notre atelier — suivi photo disponible.",
              },
              {
                n: "04",
                t: "Pose & finition",
                d: "Installation soignée, finition antirouille adaptée à l'environnement marin.",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="bg-parchment p-8 md:p-10 h-full">
                  <p
                    className="font-[family-name:var(--font-display)] text-[color:var(--color-iron)] leading-none mb-6"
                    style={{ fontSize: "var(--text-stat)" }}
                  >
                    {step.n}
                  </p>
                  <h3
                    className="font-[family-name:var(--font-display)] text-[color:var(--color-ink)] leading-tight mb-3"
                    style={{ fontSize: "var(--text-h3)" }}
                  >
                    {step.t}
                  </h3>
                  <p className="text-[color:var(--color-smoke)] text-sm leading-relaxed">
                    {step.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTRES SERVICES ─── dark ───────────── */}
      <section className="bg-ink text-parchment">
        <div className="container-page py-[var(--space-section)]">
          <Reveal>
            <p className="eyebrow text-[color:var(--color-ember)] mb-8">Savoir-faire</p>
            <h2
              className="font-[family-name:var(--font-display)] leading-[0.92] tracking-tight mb-14"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Autres prestations
              <br />
              <em className="font-[300] not-italic text-[color:var(--color-ember)]">
                de l&apos;atelier.
              </em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--color-hairline-dark)]">
            {relatedServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group bg-[color:var(--color-ink)] p-8 md:p-10 h-full flex flex-col hover:bg-[color:var(--color-hairline-dark)]/20 transition-colors duration-500"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span
                      className="font-[family-name:var(--font-display)] text-[color:var(--color-iron)] leading-none italic"
                      style={{ fontSize: "var(--text-lead)" }}
                    >
                      {String(siteConfig.services.findIndex((sv) => sv.slug === s.slug) + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.25}
                      className="text-[color:var(--color-iron)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <h3
                    className="font-[family-name:var(--font-display)] text-[color:var(--color-parchment)] leading-tight tracking-tight flex-1 group-hover:text-[color:var(--color-iron)] transition-colors duration-500"
                    style={{ fontSize: "var(--text-h3)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[color:var(--color-mist)] text-xs leading-relaxed mt-4 line-clamp-2">
                    {s.summary}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─── light ──────────────────────── */}
      <section className="bg-parchment text-ink border-t border-[color:var(--color-hairline)]">
        <div className="container-page py-[var(--space-section)]">
          <Reveal>
            <p className="eyebrow text-[color:var(--color-iron)] mb-8">Devis gratuit</p>
            <h2
              className="font-[family-name:var(--font-display)] leading-[0.92] tracking-tight text-balance max-w-3xl"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Un projet de
              <br />
              <em className="font-[300] not-italic text-[color:var(--color-iron)]">
                {service.category.toLowerCase()}
                {" "}sur-mesure&nbsp;?
              </em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-6 md:gap-8">
              <CtaButton href="/contact" variant="primary" onDark={false}>
                Demander un devis
              </CtaButton>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="label text-[color:var(--color-smoke)] hover:text-[color:var(--color-iron)] transition-colors duration-300 py-3 inline-flex items-center"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
