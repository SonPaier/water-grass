import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Prose } from "@/components/Prose";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Systemy pompowe — dobór i instalacja pomp do nawadniania",
  description:
    "Dobór i montaż pomp do studni, zbiorników i źródeł powierzchniowych. Pompy hydroforowe, głębinowe, czujniki ciśnienia, reduktory, filtry. Pomorze, Trójmiasto.",
  alternates: { canonical: "/uslugi/systemy-pompowe" },
};

export default function SystemyPompowePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Usługa"
          title="Systemy pompowe dla nawadniania"
          lead="Pompa to serce systemu nawadniania. Dobieramy ją indywidualnie do Twojego źródła wody, ciśnienia i wydajności jakiej potrzebujesz."
        />
        <Prose>
          <h2>Z czego składa się dobry system pompowy</h2>
          <p>
            System pompowy to nie tylko sama pompa. Żeby instalacja działała
            niezawodnie przez lata, potrzeba kilku elementów dobranych do
            siebie i do warunków u klienta.
          </p>
          <h3>Pompa</h3>
          <p>
            Sercem systemu jest pompa — głębinowa do studni głębokich,
            hydroforowa do studni płytkich i zbiorników, lub powierzchniowa do
            źródeł odkrytych. Dobieramy moc i wydajność pod konkretne
            zapotrzebowanie nawadniania (ciśnienie + przepływ).
          </p>
          <h3>Zbiornik wyrównawczy / hydrofor</h3>
          <p>
            Stabilizuje ciśnienie w instalacji, redukuje liczbę startów pompy
            (dłuższa żywotność). Dobieramy pojemność do liczby sekcji
            nawadniania.
          </p>
          <h3>Czujnik suchobiegu i czujnik ciśnienia</h3>
          <p>
            Suchobieg chroni pompę przed pracą bez wody (najczęstsza przyczyna
            uszkodzeń). Czujnik ciśnienia automatycznie włącza i wyłącza pompę
            w zależności od zapotrzebowania.
          </p>
          <h3>Filtr dyskowy lub siatkowy</h3>
          <p>
            Chroni dysze, elektrozawory i sterownik przed zanieczyszczeniami
            ze studni. Filtry dyskowe 1&quot; i 2&quot; stosujemy w zależności
            od wydajności źródła i jakości wody.
          </p>
          <h3>Reduktor ciśnienia</h3>
          <p>
            Stabilizuje ciśnienie wyjściowe na poziomie optymalnym dla
            zraszaczy i linii kroplujących (zwykle 2–4 bary). Bez niego
            pompa może uszkadzać delikatne elementy systemu.
          </p>

          <h2>Dobór pompy do Twojego źródła wody</h2>

          <h3>Studnia głębinowa</h3>
          <p>
            Najczęstszy scenariusz w nowoczesnych ogrodach. Pompa głębinowa
            zanurzona w studni — niewidoczna, cicha, niezawodna. Dobieramy
            wysokość podnoszenia do głębokości studni i ciśnienia roboczego.
          </p>

          <h3>Studnia kopana</h3>
          <p>
            Pompa hydroforowa na powierzchni z rurą ssącą do studni. Tańsze
            rozwiązanie, ale wymaga ochrony przed mrozem i ograniczone
            głębokością ssania (~7 m).
          </p>

          <h3>Zbiornik / cysterna</h3>
          <p>
            Coraz częściej spotykane — szczególnie tam, gdzie zbiera się
            deszczówkę albo gdzie wodociąg ma za niski wydatek. Pompa
            hydroforowa pobiera wodę ze zbiornika i podaje pod ciśnieniem
            do systemu.
          </p>

          <h3>Wodociąg miejski (booster)</h3>
          <p>
            Jeśli ciśnienie z wodociągu jest za niskie dla pełnego
            nawadniania, instalujemy pompę wzmacniającą (booster). Wzmocnienie
            ciśnienia bez konieczności kopania studni.
          </p>

          <h3>Staw / źródło powierzchniowe</h3>
          <p>
            Specjalistyczne pompy z dodatkowymi filtrami. Dobre rozwiązanie
            dla dużych terenów (parki, osiedla), gdzie zużycie wody jest na
            tyle duże, że woda z wodociągu byłaby kosztowna.
          </p>

          <h2>Modele, które najczęściej instalujemy</h2>
          <p>
            Pracujemy ze sprawdzonymi markami pomp irygacyjnych — Pedrollo,
            DAB, Wilo, Grundfos, Lowara. Konkretny model zależy od źródła
            wody i wymaganych parametrów.
          </p>
          <ul>
            <li>
              <strong>Pompa Divertron 900</strong> — hydroforowa pompa
              powierzchniowa do studni płytkich i zbiorników (wbudowana
              elektronika sterująca, ochrona suchobiegu).
            </li>
            <li>
              <strong>Pompy głębinowe</strong> — Pedrollo 4SR, DAB Divertron,
              Grundfos SQE — do studni głębokich.
            </li>
            <li>
              <strong>Pompy boosterowe</strong> — wzmocnienie ciśnienia z
              wodociągu lub zbiornika.
            </li>
            <li>
              <strong>Stacje hydroforowe</strong> — kompletne zestawy z
              hydroforem, czujnikiem i automatyką.
            </li>
          </ul>

          <h2>Modernizacja istniejącej instalacji pompowej</h2>
          <p>
            Masz już pompę, ale system nie działa jak powinien? Zbyt niskie
            ciśnienie, częste załączanie, awarie — diagnozujemy przyczynę i
            proponujemy konkretne rozwiązanie. Czasem wystarczy reduktor
            ciśnienia albo wymiana czujnika, czasem konieczna jest wymiana
            samej pompy.
          </p>

          <h2>Serwis pomp</h2>
          <p>
            Pompy serwisujemy w cyklu sezonowym razem z instalacją
            nawadniania. Sprawdzenie szczelności, wymiana zużytych
            elementów, kalibracja czujników. Zobacz pełną ofertę{" "}
            <a href="/serwis-i-konserwacja">serwisu i konserwacji</a>.
          </p>

          <h2>Dobór wydajności pompy do liczby sekcji nawadniania</h2>
          <p>
            Pompa musi obsłużyć największą sekcję nawadniania — czyli tę, w
            której pracuje równocześnie najwięcej zraszaczy lub linii
            kroplujących. W standardowym ogrodzie przydomowym największa
            sekcja to zwykle 6–10 zraszaczy o łącznym wydatku 30–50 l/min,
            wymagająca ciśnienia 3–4 bary na wlocie. Dla większych systemów
            (osiedla, parki) projektujemy stacje hydroforowe z większymi
            zbiornikami i pompami głębinowymi o wydajności do 8 m³/h. Dobry
            dobór pompy oznacza ciszę pracy, długą żywotność i niskie
            zużycie prądu — dlatego nie idziemy „na zapas", tylko liczymy
            dokładnie pod konkretny system.
          </p>
          <h2>Pompy w obiektach komercyjnych — boiska, hotele, osiedla</h2>
          <p>
            Dla boisk piłkarskich, pól golfowych, terenów wokół hoteli i
            osiedli mieszkaniowych dobieramy pompy o większej mocy — często
            kilka pomp pracujących równolegle, sterowanych z poziomu
            sterownika centralnego. W Sierra Golf Club, w hotelach w Sopocie
            i na osiedlach w Gdyni używamy pomp Pedrollo 4SR i DAB Divertron
            z czujnikami ciśnienia i suchobiegu. W instalacjach
            przemysłowych (Polpharma, Castorama) — stacje hydroforowe z
            redundancją (w razie awarii jednej pompy, druga przejmuje
            pracę). Wszystko z gwarancją wieloletnią i serwisem sezonowym
            w cenie.
          </p>
          <h2>Trójmiasto, Pomorze, Wybrzeże — montujemy pompy lokalnie</h2>
          <p>
            Pracujemy w całym regionie: Bolszewo, Wejherowo, Trójmiasto
            (Gdańsk, Gdynia, Sopot), Reda, Rumia, pas nadmorski (Łeba,
            Władysławowo, Lubiatowo). Lokalne doświadczenie ma znaczenie:
            znamy poziomy wód gruntowych w różnych częściach Pomorza,
            specyfikę studni w terenach piaszczystych pod Bolszewem versus
            studni w glinach Pomorza Środkowego, problemy z korozją sprzętu
            na wybrzeżu. Dobieramy pompy pod konkretne warunki — nie z
            katalogu.
          </p>
          <h2>Bezpłatna wycena</h2>
          <p>
            Każde źródło wody jest inne — żeby dobrać pompę, musimy zobaczyć
            warunki na miejscu. Przyjeżdżamy z manometrem i miernikiem
            wydatku, sprawdzamy parametry i przygotowujemy konkretną wycenę.
            Bezpłatnie i bez zobowiązań.
          </p>
        </Prose>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
