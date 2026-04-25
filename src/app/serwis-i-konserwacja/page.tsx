import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { StorySection } from "@/components/StorySection";
import { FinalCta } from "@/components/FinalCta";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { seasons, getCurrentSeason } from "@/lib/seasons";

export const metadata: Metadata = {
  title: "Serwis i konserwacja systemów nawadniania",
  description:
    "Serwis sezonowy systemów nawadniania (wiosenny od 250 zł, jesienny od 350 zł), diagnoza awarii, wymiana podzespołów i serwis robotów Husqvarna.",
  alternates: { canonical: "/serwis-i-konserwacja" },
};

const failures = [
  {
    title: "Pęknięta rura w systemie nawadniania",
    description:
      "Po przymrozku albo po pracach ogrodowych. Wymiana lub klipsowanie w jednej wizycie.",
  },
  {
    title: "Uszkodzony zraszacz po koszeniu",
    description:
      "Wymiana korpusu PROS-04 lub całego zraszacza Hunter PGP/PGJ w 15 minut.",
  },
  {
    title: "Niedziałający elektrozawór",
    description:
      "Wymiana cewki, membrany lub całego zaworu. Mamy w aucie pełen komplet części.",
  },
  {
    title: "Zalana studzienka",
    description:
      "Diagnoza wycieku, wymiana uszkodzonego elementu, osuszenie studzienki.",
  },
  {
    title: "Pompa nie startuje",
    description:
      "Diagnoza zasilania, czujnika ciśnienia, suchobiegu, ewentualna wymiana pompy.",
  },
];

const replacements = [
  {
    title: "Zraszacze i dysze",
    description:
      "Wymiana zraszacza rotacyjnego, dyszy lub całego korpusu PROS-04 — wykonujemy od ręki. Trzymamy stany magazynowe MP Rotator, Hunter PGP i PGJ.",
    image: "/images/services/sprinkler.jpg",
    alt: "Wymiana zraszacza Hunter w trawniku",
  },
  {
    title: "Elektrozawory, cewki, membrany",
    description:
      "Elektrozawory Hunter i Rain Bird, cewki magnetyczne, membrany — naprawiamy lub wymieniamy w jednej wizycie.",
    image: "/images/services/engineering.jpg",
    alt: "Elektrozawory w studzience",
  },
  {
    title: "Sterowniki i zasilacze",
    description:
      "Wymiana sterownika to często okazja na upgrade — z prostego X-Core na X2 z WiFi albo NODE-BT z aplikacją. Cały zakres Hunter + transformatory.",
    image: "/images/services/control.jpg",
    alt: "Sterownik nawadniania w trakcie wymiany",
  },
  {
    title: "Pompy i filtry",
    description:
      'Dobór i wymiana pomp (Pompa Divertron 900 i inne), filtry dyskowe 1" i 2", reduktory ciśnienia.',
    image: "/images/gallery/gallery-15.jpg",
    alt: "Pompa i filtr w studzience zaworowej",
  },
];

export default function SerwisPage() {
  const current = getCurrentSeason();
  return (
    <>
      <ServiceJsonLd
        name="Serwis i konserwacja systemów nawadniania"
        description="Serwis sezonowy systemów nawadniania (wiosenny, jesienny), diagnoza awarii, wymiana podzespołów Hunter i Rain Bird, serwis robotów Husqvarna w warsztacie."
        serviceType="Irrigation system maintenance and repair"
        path="/serwis-i-konserwacja"
        image="/images/services/control.jpg"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Strona główna", path: "/" },
          { name: "Usługi", path: "/uslugi" },
          { name: "Serwis i konserwacja", path: "/serwis-i-konserwacja" },
        ]}
      />
      <Header />
      <main>
        <PageHero
          eyebrow="Dodatkowe usługi"
          title="Serwis i konserwacja systemów nawadniania"
          lead="Po montażu pamiętamy o Twoim ogrodzie. Serwisujemy też instalacje innych firm — reagujemy szybko, działamy całe Pomorze."
        />

        {/* 1. Cykl serwisowy — 2 sezony */}
        <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12">
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Cykl serwisowy
              </p>
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
                Dwa sezony serwisowe — wiosenny rozruch i&nbsp;zazimowanie
              </h2>
              <div className="w-24 h-1 bg-brand mt-4" />
              <p className="text-zinc-600 mt-6 max-w-2xl text-[15px]">
                System nawadniania żyje w cyklu rocznym. Każdy sezon ma swoje
                typowe prace serwisowe.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seasons.map((s) => {
                const active = s.id === current.id;
                return (
                  <article
                    key={s.id}
                    className={`p-8 border-l-4 ${
                      active
                        ? "bg-secondary text-white border-brand"
                        : "bg-white border-zinc-200"
                    }`}
                  >
                    {active ? (
                      <span className="inline-block bg-brand text-white text-xs font-headline font-bold px-2 py-1 mb-3 uppercase tracking-wide">
                        Aktualny sezon
                      </span>
                    ) : null}
                    <h3
                      className={`font-headline text-lg font-bold uppercase mb-1 ${
                        active ? "text-white" : "text-secondary"
                      }`}
                    >
                      {s.name}
                    </h3>
                    <p
                      className={`text-xs uppercase mb-4 ${
                        active ? "text-white/70" : "text-zinc-400"
                      }`}
                    >
                      {s.months}
                    </p>
                    <p
                      className={`font-headline text-base font-bold mb-4 ${
                        active ? "text-white" : "text-secondary"
                      }`}
                    >
                      {s.headline}
                    </p>
                    <ul
                      className={`space-y-2 text-sm ${
                        active ? "text-white/85" : "text-zinc-600"
                      }`}
                    >
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="text-brand mt-1">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 2. Awarie story (granatowy, 2-col reversed) */}
        <StorySection
          eyebrow="Pomoc na już"
          title={
            <>
              Nagłe awarie — naprawiamy w&nbsp;<span className="text-brand">jeden dzień</span>
            </>
          }
          image="/images/services/irrigation-install.jpg"
          imageAlt="Naprawa awarii systemu nawadniania w trakcie pracy"
          reversed
          bg="secondary"
        >
          <p>
            Pęknięta rura po szpadlu? Studzienka pełna wody? Sterownik nie
            uruchamia podlewania? Najczęstsze awarie usuwamy w jeden dzień.
          </p>
          <ul className="space-y-3 pt-2">
            {failures.map((f) => (
              <li key={f.title} className="flex items-start gap-3">
                <span className="text-brand mt-1.5 w-1.5 h-1.5 rounded-full bg-brand inline-block shrink-0" />
                <span>
                  <strong className="text-white">{f.title}</strong> — {f.description}
                </span>
              </li>
            ))}
          </ul>
          <p className="pt-2">
            Stała stawka diagnozy i pełen orientacyjny cennik —{" "}
            <Link
              href="/cennik-serwisu"
              className="text-brand underline underline-offset-2"
            >
              zobacz cennik serwisu
            </Link>
            .
          </p>
        </StorySection>

        {/* 3. Wymiany podzespołów — cards with photos */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-alt">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12 md:mb-16 max-w-3xl">
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Wymiany podzespołów
              </p>
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight">
                Cztery główne grupy części, które najczęściej wymieniamy
              </h2>
              <div className="w-24 h-1 bg-brand mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {replacements.map((r) => (
                <article
                  key={r.title}
                  className="bg-white overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="relative aspect-[4/3] bg-zinc-100">
                    <Image
                      src={r.image}
                      alt={r.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-headline text-base font-extrabold text-secondary uppercase mb-3 leading-tight">
                      {r.title}
                    </h3>
                    <p className="text-zinc-600 text-[14px] leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Serwis robotów Husqvarna (white, 2-col) */}
        <StorySection
          eyebrow="Serwis robotów"
          title={
            <>
              Serwis robotów <span className="text-brand">Husqvarna</span> w&nbsp;naszym warsztacie
            </>
          }
          image="/images/services/automower-310.png"
          imageAlt="Husqvarna Automower 310 Mark II"
          bg="lowest"
        >
          <p>
            Co rok zimą oddajesz robota do naszego warsztatu. Z Wejherowa,
            Bolszewa i okolic odbieramy z domu klienta — dla dalszych
            lokalizacji ustalamy indywidualnie.
          </p>
          <p>
            <strong className="text-secondary">Pełen przegląd, wymiana noży, czyszczenie, kalibracja stacji dokującej, sprawdzenie akumulatora.</strong>{" "}
            Wiosną oddajemy gotowy do pracy.
          </p>
        </StorySection>

        {/* 5. Rezerwacja terminów + Awarie po pracach (alt, 2-col text-text) */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-alt">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Rezerwacja
              </p>
              <h2 className="text-secondary font-headline text-2xl md:text-3xl font-extrabold leading-tight mb-6">
                Rezerwacja terminu serwisu wiosennego i&nbsp;jesiennego
              </h2>
              <p className="text-zinc-700 text-[15px] leading-relaxed mb-4">
                Sezon wiosenny startuje w marcu i trwa do połowy maja — w tym
                okresie obsługujemy największą liczbę klientów. Sezon jesienny
                (zazimowanie) trwa od września do połowy listopada.
              </p>
              <p className="text-zinc-700 text-[15px] leading-relaxed">
                Warto zarezerwować termin z wyprzedzeniem — najlepiej kilka
                tygodni przed planowanym serwisem. Klienci, których system
                sami montowaliśmy, mają pierwszeństwo.
              </p>
            </div>
            <div>
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Najczęstsze przyczyny
              </p>
              <h2 className="text-secondary font-headline text-2xl md:text-3xl font-extrabold leading-tight mb-6">
                Awarie po pracach ogrodowych
              </h2>
              <p className="text-zinc-700 text-[15px] leading-relaxed mb-4">
                Większość awarii zdarza się po pracach ogrodowych:
                przekopywaniu rabat, sadzeniu drzewek, układaniu kostki
                brukowej, wymianie ogrodzenia. Szpadel i koparka to
                najbardziej niebezpieczni „wrogowie" rur PE.
              </p>
              <p className="text-zinc-700 text-[15px] leading-relaxed">
                Drugą częstą przyczyną są przymrozki — niewłaściwie
                zazimowany system pęka pod działaniem mrozu. Trzecia kategoria:
                zużycie eksploatacyjne (uszczelki, membrany, łożyska).
              </p>
            </div>
          </div>
        </section>

        {/* 6. Pomorze (centered) */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-secondary text-white">
          <div className="max-w-[1000px] mx-auto text-center">
            <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
              Zasięg serwisowy
            </p>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold leading-tight mb-6">
              Trójmiasto, Pomorze, pas nadmorski — pełen zasięg serwisowy
            </h2>
            <p className="text-white/85 text-[16px] leading-relaxed">
              Serwisujemy systemy nawadniania w całym Trójmieście (Gdańsk,
              Gdynia, Sopot), w Wejherowie, Redzie, Rumi, Bolszewie i okolicach
              (do 30 km od bazy mamy najszybsze reakcje), oraz w pasie
              nadmorskim — Łeba, Władysławowo, Lubiatowo. Awaryjnie potrafimy
              być na miejscu tego samego dnia w obrębie Pomorza Wschodniego.
            </p>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
