import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { StorySection } from "@/components/StorySection";
import { FinalCta } from "@/components/FinalCta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Husqvarna Automower — autoryzowany dealer Pomorze",
  description:
    "Autoryzowany dealer Husqvarna Automower na Pomorzu. Sprzedaż, montaż i serwis robotów koszących. Modele klasyczne i z GPS (EPOS RS1). Pełna obsługa od doboru modelu po serwis zimowy.",
  alternates: { canonical: "/husqvarna-automower" },
};

export default function HusqvarnaPage() {
  return (
    <>
      <ServiceJsonLd
        name="Husqvarna Automower — sprzedaż, montaż, serwis"
        description="Autoryzowany dealer i serwis robotów koszących Husqvarna Automower na Pomorzu. Modele klasyczne i z GPS (EPOS RS1). Sprzedaż, montaż, części zamienne, serwis zimowy w warsztacie."
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
          title="Husqvarna Automower — sprzedaż, montaż, serwis"
          lead="Autoryzowany dealer robotów koszących na Pomorzu. Modele klasyczne z przewodem granicznym i nowoczesne z GPS (stacja EPOS RS1). Pełna obsługa: dobór modelu, montaż, części, serwis zimowy."
        />
        <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image
                src="/images/services/automower-w-akcji.webp"
                alt="Husqvarna Automower kosi trawnik w realnym ogrodzie"
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
        {/* Modele — 3 kafle z opisami */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-alt">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12 md:mb-16 max-w-3xl">
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Trzy linie modelowe
              </p>
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight">
                Modele Husqvarna Automower
              </h2>
              <div className="w-24 h-1 bg-brand mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="bg-white overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative aspect-[4/3] bg-zinc-50 flex items-center justify-center">
                  <Image
                    src="/images/services/automower-310.png"
                    alt="Husqvarna Automower 310 Mark II"
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-contain p-6"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-brand font-headline text-xs font-bold tracking-widest uppercase mb-2">
                    01 · Klasyczne
                  </p>
                  <h3 className="font-headline text-lg font-extrabold text-secondary uppercase mb-3 leading-tight">
                    Modele z przewodem granicznym
                  </h3>
                  <p className="text-zinc-600 text-[14px] leading-relaxed">
                    Klasyczne Automowery (305, 310 Mark II, 315, 405X) —
                    niezawodne, sprawdzone od lat. Przewód graniczny zakopujemy
                    pod ziemią — niewidoczny, trwały.
                  </p>
                </div>
              </article>
              <article className="bg-white overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative aspect-[4/3] bg-zinc-100">
                  <Image
                    src="/images/services/automower-w-akcji.webp"
                    alt="Husqvarna Automower z GPS w pracy"
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-brand font-headline text-xs font-bold tracking-widest uppercase mb-2">
                    02 · GPS / EPOS
                  </p>
                  <h3 className="font-headline text-lg font-extrabold text-secondary uppercase mb-3 leading-tight">
                    Modele z nawigacją GPS i&nbsp;stacją EPOS RS1
                  </h3>
                  <p className="text-zinc-600 text-[14px] leading-relaxed">
                    Nowa generacja — wirtualna granica zamiast przewodu
                    fizycznego. Strefy zmieniasz w aplikacji w kilka sekund.
                    Idealne dla ogrodów, w których zmieniasz aranżację, oraz
                    dla obiektów komercyjnych z wieloma sekcjami.
                  </p>
                </div>
              </article>
              <article className="bg-white overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative aspect-[4/3] bg-zinc-100">
                  <Image
                    src="/images/realizacje/sierra-golf-petkowice.jpg"
                    alt="Robot koszący Husqvarna na obiekcie sportowym"
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-brand font-headline text-xs font-bold tracking-widest uppercase mb-2">
                    03 · Komercyjne
                  </p>
                  <h3 className="font-headline text-lg font-extrabold text-secondary uppercase mb-3 leading-tight">
                    Modele do dużych powierzchni
                  </h3>
                  <p className="text-zinc-600 text-[14px] leading-relaxed">
                    Automowery 535 AWD, 550 EPOS, 570 — koszą trawniki nawet
                    do 1,5 hektara. Pokonują wzniesienia do 70%, pracują w
                    deszczu i nocy. Dla osiedli, hoteli, boisk.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Bez przewodu granicznego — story 2-col */}
        <StorySection
          eyebrow="Bez kabla pod ziemią"
          title={
            <>
              Montaż robotów <span className="text-brand">bez przewodu granicznego</span>
            </>
          }
          image="/images/services/automower-w-akcji.webp"
          imageAlt="Husqvarna Automower z GPS — bez przewodu granicznego"
          bg="lowest"
        >
          <p>
            Coraz więcej klientów wybiera modele Husqvarna Automower z systemem
            GPS / RTK (stacja referencyjna EPOS RS1) — bez konieczności
            zakopywania przewodu granicznego pod ziemią.
          </p>
          <p>
            Strefy koszenia ustawiasz wirtualnie w aplikacji w kilka sekund,
            zmieniasz je kiedy chcesz. To rozwiązanie idealne dla ogrodów, w
            których zmieniasz aranżację, oraz dla osiedli i obiektów
            komercyjnych. Jako autoryzowany dealer Husqvarna na Pomorzu mamy
            doświadczenie z kalibracją stacji EPOS na różnych typach terenu.
          </p>
        </StorySection>

        {/* Zimowy serwis — story granatowy reversed */}
        <StorySection
          eyebrow="Zimowy serwis warsztatowy"
          title={
            <>
              Zimowy serwis robota <span className="text-brand">Husqvarna</span> — Wejherowo i&nbsp;Pomorze
            </>
          }
          image="/images/services/automower-310.png"
          imageAlt="Husqvarna Automower 310 Mark II w serwisie warsztatowym"
          reversed
          bg="secondary"
        >
          <p>
            Co roku zimą oddajesz robota do naszego warsztatu. Z Wejherowa,
            Bolszewa i okolic odbieramy z domu klienta — dla dalszych
            lokalizacji ustalamy indywidualnie.
          </p>
          <ul className="space-y-2 pt-2">
            <li className="flex items-start gap-3">
              <span className="text-brand mt-1.5 w-1.5 h-1.5 rounded-full bg-brand inline-block shrink-0" />
              <span>Pełny przegląd techniczny i diagnostyka</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand mt-1.5 w-1.5 h-1.5 rounded-full bg-brand inline-block shrink-0" />
              <span>Wymiana noży tnących i części eksploatacyjnych</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand mt-1.5 w-1.5 h-1.5 rounded-full bg-brand inline-block shrink-0" />
              <span>Test akumulatora (i ewentualna wymiana)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand mt-1.5 w-1.5 h-1.5 rounded-full bg-brand inline-block shrink-0" />
              <span>Czyszczenie obudowy i podzespołów wewnętrznych</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand mt-1.5 w-1.5 h-1.5 rounded-full bg-brand inline-block shrink-0" />
              <span>Kalibracja stacji dokującej i aktualizacja oprogramowania</span>
            </li>
          </ul>
          <p className="pt-2">
            Robot wraca do Ciebie wczesną wiosną — gotowy na nowy sezon
            koszenia.
          </p>
        </StorySection>

        <section className="py-16 md:py-20 px-6 md:px-8 bg-surface-alt">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-4">
              Robot koszący czy kosiarka tradycyjna?
            </h2>
            <div className="w-24 h-1 bg-brand mb-6" />
            <p className="text-zinc-700 font-body text-[16px] leading-relaxed mb-10 max-w-3xl">
              Tradycyjne kosiarki od lat cieszą się popularnością, jednak
              roboty koszące oferują zupełnie nowe podejście do pielęgnacji
              trawnika. Sprawdźmy, który sprzęt lepiej spełni Twoje
              oczekiwania w siedmiu kluczowych kategoriach.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white text-left">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="px-4 md:px-6 py-4 font-headline text-sm uppercase tracking-wide w-1/3">Cecha</th>
                    <th className="px-4 md:px-6 py-4 font-headline text-sm uppercase tracking-wide w-1/3">Robot koszący Husqvarna</th>
                    <th className="px-4 md:px-6 py-4 font-headline text-sm uppercase tracking-wide w-1/3">Kosiarka tradycyjna</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700 text-[14px]">
                  <tr className="border-b border-zinc-100">
                    <td className="px-4 md:px-6 py-4 font-headline font-bold text-secondary">Automatyzacja</td>
                    <td className="px-4 md:px-6 py-4">Pełna — robot pracuje sam, omija przeszkody, sam wraca do stacji dokującej</td>
                    <td className="px-4 md:px-6 py-4">Praca ręczna — pchasz, zawracasz, kosisz w pełnym słońcu</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="px-4 md:px-6 py-4 font-headline font-bold text-secondary">Czas obsługi</td>
                    <td className="px-4 md:px-6 py-4">Minuty miesięcznie — okresowe czyszczenie i sprawdzenie noży</td>
                    <td className="px-4 md:px-6 py-4">Godziny tygodniowo — koszenie, sprzątanie ścinki, serwis</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="px-4 md:px-6 py-4 font-headline font-bold text-secondary">Jakość trawnika</td>
                    <td className="px-4 md:px-6 py-4">Codzienne, krótkie cięcie — trawa gęstnieje, ścinki pełnią rolę nawozu</td>
                    <td className="px-4 md:px-6 py-4">Jakość zależy od częstotliwości i staranności użytkownika</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="px-4 md:px-6 py-4 font-headline font-bold text-secondary">Hałas</td>
                    <td className="px-4 md:px-6 py-4">Ok. 60 dB — można pracować w nocy i wczesnym rankiem</td>
                    <td className="px-4 md:px-6 py-4">Spalinowa: bardzo głośna; elektryczna: średnio głośna</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="px-4 md:px-6 py-4 font-headline font-bold text-secondary">Ekologia</td>
                    <td className="px-4 md:px-6 py-4">Zasilanie akumulatorowe, brak spalin, niskie zużycie energii</td>
                    <td className="px-4 md:px-6 py-4">Spalinowa: emisja CO₂ i hałas; elektryczna lepiej, ale brak automatyki</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="px-4 md:px-6 py-4 font-headline font-bold text-secondary">Konserwacja</td>
                    <td className="px-4 md:px-6 py-4">Praktycznie bezobsługowy — serwis zimowy raz w roku</td>
                    <td className="px-4 md:px-6 py-4">Regularne ostrzenie noży, wymiana oleju, filtrów, świec, paliwa</td>
                  </tr>
                  <tr className="border-b border-zinc-100">
                    <td className="px-4 md:px-6 py-4 font-headline font-bold text-secondary">Bezpieczeństwo</td>
                    <td className="px-4 md:px-6 py-4">Czujniki podnoszenia/pochylenia — noże zatrzymują się natychmiast</td>
                    <td className="px-4 md:px-6 py-4">Wymaga pełnej uwagi operatora; ryzyko urazów przy nieostrożności</td>
                  </tr>
                  <tr>
                    <td className="px-4 md:px-6 py-4 font-headline font-bold text-secondary">Koszt długoterminowy</td>
                    <td className="px-4 md:px-6 py-4">Wyższa inwestycja początkowa, niskie koszty eksploatacji</td>
                    <td className="px-4 md:px-6 py-4">Tańsza w zakupie, wyższe koszty paliwa i serwisu</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-zinc-500 text-sm mt-4 text-center">
              Wybór zależy od Twoich priorytetów. Cenisz wygodę, automatyzację
              i ekologię — wybierz robota. Wolisz pełną kontrolę i nie
              przeszkadza Ci ręczna obsługa — kosiarka tradycyjna nadal się
              sprawdza.
            </p>
          </div>
        </section>

        {/* Aplikacja Connect — 2-col story */}
        <StorySection
          eyebrow="Smart-garden"
          title={
            <>
              Aplikacja <span className="text-brand">Husqvarna Automower Connect</span>
            </>
          }
          image="/images/services/control.jpg"
          imageAlt="Aplikacja Husqvarna Automower Connect na telefonie"
          bg="lowest"
        >
          <p>
            Każdy nowy Automower łączymy z aplikacją mobilną Husqvarna
            Automower Connect. Z poziomu telefonu uruchamiasz koszenie, robisz
            pauzę przed ważną imprezą w ogrodzie, sprawdzasz lokalizację
            robota (GPS), dostajesz alerty o usterkach i przypomnienia o
            wymianie noży.
          </p>
          <p>
            W modelach EPOS możesz w aplikacji rysować nowe strefy koszenia i
            wirtualne korytarze — bez kopania nowego przewodu granicznego.
            Jako autoryzowany dealer Husqvarna konfigurujemy aplikację, łączymy
            ją z kontem klienta i pokazujemy jak z niej korzystać przy
            uruchomieniu.
          </p>
        </StorySection>

        {/* Komercyjne — 2-col reversed */}
        <StorySection
          eyebrow="Obiekty komercyjne"
          title={
            <>
              Roboty Husqvarna w&nbsp;<span className="text-brand">obiektach komercyjnych</span>
            </>
          }
          image="/images/realizacje/sierra-golf-petkowice.jpg"
          imageAlt="Husqvarna Automower na boisku sportowym Sierra Golf"
          reversed
          bg="alt"
        >
          <p>
            Modele Husqvarna Automower 535 AWD, 550 EPOS i 570 to maszyny
            klasy professional — koszą trawniki nawet do 1,5 hektara,
            pokonują wzniesienia do 70%, pracują w deszczu i nocy.
          </p>
          <p>
            Montujemy je dla osiedli mieszkaniowych w Trójmieście, hoteli i
            ośrodków wczasowych w Łebie i Władysławowie, terenów wokół
            obiektów komercyjnych. W odróżnieniu od koszenia ekipą ogrodniczą,
            robot pracuje codziennie i bezgłośnie — trawnik zawsze wygląda
            na świeżo skoszony, bez harmonogramu i bez kosztów ekipy.
          </p>
        </StorySection>

        {/* Pomorze — centered (white bg between table+FAQ) */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1000px] mx-auto text-center">
            <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
              Lokalne doświadczenie
            </p>
            <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight mb-6">
              Pomorze — autoryzowany dealer Husqvarna Automower
            </h2>
            <p className="text-zinc-700 text-[16px] leading-relaxed">
              Robotami Husqvarna zajmujemy się od kilkunastu lat — sprzedaż,
              montaż, serwis, części zamienne, doradztwo w doborze modelu.
              Pracujemy na całym Pomorzu, ze szczególnym naciskiem na
              Wejherowo, Bolszewo, Trójmiasto i pas nadmorski. Wybór
              właściwego modelu zależy od wielu czynników: powierzchni
              trawnika, nachylenia terenu, liczby przeszkód, obecności
              dzieci lub zwierząt, preferencji dotyczących GPS vs przewodu
              granicznego. Pomożemy w doborze pod Twoje warunki.
            </p>
          </div>
        </section>

        <section
          id="faq"
          className="py-24 md:py-28 px-6 md:px-8 bg-surface-lowest"
        >
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-secondary font-headline text-3xl md:text-5xl font-extrabold tracking-tight">
                Najczęściej zadawane pytania
              </h2>
              <div className="w-24 h-1 bg-brand mt-4 mx-auto" />
            </div>
            <div className="space-y-3">
              {[
                {
                  q: "Jak często wymienia się ostrza w Automowerze?",
                  a: "W typowym ogrodzie przydomowym ostrza wymieniamy raz w sezonie — najczęściej przy okazji serwisu zimowego w naszym warsztacie. Przy intensywnej pracy (większe powierzchnie, gęstsza trawa, częste koszenie kantów) wymiana może być potrzebna co 2–3 miesiące. Wymiana to kilka minut: trzy nożyki przykręcone na sprężynach, bez specjalnych narzędzi.",
                },
                {
                  q: "Czy robot jest głośny?",
                  a: "Pracuje na poziomie ok. 60 dB — cicho, możesz go używać w nocy bez przeszkadzania sobie ani sąsiadom.",
                },
                {
                  q: "Co z bezpieczeństwem dzieci i zwierząt?",
                  a: "Automower ma czujniki podnoszenia i pochylenia — gdy ktoś go uniesie albo wywróci, noże natychmiast się zatrzymują.",
                },
                {
                  q: "Czy łatwo ktoś może ukraść robota?",
                  a: "Husqvarna ma kilka warstw zabezpieczeń. Każdy robot wymaga PIN-u do uruchomienia — bez kodu nawet po podniesieniu nie ruszy. Wbudowany alarm głośno reaguje, gdy ktoś próbuje go zabrać poza strefę pracy. Modele z aplikacją Automower Connect pokazują lokalizację robota w czasie rzeczywistym (GPS), a starsze działają tylko w zakresie własnego przewodu granicznego — poza nim się zatrzymują. Razem to skuteczna ochrona.",
                },
              ].map((item, idx) => (
                <details
                  key={item.q}
                  className="group bg-white border-l-4 border-brand p-6 [&_summary::-webkit-details-marker]:hidden"
                  {...(idx === 0 ? { open: true } : {})}
                >
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <h3 className="font-headline text-base md:text-lg font-bold text-secondary leading-snug">
                      {item.q}
                    </h3>
                    <svg
                      className="w-6 h-6 text-brand shrink-0 transition-transform duration-300 group-open:rotate-45 mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </summary>
                  <p className="text-zinc-600 font-body text-[15px] leading-relaxed mt-4">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
