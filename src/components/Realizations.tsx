"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  realizations,
  realizationCategories,
  type RealizationCategory,
} from "@/lib/realizations";
import { galleryImages } from "@/lib/galleryImages";
import { Lightbox } from "./Lightbox";

type Props = {
  initialLimit?: number;
  showGallery?: boolean;
};

export function Realizations({ initialLimit = 6, showGallery = false }: Props) {
  const [filter, setFilter] = useState<RealizationCategory | "all">("all");
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? realizations
        : realizations.filter((r) => r.category === filter),
    [filter]
  );

  const visible = showAll ? filtered : filtered.slice(0, initialLimit);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
    );
  const next = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % galleryImages.length
    );

  return (
    <section
      id="realizacje"
      className="py-24 md:py-32 px-6 md:px-8 bg-surface-lowest"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Wybrane realizacje (case studies) */}
        <div className="mb-12 flex flex-col md:flex-row justify-between md:items-end gap-4">
          <div>
            <h2 className="text-secondary font-headline text-4xl md:text-5xl font-extrabold tracking-tight">
              Wybrane realizacje
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

        {/* Pozostałe realizacje — kolaż klikalny (tylko na /realizacje) */}
        {showGallery ? (
          <>
            <div className="mt-24 md:mt-32 mb-10">
              <h3 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
                Pozostałe realizacje
              </h3>
              <div className="w-24 h-1 bg-brand mt-4" />
              <p className="text-zinc-500 font-body mt-4 max-w-2xl text-[15px]">
                Wybór zdjęć z różnych etapów montażu i gotowych instalacji.
                Kliknij, żeby powiększyć — strzałkami przechodzisz między zdjęciami.
              </p>
            </div>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [column-fill:_balance]">
              {galleryImages.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => openLightbox(i)}
                  className="group block w-full mb-3 break-inside-avoid relative overflow-hidden bg-zinc-100 focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
                  aria-label={`Otwórz zdjęcie: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={500}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white/0 group-hover:text-white transition-colors"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </>
        ) : null}
      </div>

      {showGallery && lightboxIndex !== null ? (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      ) : null}
    </section>
  );
}
