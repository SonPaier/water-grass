import Link from "next/link";
import { SectionHeading } from "./SectionHeading";

const left = [
  "Projekty techniczne i dokumentacja CAD",
  "Doradztwo w zakresie robotyzacji ogrodów",
  "Preferencyjne warunki dla stałych partnerów",
];

const right = [
  "Montaże osiedlowe pod klucz",
  "Harmonogramy zgrane z odbiorami inwestycji",
  "Wieloletnia gwarancja i serwis sezonowy w cenie",
];

function Check() {
  return (
    <svg
      className="w-5 h-5 text-brand shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function Cooperation() {
  return (
    <section className="bg-surface-alt py-24 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          title="Współpraca z architektami i deweloperami"
          align="center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 shadow-sm">
            <h3 className="font-headline text-lg font-bold text-secondary uppercase mb-4">
              Dla architektów krajobrazu i ogrodników
            </h3>
            <p className="text-zinc-600 font-body leading-relaxed text-[15px] mb-6">
              Kompleksowe wsparcie techniczne w systemach automatycznego
              nawadniania i instalacjach robotów koszących. Pełna dokumentacja
              CAD, dobór urządzeń, autoryzowany serwis wykonawczy.
            </p>
            <ul className="space-y-3 text-zinc-700 text-[15px]">
              {left.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 shadow-sm">
            <h3 className="font-headline text-lg font-bold text-secondary uppercase mb-4">
              Dla deweloperów i wspólnot mieszkaniowych
            </h3>
            <p className="text-zinc-600 font-body leading-relaxed text-[15px] mb-6">
              Realizujemy nawadnianie osiedli pod klucz. Współpracujemy z
              deweloperami z Trójmiasta, dostarczamy kompletną dokumentację
              powykonawczą i wieloletnie gwarancje.
            </p>
            <ul className="space-y-3 text-zinc-700 text-[15px]">
              {right.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-secondary mt-16 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-headline text-2xl md:text-3xl font-extrabold text-white uppercase mb-2">
              Gotowy na precyzyjny projekt?
            </h3>
            <p className="text-white/70 font-body text-[15px]">
              Pełne warunki współpracy B2B, proces i referencje znajdziesz
              na dedykowanej stronie.
            </p>
          </div>
          <Link
            href="/wspolpraca"
            className="bg-brand text-white px-8 py-3.5 font-headline text-sm font-bold hover:bg-brand-dark transition-all rounded-sm inline-block shrink-0 uppercase"
          >
            Sprawdź ofertę współpracy
          </Link>
        </div>
      </div>
    </section>
  );
}
