import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { FinalCta } from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "O firmie WaterGrass — od 2012 roku w nawadnianiu",
  description:
    "WaterGrass — Łukasz Kowalewski. Profesjonalne systemy nawadniania od 2012 roku. Kilkaset zrealizowanych ogrodów, certyfikowany instalator Hunter, Rain Bird, Weathermatic, autoryzowany dealer Husqvarna Automower.",
  alternates: { canonical: "/o-firmie" },
};

const stats = [
  { value: "Od 2012", label: "Roku w nawadnianiu" },
  { value: "Kilkaset", label: "Zrealizowanych systemów" },
  { value: "5", label: "Certyfikowanych marek" },
  { value: "100%", label: "Gwarancja na wykonanie" },
];

const realizationCategories = [
  {
    label: "Publiczne",
    accent: "Parki, place, instytucje",
    items: [
      "Park Miejski Majkowskiego, Wejherowo",
      "Plac Wejhera, Wejherowo",
      "Muzeum Piaśnickie, Wejherowo",
      "Sąd Rejonowy, Tczew",
    ],
  },
  {
    label: "Sport",
    accent: "Boiska, pola golfowe",
    items: [
      "Sierra Golf Club, Pętkowice",
      "Boisko KS Gryf Wejherowo",
      "Boiska gminne — Kamienica Królewska, Gowidlino",
      "Boiska gminne — Sierakowice, Orle",
    ],
  },
  {
    label: "Hotele i apartamenty",
    accent: "Pas nadmorski, Trójmiasto",
    items: [
      "Hotel Radisson Blu, Sopot",
      "Hotel Testa, Sopot",
      "Apartamenty Mewia Łacha, Sobieszewo",
      "Ośrodki w Łebie, Władysławowie, Lubiatowie",
    ],
  },
  {
    label: "Komercja i przemysł",
    accent: "Retail, infrastruktura",
    items: [
      "Port Lotniczy, Gdańsk",
      "Polpharma Biologics, Duchnice",
      "Aldi, Sopot",
    ],
  },
  {
    label: "Osiedla i deweloperzy",
    accent: "Trójmiasto, Pomorze",
    items: [
      "Osiedle Wiczlino Ogród, Gdynia",
      "Osiedle Altoria 2, Gdynia",
      "Osiedle Azymut, Gdynia",
      "Osiedle Harmonia Oliwska, Gdańsk",
    ],
  },
  {
    label: "Oświata",
    accent: "Szkoły, przedszkola",
    items: [
      "Pozytywna Szkoła Podstawowa, Gdańsk",
      "Szkoła Podstawowa nr 9, Wejherowo",
      "Przedszkole „Kubuś Puchatek”, Wejherowo",
      "Przedszkole „Burczymucha”, Bolszewo",
    ],
  },
];

const certificates = [
  {
    name: "Hunter",
    type: "Certyfikowany instalator",
    description: "Sterowniki X-Core / X2 / NODE, zraszacze PGP, MP Rotator, czujniki Solar Sync",
  },
  {
    name: "Rain Bird",
    type: "Certyfikowany instalator",
    description: "Profesjonalny sprzęt do nawadniania ogrodów i terenów zielonych",
  },
  {
    name: "Weathermatic",
    type: "Szkolenia poziom I + II",
    description: "Inteligentne sterowniki Smart Line z optymalizacją zużycia wody",
  },
  {
    name: "FISH",
    type: "Certyfikowany instalator",
    description: "Akcesoria do profesjonalnych systemów nawadniania",
  },
  {
    name: "Husqvarna Automower",
    type: "Autoryzowany dealer i serwis",
    description: "Sprzedaż, montaż i serwis robotów koszących — modele klasyczne i z GPS (EPOS RS1)",
  },
  {
    name: "M30 Plus",
    type: "Certyfikat M30 Plus",
    description: "Specjalistyczne szkolenie branżowe z technologii nawadniania",
  },
];

const philosophyPoints = [
  {
    headline: "Nie podzlecamy",
    body: "Pełną odpowiedzialność za system bierzemy od pierwszego pomiaru aż po wieloletnią gwarancję. Klient ma jeden numer telefonu, jeden zespół i jedną osobę odpowiedzialną.",
  },
  {
    headline: "Stała opieka po montażu",
    body: "Co rok pamiętamy o przeglądzie wiosennym i jesiennym. W razie awarii reagujemy szybko — często tego samego dnia. Serwis gwarancyjny i reklamacyjny mamy w cenie.",
  },
  {
    headline: "Specjalizacja, nie szeroki zakres",
    body: "Robimy tylko nawadnianie i roboty Husqvarna. Bez „przy okazji ogrodzeń, kostki i tarasów” — i właśnie dlatego robimy to dobrze.",
  },
];

export default function OFirmiePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Poznaj nas"
          title="Od 2012 roku zajmujemy się tylko nawadnianiem"
          lead="Łukasz Kowalewski i zespół WaterGrass. Kilkaset systemów na Pomorzu, dziesiątki realizacji komercyjnych, autoryzowane szkolenia w pięciu topowych markach branży."
        />

        {/* Story 1: text + van photo */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Łukasz Kowalewski
              </p>
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                Specjalizujemy się wyłącznie w&nbsp;nawadnianiu
              </h2>
              <p className="text-zinc-700 font-body text-[16px] leading-relaxed mb-5">
                Profesjonalnie zajmujemy się systemami nawadniania od 2012
                roku. W ciągu tych lat wykonaliśmy kilkaset systemów
                automatycznego nawadniania oraz kilkadziesiąt instalacji
                robotów koszących Husqvarna. Oprócz ogrodów przydomowych
                zrealizowaliśmy projekty na obiektach użyteczności
                publicznej — od parków miejskich po hotele pięciogwiazdkowe.
              </p>
              <p className="text-zinc-700 font-body text-[16px] leading-relaxed">
                Pracujemy mobilnie. W sezonie wiosennym i jesiennym jesteśmy
                w trasie codziennie — od Bolszewa, przez całe Trójmiasto, po
                pas nadmorski. Z oznakowanego busa wynosimy materiał,
                narzędzia i sprzęt potrzebny do każdego dnia roboczego —
                komplet zraszaczy Hunter, rur PE, studzienek zaworowych i
                części zamiennych.
              </p>
            </div>
            <div className="relative aspect-[4/3] bg-zinc-100">
              <Image
                src="/images/services/watergrass-bus.webp"
                alt="Oznakowany bus serwisowy WaterGrass — nawadnianie ogrodów i roboty koszące"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-secondary text-white py-16 md:py-20 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand mb-2 leading-none">
                  {s.value}
                </p>
                <div className="w-12 h-0.5 bg-white/20 mb-3 mx-auto md:mx-0" />
                <p className="font-body text-sm md:text-[15px] text-white/80 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Story 2: realization photo + text (reversed) */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-alt">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] bg-zinc-200 lg:order-1">
              <Image
                src="/images/realizacje/park-majkowskiego-wejherowo.jpg"
                alt="Realizacja systemu nawadniania w parku miejskim — Wejherowo"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="lg:order-2">
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Filozofia pracy
              </p>
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight mb-8">
                Trzy zasady, których trzymamy się od 2012 roku
              </h2>
              <ul className="space-y-6">
                {philosophyPoints.map((p) => (
                  <li key={p.headline} className="border-l-4 border-brand pl-5">
                    <p className="font-headline text-secondary font-bold text-base md:text-lg uppercase mb-2">
                      {p.headline}
                    </p>
                    <p className="text-zinc-600 text-[15px] leading-relaxed">
                      {p.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Realizations by category — visual grid */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12 md:mb-16 text-center">
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Najważniejsze realizacje
              </p>
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight">
                Kilkaset projektów w&nbsp;sześciu kategoriach
              </h2>
              <div className="w-24 h-1 bg-brand mt-4 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {realizationCategories.map((cat, idx) => (
                <article
                  key={cat.label}
                  className="bg-white p-8 hover:shadow-lg transition-shadow"
                >
                  <p className="text-brand font-headline text-xs font-bold tracking-widest uppercase mb-2">
                    {String(idx + 1).padStart(2, "0")} · {cat.accent}
                  </p>
                  <h3 className="font-headline text-xl font-extrabold text-secondary uppercase mb-5">
                    {cat.label}
                  </h3>
                  <ul className="space-y-2 text-zinc-600 text-[14px]">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-brand mt-1.5 w-1.5 h-1.5 rounded-full bg-brand inline-block shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/realizacje"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 font-headline text-sm font-bold transition-all rounded-sm inline-block"
              >
                Zobacz pełne portfolio realizacji
              </Link>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-secondary text-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12 md:mb-16">
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Certyfikaty i autoryzacje
              </p>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold leading-tight max-w-3xl">
                Czołówka światowych marek nawadniania —&nbsp;mamy uprawnienia,
                których wymaga każda z&nbsp;nich
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificates.map((cert) => (
                <article
                  key={cert.name}
                  className="bg-white/5 backdrop-blur p-6 border-l-4 border-brand"
                >
                  <p className="text-brand font-headline text-xs font-bold uppercase tracking-widest mb-2">
                    {cert.type}
                  </p>
                  <h3 className="font-headline text-2xl font-extrabold text-white mb-3">
                    {cert.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </article>
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
