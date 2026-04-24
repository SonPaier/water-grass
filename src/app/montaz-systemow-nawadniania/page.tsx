import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Prose } from "@/components/Prose";
import { InstallProcess } from "@/components/InstallProcess";
import { BrandStrip } from "@/components/BrandStrip";
import { FinalCta } from "@/components/FinalCta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Montaż systemów nawadniania — kompletna instalacja pod klucz",
  description:
    "Montaż systemów nawadniania ogrodów, osiedli, hoteli i obiektów sportowych. Hunter, Rain Bird, Weathermatic. Bolszewo, Trójmiasto, Pomorze.",
  alternates: { canonical: "/montaz-systemow-nawadniania" },
};

export default function MontazPage() {
  return (
    <>
      <ServiceJsonLd
        name="Montaż systemów nawadniania"
        description="Projektowanie i montaż automatycznych systemów nawadniania ogrodów, osiedli, hoteli i obiektów sportowych. Hunter, Rain Bird, Weathermatic. Bolszewo, Trójmiasto, Pomorze."
        serviceType="Irrigation system installation"
        path="/montaz-systemow-nawadniania"
        image="/images/services/irrigation-install.jpg"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Strona główna", path: "/" },
          { name: "Usługi", path: "/uslugi" },
          { name: "Montaż systemów nawadniania", path: "/montaz-systemow-nawadniania" },
        ]}
      />
      <Header />
      <main>
        <PageHero
          eyebrow="Usługa"
          title="Montaż systemów nawadniania pod klucz"
          lead="Pełny zakres: pomiar, projekt, materiał, robocizna, uruchomienie, gwarancja. Jeden zespół od początku do końca."
        />
        <Prose>
          <h2>Z czego składa się dobry system nawadniania</h2>
          <p>
            Kompletny system to znacznie więcej niż zraszacze. Każdy element
            trzeba dobrać do konkretnego terenu, źródła wody i typu roślin.
          </p>
          <h3>Sterownik nawadniania</h3>
          <p>
            Mózg systemu — od prostych modeli wewnętrznych Hunter X-Core po
            sterowniki WiFi z aplikacją mobilną i czujnikami pogody (X2, NODE,
            Hydrawise). Programujemy harmonogram pod gatunki roślin i porę dnia.
          </p>
          <h3>Elektrozawory i studzienki sterujące</h3>
          <p>
            Dzielą instalację na sekcje, którymi sterownik włącza poszczególne
            obszary. Montujemy je w studzienkach standardowych, jumbo lub mini —
            zależnie od liczby zaworów i miejsca.
          </p>
          <h3>Zraszacze rotacyjne i statyczne</h3>
          <p>
            Hunter PGP, PGJ, PROS-04 — sprawdzone modele do trawników i rabat.
            Dla rabat i precyzyjnego nawadniania używamy dysz MP Rotator
            (oszczędność wody do 30%).
          </p>
          <h3>Linia kroplująca dla rabat i drzew</h3>
          <p>
            Dla rabat, żywopłotów i drzew stosujemy linie kroplujące z
            kompensacją ciśnienia — woda trafia bezpośrednio do korzeni, bez
            strat.
          </p>
          <h3>Czujnik deszczu i stacja pogodowa</h3>
          <p>
            Hunter Rain-Clik, WR-Clik, Solar Sync — automatyczne wstrzymanie
            podlewania w czasie deszczu i dopasowanie ilości wody do warunków
            pogodowych.
          </p>
          <h3>Pompa, filtr i źródło wody</h3>
          <p>
            Dobieramy pompy do studni, zbiorników i źródeł powierzchniowych
            (Pompa Divertron 900). Filtry dyskowe 1&quot; i 2&quot; chronią całą
            instalację przed osadami.
          </p>
        </Prose>
        <InstallProcess />
        <BrandStrip />
        <Prose>
          <h2>Ile kosztuje montaż systemu nawadniania</h2>
          <p>
            Każdą wycenę robimy indywidualnie po wizycie u klienta — koszt
            zależy od trzech rzeczy: powierzchni i ukształtowania terenu,
            wydajności źródła wody (ciśnienie, wydatek) oraz oczekiwań co do
            automatyzacji (sterownik z WiFi, czujniki pogody).
          </p>
          <p>
            <strong>Wycena u Ciebie w ogrodzie jest zawsze bezpłatna.</strong>{" "}
            Przyjeżdżamy z manometrem i miernikiem wydatku, sprawdzamy źródło
            wody, mierzymy teren i przygotowujemy konkretną ofertę z listą
            materiałów oraz terminem realizacji.
          </p>
          <h2>Ile trwa instalacja</h2>
          <p>
            Standardowy ogród przydomowy 300–800 m² montujemy w{" "}
            <strong>2–4 dni robocze</strong>. Większe instalacje osiedlowe i
            obiekty komercyjne to zazwyczaj 1–3 tygodnie. Pracujemy etapowo,
            żeby Twój teren był jak najmniej naruszony.
          </p>
          <h2>Nawadnianie ogrodu ze studni głębinowej</h2>
          <p>
            Jeśli masz własną studnię głębinową, system nawadniania korzysta z
            darmowej wody — opłacasz tylko prąd dla pompy. To znacząca
            oszczędność w porównaniu do nawadniania z wodociągu, gdzie
            koszt sezonu może być wyraźnie wyższy. Sam system pompowy ze
            studni głębinowej dobieramy indywidualnie — z czujnikiem
            suchobiegu, reduktorem ciśnienia i filtrem dyskowym, żeby pompa
            służyła latami.
          </p>
          <h2>Sterownik nawadniania WiFi z czujnikiem deszczu</h2>
          <p>
            Coraz więcej klientów wybiera sterowniki z modułem WiFi — Hunter
            X2, NODE-BT, Hydrawise. Sterujesz podlewaniem z aplikacji
            mobilnej, sprawdzasz statystyki zużycia wody, dostajesz
            powiadomienia o awariach. W połączeniu z czujnikiem deszczu
            Rain-Clik i stacją pogodową Solar Sync zyskujesz pełny
            smart-garden: system sam wstrzymuje podlewanie podczas deszczu i
            dopasowuje ilość wody do warunków pogodowych. Działa też
            integracja z Google Home i Apple HomeKit.
          </p>
          <h2>Etap po etapie — dzień montażu nawadniania</h2>
          <p>
            Pierwszego dnia przyjeżdżamy z kompletem rur, zraszaczy i
            elektrozaworów. Wytyczamy trasy magistrali na trawniku, zaczynamy
            wykop. Używamy specjalnej maszyny do układania rur w wąskich
            szczelinach (10–15 cm szerokości) — minimalizujemy uszkodzenia
            darni. W typowy dzień układamy 100–200 m² systemu.
          </p>
          <p>
            Drugi i trzeci dzień to montaż studzienek zaworowych, instalacja
            zraszaczy w wybranych punktach, podłączenie elektrozaworów do
            sterownika, wpięcie czujników. Czwartego dnia (lub w ramach
            ostatniej wizyty) testujemy każdą sekcję, kalibrujemy zasięgi
            zraszaczy, ustawiamy harmonogramy i pokazujemy obsługę aplikacji.
            Przed wyjściem zostawiamy ogród posprzątany — żadnych odpadów,
            żadnych odsłoniętych rur.
          </p>
          <h2>Trójmiasto, Pomorze, Wybrzeże — montujemy lokalnie</h2>
          <p>
            Nasza baza jest w Bolszewie pod Wejherowem, ale automatyczne
            systemy nawadniania montujemy w całym Trójmieście (Gdańsk,
            Gdynia, Sopot), w pasie nadmorskim (Władysławowo, Łeba,
            Lubiatowo), na całym Pomorzu Środkowym i wybranych obiektach
            komercyjnych poza regionem. Lokalne doświadczenie ma znaczenie:
            znamy specyfikę gruntów piaszczystych pod Bolszewem, gliniastych
            w głębi lądu, słonego powietrza nad zatoką, skarp w Gdyni i
            Sopocie. Dobieramy sprzęt i technologię pod konkretne warunki
            terenowe, a nie z katalogu.
          </p>
          <h2>Współpraca z architektami i deweloperami</h2>
          <p>
            Realizujemy systemy nawadniania jako podwykonawca generalnego
            wykonawcy, jako partner architekta krajobrazu, oraz jako
            niezależny wykonawca dla wspólnot mieszkaniowych. Mamy
            doświadczenie w koordynacji z innymi branżami (drogi,
            energetyka, sieci wodno-kanalizacyjne), w pracy zgodnie z
            harmonogramem inwestycji i odbiorów oraz w pełnej dokumentacji
            powykonawczej dla zarządcy. Wieloletnia gwarancja, przeglądy
            sezonowe i autoryzowany serwis — to standard dla naszych klientów
            biznesowych.
          </p>
        </Prose>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
