import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-parchment)]">
      <div className="container-page pt-16 pb-24 md:pt-28 md:pb-36 lg:pt-36 lg:pb-44">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7 relative z-10">
            <p className="eyebrow mb-8">
              Ferronnier d&apos;art · {siteConfig.contact.address.city}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-[length:var(--text-display)] leading-[0.95] tracking-[-0.02em] text-balance">
              L&apos;art du fer forgé,
              <br />
              <span className="italic text-[color:var(--color-iron)]">façonné</span> sur mesure.
            </h1>
            <p className="mt-10 max-w-xl text-lg md:text-xl text-[color:var(--color-smoke)] leading-relaxed text-pretty">
              Atelier de ferronnerie d&apos;art au cœur des Alpes-Maritimes.
              Nous dessinons et forgeons portails, garde-corps et escaliers
              pour les maisons d&apos;exception de la Côte d&apos;Azur.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <CtaButton href="/contact" variant="primary">
                Demander un devis
              </CtaButton>
              <CtaButton href="/realisations" variant="ghost">
                Voir nos réalisations
              </CtaButton>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/assets/gallery/gate-ornate-traditional.png"
                alt="Portail en fer forgé ornementé"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/40 via-transparent to-transparent"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 lg:-left-12 hidden md:block">
              <div className="bg-[color:var(--color-cream)] border border-[color:var(--color-hairline)] px-6 py-5 max-w-[260px] shadow-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-iron)] font-medium mb-1.5">
                  Sur-mesure
                </p>
                <p className="text-sm text-[color:var(--color-smoke)] leading-relaxed">
                  Conception, dessin technique, forge et pose — par un seul
                  interlocuteur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute top-1/2 right-0 -translate-y-1/2 hidden xl:block opacity-[0.04] pointer-events-none"
      >
        <Image
          src="/assets/logo.png"
          alt=""
          width={620}
          height={620}
          className="object-contain"
        />
      </div>
    </section>
  );
}
