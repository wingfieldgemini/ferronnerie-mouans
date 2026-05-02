"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Item = { src: string; alt: string; category: string };

type Props = { items: ReadonlyArray<Item> };

export function GalleryGrid({ items }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length],
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? null : (i - 1 + items.length) % items.length,
      ),
    [items.length],
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

  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {items.map((item, i) => {
          const isFeature = i % 7 === 0;
          return (
            <li
              key={item.src}
              className={`${isFeature ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/5]"} relative group overflow-hidden bg-[color:var(--color-cream)]`}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-iron)] focus-visible:ring-offset-2"
                aria-label={`Agrandir : ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ember)] block mb-1">
                    {item.category}
                  </span>
                  <span className="text-[color:var(--color-parchment)] text-sm leading-snug">
                    {item.alt}
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse d'image"
          className="fixed inset-0 z-[100] bg-[color:var(--color-ink)]/95 flex items-center justify-center p-4 md:p-12"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute top-4 right-4 md:top-8 md:right-8 text-[color:var(--color-parchment)] p-3 hover:bg-white/10 transition-colors"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Précédent"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-[color:var(--color-parchment)] p-3 hover:bg-white/10 transition-colors"
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
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-[color:var(--color-parchment)] p-3 hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>
          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[active].src}
              alt={items[active].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[color:var(--color-ink)]/80 px-5 py-2 text-center">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ember)] block">
                {items[active].category}
              </span>
              <span className="text-[color:var(--color-parchment)] text-sm">
                {active + 1} / {items.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
