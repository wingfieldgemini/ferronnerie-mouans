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
          className="flex items-center gap-3.5 group"
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
          <span className="hidden sm:flex flex-col leading-none gap-1">
            <span className="font-[family-name:var(--font-display)] text-[1.2rem] text-[color:var(--color-parchment)] tracking-[-0.02em] transition-colors duration-300 group-hover:text-[color:var(--color-iron)]">
              {siteConfig.name}
            </span>
            <span className="label text-[color:var(--color-mist)] text-[9px] tracking-[0.2em]">
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
            className="eyebrow text-[color:var(--color-parchment)]/70 hover:text-[color:var(--color-parchment)] transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-iron)]"
          >
            <Phone size={13} strokeWidth={2} />
            {siteConfig.contact.phoneDisplay}
          </a>
          <CtaButton href="/contact" variant="primary" withArrow={false}>
            Devis
          </CtaButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2 text-[color:var(--color-parchment)] transition-colors hover:text-[color:var(--color-iron)]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[color:var(--color-hairline-dark)]">
          <nav className="container-page py-8 flex flex-col gap-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--color-parchment)] hover:text-[color:var(--color-iron)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="eyebrow text-[color:var(--color-iron)] mt-2 flex items-center gap-2"
            >
              <Phone size={13} strokeWidth={2} />
              {siteConfig.contact.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
