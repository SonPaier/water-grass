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

export const metadata: Metadata = {
  title: "Projektowanie systemów nawadniania — dla ogrodów i terenów zielonych",
  description:
    "Projekt techniczny systemu nawadniania. Schemat zraszaczy, dobór sprzętu, harmonogram. Dla klientów indywidualnych, architektów i deweloperów.",
  alternates: { canonical: "/projektowanie-systemow-nawadniania" },
};

const projectContents = [
  "Inwentaryzacja terenu z naniesieniem stref opadu",
  "Schemat rozmieszczenia zraszaczy i linii kroplujących",
  "Lokalizacja studzienek, elektrozaworów i sterownika",
  "Specyfikacja doboru sprzętu (Hunter, Rain Bird, Weathermatic)",
  "Bilans wodny i dobór pompy / źródła zasilania",
  "Kalkulacja materiałów i robocizny",
];

const audiences = [
  {
    eyebrow: "01 · Klient indywidualny",
    title: "Dla klienta indywidualnego",
    description:
      "Jeśli chcesz wiedzieć, ile będzie kosztował system w Twoim ogrodzie i jakie elementy są naprawdę potrzebne — robimy projekt, który możesz potem zrealizować z nami albo z dowolną firmą.",
  },
  {
    eyebrow: "02 · Architekt krajobrazu",
    title: "Dla architekta krajobrazu",
    description:
      "Pełna dokumentacja techniczna z opisem warstw, wykazem materiałów i specyfikacją technologiczną — gotowa do wpięcia w Twój projekt kompleksowy.",
  },
  {
    eyebrow: "03 · Deweloper i inwestor",
    title: "Dla dewelopera i inwestora",
    description:
      "Projekty dla osiedli mieszkaniowych, obiektów komercyjnych i terenów wokół inwestycji. Z harmonogramem zgranym z odbiorami i SCHED-em generalnego wykonawcy.",
  },
];

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

        {/* 1. Co zawiera projekt — 2-col z listą + zdjęcie */}
        <StorySection
          eyebrow="Co dostajesz"
          title={
            <>
              Co zawiera nasz projekt <span className="text-brand">techniczny</span>
            </>
          }
          image="/images/services/engineering.jpg"
          imageAlt="Schemat techniczny systemu nawadniania"
          bg="lowest"
        >
          <p>
            Projekt techniczny to konkretna dokumentacja — nie zarys ogólny.
            Dostajesz wszystko, co potrzeba do realizacji montażu (przez nas
            lub przez inną ekipę).
          </p>
          <ul className="space-y-2 pt-2">
            {projectContents.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-brand shrink-0 mt-0.5"
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
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </StorySection>

        {/* 2. Audience cards (3-col) */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-alt">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12 md:mb-16 max-w-3xl">
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Dla kogo robimy projekty
              </p>
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight">
                Trzy grupy odbiorców, jedna jakość projektu
              </h2>
              <div className="w-24 h-1 bg-brand mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {audiences.map((a) => (
                <article
                  key={a.eyebrow}
                  className="bg-white p-8 hover:shadow-lg transition-shadow"
                >
                  <p className="text-brand font-headline text-xs font-bold tracking-widest uppercase mb-3">
                    {a.eyebrow}
                  </p>
                  <h3 className="font-headline text-xl font-extrabold text-secondary leading-tight mb-4">
                    {a.title}
                  </h3>
                  <p className="text-zinc-600 text-[14px] leading-relaxed">
                    {a.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Czas realizacji + dokumenty (2-col reversed) */}
        <StorySection
          eyebrow="Tempo i format"
          title={
            <>
              Czas realizacji projektu i&nbsp;<span className="text-brand">dokumenty końcowe</span>
            </>
          }
          image="/images/services/control.jpg"
          imageAlt="Dokumentacja techniczna projektu nawadniania"
          reversed
          bg="lowest"
        >
          <p>
            Standardowy projekt ogrodu przydomowego (do 1500 m²) gotowy
            jest w 3–7 dni roboczych od pomiaru. Większe projekty komercyjne —
            do 3 tygodni.
          </p>
          <p>
            <strong>Otrzymujesz:</strong> schemat techniczny w skali, plan
            rozmieszczenia zraszaczy z opisem zasięgów, listę elektrozaworów
            i lokalizację studzienek, specyfikację sprzętu z numerami
            katalogowymi (Hunter, Rain Bird, Weathermatic), bilans wodny
            (zapotrzebowanie vs wydajność źródła), kalkulację materiałów i
            robocizny. Komplet w PDF, gotowy do wpięcia w dokumentację
            wielobranżową generalnego wykonawcy.
          </p>
        </StorySection>

        {/* 4. Hunter/Rain Bird + Linia kroplująca + Geodezja — 3 specialty cards */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-alt">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12 md:mb-16">
              <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
                Specjalizacje projektowe
              </p>
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight">
                Trzy obszary, w&nbsp;których robimy projekty najczęściej
              </h2>
              <div className="w-24 h-1 bg-brand mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="bg-white overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] bg-zinc-100">
                  <Image
                    src="/images/services/sprinkler.jpg"
                    alt="Zraszacz Hunter w pracy"
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-headline text-lg font-extrabold text-secondary uppercase mb-3 leading-tight">
                    Pod sprzęt Hunter i Rain Bird
                  </h3>
                  <p className="text-zinc-600 text-[14px] leading-relaxed">
                    Sam projekt techniczny dla klientów, którzy chcą zrealizować
                    montaż samodzielnie lub z inną ekipą. Pełna dokumentacja
                    z wykazem materiałów markowych — sterownikami X-Core, X2,
                    NODE, zraszaczami PGP/PGJ, dyszami MP Rotator.
                  </p>
                </div>
              </article>
              <article className="bg-white overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] bg-zinc-100">
                  <Image
                    src="/images/gallery/gallery-08.jpg"
                    alt="Linia kroplująca dla rabat"
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-headline text-lg font-extrabold text-secondary uppercase mb-3 leading-tight">
                    Linia kroplująca dla rabat i&nbsp;żywopłotów
                  </h3>
                  <p className="text-zinc-600 text-[14px] leading-relaxed">
                    Specjalizacja w niemal każdym projekcie ogrodu. Dla tujowych
                    żywopłotów (problematycznych w Trójmieście, gdzie często
                    wysychają), drzewek owocowych i nasadzeń wielogatunkowych.
                    Oszczędność wody do 60%.
                  </p>
                </div>
              </article>
              <article className="bg-white overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] bg-zinc-100">
                  <Image
                    src="/images/gallery/gallery-15.jpg"
                    alt="Projekt techniczny dokumentacji geodezyjnej"
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-headline text-lg font-extrabold text-secondary uppercase mb-3 leading-tight">
                    Na bazie dokumentacji geodezyjnej
                  </h3>
                  <p className="text-zinc-600 text-[14px] leading-relaxed">
                    Dla większych inwestycji opieramy projekt na dokumentacji
                    geodezyjnej dostarczonej przez inwestora. Nasz schemat
                    trafia do dokumentacji wielobranżowej z uwzględnieniem
                    kolizji (kanalizacja, energetyka, oświetlenie).
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 5. Współpraca z firmami ogrodniczymi (granatowy) */}
        <StorySection
          eyebrow="Współpraca B2B"
          title={
            <>
              Dla firm ogrodniczych, brukarskich i&nbsp;<span className="text-brand">aranżacji zieleni</span>
            </>
          }
          image="/images/services/watergrass-bus.webp"
          imageAlt="Bus serwisowy WaterGrass — współpraca z firmami ogrodniczymi"
          bg="secondary"
        >
          <p>
            Jesteś ogrodnikiem, brukarzem albo zajmujesz się pracami
            pokrewnymi? Wchodzimy jako podwykonawca w zakresie nawadniania —
            bez konkurowania o resztę zlecenia. Pracujemy ze stałymi stawkami
            dla partnerów, dotrzymujemy terminów i zostawiamy posprzątany teren.
          </p>
          <p>
            Doradzamy też technicznie. Jeśli Twój klient prosi Cię o
            instalację nawadniania, ale nie czujesz się pewnie — zadzwoń,
            podpowiemy. Z naszego doświadczenia — to zawsze obustronnie
            korzystne.
          </p>
          <p>
            <Link
              href="/wspolpraca"
              className="text-brand underline underline-offset-2 font-headline font-bold"
            >
              Zobacz pełną ofertę współpracy B2B →
            </Link>
          </p>
        </StorySection>

        {/* 6. Trójmiasto / Pomorze */}
        <section className="py-20 md:py-28 px-6 md:px-8 bg-surface-alt">
          <div className="max-w-[1000px] mx-auto text-center">
            <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
              Lokalne doświadczenie
            </p>
            <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold leading-tight mb-6">
              Trójmiasto i&nbsp;Pomorze — projekty z&nbsp;lokalną wiedzą
            </h2>
            <p className="text-zinc-700 text-[16px] leading-relaxed">
              Robimy projekty nawadniania dla architektów krajobrazu i
              deweloperów z całego Trójmiasta — Gdańsk, Gdynia, Sopot — oraz
              pasa nadmorskiego (Władysławowo, Łeba). Specyfika regionu jest
              naszą codziennością: skarpy w Gdyni i Sopocie wymagają zaworów
              zwrotnych i niezależnych stref ciśnienia, ogrody nadmorskie —
              sprzętu odpornego na sól i piasek, ogrody w głębi lądu na
              glinach — większej liczby zraszaczy z mniejszym zasięgiem.
              Lokalne doświadczenie przekłada się bezpośrednio na jakość
              projektu.
            </p>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
