import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { FinalCta } from "@/components/FinalCta";
import { servicePricing } from "@/lib/servicePricing";

export const metadata: Metadata = {
  title: "Cennik serwisu nawadniania — orientacyjne ceny",
  description:
    "Orientacyjny cennik serwisu systemów nawadniania: serwis wiosenny od 250 zł, jesienny od 350 zł, diagnoza awarii 200 zł, roboczogodzina 75 zł.",
  alternates: { canonical: "/cennik-serwisu" },
};

export default function CennikPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Transparentny cennik"
          title="Orientacyjny cennik serwisu nawadniania"
          lead="W branży rzadko ktoś pokazuje ceny — uważamy, że klient powinien wiedzieć, na co się umawia. Pełny montaż wyceniamy zawsze indywidualnie i bezpłatnie."
        />
        <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1000px] mx-auto space-y-12">
            {servicePricing.map((group) => (
              <div key={group.title}>
                <h2 className="text-secondary font-headline text-2xl md:text-3xl font-extrabold mb-6">
                  {group.title}
                </h2>
                <div className="bg-white border border-zinc-200 rounded-sm overflow-hidden">
                  <ul className="divide-y divide-zinc-100">
                    {group.items.map((item) => (
                      <li
                        key={item.label}
                        className="flex flex-wrap justify-between items-baseline gap-4 px-6 py-4"
                      >
                        <div>
                          <p className="font-headline text-secondary font-bold text-base">
                            {item.label}
                          </p>
                          {item.note ? (
                            <p className="text-zinc-500 text-sm mt-1">
                              {item.note}
                            </p>
                          ) : null}
                        </div>
                        <p className="font-headline text-brand text-xl font-extrabold">
                          {item.price}
                          {item.unit ? (
                            <span className="text-base text-zinc-500 ml-1">
                              {item.unit}
                            </span>
                          ) : null}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="bg-surface-alt p-8 border-l-4 border-brand">
              <h2 className="text-secondary font-headline text-xl font-extrabold mb-3">
                Pełny montaż — zawsze wycena indywidualna
              </h2>
              <p className="text-zinc-700 text-[15px] leading-relaxed">
                Cennik powyżej dotyczy serwisów i drobnych prac. Kompletne
                montaże nowych systemów nawadniania wyceniamy zawsze
                indywidualnie po wizycie u klienta — wycena jest{" "}
                <strong>bezpłatna i nie zobowiązuje</strong>.
              </p>
              <p className="text-xs text-zinc-500 mt-4">
                Ceny brutto. Mogą się różnić w zależności od stopnia trudności i
                lokalizacji. Końcową cenę zawsze ustalamy przed rozpoczęciem
                prac.
              </p>
            </div>
          </div>
        </section>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
