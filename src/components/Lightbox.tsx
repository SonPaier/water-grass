"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/galleryImages";

type LightboxProps = {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  const current = images[index];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria realizacji — zdjęcie ${index + 1} z ${images.length}`}
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Zamknij galerię"
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
      >
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <p className="absolute top-4 left-4 md:top-6 md:left-6 z-10 text-white/80 font-headline text-sm tracking-widest">
        {index + 1} / {images.length}
      </p>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Poprzednie zdjęcie"
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
      >
        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Następne zdjęcie"
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
      >
        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div
        className="relative w-full h-full flex items-center justify-center px-16 md:px-24 py-16 md:py-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-w-6xl">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(min-width: 1280px) 1200px, 95vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
