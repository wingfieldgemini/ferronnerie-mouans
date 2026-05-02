import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/Section";
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
      <Section
        eyebrow="Contact"
        title={
          <>
            Parlons de
            <br />
            <span className="italic text-[color:var(--color-iron)]">votre</span> projet.
          </>
        }
        kicker="Un projet de ferronnerie, une question technique, une demande de devis ? Nous vous répondons sous 48 h ouvrées."
        tone="parchment"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <aside className="lg:col-span-5 space-y-10">
            <ContactItem icon={Phone} label="Téléphone" lines={[siteConfig.contact.phoneDisplay]} href={`tel:${siteConfig.contact.phone}`} />
            <ContactItem icon={Mail} label="Email" lines={[siteConfig.contact.email]} href={`mailto:${siteConfig.contact.email}`} />
            <ContactItem
              icon={MapPin}
              label="Atelier"
              lines={[
                siteConfig.contact.address.street,
                `${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city}`,
                siteConfig.contact.address.region,
              ]}
            />
            <div>
              <h3 className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-iron)] mb-4 font-medium flex items-center gap-2">
                <Clock size={14} strokeWidth={1.75} />
                Horaires
              </h3>
              <ul className="space-y-1.5 text-sm">
                {siteConfig.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6 text-[color:var(--color-smoke)]">
                    <span>{h.day}</span>
                    <span>{h.close ? `${h.open} – ${h.close}` : h.open}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <section className="bg-[color:var(--color-cream)]">
        <div className="container-page py-12 md:py-16">
          <div className="aspect-[16/7] w-full overflow-hidden border border-[color:var(--color-hairline)]">
            <iframe
              title={`Carte — ${siteConfig.legalName}`}
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
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
  const body = (
    <>
      <h3 className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-iron)] mb-3 font-medium flex items-center gap-2">
        <Icon size={14} strokeWidth={1.75} />
        {label}
      </h3>
      {lines.map((l) => (
        <p key={l} className="text-base leading-relaxed">{l}</p>
      ))}
    </>
  );

  return href ? (
    <a href={href} className="block text-[color:var(--color-ink)] hover:text-[color:var(--color-iron)] transition-colors">
      {body}
    </a>
  ) : (
    <div className="text-[color:var(--color-ink)]">{body}</div>
  );
}
