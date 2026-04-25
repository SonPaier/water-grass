import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Prose } from "@/components/Prose";
import { FinalCta } from "@/components/FinalCta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Projektowanie systemów nawadniania — dla ogrodów i terenów zielonych",
  description:
    "Projekt techniczny systemu nawadniania. Schemat zraszaczy, dobór sprzętu, harmonogram. Dla klientów indywidualnych, architektów i deweloperów.",
  alternates: { canonical: "/projektowanie-systemow-nawadniania" },
};

export default function ProjektowaniePage() {
  return (
    <>
      <ServiceJsonLd
        name="Projektowanie systemów nawadniania"
        description="Projekt techniczny systemu nawadniania. Schemat zraszaczy, dobór sprzętu Hunter / Rain Bird / Weathermatic, bilans wodny i dobór pompy. Dla klientów indywidualnych, architektów krajobrazu i deweloperów."
        serviceType="Irrigation system design"
        path="/projektowanie-systemow-nawadniania"
        image="/images/services/engineering.jpg"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Strona główna", path: "/" },
          { name: "Usługi", path: "/uslugi" },
          { name: "Projektowanie", path: "/projektowanie-systemow-nawadniania" },
        ]}
      />
      <Header />
      <main>
        <PageHero
          eyebrow="Usługa"
          title="Projektowanie systemów nawadniania"
          lead="Profesjonalny projekt techniczny dla ogrodów, osiedli i terenów zielonych. Dla klientów indywidualnych, architektów krajobrazu i deweloperów."
        />
        <Prose>
          <h2>Co zawiera nasz projekt techniczny</h2>
          <ul>
            <li>Inwentaryzację terenu z naniesieniem stref opadu</li>
            <li>Schemat rozmieszczenia zraszaczy i linii kroplujących</li>
            <li>Lokalizację studzienek, elektrozaworów i sterownika</li>
            <li>Specyfikację doboru sprzętu (Hunter, Rain Bird, Weathermatic)</li>
            <li>Bilans wodny i dobór pompy / źródła zasilania</li>
            <li>Kalkulację materiałów i robocizny</li>
          </ul>
          <h2>Projekt nawadniania pod sprzęt Hunter i Rain Bird</h2>
          <p>
            Robimy też same projekty techniczne dla klientów, którzy chcą
            zrealizować montaż samodzielnie albo z inną ekipą. Otrzymujesz
            pełną dokumentację techniczną z wykazem materiałów markowych —
            sterownikami Hunter X-Core, X2, NODE, zraszaczami PGP/PGJ, dyszami
            MP Rotator i Rain Bird, z dokładną ilością rur PE i połączeń.
            Możesz potem kupić sprzęt samodzielnie albo zlecić montaż dowolnej
            firmie — projekt jest neutralny technologicznie.
          </p>
          <h2>Automatyczne podlewanie żywopłotu i rabat linią kroplującą</h2>
          <p>
            Linia kroplująca to specjalizacja, którą uwzględniamy w niemal
            każdym projekcie ogrodu. Dla żywopłotów (zwłaszcza tujowych —
            problematycznych w Trójmieście, gdzie często wysychają),
            ozdobnych rabat, drzewek owocowych i nasadzeń wielogatunkowych —
            stosujemy linię kroplującą z kompensacją ciśnienia. Każda kropla
            trafia bezpośrednio do korzeni. Oszczędność wody do 60% w
            porównaniu do zraszania powierzchniowego, a rośliny rosną
            zdrowiej.
          </p>
          <h2>Projekt nawadniania na bazie dokumentacji geodezyjnej</h2>
          <p>
            Dla większych inwestycji opieramy projekt na dokumentacji
            geodezyjnej dostarczonej przez inwestora — mapy do celów
            projektowych, plany zagospodarowania terenu, projekty zieleni
            architekta krajobrazu. Nasz schemat nawadniania trafia bezpośrednio
            do dokumentacji wielobranżowej i uwzględnia kolizje z innymi
            sieciami (kanalizacja, energetyka, oświetlenie). Dla mniejszych
            ogrodów wystarczy nasz pomiar i wywiad u klienta — robimy go
            podczas pierwszej, bezpłatnej wizyty.
          </p>
          <h2>Czas realizacji projektu i dokumenty końcowe</h2>
          <p>
            Standardowy projekt ogrodu przydomowego (do 1500 m²) gotowy jest
            w 3–7 dni roboczych od pomiaru. Większe projekty komercyjne —
            do 3 tygodni. Otrzymujesz: schemat techniczny w skali, plan
            rozmieszczenia zraszaczy z opisem zasięgów, listę elektrozaworów
            i lokalizację studzienek, specyfikację sprzętu z numerami
            katalogowymi (Hunter, Rain Bird, Weathermatic), bilans wodny
            (zapotrzebowanie vs wydajność źródła), kalkulację materiałów i
            robocizny. Komplet w PDF, gotowy do wpięcia w dokumentację
            wielobranżową generalnego wykonawcy.
          </p>
          <h2>Trójmiasto i Pomorze — projekty z lokalnym doświadczeniem</h2>
          <p>
            Robimy projekty nawadniania dla architektów krajobrazu i
            deweloperów z całego Trójmiasta — Gdańsk, Gdynia, Sopot — oraz
            pasa nadmorskiego (Władysławowo, Łeba). Specyfika regionu jest
            naszą codziennością: skarpy w Gdyni i Sopocie wymagają zaworów
            zwrotnych i niezależnych stref ciśnienia, ogrody nadmorskie —
            sprzętu odpornego na sól i piasek, ogrody w głębi lądu na glinach
            — większej liczby zraszaczy z mniejszym zasięgiem. Lokalne
            doświadczenie przekłada się bezpośrednio na jakość projektu.
          </p>
          <h2>Dla kogo robimy projekty</h2>
          <h3>Dla klienta indywidualnego</h3>
          <p>
            Jeśli chcesz wiedzieć, ile będzie kosztował system w Twoim ogrodzie i
            jakie elementy są naprawdę potrzebne — robimy projekt który możesz
            potem zrealizować z nami albo z dowolną firmą.
          </p>
          <h3>Dla architekta krajobrazu</h3>
          <p>
            Pełna dokumentacja techniczna z opisem warstw, wykazem materiałów i
            specyfikacją techniczną — gotowa do wpięcia w Twój projekt
            kompleksowy.
          </p>
          <h3>Dla dewelopera i inwestora</h3>
          <p>
            Projekty dla osiedli mieszkaniowych, obiektów komercyjnych i terenów
            wokół inwestycji. Z harmonogramem zgranym z odbiorami i SCHED-em
            generalnego wykonawcy.
          </p>
          <h2>Współpraca z firmami ogrodniczymi i brukarskimi</h2>
          <p>
            Jesteś ogrodnikiem, brukarzem albo zajmujesz się pracami
            pokrewnymi? Proponujemy współpracę w zakresie montażu, serwisu lub
            doradztwa. Z naszego doświadczenia — to zawsze obustronnie
            korzystne.
          </p>
        </Prose>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
