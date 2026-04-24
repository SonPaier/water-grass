import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Prose } from "@/components/Prose";
import { FinalCta } from "@/components/FinalCta";
import { seasons, getCurrentSeason } from "@/lib/seasons";

export const metadata: Metadata = {
  title: "Serwis i konserwacja systemów nawadniania",
  description:
    "Serwis sezonowy systemów nawadniania (wiosenny od 250 zł, jesienny od 350 zł), diagnoza awarii, wymiana podzespołów i serwis robotów Husqvarna.",
  alternates: { canonical: "/serwis-i-konserwacja" },
};

export default function SerwisPage() {
  const current = getCurrentSeason();
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Dodatkowe usługi"
          title="Serwis i konserwacja systemów nawadniania"
          lead="Po montażu pamiętamy o Twoim ogrodzie. Serwisujemy też instalacje innych firm — reagujemy szybko, działamy całe Pomorze."
        />
        <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12">
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
                Cykl serwisowy
              </h2>
              <div className="w-24 h-1 bg-brand mt-4" />
              <p className="text-zinc-600 mt-6 max-w-2xl text-[15px]">
                System nawadniania żyje w czterech sezonach. Każdy z nich ma
                swoje typowe prace serwisowe.
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
        <Prose>
          <h2>Nagłe awarie — pomoc na już</h2>
          <p>
            Pęknięta rura po szpadlu? Studzienka pełna wody? Sterownik nie
            uruchamia podlewania? Najczęstsze awarie systemów nawadniania
            usuwamy w jeden dzień. Najczęściej zgłaszane problemy:
          </p>
          <ul>
            <li>
              <strong>Pęknięta rura w systemie nawadniania</strong> — po
              przymrozku albo po pracach ogrodowych. Wymiana lub klipsowanie w
              jednej wizycie.
            </li>
            <li>
              <strong>Uszkodzony zraszacz po koszeniu</strong> — wymiana
              korpusu PROS-04 lub całego zraszacza Hunter PGP/PGJ w 15 minut.
            </li>
            <li>
              <strong>Niedziałający elektrozawór</strong> — wymiana cewki,
              membrany lub całego zaworu.
            </li>
            <li>
              <strong>Zalana studzienka</strong> — diagnoza wycieku, wymiana
              uszkodzonego elementu.
            </li>
            <li>
              <strong>Pompa nie startuje</strong> — diagnoza zasilania,
              czujnika ciśnienia i suchobiegu.
            </li>
          </ul>
          <p>
            Przyjeżdżamy z kompletem części Hunter i Rain Bird na pokładzie —
            w większości przypadków usterkę usuwamy w trakcie tej samej
            wizyty. Stała stawka diagnozy i pełen orientacyjny cennik{" "}
            <Link href="/cennik-serwisu">znajdziesz tutaj</Link>.
          </p>
          <h2>Wymiany podzespołów</h2>
          <h3>Zraszacze i dysze</h3>
          <p>
            Wymiana zraszacza rotacyjnego, dyszy lub całego korpusu PROS-04 —
            wykonujemy od ręki. Trzymamy stany magazynowe MP Rotator, Hunter
            PGP i PGJ.
          </p>
          <h3>Elektrozawory, cewki, membrany</h3>
          <p>
            Elektrozawory Hunter i Rain Bird, cewki magnetyczne, membrany —
            naprawiamy lub wymieniamy w jednej wizycie.
          </p>
          <h3>Sterowniki i zasilacze</h3>
          <p>
            Wymiana sterownika to często okazja na upgrade — z prostego X-Core na
            X2 z WiFi albo NODE-BT z aplikacją. Cały zakres Hunter + transformatory.
          </p>
          <h3>Pompy i filtry</h3>
          <p>
            Dobór i wymiana pomp (Pompa Divertron 900 i inne), filtry dyskowe
            1&quot; i 2&quot;, reduktory ciśnienia.
          </p>
          <h2>Serwis robotów Husqvarna</h2>
          <p>
            Co rok zimą oddajesz robota do naszego warsztatu. Pełen przegląd,
            wymiana noży, czyszczenie, kalibracja stacji dokującej, sprawdzenie
            akumulatora. Wiosną oddajemy gotowy do pracy.
          </p>
          <h2>Rezerwacja terminu serwisu wiosennego i jesiennego</h2>
          <p>
            Sezon wiosenny startuje w marcu i trwa do połowy maja — w tym
            okresie obsługujemy największą liczbę klientów. Sezon jesienny
            (zazimowanie) trwa od września do połowy listopada. W obu
            przypadkach warto zarezerwować termin z wyprzedzeniem — najlepiej
            kilka tygodni przed planowanym serwisem. Klienci, których system
            sami montowaliśmy, mają pierwszeństwo i często rezerwujemy im
            terminy z półrocznym wyprzedzeniem na cały rok do przodu.
          </p>
          <h2>Awarie po pracach ogrodowych — najczęstsze przyczyny</h2>
          <p>
            Większość awarii systemów nawadniania zdarza się po pracach
            ogrodowych: przekopywaniu rabat, sadzeniu drzewek, układaniu
            kostki brukowej, wymianie ogrodzenia. Szpadel i koparka to
            najbardziej niebezpieczni „wrogowie" rur PE. Drugą częstą
            przyczyną są przymrozki — niewłaściwie zazimowany system
            (resztki wody w rurach) pęka pod działaniem mrozu. Trzecia
            kategoria: zużycie eksploatacyjne — uszczelki, membrany w
            elektrozaworach, łożyska w pompach. Wszystkie te problemy
            naprawiamy w jeden dzień.
          </p>
          <h2>Trójmiasto, Pomorze, pas nadmorski — pełen zasięg serwisowy</h2>
          <p>
            Serwisujemy systemy nawadniania w całym Trójmieście (Gdańsk,
            Gdynia, Sopot), w Wejherowie, Redzie, Rumi, Bolszewie i okolicach
            (do 30 km od bazy mamy najszybsze reakcje), oraz w pasie
            nadmorskim — Łeba, Władysławowo, Lubiatowo. Dla obiektów
            komercyjnych jeździmy też dalej: Tczew, Lębork, wybrane
            realizacje warszawskie. Awaryjnie potrafimy być na miejscu tego
            samego dnia w obrębie Pomorza Wschodniego.
          </p>
          <h2>Umów termin serwisu</h2>
          <p>
            Najszybciej zadzwoń — telefon odbiera Łukasz osobiście. Przy
            serwisach sezonowych warto zapisywać się wcześniej, w marcu i
            kwietniu kalendarz wypełnia się błyskawicznie.
          </p>
          <p>
            <Link href="/cennik-serwisu">Zobacz orientacyjny cennik serwisu →</Link>
          </p>
        </Prose>
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
