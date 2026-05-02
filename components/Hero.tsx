import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <section className="relative bg-[color:var(--color-parchment)]">
      <div className="container-page pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7 relative z-10">
            <p className="eyebrow mb-10">
              Ferronnier d&apos;art · {siteConfig.contact.address.city}
            </p>
            <h1
              className="font-[family-name:var(--font-display)] text-[length:var(--text-display)] leading-[0.92] tracking-[-0.035em] text-balance font-medium"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
            >
              L&apos;art du fer
              <br />
              forgé,{" "}
              <span
                className="italic font-normal text-[color:var(--color-iron)]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
              >
                façonné
              </span>
              <br />
              sur mesure.
            </h1>
            <p className="mt-10 max-w-lg text-lg md:text-xl text-[color:var(--color-smoke)] leading-relaxed text-pretty">
              Atelier de ferronnerie d&apos;art au cœur des Alpes-Maritimes.
              Portails, garde-corps et escaliers pensés pour les maisons
              d&apos;exception de la Côte d&apos;Azur.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <CtaButton href="/contact" variant="primary">
                Demander un devis
              </CtaButton>
              <CtaButton href="/realisations" variant="ghost">
                Voir nos réalisations
              </CtaButton>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[color:var(--color-cream)]">
              <Image
                src="/assets/gallery/gate-ornate-traditional.png"
                alt="Portail en fer forgé ornementé"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--color-hairline)]">
        <div className="container-page py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {[
            { k: "Atelier", v: "Mouans-Sartoux" },
            { k: "Forge", v: "Tradition manuelle" },
            { k: "Pose", v: "Côte d'Azur" },
            { k: "Devis", v: "Gratuit · 48h" },
          ].map((m) => (
            <div key={m.k}>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-mist)] mb-1.5">
                {m.k}
              </p>
              <p className="font-[family-name:var(--font-display)] text-xl tracking-tight">
                {m.v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
