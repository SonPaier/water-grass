import Link from "next/link";

export function FinalCta() {
  return (
    <section className="bg-brand text-white py-20 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Umów bezpłatną wycenę w swoim ogrodzie
        </h2>
        <p className="font-body text-lg text-white/90 max-w-2xl mx-auto mb-10">
          Przyjedziemy, zmierzymy, doradzimy. Wycena jest bezpłatna i nie
          zobowiązuje. Zazwyczaj odzywamy się tego samego dnia.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/kontakt"
            className="bg-white text-brand-dark px-8 py-4 font-headline text-base font-bold hover:bg-zinc-100 transition-all rounded-sm"
          >
            Umów spotkanie
          </Link>
          <Link
            href="/realizacje"
            className="border-2 border-white text-white px-8 py-4 font-headline text-base font-bold hover:bg-white hover:text-brand-dark transition-all rounded-sm"
          >
            Zobacz realizacje
          </Link>
        </div>
      </div>
    </section>
  );
}
