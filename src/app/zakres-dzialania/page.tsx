import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ServiceArea } from "@/components/ServiceArea";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Zakres działania — Pomorze, Trójmiasto, wybrzeże",
  description:
    "WaterGrass działa w Bolszewie, Wejherowie, Trójmieście, na wybrzeżu (Łeba, Władysławowo) i w wybranych obiektach komercyjnych poza regionem.",
  alternates: { canonical: "/zakres-dzialania" },
};

export default function ZakresPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Gdzie pracujemy"
          title="Pomorze, Trójmiasto i pas nadmorski"
          lead="Bolszewo to nasza baza, ale jeździmy daleko poza okolicę. Sprawdź, czy działamy u Ciebie."
        />
        <ServiceArea />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
