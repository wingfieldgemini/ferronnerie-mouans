import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales et politique de confidentialité du site Ferronnerie Mouansoise — éditeur, hébergement, données personnelles.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* ── PAGE HERO ─── dark ─────────────────── */}
      <section
        className="relative text-[color:var(--color-parchment)] flex flex-col min-h-[45vh]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 100% 0%, rgba(201,168,76,0.04) 0%, transparent 70%), var(--color-ink)",
        }}
      >
        <div className="h-20 shrink-0" />
        <div className="flex-1 flex flex-col justify-end container-page pb-10 md:pb-20">
          <p className="eyebrow text-[color:var(--color-ember)] mb-4">Légal</p>
          <div className="w-16 h-px bg-[color:var(--color-iron)] mb-8" />
          <h1
            className="font-[family-name:var(--font-display)] leading-[0.88] tracking-tight"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Mentions légales.
          </h1>
        </div>
        <div className="border-t border-[color:var(--color-hairline-dark)]" />
      </section>

      {/* ── CONTENT ─── light ──────────────────── */}
      <section className="bg-parchment text-ink">
        <div className="container-page py-[var(--space-section)]">
          <div className="max-w-3xl space-y-16">

            <LegalSection title="Éditeur du site">
              <p>
                Le site <strong>{siteConfig.url}</strong> est édité par :
              </p>
              <address className="not-italic mt-4 space-y-1 text-[color:var(--color-smoke)]">
                <p><strong className="text-[color:var(--color-ink)]">{siteConfig.legalName}</strong></p>
                <p>{siteConfig.contact.address.street}</p>
                <p>
                  {siteConfig.contact.address.postalCode}{" "}
                  {siteConfig.contact.address.city}
                </p>
                <p>
                  {siteConfig.contact.address.region},{" "}
                  {siteConfig.contact.address.country}
                </p>
              </address>
              <div className="mt-4 space-y-1 text-[color:var(--color-smoke)]">
                <p>
                  Téléphone :{" "}
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-[color:var(--color-iron)] hover:underline"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </p>
                <p>
                  Email :{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[color:var(--color-iron)] hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
                <p>
                  Directeur de la publication :{" "}
                  <strong className="text-[color:var(--color-ink)]">
                    {siteConfig.owner}
                  </strong>
                </p>
              </div>
            </LegalSection>

            <LegalSection title="Hébergement">
              <p>
                Ce site est hébergé par :
              </p>
              <address className="not-italic mt-4 space-y-1 text-[color:var(--color-smoke)]">
                <p><strong className="text-[color:var(--color-ink)]">Vercel Inc.</strong></p>
                <p>440 N Barranca Ave #4133</p>
                <p>Covina, CA 91723, États-Unis</p>
                <p>
                  Site :{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[color:var(--color-iron)] hover:underline"
                  >
                    vercel.com
                  </a>
                </p>
              </address>
            </LegalSection>

            <LegalSection title="Propriété intellectuelle">
              <p>
                L'ensemble des contenus présents sur ce site — textes, images, photographies, illustrations, logos et tout autre élément — est la propriété exclusive de {siteConfig.legalName} ou fait l'objet d'une autorisation d'utilisation.
              </p>
              <p className="mt-4">
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation préalable et écrite de {siteConfig.legalName}.
              </p>
            </LegalSection>

            <LegalSection title="Données personnelles et RGPD">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données personnelles.
              </p>

              <h3 className="font-[family-name:var(--font-display)] text-xl mt-8 mb-3 text-[color:var(--color-ink)]">
                Données collectées
              </h3>
              <p>
                Ce site collecte uniquement les données que vous saisissez volontairement via le formulaire de contact (nom, adresse email, numéro de téléphone, description du projet). Ces données sont utilisées exclusivement pour répondre à votre demande de devis.
              </p>
              <p className="mt-4">
                Aucune donnée n'est revendue à des tiers. Aucun traitement automatisé ni profilage n'est effectué.
              </p>

              <h3 className="font-[family-name:var(--font-display)] text-xl mt-8 mb-3 text-[color:var(--color-ink)]">
                Durée de conservation
              </h3>
              <p>
                Les données sont conservées pendant la durée nécessaire au traitement de votre demande, et au maximum 3 ans à compter du dernier contact.
              </p>

              <h3 className="font-[family-name:var(--font-display)] text-xl mt-8 mb-3 text-[color:var(--color-ink)]">
                Exercice de vos droits
              </h3>
              <p>
                Pour exercer vos droits ou pour toute question relative au traitement de vos données, vous pouvez contacter :{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[color:var(--color-iron)] hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="mt-4">
                En cas de désaccord, vous pouvez également introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[color:var(--color-iron)] hover:underline">www.cnil.fr</a>.
              </p>
            </LegalSection>

            <LegalSection title="Cookies">
              <p>
                Ce site n'utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés. Ces cookies ne nécessitent pas de consentement préalable.
              </p>
              <p className="mt-4">
                Aucun outil d'analyse d'audience tiers (Google Analytics, etc.) n'est installé sur ce site.
              </p>
            </LegalSection>

            <LegalSection title="Limitation de responsabilité">
              <p>
                {siteConfig.legalName} s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
              </p>
              <p className="mt-4">
                {siteConfig.legalName} se réserve le droit de modifier, corriger ou supprimer tout ou partie du contenu du site à tout moment, sans préavis.
              </p>
              <p className="mt-4">
                Les liens hypertextes présents sur ce site pouvant pointer vers des sites tiers, {siteConfig.legalName} décline toute responsabilité quant aux contenus de ces sites externes.
              </p>
            </LegalSection>

            <LegalSection title="Droit applicable">
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </LegalSection>

            <div className="pt-4 border-t border-[color:var(--color-hairline)]">
              <p className="text-sm text-[color:var(--color-mist)]">
                Dernière mise à jour : mai 2026
              </p>
              <p className="mt-2 text-sm text-[color:var(--color-smoke)]">
                Pour toute question :{" "}
                <Link href="/contact" className="text-[color:var(--color-iron)] hover:underline">
                  Nous contacter
                </Link>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2
        className="font-[family-name:var(--font-display)] leading-tight tracking-tight text-[color:var(--color-ink)] mb-6"
        style={{ fontSize: "clamp(1.5rem, 1rem + 1.5vw, 2.25rem)" }}
      >
        {title}
      </h2>
      <div className="text-[color:var(--color-smoke)] leading-relaxed text-base md:text-[1.0625rem]">
        {children}
      </div>
    </div>
  );
}
