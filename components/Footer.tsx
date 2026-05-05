import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[color:var(--color-ink)] text-[color:var(--color-parchment)] border-t border-[color:var(--color-hairline-dark)]">
      {/* Watermark — hidden on very narrow screens to prevent overflow */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-8 right-0 hidden sm:block font-[family-name:var(--font-display)] leading-none tracking-widest text-right text-[color:var(--color-parchment)] opacity-[0.03]"
        style={{ fontSize: "clamp(4rem, 2rem + 8vw, 9rem)" }}
      >
        MOUANS-SARTOUX
      </span>

      <div className="container-page py-16 md:py-28">
        {/* Mobile: single column. sm+: 2 cols. md+: 12-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-6">

          {/* Brand — full width at all sizes */}
          <div className="sm:col-span-2 md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="size-10 shrink-0 rounded-full overflow-hidden ring-1 ring-[color:var(--color-iron)]/20 bg-[color:var(--color-parchment)]/8">
                <Image
                  src="/assets/logo.png"
                  alt=""
                  width={40}
                  height={40}
                  className="size-full object-contain"
                />
              </div>
              <div className="font-[family-name:var(--font-display)] text-xl leading-tight">
                {siteConfig.name}
              </div>
            </div>
            <p className="font-[family-name:var(--font-display)] italic text-lg text-[color:var(--color-iron)] mb-4 leading-snug">
              {siteConfig.tagline}
            </p>
            <p className="text-[color:var(--color-mist)] text-sm leading-relaxed max-w-xs">
              {siteConfig.shortDescription}
            </p>
          </div>

          {/* Address */}
          <div className="md:col-span-3">
            <h3 className="eyebrow text-[color:var(--color-ember)] text-[10px] mb-4">
              Atelier
            </h3>
            <address className="not-italic space-y-2.5 text-sm text-[color:var(--color-mist)]">
              <div className="flex items-start gap-2">
                <MapPin size={13} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <span>
                  {siteConfig.contact.address.street},<br />
                  {siteConfig.contact.address.postalCode}{" "}
                  {siteConfig.contact.address.city}
                </span>
              </div>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 hover:text-[color:var(--color-parchment)] transition-colors py-1 min-h-[44px]"
              >
                <Phone size={13} strokeWidth={1.5} className="shrink-0" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-2 hover:text-[color:var(--color-parchment)] transition-colors py-1 min-h-[44px]"
              >
                <Mail size={13} strokeWidth={1.5} className="mt-1 shrink-0" />
                <span className="break-all">{siteConfig.contact.email}</span>
              </a>
            </address>
          </div>

          {/* Hours */}
          <div className="md:col-span-2">
            <h3 className="eyebrow text-[color:var(--color-ember)] text-[10px] mb-4">
              Horaires
            </h3>
            <ul className="space-y-1.5 text-sm text-[color:var(--color-mist)]">
              <li className="flex justify-between gap-4">
                <span>Lun–Ven</span>
                <span>08–17h</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sam–Dim</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="eyebrow text-[color:var(--color-ember)] text-[10px] mb-4">
              Navigation
            </h3>
            <ul className="space-y-1">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[color:var(--color-mist)] hover:text-[color:var(--color-parchment)] transition-colors py-2 text-sm min-h-[44px] flex items-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-14 pt-6 border-t border-[color:var(--color-hairline-dark)] flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {/* Service area — wraps on mobile */}
          <p className="text-[10px] tracking-wide text-[color:var(--color-mist)]/40 flex flex-wrap gap-x-2 gap-y-1">
            {siteConfig.serviceArea.map((area, i) => (
              <span key={area}>
                {area}{i < siteConfig.serviceArea.length - 1 ? " ·" : ""}
              </span>
            ))}
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <Link
              href="/mentions-legales"
              className="text-xs text-[color:var(--color-mist)]/60 hover:text-[color:var(--color-mist)] transition-colors py-1"
            >
              Mentions légales
            </Link>
            <p className="text-xs text-[color:var(--color-mist)]/60">
              © {year} {siteConfig.legalName}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
