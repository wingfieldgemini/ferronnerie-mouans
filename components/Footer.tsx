import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--color-ink)] text-[color:var(--color-parchment)] relative">
      <div className="container-page py-12 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-6">
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 shrink-0 rounded-full bg-[color:var(--color-parchment)] p-1 flex items-center justify-center overflow-hidden">
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
            <p className="text-[color:var(--color-mist)] text-sm leading-relaxed max-w-sm">
              {siteConfig.shortDescription}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ember)] mb-3 font-medium">
              Atelier
            </h3>
            <address className="not-italic space-y-2 text-sm text-[color:var(--color-mist)]">
              <div className="flex items-start gap-2">
                <MapPin size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <span>
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                </span>
              </div>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 hover:text-[color:var(--color-parchment)] transition-colors"
              >
                <Phone size={14} strokeWidth={1.5} />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-[color:var(--color-parchment)] transition-colors"
              >
                <Mail size={14} strokeWidth={1.5} />
                {siteConfig.contact.email}
              </a>
            </address>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ember)] mb-3 font-medium">
              Horaires
            </h3>
            <ul className="space-y-1 text-sm text-[color:var(--color-mist)]">
              <li className="flex justify-between gap-3">
                <span>Lun–Ven</span>
                <span>08–17h</span>
              </li>
              <li className="flex justify-between gap-3">
                <span>Sam–Dim</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ember)] mb-3 font-medium">
              Navigation
            </h3>
            <ul className="space-y-1 text-sm">
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

        <div className="mt-10 pt-5 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-[color:var(--color-mist)]/70">
          <p>{siteConfig.serviceArea.join(" · ")}</p>
          <p>© {year} {siteConfig.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
