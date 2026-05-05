import Image from "next/image";
import { Hero } from "@/components/Hero";
import { ServicesList } from "@/components/ServicesList";
import { CtaButton } from "@/components/CtaButton";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/siteConfig";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── MANIFESTO ─── light ─────────────────────────── */}
      <section className="bg-parchment text-ink">
        <div className="container-page py-[var(--space-section)]">
          <Reveal>
            <p className="eyebrow text-[color:var(--color-iron)] mb-10 md:mb-14">
              L&apos;atelier Hachani
            </p>
          </Reveal>
          <Reveal delay={100}>
            <blockquote
              className="font-[family-name:var(--font-display)] leading-[1.1] tracking-[-0.02em] text-balance text-[color:var(--color-ink)]"
              style={{ fontSize: "var(--text-h2)" }}
            >
              <span className="text-[color:var(--color-smoke)] select-none">&ldquo;&thinsp;</span>
              {siteConfig.longDescription}
              <span className="text-[color:var(--color-smoke)] select-none">&thinsp;&rdquo;</span>
            </blockquote>
          </Reveal>

          {/* Stats row */}
          <Reveal delay={200}>
            <div className="mt-20 md:mt-28 pt-10 border-t border-[color:var(--color-hairline)] grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0">
              {[
                { n: "100%", label: "Forge manuelle" },
                { n: "0",    label: "Sous-traitance" },
                { n: "06",   label: "Alpes-Maritimes" },
                { n: "48h",  label: "Délai de réponse" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col gap-3 ${i > 0 ? "md:border-l border-[color:var(--color-hairline)] md:pl-12" : ""}`}
                >
                  <p
                    className="font-[family-name:var(--font-display)] text-[color:var(--color-iron)] leading-none"
                    style={{ fontSize: "var(--text-stat)", letterSpacing: "-0.04em" }}
                  >
                    {s.n}
                  </p>
                  <p className="label text-[color:var(--color-smoke)] text-[10px] tracking-[0.18em]">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SAVOIR-FAIRE ─── dark ───────────────────────── */}
      <section className="bg-ink text-parchment">
        <div className="container-page py-[var(--space-section)]">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 md:mb-20 items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow text-[color:var(--color-ember)] mb-8">Savoir-faire</p>
                <h2
                  className="font-[family-name:var(--font-display)] leading-[0.92] tracking-tight text-balance"
                  style={{ fontSize: "var(--text-h2)" }}
                >
                  Six métiers,
                  <br />
                  <em className="font-[300] not-italic text-[color:var(--color-ember)]">
                    un seul atelier.
                  </em>
                </h2>
              </div>
              <p className="lg:col-span-5 text-[color:var(--color-mist)] text-base md:text-lg leading-relaxed lg:max-w-sm lg:justify-self-end text-pretty">
                De la prise de cotes au scellement, chaque ouvrage est dessiné,
                forgé et posé par notre équipe — sans sous-traitance.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ServicesList services={siteConfig.services} tone="dark" />
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-12">
              <CtaButton href="/services" variant="outline">
                Tous nos savoir-faire
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GALLERY ─── dark, full-bleed grid ───────────── */}
      <section className="bg-ink">
        <div className="container-page pt-[var(--space-section)]">
          <Reveal>
            <p className="eyebrow text-[color:var(--color-ember)] mb-10 md:mb-14">
              Réalisations
            </p>
          </Reveal>
        </div>

        <div className="container-page">
          {/* Row 1: 8col landscape + 4col portrait */}
          <Reveal delay={50}>
            <div className="-mx-[clamp(1.5rem,1rem+3.5vw,4rem)] grid grid-cols-12 gap-1 md:gap-1.5 mb-1 md:mb-1.5">
              <div className="col-span-12 md:col-span-8 aspect-[4/3] relative overflow-hidden group bg-[color:var(--color-hairline-dark)]">
                <Image
                  src={siteConfig.gallery[0].src}
                  alt={siteConfig.gallery[0].alt}
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-[400ms] ease-[var(--ease-out-expo)]">
                  <span className="eyebrow text-[color:var(--color-ember)] text-[9px]">
                    {siteConfig.gallery[0].category}
                  </span>
                </div>
              </div>
              <div className="col-span-6 md:col-span-4 aspect-[3/4] relative overflow-hidden group bg-[color:var(--color-hairline-dark)]">
                <Image
                  src={siteConfig.gallery[5].src}
                  alt={siteConfig.gallery[5].alt}
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-[400ms] ease-[var(--ease-out-expo)]">
                  <span className="eyebrow text-[color:var(--color-ember)] text-[9px]">
                    {siteConfig.gallery[5].category}
                  </span>
                </div>
              </div>
              <div className="col-span-6 md:hidden aspect-[3/4] relative overflow-hidden group bg-[color:var(--color-hairline-dark)]">
                <Image
                  src={siteConfig.gallery[11].src}
                  alt={siteConfig.gallery[11].alt}
                  fill
                  quality={80}
                  sizes="50vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-[400ms] ease-[var(--ease-out-expo)]">
                  <span className="eyebrow text-[color:var(--color-ember)] text-[9px]">
                    {siteConfig.gallery[11].category}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Row 2: 4col + 8col — desktop only */}
          <Reveal delay={100}>
            <div className="-mx-[clamp(1.5rem,1rem+3.5vw,4rem)] hidden md:grid grid-cols-12 gap-1.5 mb-1.5">
              <div className="col-span-4 aspect-[4/3] relative overflow-hidden group bg-[color:var(--color-hairline-dark)]">
                <Image
                  src={siteConfig.gallery[11].src}
                  alt={siteConfig.gallery[11].alt}
                  fill
                  quality={85}
                  sizes="33vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-[400ms] ease-[var(--ease-out-expo)]">
                  <span className="eyebrow text-[color:var(--color-ember)] text-[9px]">
                    {siteConfig.gallery[11].category}
                  </span>
                </div>
              </div>
              <div className="col-span-8 aspect-[4/3] relative overflow-hidden group bg-[color:var(--color-hairline-dark)]">
                <Image
                  src={siteConfig.gallery[16].src}
                  alt={siteConfig.gallery[16].alt}
                  fill
                  quality={85}
                  sizes="66vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-[400ms] ease-[var(--ease-out-expo)]">
                  <span className="eyebrow text-[color:var(--color-ember)] text-[9px]">
                    {siteConfig.gallery[16].category}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Strip: 6 thumbnails */}
          <Reveal delay={150}>
            <div
              className="-mx-[clamp(1.5rem,1rem+3.5vw,4rem)]"
              aria-label="Galerie de réalisations"
            >
              {/* Mobile: horizontal scroll — pl- adds back the padding removed by -mx- parent */}
              <div className="flex md:hidden gap-1 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pl-[clamp(1.5rem,1rem+3.5vw,4rem)] scroll-pl-[clamp(1.5rem,1rem+3.5vw,4rem)]">
                {siteConfig.gallery.slice(1, 7).map((g) => (
                  <div
                    key={g.src}
                    className="flex-none w-[75vw] aspect-square relative overflow-hidden group bg-[color:var(--color-hairline-dark)] snap-start"
                  >
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      quality={75}
                      sizes="60vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-[400ms] ease-[var(--ease-out-expo)]">
                      <span className="eyebrow text-[color:var(--color-ember)] text-[9px]">
                        {g.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="md:hidden px-[clamp(1.5rem,1rem+3.5vw,4rem)] mt-2 eyebrow text-[color:var(--color-mist)] text-[9px] opacity-60">
                Faire défiler →
              </p>

              {/* Desktop: 6-column grid */}
              <div className="hidden md:grid grid-cols-6 gap-1.5">
                {siteConfig.gallery.slice(1, 7).map((g) => (
                  <div
                    key={g.src}
                    className="aspect-square relative overflow-hidden group bg-[color:var(--color-hairline-dark)]"
                  >
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      quality={75}
                      sizes="16vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-[400ms] ease-[var(--ease-out-expo)]">
                      <span className="eyebrow text-[color:var(--color-ember)] text-[9px]">
                        {g.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="container-page pb-[var(--space-section)]">
          <Reveal delay={100}>
            <div className="mt-10">
              <CtaButton href="/realisations" variant="outline">
                Voir la galerie complète
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ─── cream ───────────────────────── */}
      <section className="bg-cream text-ink border-t border-[color:var(--color-hairline)]">
        <div className="container-page py-[var(--space-section)]">
          <Reveal>
            <p className="eyebrow text-[color:var(--color-iron)] mb-8">Ils nous font confiance</p>
            <h2
              className="font-[family-name:var(--font-display)] leading-[0.92] tracking-tight text-balance mb-16 md:mb-20"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Ce que disent
              <br />
              <em className="font-[300] not-italic text-[color:var(--color-iron)]">
                nos clients.
              </em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--color-hairline)]">
            {siteConfig.testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 80}>
                <figure className="bg-cream p-8 md:p-10 lg:p-12 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-7" aria-label={`${t.stars} étoiles sur 5`}>
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <span
                        key={si}
                        aria-hidden
                        className="text-[color:var(--color-iron)]"
                        style={{ fontSize: "0.9rem" }}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Large quote mark */}
                  <div
                    aria-hidden
                    className="font-[family-name:var(--font-display)] text-[color:var(--color-iron)] leading-none mb-4 select-none"
                    style={{ fontSize: "4.5rem", lineHeight: 0.7 }}
                  >
                    &ldquo;
                  </div>

                  <blockquote className="flex-1 mb-8">
                    <p className="text-[color:var(--color-smoke)] text-base md:text-[1.05rem] leading-relaxed text-pretty">
                      {t.body}
                    </p>
                  </blockquote>

                  <figcaption className="border-t border-[color:var(--color-hairline)] pt-6">
                    <p className="font-[family-name:var(--font-display)] text-[color:var(--color-ink)] text-xl leading-tight">
                      {t.author}
                    </p>
                    <p className="eyebrow text-[color:var(--color-iron)] text-[9px] mt-2">
                      {t.location} · {t.project}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─── light, split layout ─────────────────── */}
      <section className="bg-parchment text-ink border-t border-[color:var(--color-hairline)]">
        <div className="container-page py-[var(--space-section)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: pull quote */}
            <Reveal>
              <blockquote className="border-l-[3px] border-[color:var(--color-iron)] pl-8">
                <p
                  className="font-[family-name:var(--font-display)] italic leading-[1.1] tracking-tight text-balance text-[color:var(--color-ink)]"
                  style={{ fontSize: "var(--text-h3)" }}
                >
                  &ldquo;De la prise de cotes à la pose, votre interlocuteur ne change pas.&rdquo;
                </p>
                <footer className="mt-6 eyebrow text-[color:var(--color-smoke)]">
                  {siteConfig.owner} — Ferronnerie Mouansoise
                </footer>
              </blockquote>
            </Reveal>

            {/* Right: CTA */}
            <div>
              <Reveal delay={80}>
                <p className="eyebrow text-[color:var(--color-iron)] mb-8">
                  Un projet en tête
                </p>
              </Reveal>
              <Reveal delay={130}>
                <h2
                  className="font-[family-name:var(--font-display)] leading-[0.92] tracking-tight text-balance"
                  style={{ fontSize: "var(--text-h2)" }}
                >
                  Échangeons —{" "}
                  <em className="font-[300] not-italic text-[color:var(--color-iron)]">
                    devis gratuit,
                  </em>
                  <br />
                  sans engagement.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10 flex flex-wrap items-center gap-6 md:gap-8">
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

          </div>
        </div>
      </section>
    </>
  );
}
