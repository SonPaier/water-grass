import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Prose } from "@/components/Prose";

export const metadata: Metadata = {
  title: "Polityka cookies",
  description: "Polityka cookies WaterGrass — informacje o plikach cookie używanych w serwisie.",
  alternates: { canonical: "/polityka-cookies" },
  robots: { index: true, follow: true },
};

export default function PolitykaCookiesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Polityka cookies" />
        <Prose>
          <h2>Czym są pliki cookie</h2>
          <p>
            Pliki cookie to małe pliki tekstowe zapisywane w przeglądarce
            podczas korzystania ze stron internetowych. Pomagają stronie
            zapamiętać Twoje preferencje, zwiększyć bezpieczeństwo i mierzyć
            popularność treści.
          </p>
          <h2>Jakie cookies stosujemy</h2>
          <h3>Niezbędne (zawsze włączone)</h3>
          <p>
            Pliki techniczne potrzebne do prawidłowego działania strony —
            obsługi sesji, formularzy, zapisu zgód.
          </p>
          <h3>Analityczne (po Twojej zgodzie)</h3>
          <p>
            Pomagają nam zrozumieć, które treści są najczęściej oglądane i jak
            poprawiać stronę. W tej iteracji nie ładujemy jeszcze żadnych
            skryptów analitycznych.
          </p>
          <h2>Jak zarządzać cookies</h2>
          <p>
            Możesz zablokować lub usunąć pliki cookie w ustawieniach swojej
            przeglądarki. Wyłączenie plików niezbędnych może spowodować, że
            niektóre funkcje strony przestaną działać poprawnie.
          </p>
        </Prose>
      </main>
      <Footer />
    </>
  );
}
