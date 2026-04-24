import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[calc(75vh+100px)] w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero.png"
          alt="Profesjonalny montaż systemu nawadniania ogrodu"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
      </div>
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="max-w-2xl">
          <p className="text-brand font-headline text-sm font-bold tracking-widest mb-4 uppercase">
            Profesjonalne systemy nawadniania od 2012 roku
          </p>
          <h1 className="text-white font-headline text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6">
            Projektujemy i&nbsp;montujemy<br />
            systemy nawadniania <span className="text-brand">pod klucz</span>
          </h1>
          <p className="text-lg text-white/85 font-body mb-10 leading-relaxed max-w-xl">
            Audyt → projekt → montaż → uruchomienie → gwarancja. Robimy ogrody
            przydomowe, osiedla, hotele, parki i obiekty sportowe na Pomorzu.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="bg-brand text-white px-7 py-3.5 font-headline text-sm font-bold tracking-wide hover:bg-brand-dark transition-all inline-flex items-center gap-2 rounded-sm"
            >
              Umów bezpłatną wycenę
            </Link>
            <Link
              href="/realizacje"
              className="bg-white/95 text-secondary px-7 py-3.5 font-headline text-sm font-bold tracking-wide hover:bg-white transition-all inline-flex items-center gap-2 rounded-sm"
            >
              Zobacz realizacje
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
