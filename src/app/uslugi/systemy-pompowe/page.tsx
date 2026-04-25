import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { FinalCta } from "@/components/FinalCta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Systemy pompowe — dobór i instalacja pomp do nawadniania",
  description:
    "Dobór i montaż pomp do studni, zbiorników i źródeł powierzchniowych. Pompy hydroforowe, głębinowe, czujniki ciśnienia, reduktory, filtry. Pomorze, Trójmiasto.",
  alternates: { canonical: "/uslugi/systemy-pompowe" },
};

const components = [
  {
    title: "Pompa",
    description:
      "Sercem systemu jest pompa — głębinowa do studni głębokich, hydroforowa do studni płytkich i zbiorników, lub powierzchniowa do źródeł odkrytych. Dobieramy moc i wydajność pod konkretne zapotrzebowanie nawadniania.",
    image: "/images/services/engineering.jpg",
    alt: "Pompa hydroforowa w trakcie montażu",
  },
  {
    title: "Zbiornik wyrównawczy / hydrofor",
    description:
      "Stabilizuje ciśnienie w instalacji, redukuje liczbę startów pompy (dłuższa żywotność). Dobieramy pojemność do liczby sekcji nawadniania.",
    image: "/images/gallery/gallery-15.jpg",
    alt: "Hydrofor z manometrem i czujnikiem ciśnienia",
  },
  {
    title: "Czujniki suchobiegu i ciśnienia",
    description:
      "Suchobieg chroni pompę przed pracą bez wody (najczęstsza przyczyna uszkodzeń). Czujnik ciśnienia automatycznie włącza i wyłącza pompę w zależności od zapotrzebowania.",
    image: "/images/services/control.jpg",
    alt: "Sterownik z czujnikami pompy",
  },
  {
    title: "Filtr dyskowy",
    description:
      'Chroni dysze, elektrozawory i sterownik przed zanieczyszczeniami ze studni. Filtry dyskowe 1" i 2" stosujemy w zależności od wydajności źródła i jakości wody.',
    image: "/images/gallery/gallery-06.jpg",
    alt: "Filtr dyskowy w instalacji nawadniania",
  },
  {
    title: "Reduktor ciśnienia",
    description:
      "Stabilizuje ciśnienie wyjściowe na poziomie optymalnym dla zraszaczy i linii kroplujących (zwykle 2–4 bary). Bez niego pompa może uszkadzać delikatne elementy systemu.",
    image: "/images/services/irrigation-install.jpg",
    alt: "Reduktor ciśnienia w studzience",
  },
  {
    title: "Sterownik i automatyka",
    description:
      "Spina wszystko w całość — sterownik nawadniania, czujniki źródła wody, alarmy awaryjne. Z aplikacją mobilną w nowszych modelach Hunter X2 / NODE-BT.",
    image: "/images/services/sprinkler.jpg",
    alt: "Automatyka systemu pompowego",
  },
];

const sources = [
  {
    title: "Studnia głębinowa",
    description:
      "Najczęstszy scenariusz w nowoczesnych ogrodach. Pompa głębinowa zanurzona w studni — niewidoczna, cicha, niezawodna. Dobieramy wysokość podnoszenia do głębokości studni i ciśnienia roboczego.",
  },
  {
    title: "Studnia kopana",
    description:
      "Pompa hydroforowa na powierzchni z rurą ssącą do studni. Tańsze rozwiązanie, ale wymaga ochrony przed mrozem i jest ograniczone głębokością ssania (~7 m).",
  },
  {
    title: "Zbiornik / cysterna",
    description:
      "Coraz częściej spotykane — szczególnie tam, gdzie zbiera się deszczówkę albo gdzie wodociąg ma za niski wydatek. Pompa hydroforowa pobiera wodę i podaje ją pod ciśnieniem.",
  },
  {
    title: "Wodociąg miejski",
    description:
      "Jeśli ciśnienie z wodociągu jest za niskie, instalujemy pompę wzmacniającą (booster). Wzmocnienie ciśnienia bez konieczności kopania studni.",
  },
  {
    title: "Staw lub źródło powierzchniowe",
    description:
      "Specjalistyczne pompy z dodatkowymi filtrami. Dobre rozwiązanie dla dużych terenów (parki, osiedla), gdzie zużycie wody jest na tyle duże, że woda z wodociągu byłaby kosztowna.",
  },
];

const brands = ["Pedrollo", "DAB", "Wilo", "Grundfos", "Lowara"];

export default function SystemyPompowePage() {
  return (
    <>
      <ServiceJsonLd
        name="Systemy pompowe dla nawadniania"
        description="Dobór i montaż pomp do studni głębinowych, zbiorników i źródeł powierzchniowych. Pompy hydroforowe, czujniki ciśnienia, reduktory, filtry dyskowe."
        serviceType="Irrigation pump systems"
        path="/uslugi/systemy-pompowe"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Strona główna", path: "/" },
          { name: "Usługi", path: "/uslugi" },
          { name: "Systemy pompowe", path: "/uslugi/systemy-pompowe" },
        ]}
      />
      <Header />
      <main>
        <PageHero
          eyebrow="Usługa"
          title="Systemy pompowe dla nawadniania"
          lead="Pompa to serce systemu nawadniania. Dobieramy ją indywidualnie do Twojego źródła wody, ciśnienia i wydajności jakiej potrzebujesz."
        />

        {/* 1. Story 2-col: intro + photo */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Co robimy
              </p>
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Pompy dobrane pod konkretny system, nie z&nbsp;katalogu
              </h2>
              <p className="text-zinc-700 font-body text-[16px] leading-relaxed mb-5">
                System pompowy to nie tylko sama pompa. Żeby instalacja
                działała niezawodnie przez lata, potrzeba kilku elementów
                dobranych do siebie i do warunków na miejscu — pompy,
                zbiornika, czujników, filtra, reduktora i sterownika.
              </p>
              <p className="text-zinc-700 font-body text-[16px] leading-relaxed">
                Pracujemy ze sprawdzonymi markami pomp irygacyjnych
                (Pedrollo, DAB, Wilo, Grundfos, Lowara). Konkretny model
                zależy od źródła wody, wydajności potrzebnej dla Twojego
                systemu i ciśnienia roboczego.
              </p>
            </div>
            <div className="relative aspect-[4/3] bg-zinc-100">
              <Image
                src="/images/services/engineering.jpg"
                alt="Instalacja pompy w systemie nawadniania"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 2. Stats / brand strip */}
        <section className="bg-secondary text-white py-14 md:py-16 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-4 text-center">
              Marki, na których pracujemy
            </p>
            <ul className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
              {brands.map((b) => (
                <li
                  key={b}
                  className="font-headline text-2xl md:text-3xl font-extrabold text-white/80 tracking-tight"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Components grid (cards with photos) */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-alt">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12 md:mb-16 max-w-3xl">
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Komponenty
              </p>
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight">
                Z czego składa się dobry system pompowy
              </h2>
              <div className="w-24 h-1 bg-brand mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((c) => (
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

        {/* 4. Story 2-col reversed: water sources */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:order-2">
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Pięć typów źródeł wody
              </p>
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight mb-8">
                Dobór pompy do Twojego źródła wody
              </h2>
              <ul className="space-y-6">
                {sources.map((s, idx) => (
                  <li key={s.title} className="border-l-4 border-brand pl-5">
                    <p className="text-brand text-xs font-headline font-bold tracking-widest uppercase mb-1">
                      {String(idx + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-headline text-secondary font-bold text-base md:text-lg uppercase mb-2">
                      {s.title}
                    </h3>
                    <p className="text-zinc-600 text-[14px] leading-relaxed">
                      {s.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] bg-zinc-100 lg:order-1 lg:sticky lg:top-28">
              <Image
                src="/images/gallery/gallery-11.jpg"
                alt="Instalacja pompowa w trakcie pracy"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 5. Modernizacja + komercyjne (granatowy) */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-secondary text-white">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Modernizacje
              </p>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Masz już pompę, ale system nie działa?
              </h2>
              <p className="text-white/85 text-[15px] leading-relaxed mb-4">
                Zbyt niskie ciśnienie, częste załączanie, awarie —
                diagnozujemy przyczynę i proponujemy konkretne rozwiązanie.
                Czasem wystarczy reduktor ciśnienia albo wymiana czujnika,
                czasem konieczna jest wymiana samej pompy.
              </p>
              <p className="text-white/85 text-[15px] leading-relaxed">
                Pompy serwisujemy w cyklu sezonowym razem z instalacją
                nawadniania.{" "}
                <Link
                  href="/serwis-i-konserwacja"
                  className="text-brand underline underline-offset-2"
                >
                  Zobacz pełną ofertę serwisu →
                </Link>
              </p>
            </div>
            <div>
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Obiekty komercyjne
              </p>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Boiska, hotele, osiedla — pompy z&nbsp;redundancją
              </h2>
              <p className="text-white/85 text-[15px] leading-relaxed mb-4">
                Dla pól golfowych, terenów wokół hoteli i osiedli
                mieszkaniowych dobieramy pompy o większej mocy — kilka pomp
                pracujących równolegle, sterowanych z poziomu sterownika
                centralnego.
              </p>
              <p className="text-white/85 text-[15px] leading-relaxed">
                W Sierra Golf Club, hotelach w Sopocie i na osiedlach w Gdyni
                używamy pomp Pedrollo 4SR i DAB Divertron z czujnikami
                ciśnienia i suchobiegu. W instalacjach przemysłowych
                (Polpharma) — stacje hydroforowe z redundancją: w razie
                awarii jednej pompy, druga przejmuje pracę.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Wydajność + Pomorze (białe tło, 2-col) */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Liczymy dokładnie
              </p>
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Wydajność pompy pod liczbę sekcji nawadniania
              </h2>
              <p className="text-zinc-700 text-[15px] leading-relaxed mb-4">
                Pompa musi obsłużyć największą sekcję nawadniania — czyli tę,
                w której pracuje równocześnie najwięcej zraszaczy lub linii
                kroplujących. W standardowym ogrodzie przydomowym największa
                sekcja to zwykle 6–10 zraszaczy o łącznym wydatku 30–50 l/min.
              </p>
              <p className="text-zinc-700 text-[15px] leading-relaxed">
                Dla większych systemów (osiedla, parki) projektujemy stacje
                hydroforowe z większymi zbiornikami i pompami głębinowymi.
                Dobry dobór oznacza ciszę pracy, długą żywotność i niskie
                zużycie prądu — dlatego nie idziemy „na zapas", tylko liczymy
                pod konkretny system.
              </p>
            </div>
            <div className="relative aspect-[4/3] bg-zinc-100">
              <Image
                src="/images/gallery/gallery-04.jpg"
                alt="Sterownik i automatyka pomp w trakcie konfiguracji"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 7. Pomorze section */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-alt">
          <div className="max-w-[1000px] mx-auto text-center">
            <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
              Lokalne doświadczenie
            </p>
            <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight mb-6">
              Trójmiasto, Pomorze, Wybrzeże — montujemy pompy lokalnie
            </h2>
            <p className="text-zinc-700 text-[16px] leading-relaxed">
              Pracujemy w całym regionie: Bolszewo, Wejherowo, Trójmiasto
              (Gdańsk, Gdynia, Sopot), Reda, Rumia, pas nadmorski (Łeba,
              Władysławowo, Lubiatowo). Znamy poziomy wód gruntowych w
              różnych częściach Pomorza, specyfikę studni w terenach
              piaszczystych pod Bolszewem versus studni w glinach Pomorza
              Środkowego, problemy z korozją sprzętu na wybrzeżu. Dobieramy
              pompy pod konkretne warunki — nie z katalogu.
            </p>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
