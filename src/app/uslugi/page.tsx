import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { FinalCta } from "@/components/FinalCta";
import { ServiceIcon } from "@/components/ServiceIcon";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Usługi nawadniania ogrodów — projekt, montaż, serwis | WaterGrass",
  description:
    "Pełna oferta WaterGrass: projektowanie i montaż systemów nawadniania, systemy pompowe, serwis i konserwacja, autoryzowany dealer Husqvarna Automower.",
  alternates: { canonical: "/uslugi" },
};

export default function UslugiPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Oferta"
          title="Usługi nawadniania ogrodów — projekt, montaż, serwis"
          lead="Specjalizujemy się wyłącznie w nawadnianiu i robotach koszących. Cztery filary oferty pod jednym dachem: projektowanie i montaż, systemy pompowe, serwis i konserwacja, Husqvarna Automower."
        />
        <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-alt">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group bg-white p-8 md:p-10 hover:shadow-xl transition-all flex flex-col"
              >
                <div className="mb-6 w-20 h-20 bg-zinc-50 rounded-lg flex items-center justify-center">
                  <ServiceIcon icon={service.icon} />
                </div>
                <p className="text-brand font-headline text-xs font-bold tracking-widest uppercase mb-2">
                  {service.lead}
                </p>
                <h2 className="font-headline text-xl md:text-2xl font-extrabold text-secondary mb-4 leading-tight">
                  {service.title}
                </h2>
                <p className="text-zinc-600 font-body text-[15px] leading-relaxed flex-grow">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-brand font-headline font-bold text-sm group-hover:gap-3 transition-all">
                  Sprawdź szczegóły
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>
        <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Nie wiesz, której usługi potrzebujesz?
            </h2>
            <p className="text-zinc-600 font-body text-[15px] leading-relaxed mb-8">
              Większość naszych zleceń to mix kilku usług naraz —
              projektowanie + montaż + dobór pompy, albo modernizacja + serwis.
              Przyjedziemy, popatrzymy i powiemy, co jest sensowne. Zero
              zobowiązań.
            </p>
            <Link
              href="/kontakt"
              className="bg-brand text-white px-8 py-3.5 font-headline text-sm font-bold hover:bg-brand-dark transition-all rounded-sm inline-block"
            >
              Umów bezpłatną wycenę
            </Link>
          </div>
        </section>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
