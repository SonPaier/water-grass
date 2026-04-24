"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  realizations,
  realizationCategories,
  type RealizationCategory,
} from "@/lib/realizations";

export function Realizations({ initialLimit = 6 }: { initialLimit?: number }) {
  const [filter, setFilter] = useState<RealizationCategory | "all">("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? realizations
        : realizations.filter((r) => r.category === filter),
    [filter]
  );

  const visible = showAll ? filtered : filtered.slice(0, initialLimit);

  return (
    <section
      id="realizacje"
      className="py-24 md:py-32 px-6 md:px-8 bg-surface-lowest"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between md:items-end gap-4">
          <div>
            <h2 className="text-secondary font-headline text-4xl md:text-5xl font-extrabold tracking-tight">
              Nasze realizacje
            </h2>
            <div className="w-24 h-1 bg-brand mt-4" />
          </div>
          <p className="text-zinc-500 font-body max-w-md md:text-right text-[15px]">
            Kilkaset systemów na Pomorzu — od ogrodów przydomowych po hotele,
            pola golfowe i parki miejskie.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-10">
          {realizationCategories.map((cat) => {
            const active = filter === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => {
                  setFilter(cat.value);
                  setShowAll(false);
                }}
                className={`px-4 py-2 font-headline text-sm font-bold rounded-sm transition-colors ${
                  active
                    ? "bg-secondary text-white"
                    : "bg-zinc-100 text-secondary hover:bg-zinc-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((r) => (
            <Link
              key={r.slug}
              href={`/realizacje/${r.slug}`}
              className="group relative overflow-hidden aspect-[4/5] bg-zinc-200 block focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
              aria-label={`Zobacz realizację: ${r.name}, ${r.city}`}
            >
              <div className="absolute top-4 right-4 w-12 h-12 z-20 pointer-events-none border-t-2 border-r-2 border-white/40" />
              <Image
                src={r.image}
                alt={r.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 to-transparent flex flex-col justify-end p-8">
                <span className="text-brand font-headline font-bold text-sm mb-2 uppercase">
                  {r.categoryLabel}
                </span>
                <h3 className="text-white font-headline text-2xl font-bold leading-tight">
                  {r.name}
                </h3>
                <p className="text-white/80 font-body text-sm mt-1">{r.city}</p>
                <span className="text-white/0 group-hover:text-white font-headline text-sm mt-3 transition-colors uppercase tracking-widest">
                  Zobacz szczegóły →
                </span>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length > initialLimit ? (
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 font-headline text-sm font-bold transition-all rounded-sm"
            >
              {showAll ? "Pokaż mniej" : `Pokaż wszystkie (${filtered.length})`}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
