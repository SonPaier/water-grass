import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageHero } from "./PageHero";
import { InstallProcess } from "./InstallProcess";
import { BrandStrip } from "./BrandStrip";
import { FinalCta } from "./FinalCta";
import { LocalBusinessJsonLd } from "./LocalBusinessJsonLd";
import type { LocalPage } from "@/lib/localPages";

function Check() {
  return (
    <svg
      className="w-5 h-5 text-brand shrink-0 mt-1"
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

export function LocalLandingPage({ page }: { page: LocalPage }) {
  return (
    <>
      <LocalBusinessJsonLd />
      <Header />
      <main>
        <PageHero
          eyebrow={page.cityWithArea}
          title={`Nawadnianie ogrodów ${page.city} — projekt, montaż, serwis`}
          lead={`Profesjonalne systemy nawadniania ${page.cityIn}. Pełny zakres: audyt, projekt, montaż, uruchomienie, gwarancja. Bezpłatna wycena u Ciebie.`}
        />
        <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1000px] mx-auto">
            <p className="text-zinc-700 font-body text-lg leading-relaxed mb-8">
              {page.intro}
            </p>
            <h2 className="text-secondary font-headline text-2xl md:text-3xl font-extrabold mb-6 mt-12">
              Dlaczego {page.cityFrom} wybierają WaterGrass
            </h2>
            <ul className="space-y-3 text-zinc-700 text-[15px]">
              {page.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <Check />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        {page.terrainContext ? (
          <section className="py-16 md:py-24 px-6 md:px-8 bg-secondary text-white">
            <div className="max-w-[1000px] mx-auto">
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Lokalna specyfika
              </p>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
                {page.terrainContext.title}
              </h2>
              <p className="font-body text-lg leading-relaxed text-white/90">
                {page.terrainContext.paragraph}
              </p>
            </div>
          </section>
        ) : null}
        <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-alt">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12">
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
                Nasze realizacje {page.cityIn}
              </h2>
              <div className="w-24 h-1 bg-brand mt-4" />
              <p className="text-zinc-600 mt-6 max-w-2xl text-[15px]">
                Wybór obiektów, na których pracowaliśmy w {page.city}. Pełne
                portfolio znajdziesz na stronie{" "}
                <Link href="/realizacje" className="text-brand underline">
                  realizacji
                </Link>
                .
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.references.map((ref) => (
                <article
                  key={ref.name}
                  className="bg-white p-6 border-l-4 border-brand"
                >
                  <p className="text-brand text-xs font-headline font-bold tracking-wide uppercase mb-2">
                    {ref.type}
                  </p>
                  <h3 className="text-secondary font-headline text-base font-bold leading-tight">
                    {ref.name}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>
        <InstallProcess />
        <BrandStrip />
        <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1000px] mx-auto text-center">
            <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold mb-4">
              Bezpłatna wycena {page.cityIn}
            </h2>
            <p className="text-zinc-600 font-body text-[15px] mb-10 max-w-2xl mx-auto">
              Zadzwoń lub umów się przez formularz. Przyjedziemy{" "}
              {page.cityIn}, zmierzymy ogród i przygotujemy konkretną ofertę.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/kontakt"
                className="bg-brand text-white px-7 py-3.5 font-headline text-sm font-bold hover:bg-brand-dark transition-all rounded-sm"
              >
                Umów bezpłatną wycenę
              </Link>
              <Link
                href="/realizacje"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-7 py-3.5 font-headline text-sm font-bold transition-all rounded-sm"
              >
                Zobacz realizacje
              </Link>
            </div>
          </div>
        </section>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
