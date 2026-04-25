import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { StorySection } from "@/components/StorySection";
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
        <InstallProcess />

        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-alt">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12 md:mb-16 max-w-3xl">
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
                Z czego składa się dobry system nawadniania
              </h2>
              <div className="w-24 h-1 bg-brand mt-4" />
              <p className="text-zinc-600 font-body mt-6 text-[15px] leading-relaxed">
                Kompletny system to znacznie więcej niż zraszacze. Każdy
                element dobieramy do konkretnego terenu, źródła wody i typu
                roślin.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Sterownik nawadniania",
                  description:
                    "Mózg systemu — od prostych modeli Hunter X-Core po sterowniki WiFi z aplikacją mobilną i czujnikami pogody (X2, NODE, Hydrawise). Programujemy harmonogram pod gatunki roślin i porę dnia.",
                  image: "/images/services/control.jpg",
                  alt: "Sterownik nawadniania w trakcie konfiguracji",
                },
                {
                  title: "Elektrozawory i studzienki",
                  description:
                    "Dzielą instalację na sekcje, którymi sterownik włącza poszczególne obszary. Montujemy je w studzienkach standardowych, jumbo lub mini — zależnie od liczby zaworów i miejsca.",
                  image: "/images/services/engineering.jpg",
                  alt: "Studzienka zaworowa z elektrozaworami",
                },
                {
                  title: "Zraszacze rotacyjne i statyczne",
                  description:
                    "Hunter PGP, PGJ, PROS-04 — sprawdzone modele do trawników i rabat. Dla precyzyjnego nawadniania używamy dysz MP Rotator (oszczędność wody do 30%).",
                  image: "/images/services/sprinkler.jpg",
                  alt: "Zraszacz rotacyjny w pracy",
                },
                {
                  title: "Linia kroplująca dla rabat i drzew",
                  description:
                    "Dla rabat, żywopłotów i drzew stosujemy linie kroplujące z kompensacją ciśnienia — woda trafia bezpośrednio do korzeni, bez strat.",
                  image: "/images/gallery/gallery-08.jpg",
                  alt: "Linia kroplująca dla rabat ogrodowych",
                },
                {
                  title: "Czujnik deszczu i stacja pogodowa",
                  description:
                    "Hunter Rain-Clik, WR-Clik, Solar Sync — automatyczne wstrzymanie podlewania w czasie deszczu i dopasowanie ilości wody do warunków pogodowych.",
                  image: "/images/services/irrigation-install.jpg",
                  alt: "Sterownik z czujnikiem pogody",
                },
                {
                  title: "Pompa, filtr i źródło wody",
                  description:
                    "Dobieramy pompy do studni głębinowych, zbiorników i źródeł powierzchniowych. Filtry dyskowe 1\" i 2\" chronią całą instalację przed osadami.",
                  image: "/images/gallery/gallery-15.jpg",
                  alt: "Pompa i filtr w studzience zaworowej",
                },
              ].map((c) => (
                <article
                  key={c.title}
                  className="bg-white overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="relative aspect-[4/3] bg-zinc-100">
                    <Image
                      src={c.image}
                      alt={c.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-7 flex-grow flex flex-col">
                    <h3 className="font-headline text-lg font-extrabold text-secondary uppercase mb-3 leading-tight">
                      {c.title}
                    </h3>
                    <p className="text-zinc-600 text-[14px] leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <BrandStrip />

        {/* Wycena + czas (lowest, 2-col) */}
        <StorySection
          eyebrow="Wycena i czas realizacji"
          title={
            <>
              Każdą wycenę robimy{" "}
              <span className="text-brand">indywidualnie</span>
              {" "}po wizycie u&nbsp;klienta
            </>
          }
          image="/images/services/irrigation-install.jpg"
          imageAlt="Pomiar terenu przed wyceną systemu nawadniania"
          bg="lowest"
        >
          <p>
            Koszt zależy od trzech rzeczy: powierzchni i ukształtowania
            terenu, wydajności źródła wody (ciśnienie, wydatek) oraz oczekiwań
            co do automatyzacji (sterownik z WiFi, czujniki pogody).
          </p>
          <p>
            <strong className="text-secondary">Wycena u Ciebie w ogrodzie jest zawsze bezpłatna.</strong>{" "}
            Przyjeżdżamy, sprawdzamy źródło wody, mierzymy teren i
            przygotowujemy konkretną ofertę z listą materiałów oraz terminem
            realizacji.
          </p>
          <p>
            Czas montażu zależy od wielkości ogrodu, ukształtowania terenu i
            stopnia skomplikowania systemu — konkretny harmonogram ustalamy
            po pomiarach. Pracujemy etapowo, żeby Twój teren był jak najmniej
            naruszony.
          </p>
        </StorySection>

        {/* Studnia głębinowa + Sterownik WiFi — granatowy 2-col grid (text-text) */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-secondary text-white">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Niskie koszty eksploatacji
              </p>
              <h2 className="font-headline text-2xl md:text-3xl font-extrabold leading-tight mb-6">
                Nawadnianie ogrodu ze&nbsp;studni głębinowej
              </h2>
              <p className="text-white/85 text-[15px] leading-relaxed mb-4">
                Jeśli masz własną studnię głębinową, system nawadniania
                korzysta z darmowej wody — opłacasz tylko prąd dla pompy. To
                znacząca oszczędność w porównaniu do nawadniania z wodociągu,
                gdzie koszt sezonu może być wyraźnie wyższy.
              </p>
              <p className="text-white/85 text-[15px] leading-relaxed">
                Sam system pompowy ze studni głębinowej dobieramy
                indywidualnie — z czujnikiem suchobiegu, reduktorem ciśnienia
                i filtrem dyskowym, żeby pompa służyła latami.
              </p>
            </div>
            <div>
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Smart-garden
              </p>
              <h2 className="font-headline text-2xl md:text-3xl font-extrabold leading-tight mb-6">
                Sterownik WiFi z&nbsp;czujnikiem deszczu
              </h2>
              <p className="text-white/85 text-[15px] leading-relaxed mb-4">
                Coraz więcej klientów wybiera sterowniki z modułem WiFi —
                Hunter X2, NODE-BT, Hydrawise. Sterujesz podlewaniem z
                aplikacji mobilnej, sprawdzasz statystyki zużycia wody,
                dostajesz powiadomienia o awariach.
              </p>
              <p className="text-white/85 text-[15px] leading-relaxed">
                W połączeniu z czujnikiem Rain-Clik i stacją pogodową Solar
                Sync zyskujesz pełny smart-garden — system sam wstrzymuje
                podlewanie podczas deszczu. Działa też integracja z Google
                Home i Apple HomeKit.
              </p>
            </div>
          </div>
        </section>

        {/* Dzień montażu (alt, 2-col reversed, photo lewa) */}
        <StorySection
          eyebrow="Etap po etapie"
          title={
            <>
              Tak wygląda <span className="text-brand">dzień montażu</span> nawadniania
            </>
          }
          image="/images/gallery/gallery-09.jpg"
          imageAlt="Wykop pod magistralę systemu nawadniania"
          reversed
          bg="alt"
        >
          <p>
            Pierwszego dnia przyjeżdżamy z kompletem rur, zraszaczy i
            elektrozaworów. Wytyczamy trasy magistrali na trawniku, zaczynamy
            wykop. Używamy specjalnej maszyny do układania rur w wąskich
            szczelinach (10–15 cm szerokości) — minimalizujemy uszkodzenia
            darni. W typowy dzień układamy 100–200 m² systemu.
          </p>
          <p>
            Kolejne dni to montaż studzienek zaworowych, instalacja zraszaczy
            w wybranych punktach, podłączenie elektrozaworów do sterownika,
            wpięcie czujników. Na końcu testujemy każdą sekcję, kalibrujemy
            zasięgi zraszaczy, ustawiamy harmonogramy i pokazujemy obsługę
            aplikacji.
          </p>
          <p>
            <strong className="text-secondary">Przed wyjściem zostawiamy ogród posprzątany</strong> —
            żadnych odpadów, żadnych odsłoniętych rur.
          </p>
        </StorySection>

        {/* Pomorze (centered, lowest) */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1000px] mx-auto text-center">
            <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
              Lokalne doświadczenie
            </p>
            <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight mb-6">
              Trójmiasto, Pomorze, Wybrzeże — montujemy lokalnie
            </h2>
            <p className="text-zinc-700 text-[16px] leading-relaxed">
              Nasza baza jest w Bolszewie pod Wejherowem, ale automatyczne
              systemy nawadniania montujemy w całym Trójmieście (Gdańsk,
              Gdynia, Sopot), w pasie nadmorskim (Władysławowo, Łeba,
              Lubiatowo), na całym Pomorzu Środkowym i wybranych obiektach
              komercyjnych poza regionem. Lokalne doświadczenie ma znaczenie:
              znamy specyfikę gruntów piaszczystych pod Bolszewem, gliniastych
              w głębi lądu, słonego powietrza nad zatoką, skarp w Gdyni i
              Sopocie. Dobieramy sprzęt i technologię pod konkretne warunki —
              nie z katalogu.
            </p>
          </div>
        </section>

        {/* Współpraca B2B (alt, 2-col with bus photo) */}
        <StorySection
          eyebrow="B2B"
          title={
            <>
              Współpraca z&nbsp;<span className="text-brand">architektami i deweloperami</span>
            </>
          }
          image="/images/services/watergrass-bus.webp"
          imageAlt="Bus serwisowy WaterGrass — współpraca B2B"
          bg="alt"
        >
          <p>
            Realizujemy systemy nawadniania jako podwykonawca generalnego
            wykonawcy, jako partner architekta krajobrazu, oraz jako
            niezależny wykonawca dla wspólnot mieszkaniowych.
          </p>
          <p>
            Mamy doświadczenie w koordynacji z innymi branżami (drogi,
            energetyka, sieci wodno-kanalizacyjne), w pracy zgodnie z
            harmonogramem inwestycji i odbiorów oraz w pełnej dokumentacji
            powykonawczej dla zarządcy. Wieloletnia gwarancja, przeglądy
            sezonowe i autoryzowany serwis — to standard dla naszych klientów
            biznesowych.
          </p>
        </StorySection>

        {/* Opinia klientki */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[900px] mx-auto">
            <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3 text-center">
              Opinia klientki
            </p>
            <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-12">
              Co mówią nasi klienci
            </h2>
            <figure className="bg-white p-8 md:p-12 border-l-4 border-brand">
              <div className="flex gap-1 mb-5" aria-label="Ocena: 5 na 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-zinc-700 font-body text-[16px] md:text-[17px] leading-relaxed italic space-y-4">
                <p>
                  „Jesteśmy bardzo zadowoleni z wykonania usług nawodnienia
                  w naszym ogrodzie oraz montażu robota koszącego na dwóch
                  działkach. Firma, której właścicielem jest pan Łukasz,
                  wykazała się doskonałą fachowością, profesjonalizmem i
                  troską o nasze potrzeby."
                </p>
                <p>
                  „Pan Łukasz osobiście zajął się wyceną i doradztwem,
                  abyśmy otrzymali optymalne rozwiązania dla naszego ogrodu.
                  Jego wiedza i doświadczenie były niezastąpione, a
                  proponowane rozwiązania idealnie dopasowane do naszych
                  oczekiwań."
                </p>
                <p>
                  „Polecamy usługi pana Łukasza każdemu, kto poszukuje nie
                  tylko profesjonalizmu i jakości, ale także zaangażowania i
                  troski o klienta. Dzięki niemu nasz ogród stał się jeszcze
                  piękniejszy i łatwiejszy w utrzymaniu."
                </p>
              </blockquote>
              <figcaption className="pt-6 mt-8 border-t border-zinc-100">
                <p className="font-headline text-secondary font-bold text-base">
                  Adriana
                </p>
                <p className="text-zinc-500 text-sm">
                  Klientka indywidualna · opinia z Google Maps
                </p>
              </figcaption>
            </figure>
          </div>
        </section>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
