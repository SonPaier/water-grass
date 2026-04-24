import Image from "next/image";
import Link from "next/link";

export function Husqvarna() {
  return (
    <section className="bg-surface-lowest py-8 md:py-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row-reverse min-h-[400px] px-6 md:px-8 gap-8">
        <div className="w-full md:w-[50%] p-2 relative min-h-[320px] md:min-h-[460px] flex items-center justify-center">
          <Image
            src="/images/services/automower-310.png"
            alt="Robot koszący Husqvarna Automower 310 Mark II"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain p-8 md:p-12"
          />
        </div>
        <div className="w-full md:w-[50%] p-10 md:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-brand text-white px-3 py-1 font-headline text-xs font-bold tracking-wide">
              AUTORYZOWANY DEALER
            </span>
          </div>
          <h2 className="text-secondary font-headline text-2xl md:text-3xl font-extrabold mb-6 leading-tight uppercase">
            Husqvarna Automower —{" "}
            <span className="text-brand">przetestuj robota</span> w swoim ogrodzie
          </h2>
          <p className="text-zinc-700 font-body mb-6 text-[15px]">
            Husqvarna Automower to lider automatycznego koszenia. Zapomnij o
            kosiarce spalinowej i ciesz się idealnie przyciętym trawnikiem 24/7.
            Oferujemy montaż, serwis i profesjonalne doradztwo w doborze modelu.
          </p>
          <div className="mb-8">
            <p className="text-secondary font-headline font-bold text-sm mb-1">
              MODELE Z GPS BEZ PRZEWODU GRANICZNEGO
            </p>
            <p className="text-zinc-600 text-sm">
              Montujemy też nowoczesne Automowery z systemem GPS / RTK
              (stacja referencyjna EPOS RS1) — bez konieczności kopania
              przewodu granicznego.
            </p>
          </div>
          <Link
            href="/husqvarna-automower"
            className="bg-brand text-white px-8 py-3 font-headline text-sm font-bold hover:bg-brand-dark transition-all self-start rounded-sm inline-block"
          >
            SPRAWDŹ JAK TO DZIAŁA
          </Link>
        </div>
      </div>
    </section>
  );
}
