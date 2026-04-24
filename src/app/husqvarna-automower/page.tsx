import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Prose } from "@/components/Prose";
import { FinalCta } from "@/components/FinalCta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Husqvarna Automower — autoryzowany dealer Pomorze",
  description:
    "Sprzedaż, montaż i serwis robotów koszących Husqvarna Automower. Modele klasyczne i z GPS (EPOS RS1). Bezpłatna prezentacja u Ciebie w ogrodzie.",
  alternates: { canonical: "/husqvarna-automower" },
};

export default function HusqvarnaPage() {
  return (
    <>
      <ServiceJsonLd
        name="Husqvarna Automower — sprzedaż, montaż, serwis"
        description="Autoryzowany dealer i serwis robotów koszących Husqvarna Automower na Pomorzu. Modele klasyczne i z GPS (EPOS RS1). Bezpłatna prezentacja u Ciebie w ogrodzie."
        serviceType="Robotic lawn mower sales and service"
        path="/husqvarna-automower"
        image="/images/services/automower-310.png"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Strona główna", path: "/" },
          { name: "Usługi", path: "/uslugi" },
          { name: "Husqvarna Automower", path: "/husqvarna-automower" },
        ]}
      />
      <Header />
      <main>
        <PageHero
          eyebrow="Autoryzowany dealer"
          title="Husqvarna Automower — przetestuj robota za darmo"
          lead="Sprzedaż, montaż i serwis robotów koszących na Pomorzu. Modele klasyczne i nowoczesne z GPS, bez przewodu granicznego."
        />
        <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image
                src="/images/services/husqvarna.jpg"
                alt="Husqvarna Automower w ogrodzie"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-secondary font-headline text-2xl md:text-3xl font-extrabold mb-6">
                Jak działa robot koszący
              </h2>
              <p className="text-zinc-700 mb-4 text-[15px] leading-relaxed">
                Robot pracuje samodzielnie bez Twojej interwencji. Zapamiętuje
                kształt ogrodu, kosi strefa po strefie, wraca do stacji
                dokującej, ładuje się i rusza dalej.
              </p>
              <p className="text-zinc-700 mb-4 text-[15px] leading-relaxed">
                Czujniki kolizji i przewody graniczne (lub GPS w nowych
                modelach) chronią przed przeszkodami. Robot wykrywa rodzaj i
                zagęszczenie trawy — automatycznie dostosowuje obroty noży.
              </p>
              <p className="text-zinc-700 text-[15px] leading-relaxed">
                Tam, gdzie trawa jest wyższa i gęstsza, Automower zaczyna
                koszenie po torze spiralnym. Trawnik jest cięty równomiernie.
              </p>
            </div>
          </div>
        </section>
        <Prose>
          <h2>Modele Husqvarna Automower</h2>
          <h3>Modele z przewodem granicznym</h3>
          <p>
            Klasyczne Automowery (np. seria 305, 310, 315, 405X) — niezawodne,
            sprawdzone od lat. Przewód graniczny zakopujemy pod ziemią —
            niewidoczny, trwały.
          </p>
          <h3>Modele z nawigacją GPS i stacją EPOS RS1</h3>
          <p>
            Nowa generacja Automowerów — wirtualna granica zamiast przewodu
            fizycznego. Strefy zmieniasz w aplikacji w kilka sekund. Idealne
            dla ogrodów, w których zmieniasz aranżację, oraz dla obiektów
            komercyjnych z wieloma sekcjami.
          </p>
          <h3>Modele do dużych powierzchni i obiektów komercyjnych</h3>
          <p>
            Automowery 535 AWD, 550 EPOS, 570 — koszą trawniki nawet do 1,5
            hektara. Pokonują wzniesienia do 70%, pracują w deszczu i nocy.
          </p>
          <h2>Przetestuj robota na swoim ogrodzie — bezpłatnie</h2>
          <p>
            Najlepszy sposób, żeby zdecydować, to zobaczyć Automower w pracy na
            Twoim trawniku. Przyjedziemy, ustawimy demo na kilka godzin,
            pokażemy aplikację. Bez zobowiązań.
          </p>
          <h2>Montaż, serwis i części</h2>
          <p>
            Robot to nie wszystko — kluczowe są montaż przewodu granicznego (lub
            kalibracja stacji EPOS), instalacja stacji dokującej i
            zaprogramowanie tras.
          </p>
          <h2>Zimowy serwis robota Husqvarna — Wejherowo i Pomorze</h2>
          <p>
            Co roku zimą oddajesz robota do naszego warsztatu. Z Wejherowa,
            Bolszewa i okolic odbieramy bezpłatnie — dla dalszych lokalizacji
            ustalamy indywidualnie. Zakres serwisu zimowego:
          </p>
          <ul>
            <li>Pełny przegląd techniczny i diagnostyka</li>
            <li>Wymiana noży tnących i części eksploatacyjnych</li>
            <li>Test akumulatora (i ewentualna wymiana)</li>
            <li>Czyszczenie obudowy i podzespołów wewnętrznych</li>
            <li>Kalibracja stacji dokującej</li>
            <li>Aktualizacja oprogramowania</li>
          </ul>
          <p>
            Robot wraca do Ciebie wczesną wiosną z pełną gwarancją serwisową —
            gotowy na nowy sezon koszenia.
          </p>
          <h2>Montaż robotów koszących bez przewodu granicznego (Pomorze)</h2>
          <p>
            Coraz więcej klientów wybiera modele Husqvarna Automower z systemem
            GPS / RTK (stacja referencyjna EPOS RS1) — bez konieczności
            zakopywania przewodu granicznego pod ziemią. Strefy koszenia
            ustawiasz wirtualnie w aplikacji w kilka sekund, zmieniasz je
            kiedy chcesz. To rozwiązanie idealne dla ogrodów, w których
            zmieniasz aranżację, oraz dla osiedli i obiektów komercyjnych.
            Jako autoryzowany dealer Husqvarna na Pomorzu mamy doświadczenie z
            kalibracją stacji EPOS na różnych typach terenu.
          </p>
          <h2>Najczęstsze pytania</h2>
          <h3>Czy Automower zniszczy mi trawnik?</h3>
          <p>
            Nie — wręcz przeciwnie. Codzienne, krótkie cięcie powoduje, że
            trawa gęstnieje, a ścinki działają jak naturalny nawóz. Po sezonie
            trawnik jest gęstszy i zdrowszy.
          </p>
          <h3>Czy robot jest głośny?</h3>
          <p>
            Pracuje na poziomie ok. 60 dB — cicho, możesz go używać w nocy bez
            przeszkadzania sobie ani sąsiadom.
          </p>
          <h3>Co z bezpieczeństwem dzieci i zwierząt?</h3>
          <p>
            Automower ma czujniki podnoszenia i pochylenia — gdy ktoś go uniesie
            albo wywróci, noże natychmiast się zatrzymują.
          </p>
          <h2>Aplikacja Husqvarna Automower Connect</h2>
          <p>
            Każdy nowy Automower łączymy z aplikacją mobilną Husqvarna
            Automower Connect. Z poziomu telefonu uruchamiasz koszenie, robisz
            pauzę przed ważną imprezą w ogrodzie, sprawdzasz lokalizację
            robota (GPS), dostajesz alerty o usterkach i przypomnienia o
            wymianie noży. W modelach EPOS możesz w aplikacji rysować nowe
            strefy koszenia i wirtualne korytarze — bez kopania nowego
            przewodu granicznego. Jako autoryzowany dealer Husqvarna
            konfigurujemy aplikację, łączymy z kontem klienta i pokazujemy
            jak z niej korzystać przy uruchomieniu.
          </p>
          <h2>Roboty Husqvarna w obiektach komercyjnych</h2>
          <p>
            Modele Husqvarna Automower 535 AWD, 550 EPOS i 570 to maszyny
            klasy professional — koszą trawniki nawet do 1,5 hektara,
            pokonują wzniesienia do 70%, pracują w deszczu i nocy.
            Montujemy je dla osiedli mieszkaniowych w Trójmieście, hoteli i
            ośrodków wczasowych w Łebie i Władysławowie, terenów wokół
            obiektów komercyjnych. W odróżnieniu od koszenia ekipą
            ogrodniczą, robot pracuje codziennie i bezgłośnie — trawnik
            zawsze wygląda na świeżo skoszony, bez harmonogramu i bez
            kosztów ekipy.
          </p>
          <h2>Pomorze — autoryzowany dealer Husqvarna od 2012 roku</h2>
          <p>
            Robotami Husqvarna zajmujemy się od kilkunastu lat — sprzedaż,
            montaż, serwis, części zamienne, doradztwo w doborze modelu.
            Pracujemy na całym Pomorzu, ze szczególnym naciskiem na
            Wejherowo, Bolszewo, Trójmiasto i pas nadmorski. Wybór
            właściwego modelu zależy od wielu czynników: powierzchni
            trawnika, nachylenia terenu, liczby przeszkód, obecności małych
            dzieci lub zwierząt, preferencji dotyczących GPS vs przewodu
            granicznego. Bezpłatna prezentacja u Ciebie w ogrodzie pomaga
            podjąć decyzję bez pomyłki.
          </p>
        </Prose>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
