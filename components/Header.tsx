"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { CtaButton } from "./CtaButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on viewport resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[var(--ease-out-expo)] ${
        solid
          ? "bg-[color:var(--color-ink)] border-b border-[color:var(--color-hairline-dark)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          aria-label={`Accueil — ${siteConfig.name}`}
          className="flex items-center gap-3 group min-h-[44px] min-w-0 max-w-[calc(100%-3.5rem)] lg:max-w-none"
        >
          <div className="size-9 shrink-0 rounded-full overflow-hidden ring-1 ring-[color:var(--color-iron)]/20 bg-[color:var(--color-parchment)]/8 transition-all duration-500 group-hover:ring-[color:var(--color-iron)]/50">
            <Image
              src="/assets/logo.png"
              alt=""
              width={36}
              height={36}
              priority
              className="size-full object-contain"
            />
          </div>
          <span className="flex flex-col leading-none gap-1 min-w-0">
            <span className="font-[family-name:var(--font-display)] text-[15px] sm:text-lg lg:text-xl text-[color:var(--color-parchment)] tracking-[-0.02em] transition-colors duration-300 group-hover:text-[color:var(--color-iron)] truncate">
              {siteConfig.name}
            </span>
            <span className="label text-[color:var(--color-mist)] text-[8px] sm:text-[9px] tracking-[0.2em] hidden sm:block">
              Ferronnier d&apos;art
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-9">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-[family-name:var(--font-display)] text-[1.05rem] text-[color:var(--color-parchment)]/85 hover:text-[color:var(--color-iron)] tracking-[-0.01em] transition-colors duration-300 relative after:absolute after:bottom-[-3px] after:left-0 after:right-0 after:h-px after:bg-[color:var(--color-iron)] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[var(--ease-out-expo)] hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="eyebrow text-[color:var(--color-parchment)]/70 hover:text-[color:var(--color-parchment)] transition-colors flex items-center gap-2 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-iron)]"
          >
            <Phone size={13} strokeWidth={2} />
            {siteConfig.contact.phoneDisplay}
          </a>
          <CtaButton href="/contact" variant="primary" withArrow={false}>
            Devis
          </CtaButton>
        </div>

        {/* Mobile toggle — minimum 44×44px */}
        <button
          type="button"
          className="lg:hidden p-3 -mr-1 text-[color:var(--color-parchment)] transition-colors hover:text-[color:var(--color-iron)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-iron)]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-[color:var(--color-hairline-dark)] bg-[color:var(--color-ink)]"
        >
          <nav
            aria-label="Navigation mobile"
            className="container-page py-6 flex flex-col"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--color-parchment)] hover:text-[color:var(--color-iron)] transition-colors py-3 border-b border-[color:var(--color-hairline-dark)] last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Phone CTA — full-width tap target */}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="mt-6 flex items-center gap-3 py-4 px-5 bg-[color:var(--color-iron)]/10 text-[color:var(--color-iron)] eyebrow transition-colors hover:bg-[color:var(--color-iron)]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-iron)]"
            >
              <Phone size={15} strokeWidth={2} />
              {siteConfig.contact.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
