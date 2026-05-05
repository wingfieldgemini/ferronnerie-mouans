"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Item = { src: string; alt: string; category: string };

type Props = {
  items: ReadonlyArray<Item>;
  showFilters?: boolean;
};

export function GalleryGrid({ items, showFilters = true }: Props) {
  const [active, setActive] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("Tout");

  const categories = [
    "Tout",
    ...Array.from(new Set(items.map((i) => i.category))).sort(),
  ];

  const filtered =
    activeFilter === "Tout"
      ? items
      : items.filter((i) => i.category === activeFilter);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () =>
      setActive((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length],
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? null : (i - 1 + filtered.length) % filtered.length,
      ),
    [filtered.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  // Reset active lightbox when filter changes
  useEffect(() => {
    setActive(null);
  }, [activeFilter]);

  return (
    <>
      {/* Filter tabs */}
      {showFilters && categories.length > 2 && (
        <div
          className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12"
          role="group"
          aria-label="Filtrer par catégorie"
        >
          {categories.map((cat) => {
            const count = cat === "Tout" ? items.length : items.filter((i) => i.category === cat).length;
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                aria-pressed={isActive}
                className={`label text-[10px] px-4 py-2.5 transition-all duration-300 ease-[var(--ease-out-expo)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-iron)] ${
                  isActive
                    ? "bg-[color:var(--color-iron)] text-[color:var(--color-ink)]"
                    : "text-[color:var(--color-mist)] ring-1 ring-[color:var(--color-hairline-dark)] hover:text-[color:var(--color-parchment)] hover:ring-[color:var(--color-iron)]"
                }`}
              >
                {cat}
                <span
                  className={`ml-2 text-[9px] ${
                    isActive
                      ? "text-[color:var(--color-ink)]/60"
                      : "text-[color:var(--color-mist)]/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Grid */}
      <ul
        className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-1.5"
        aria-label={`Galerie — ${filtered.length} réalisation${filtered.length > 1 ? "s" : ""}`}
      >
        {filtered.map((item, i) => (
          <li
            key={item.src}
            className="aspect-square relative group overflow-hidden bg-[color:var(--color-hairline-dark)]"
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-iron)] focus-visible:ring-inset"
              aria-label={`Agrandir : ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={85}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="eyebrow text-[color:var(--color-ember)] text-[9px] block mb-0.5">
                  {item.category}
                </span>
                <span className="text-[color:var(--color-parchment)] text-xs leading-snug line-clamp-2">
                  {item.alt}
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-[color:var(--color-mist)] text-sm">
            Aucune réalisation dans cette catégorie.
          </p>
        </div>
      )}

      {/* Lightbox */}
      {active !== null && filtered[active] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse d'image"
          className="fixed inset-0 z-[100] bg-[color:var(--color-ink)]/97 flex items-center justify-center p-4 md:p-12"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute top-5 right-5 md:top-8 md:right-8 text-[color:var(--color-parchment)] p-3 hover:text-[color:var(--color-iron)] transition-colors"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Précédent"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-[color:var(--color-parchment)] p-3 hover:text-[color:var(--color-iron)] transition-colors"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Suivant"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-[color:var(--color-parchment)] p-3 hover:text-[color:var(--color-iron)] transition-colors"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>

          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[active].src}
              alt={filtered[active].alt}
              fill
              quality={95}
              sizes="100vw"
              className="object-contain"
              priority
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[color:var(--color-ink)]/80 px-5 py-2.5 text-center">
              <span className="eyebrow text-[color:var(--color-ember)] text-[9px] block mb-0.5">
                {filtered[active].category}
              </span>
              <span className="text-[color:var(--color-mist)] text-xs">
                {active + 1} / {filtered.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
