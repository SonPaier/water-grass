import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-40 pb-32 px-6 md:px-8 bg-surface-lowest min-h-[60vh] flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-brand font-headline text-sm font-bold tracking-widest mb-4 uppercase">
            Błąd 404
          </p>
          <h1 className="text-secondary font-headline text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Tej strony nie znaleźliśmy
          </h1>
          <p className="text-zinc-600 text-lg mb-10">
            Adres mógł się zmienić. Wróć na stronę główną albo zadzwoń.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-brand text-white px-7 py-3.5 font-headline text-sm font-bold hover:bg-brand-dark transition-all rounded-sm"
            >
              Strona główna
            </Link>
            <Link
              href="/kontakt"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-7 py-3.5 font-headline text-sm font-bold transition-all rounded-sm"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
