import Link from "next/link";
import Image from "next/image";
import { Phone, Menu } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { CtaButton } from "./CtaButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--color-parchment)]/85 border-b border-[color:var(--color-hairline)]">
      <div className="container-page flex items-center justify-between h-20 md:h-24">
        <Link
          href="/"
          aria-label={`Accueil — ${siteConfig.name}`}
          className="flex items-center gap-3 group"
        >
          <Image
            src="/assets/logo.png"
            alt=""
            width={48}
            height={48}
            priority
            className="rounded-full"
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-[family-name:var(--font-display)] text-xl tracking-tight">
              {siteConfig.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-smoke)]">
              {siteConfig.contact.address.city} · 06
            </span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-9">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-iron)] transition-colors duration-300 ease-[var(--ease-out-expo)] relative after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[color:var(--color-iron)] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-2 text-sm text-[color:var(--color-smoke)] hover:text-[color:var(--color-ink)] transition-colors"
          >
            <Phone size={15} strokeWidth={1.75} />
            <span className="font-medium tracking-wide">
              {siteConfig.contact.phoneDisplay}
            </span>
          </a>
          <CtaButton href="/contact" variant="primary" withArrow={false}>
            Devis
          </CtaButton>
        </div>

        <details className="lg:hidden relative">
          <summary
            aria-label="Ouvrir le menu"
            className="list-none p-2 cursor-pointer text-[color:var(--color-ink)] [&::-webkit-details-marker]:hidden"
          >
            <Menu size={26} strokeWidth={1.5} />
          </summary>
          <div className="absolute right-0 top-full mt-2 w-72 bg-[color:var(--color-parchment)] border border-[color:var(--color-hairline)] shadow-xl">
            <ul className="py-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-6 py-3 text-base text-[color:var(--color-ink)] hover:bg-[color:var(--color-cream)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="border-t border-[color:var(--color-hairline)] mt-2 pt-3 px-6 pb-4">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-sm text-[color:var(--color-iron)] font-medium"
                >
                  <Phone size={15} strokeWidth={1.75} />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </header>
  );
}
