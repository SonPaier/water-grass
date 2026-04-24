import Link from "next/link";

const bullets = [
  "Serwis wiosenny — uruchomienie systemu po zimie",
  "Serwis jesienny — bezpieczne zazimowanie instalacji",
  "Diagnoza i naprawa awarii w jeden dzień",
  "Wymiana zraszaczy, sterowników, elektrozaworów",
];

export function ServicesTeaser() {
  return (
    <section className="bg-surface-alt py-20 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-brand font-headline text-sm font-bold tracking-widest mb-3 uppercase">
            Po montażu nie zostawiamy Cię samego
          </p>
          <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Dodatkowo: serwis i konserwacja
          </h2>
          <p className="text-zinc-700 font-body text-[15px] leading-relaxed">
            Każdy zamontowany przez nas system trafia w serwisowy cykl
            sezonowy. Serwisujemy też instalacje innych firm — sprawdź ofertę
            i orientacyjny cennik.
          </p>
        </div>
        <div className="bg-white p-8 shadow-sm">
          <ul className="space-y-3 mb-8 text-zinc-700 text-[15px]">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-brand mt-1">→</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/serwis-i-konserwacja"
              className="bg-secondary text-white px-6 py-3 font-headline text-sm font-bold hover:opacity-90 transition-all rounded-sm inline-block"
            >
              Oferta serwisowa
            </Link>
            <Link
              href="/cennik-serwisu"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 font-headline text-sm font-bold transition-all rounded-sm inline-block"
            >
              Cennik serwisu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
