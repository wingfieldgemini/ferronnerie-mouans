import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--color-ink)] text-[color:var(--color-parchment)] relative">
      <div className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-14 shrink-0 rounded-full bg-[color:var(--color-parchment)] p-1.5 flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/logo.png"
                  alt=""
                  width={56}
                  height={56}
                  className="size-full object-contain"
                />
              </div>
              <div className="font-[family-name:var(--font-display)] text-2xl leading-tight">
                {siteConfig.name}
              </div>
            </div>
            <p className="text-[color:var(--color-mist)] text-sm leading-relaxed max-w-sm">
              {siteConfig.shortDescription}
            </p>
            <p className="mt-6 text-xs text-[color:var(--color-mist)] uppercase tracking-[0.2em]">
              {siteConfig.founded}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-ember)] mb-5 font-[family-name:var(--font-sans)] font-medium">
              Atelier
            </h3>
            <address className="not-italic space-y-3 text-sm text-[color:var(--color-mist)]">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <span>
                  {siteConfig.contact.address.street}
                  <br />
                  {siteConfig.contact.address.postalCode}{" "}
                  {siteConfig.contact.address.city}
                  <br />
                  {siteConfig.contact.address.region}
                </span>
              </div>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2.5 hover:text-[color:var(--color-parchment)] transition-colors"
              >
                <Phone size={15} strokeWidth={1.5} />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2.5 hover:text-[color:var(--color-parchment)] transition-colors"
              >
                <Mail size={15} strokeWidth={1.5} />
                {siteConfig.contact.email}
              </a>
            </address>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-ember)] mb-5 font-[family-name:var(--font-sans)] font-medium">
              Horaires
            </h3>
            <ul className="space-y-2 text-sm text-[color:var(--color-mist)]">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-3">
                  <span>{h.day.slice(0, 3)}</span>
                  <span className="text-right">
                    {h.close ? `${h.open}–${h.close}` : h.open}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-ember)] mb-5 font-[family-name:var(--font-sans)] font-medium">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[color:var(--color-mist)] hover:text-[color:var(--color-parchment)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-6 md:items-end md:justify-between">
          <div>
            <h3 className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-ember)] mb-3 font-medium">
              Zone d&apos;intervention
            </h3>
            <p className="text-sm text-[color:var(--color-mist)] max-w-2xl">
              {siteConfig.serviceArea.join(" · ")}
            </p>
          </div>
          <p className="text-xs text-[color:var(--color-mist)]/70 tracking-wide">
            © {year} {siteConfig.legalName}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
