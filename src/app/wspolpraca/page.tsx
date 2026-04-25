import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Prose } from "@/components/Prose";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = {
  title:
    "Współpraca B2B — deweloperzy i projektanci ogrodów | nawadnianie",
  description:
    "Nawadnianie osiedli pod klucz dla deweloperów, projekty techniczne dla architektów krajobrazu, doradztwo techniczne dla firm ogrodniczych. Gwarancja wieloletnia, koordynacja z generalnym wykonawcą, autoryzowany serwis. Pomorze, Trójmiasto.",
  alternates: { canonical: "/wspolpraca" },
  openGraph: {
    title: "Współpraca B2B — WaterGrass",
    description:
      "Współpracujemy z deweloperami, architektami krajobrazu i firmami ogrodniczymi. Projekty techniczne, montaże osiedlowe, autoryzowany serwis Hunter / Rain Bird / Husqvarna.",
  },
};

const partners = [
  {
    eyebrow: "01",
    title: "Deweloperzy i wspólnoty mieszkaniowe",
    short: "Nawadnianie osiedli pod klucz",
    description:
      "Realizujemy systemy nawadniania dla nowych inwestycji deweloperskich w Trójmieście i na Pomorzu. Projekt techniczny, montaż, dokumentacja powykonawcza, gwarancja wieloletnia i przeglądy sezonowe — wszystko w jednym kontrakcie.",
    bullets: [
      "Harmonogram zgrany z odbiorami inwestycji i GW",
      "Koordynacja z innymi branżami (drogi, sieci, energetyka)",
      "Gwarancja wieloletnia i przeglądy sezonowe w cenie",
      "Dokumentacja powykonawcza dla zarządcy / wspólnoty",
    ],
  },
  {
    eyebrow: "02",
    title: "Architekci krajobrazu i projektanci ogrodów",
    short: "Projekt techniczny pod Twoją koncepcję",
    description:
      "Robimy projekt techniczny systemu nawadniania, który wpina się w Twój projekt kompleksowy. Pełna dokumentacja techniczna, neutralna technologicznie, z wykazem materiałów Hunter / Rain Bird / Weathermatic — gotowa do realizacji przez nas albo dowolną ekipę montażową.",
    bullets: [
      "Schemat techniczny w skali z lokalizacją zraszaczy",
      "Specyfikacja sprzętu z numerami katalogowymi",
      "Bilans wodny i dobór pompy / źródła zasilania",
      "Wsparcie podczas prezentacji projektu klientowi",
    ],
  },
  {
    eyebrow: "03",
    title: "Firmy ogrodnicze i brukarskie",
    short: "Podwykonawstwo, doradztwo, serwis",
    description:
      "Robisz ogrody pod klucz, ale nie chcesz zatrudniać własnego instalatora nawadniania? Wchodzimy jako podwykonawca z gwarancją terminowości. Pomagamy też w doborze sprzętu i diagnozie problemów na obiektach, które już realizujesz.",
    bullets: [
      "Stałe stawki podwykonawcze dla partnerów",
      "Doradztwo techniczne przed i w trakcie realizacji",
      "Diagnoza i serwis już zamontowanych systemów",
      "Preferencyjne warunki dla powtarzalnych zleceń",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Kontakt i brief",
    description:
      "Zaczynamy od rozmowy — telefon, mail albo spotkanie u Was w biurze. Dowiadujemy się, jaka jest skala projektu, harmonogram, ile osób po Waszej stronie i czego konkretnie potrzebujecie od nas: tylko projektu, montażu, czy pełnej obsługi.",
  },
  {
    number: "02",
    title: "Wycena i NDA jeśli trzeba",
    description:
      "Przygotowujemy wycenę zakresu prac. Dla większych deweloperów podpisujemy NDA przed udostępnieniem szczegółów inwestycji. Wycena B2B zawiera terminy płatności, harmonogram realizacji i zakres gwarancji wieloletniej.",
  },
  {
    number: "03",
    title: "Projekt techniczny i koordynacja",
    description:
      "Robimy projekt nawadniania w oparciu o dokumentację geodezyjną i projekt zieleni. Koordynujemy się z innymi branżami — drogi, kanalizacja, energetyka, oświetlenie. Schemat dostarczamy w formacie do wpięcia w dokumentację wielobranżową.",
  },
  {
    number: "04",
    title: "Realizacja zgodna z harmonogramem GW",
    description:
      "Montaż wykonujemy etapowo, w terminach uzgodnionych z generalnym wykonawcą. Dla osiedli zazwyczaj pracujemy w 2–3 fazach, dopasowanych do odbiorów części wspólnych. Codziennie raportujemy postęp koordynatorowi inwestora.",
  },
  {
    number: "05",
    title: "Odbiór i dokumentacja powykonawcza",
    description:
      "Po zakończeniu montażu przekazujemy pełną dokumentację: schematy powykonawcze, instrukcje obsługi sterowników, wykaz wbudowanych materiałów, gwarancje producentów. Szkolimy zarządcę z obsługi systemu.",
  },
  {
    number: "06",
    title: "Gwarancja i przeglądy sezonowe",
    description:
      "W ramach kontraktu przejmujemy serwis sezonowy — wiosenny rozruch, jesienne zazimowanie, awarie w godzinach roboczych. Gwarancje wieloletnie na wykonanie, sprzęt zgodny z gwarancjami producentów.",
  },
];

const referencjeB2B = [
  {
    name: "Osiedla deweloperskie w Gdyni",
    examples: "Wiczlino Ogród, Altoria 2, Azymut",
    role: "Pełna realizacja od projektu do gwarancji",
  },
  {
    name: "Osiedla na Pomorzu i w Gdańsku",
    examples: "Harmonia Oliwska (Gdańsk), Balans (Kowale)",
    role: "Współpraca z deweloperami przy odbiorach",
  },
  {
    name: "Hotele i ośrodki wczasowe",
    examples: "Radisson Blu i Testa Sopot, Mewia Łacha Sobieszewo",
    role: "Stałe kontrakty serwisowe + wymiana podzespołów",
  },
  {
    name: "Obiekty publiczne",
    examples: "Park Majkowskiego, Plac Wejhera, Sąd Rejonowy w Tczewie",
    role: "Współpraca z gminami i instytucjami publicznymi",
  },
  {
    name: "Obiekty komercyjne i przemysłowe",
    examples: "Polpharma Biologics, Port Lotniczy Gdańsk",
    role: "Współpraca z generalnym wykonawcą inwestycji",
  },
];

export default function WspolpracaPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Współpraca B2B"
          title="Współpraca przy nawadnianiu — deweloperzy, architekci i projektanci ogrodów"
          lead="Realizujemy nawadnianie osiedli, robimy projekty techniczne dla architektów krajobrazu, dostarczamy sprzęt i doradztwo dla firm ogrodniczych. Pomorze, Trójmiasto, pas nadmorski — od 2012 roku."
        />

        {/* 3 partner profiles */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12 md:mb-16 max-w-3xl">
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Z kim współpracujemy
              </p>
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight">
                Trzy grupy partnerów. Trzy różne sposoby współpracy.
              </h2>
              <div className="w-24 h-1 bg-brand mt-4" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {partners.map((p) => (
                <article
                  key={p.eyebrow}
                  className="bg-white p-8 hover:shadow-lg transition-shadow flex flex-col"
                >
                  <p className="text-brand font-headline text-xs font-bold tracking-widest uppercase mb-2">
                    {p.eyebrow} · {p.short}
                  </p>
                  <h3 className="font-headline text-xl md:text-2xl font-extrabold text-secondary leading-tight mb-4">
                    {p.title}
                  </h3>
                  <p className="text-zinc-600 text-[15px] leading-relaxed mb-6">
                    {p.description}
                  </p>
                  <ul className="space-y-2 text-zinc-700 text-[14px] mt-auto">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-brand mt-1.5 w-1.5 h-1.5 rounded-full bg-brand inline-block shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process — 6 steps (drugą sekcją po profilach partnerów) */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-alt">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12 md:mb-16">
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Jak współpracujemy
              </p>
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight">
                Sześć etapów współpracy B2B — od pierwszego maila do gwarancji
              </h2>
              <div className="w-24 h-1 bg-brand mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {processSteps.map((step) => (
                <article key={step.number} className="bg-white p-8">
                  <p
                    className="font-headline text-5xl font-extrabold text-brand/30 mb-3 leading-none"
                    aria-hidden="true"
                  >
                    {step.number}
                  </p>
                  <h3 className="font-headline text-lg font-bold text-secondary uppercase mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 text-[14px] leading-relaxed">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed offers */}
        <Prose>
          <h2>Dla deweloperów — nawadnianie osiedla pod klucz</h2>
          <p>
            Współpracujemy z deweloperami z całego Trójmiasta i Pomorza —
            zrealizowaliśmy nawadnianie m.in. osiedli Wiczlino Ogród, Altoria
            2 i Azymut w Gdyni, Harmonia Oliwska w Gdańsku, Balans w Kowalach.
            Wiemy, jak działa terminowość budowlana i jak ważne są odbiory
            dla cash-flow inwestycji.
          </p>
          <p>
            Wchodzimy jako podwykonawca generalnego wykonawcy lub jako
            niezależny wykonawca dla wspólnoty. W obu przypadkach
            dostarczamy: pełną dokumentację techniczną, harmonogram zgrany z
            terminami GW, koordynację z innymi branżami (drogi, sieci,
            energetyka, mała architektura), montaż etapowy nieblokujący prac
            innych ekip, dokumentację powykonawczą i instrukcje obsługi dla
            zarządcy, odroczone terminy płatności dopasowane do harmonogramu
            inwestycji, gwarancję wieloletnią na wykonanie i sprzęt,
            kontrakt serwisowy z przeglądami sezonowymi w cenie.
          </p>
          <h2>Dla architektów krajobrazu i projektantów ogrodów</h2>
          <p>
            Współpracujemy z architektami krajobrazu i projektantami ogrodów,
            którzy chcą oferować klientom kompleksową obsługę bez zatrudniania
            własnego specjalisty od nawadniania. Robimy dla Ciebie projekt
            techniczny w skali, z lokalizacją zraszaczy, studzienek i
            sterownika, ze specyfikacją sprzętu Hunter, Rain Bird lub
            Weathermatic z numerami katalogowymi, z bilansem wodnym i doborem
            pompy. Otrzymujesz komplet w PDF, gotowy do wpięcia w Twoją
            dokumentację. Możemy potem zrealizować montaż albo zostawić go
            ekipie wskazanej przez Ciebie — projekt jest neutralny
            technologicznie.
          </p>
          <p>
            W razie potrzeby dołączamy do prezentacji u klienta — pomagamy
            wytłumaczyć, dlaczego konkretne rozwiązania techniczne zostały
            dobrane i jak będą działać po realizacji. Robimy to bez prowizji
            i bez „przejmowania" klienta — Twoja relacja z inwestorem
            pozostaje Twoja.
          </p>
          <h2>Dla firm ogrodniczych i brukarskich — podwykonawstwo i doradztwo</h2>
          <p>
            Jesteś ogrodnikiem, brukarzem albo prowadzisz firmę zajmującą
            się aranżacją zieleni? Wchodzimy jako podwykonawca w zakresie
            nawadniania — bez konkurowania o resztę zlecenia. Pracujemy ze
            stałymi stawkami dla partnerów, dotrzymujemy terminów (kluczowe
            przy zlecaniu Twoim własnym ekipom następnych etapów) i
            zostawiamy posprzątany teren.
          </p>
          <p>
            Doradzamy też technicznie. Jeśli Twój klient prosi Cię o
            instalację nawadniania, ale nie czujesz się pewnie — zadzwoń,
            podpowiemy, jak wycenić i jak zaprojektować, żebyś mógł zrobić
            to sam, albo zlecić nam i mieć spokój głowy. W tej branży
            polegamy na sieci kontaktów — i odwzajemniamy się.
          </p>
        </Prose>

        {/* Reference table */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-secondary text-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12 md:mb-16 max-w-3xl">
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Z kim pracowaliśmy
              </p>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold leading-tight">
                Realizacje partnerskie — od osiedli przez hotele po
                infrastrukturę krytyczną
              </h2>
            </div>
            <div className="space-y-4">
              {referencjeB2B.map((r) => (
                <article
                  key={r.name}
                  className="bg-white/5 backdrop-blur p-6 md:p-8 border-l-4 border-brand md:flex md:items-start md:gap-8"
                >
                  <div className="md:w-1/3 mb-3 md:mb-0">
                    <h3 className="font-headline text-lg md:text-xl font-extrabold text-white leading-tight">
                      {r.name}
                    </h3>
                    <p className="text-brand text-sm font-headline font-bold mt-1">
                      {r.role}
                    </p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-white/85 text-[15px] leading-relaxed">
                      <span className="text-white/50 text-sm uppercase tracking-wider font-headline mr-2">
                        Przykłady:
                      </span>
                      {r.examples}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-12 text-white/70 text-[15px] max-w-2xl">
              Kompletna lista realizacji dostępna jest w portfolio. Część
              klientów zastrzegła sobie poufność — możemy je omówić podczas
              spotkania.{" "}
              <Link href="/realizacje" className="text-brand underline">
                Zobacz publiczne portfolio →
              </Link>
            </p>
          </div>
        </section>

        {/* B2B FAQ */}
        <Prose>
          <h2>Najczęstsze pytania od deweloperów i projektantów</h2>
          <h3>Czy podpisujecie kontrakt z odroczonym terminem płatności?</h3>
          <p>
            Tak — dla deweloperów standardowo pracujemy z 30-dniowym terminem
            płatności, a dla większych kontraktów ustalamy harmonogram
            zaliczek i płatności etapowych zgodnych z odbiorami inwestycji.
          </p>
          <h3>Jak długa jest gwarancja na osiedle?</h3>
          <p>
            Standardowo udzielamy 5-letniej gwarancji na wykonanie i 2-letniej
            na sprzęt (zgodnie z gwarancjami producentów Hunter, Rain Bird,
            Weathermatic). Dla większych kontraktów wydłużamy gwarancje
            kontraktowo. Wszystkie naprawy gwarancyjne i reklamacyjne są w
            cenie.
          </p>
          <h3>Czy macie ubezpieczenie OC działalności?</h3>
          <p>
            Tak — posiadamy aktualną polisę OC działalności gospodarczej,
            której kopię chętnie udostępniamy w ramach NDA przed podpisaniem
            kontraktu B2B.
          </p>
          <h3>W jakim formacie dostarczacie dokumentację?</h3>
          <p>
            PDF jako standard, gotowy do wpięcia w dokumentację
            wielobranżową. Zawiera schemat sytuacyjny, schemat hydrauliczny,
            specyfikację materiałową z numerami katalogowymi i kalkulację
            robocizny.
          </p>
          <h3>Czy obsługujecie projekty poza Pomorzem?</h3>
          <p>
            Bazą jest Bolszewo pod Wejherowem, ale dla większych kontraktów
            B2B realizujemy projekty w całej Polsce północnej — pracowaliśmy
            m.in. dla Polpharmy w Duchnicach (Warszawa). Mniejsze realizacje
            poza regionem rozpatrujemy indywidualnie.
          </p>
          <h3>Jak szybko reagujecie na awarię w obiekcie z kontraktem?</h3>
          <p>
            W ramach kontraktów B2B z gwarancją serwisową standardowo SLA to
            48 godzin od zgłoszenia. Dla awarii blokujących pracę obiektu
            (np. brak nawadniania boiska przed meczem ligowym) — tego samego
            dnia.
          </p>
        </Prose>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
