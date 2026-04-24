import Link from "next/link";

export function IntroBanner() {
  return (
    <section className="py-24 px-6 md:px-8 bg-surface-lowest relative overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <span className="font-headline text-[12vw] font-extrabold text-zinc-200/40 whitespace-nowrap uppercase tracking-tighter">
          WATER GRASS
        </span>
      </div>
      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
          ZAPROJEKTUJEMY I ZAINSTALUJEMY SYSTEM,
          <br />
          KTÓRY <span className="text-brand">ZAOPIEKUJE SIĘ TWOIM OGRODEM</span>
        </h2>
        <p className="text-zinc-700 font-body text-lg mb-10 leading-relaxed">
          Od 2012 roku zajmujemy się wyłącznie nawadnianiem. Kilkaset systemów,
          dziesiątki realizacji komercyjnych, autoryzowane szkolenia Hunter,
          Rain Bird i Weathermatic. Robimy jedno i robimy to dobrze.
        </p>
        <Link
          href="/o-firmie"
          className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 font-headline text-sm font-bold transition-all rounded-sm inline-block"
        >
          POZNAJ NAS
        </Link>
      </div>
    </section>
  );
}
