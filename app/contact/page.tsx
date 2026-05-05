import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description: `Demandez un devis pour votre projet de ferronnerie. Atelier ${siteConfig.legalName} à ${siteConfig.contact.address.city}.`,
};

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(
    `${siteConfig.contact.address.street}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city}`,
  );

  return (
    <>
      {/* ── PAGE HERO ─── dark ─────────────────── */}
      <section
        className="relative text-[color:var(--color-parchment)] flex flex-col min-h-[65vh]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 100% 0%, rgba(184,150,46,0.04) 0%, transparent 70%), var(--color-ink)",
        }}
      >
        <div className="h-20 shrink-0" />
        <div className="flex-1 flex flex-col justify-end container-page pb-20 md:pb-28">
          <Reveal>
            <p className="eyebrow text-[color:var(--color-ember)] mb-4">Contact</p>
            <div className="w-16 h-px bg-[color:var(--color-iron)] mb-8" />
            <h1
              className="font-[family-name:var(--font-display)] leading-[0.88] tracking-tight text-balance"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Parlons de
              <br />
              <em className="font-[300] not-italic text-[color:var(--color-ember)]">
                votre projet.
              </em>
            </h1>
          </Reveal>
        </div>
        <div className="border-t border-[color:var(--color-hairline-dark)]" />
      </section>

      {/* ── FORM ─── light ──────────────────────── */}
      <section className="bg-parchment text-ink">
        <div className="container-page py-[var(--space-section)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Form */}
            <Reveal className="lg:col-span-7">
              <p className="text-[color:var(--color-smoke)] text-base mb-10 text-pretty max-w-lg">
                Un projet de ferronnerie, une question technique, une demande
                de devis ? Nous vous répondons sous 48 h ouvrées.
              </p>
              <ContactForm />
            </Reveal>

            {/* Info */}
            <aside className="lg:col-span-5 space-y-12">
              <Reveal delay={100}>
                <ContactBlock
                  icon={Phone}
                  label="Téléphone"
                  href={`tel:${siteConfig.contact.phone}`}
                  lines={[siteConfig.contact.phoneDisplay]}
                />
              </Reveal>
              <Reveal delay={150}>
                <ContactBlock
                  icon={Mail}
                  label="Email"
                  href={`mailto:${siteConfig.contact.email}`}
                  lines={[siteConfig.contact.email]}
                />
              </Reveal>
              <Reveal delay={200}>
                <ContactBlock
                  icon={MapPin}
                  label="Atelier"
                  lines={[
                    siteConfig.contact.address.street,
                    `${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city}`,
                    siteConfig.contact.address.region,
                  ]}
                />
              </Reveal>
              <Reveal delay={250}>
                <div>
                  <h3 className="eyebrow text-[color:var(--color-iron)] text-[10px] mb-5 flex items-center gap-2">
                    <Clock size={12} strokeWidth={2} />
                    Horaires
                  </h3>
                  <ul className="space-y-2">
                    {siteConfig.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex justify-between gap-8 text-sm text-[color:var(--color-smoke)] border-b border-[color:var(--color-hairline)] pb-2 last:border-0"
                      >
                        <span>{h.day}</span>
                        <span>{h.close ? `${h.open} – ${h.close}` : h.open}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* ── MAP ─── cream ───────────────────────── */}
      <section className="bg-cream border-t border-[color:var(--color-hairline)]">
        <div className="container-page py-16 md:py-20">
          <div className="aspect-[16/6] w-full overflow-hidden">
            <iframe
              title={`Carte — ${siteConfig.legalName}`}
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 grayscale"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactBlock({
  icon: Icon,
  label,
  lines,
  href,
}: {
  icon: typeof Phone;
  label: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <>
      <h3 className="eyebrow text-[color:var(--color-iron)] text-[10px] mb-3 flex items-center gap-2">
        <Icon size={12} strokeWidth={2} />
        {label}
      </h3>
      {lines.map((l) => (
        <p key={l} className="text-[color:var(--color-ink)] text-base leading-relaxed">
          {l}
        </p>
      ))}
    </>
  );

  return href ? (
    <a href={href} className="block group hover:text-[color:var(--color-iron)] transition-colors">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}
