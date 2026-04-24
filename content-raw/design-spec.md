# WaterGrass — Design Spec (mapowanie szablon → komponenty)

Źródło prawdy wizualnej: `/Users/tomasznastaly/Documents/programming/watergrass/index.html` (732 linie, makieta jednostronicowa).
Tokeny i fonty: `content-inventory.md §8`. Inwentarz treści: tamże §1–§9. Dane operacyjne: `business-context.md`. Mapa stron i nagłówków: `pages-and-headings.md`.

> **CORE biznesu:** projektowanie i montaż systemów nawadniania pod klucz.
> Serwis i cennik to **dodatki** — schodzą z home na osobne podstrony.

## Zasady ogólne

1. **Tailwind v4 z `@theme` w `globals.css`** — nazwy tokenów dokładnie jak w szablonie (`primary`, `primary-container`, `secondary`, `surface-container`, `surface-container-lowest`, `outline`, `on-primary-fixed-variant`).
2. **Kontener `max-w-[1200px] mx-auto px-6 md:px-8`** dla każdej sekcji — bez wyjątków.
3. **Fonty:** `Plus Jakarta Sans` (`headline`, `letter-spacing -0.02em`) dla H1–H4 i buttonów; `Inter` dla `body`.
4. **Border-radius:** base 4 px, xl 8 px. Karty, buttony, obrazy.
5. **Akcent zielony `#28a745`** = button/CTA i podkreślenie pod H2 (`w-24 h-1`); **granat `#003366`** = nagłówki, footer, hero overlay, stat bar.
6. **Wszystkie obrazy przez `next/image`**, hero z `priority`, reszta lazy. AVIF/WebP automatycznie.
7. **Animacje:** scroll-trigger header (`bg-white + shadow-md` po `scrollY > 50`), mobile menu toggle, hover scale `group-hover:scale-105` na realizacjach. **Respect `prefers-reduced-motion`** — owijamy w `useReducedMotion`.

## Mapowanie sekcji home → komponenty → assety

Numeracja zgodna z kolejnością renderowania na `/`. Sekcje **NEW** to dodatki w stylu szablonu.
Sekcje oznaczone *(przeniesione)* zostały zdjęte z home i żyją na podstronach.

### 1. Header (sticky, `<Header />`)
- **Źródło designu:** szablon linie 60–105.
- **Asset:** `public/logo.svg` (wektoryzacja `content-raw/images/logo.png`); fallback PNG.
- **Treść menu:** Montaż / Projektowanie / Husqvarna / Realizacje / O firmie / Kontakt. „Serwis” w submenu „Więcej” lub na końcu, żeby nie dominował.
- **CTA prawy:** `tel:+48794332827` w pigułce zielonej.
- **Behaviour:** `"use client"` + `useEffect` na `scroll`, `useState` na mobile menu. Klasy szablonu 1:1.

### 2. Hero (`<Hero />`)
- **Źródło designu:** szablon 107–135 (75 vh, gradient overlay, eyebrow + H1 + lead + 2 CTA).
- **Asset (potwierdzony):** `public/images/hero/hero.png` ← skopiowane z `/watergrass/images/hero.png` (1,93 MB). `next/image` z `priority`, `quality={85}`, sizes `100vw`. AVIF wygenerowany automatycznie ~250 kB.
- **Eyebrow:** „Profesjonalne systemy nawadniania od 2012 roku”.
- **H1:** „Projektujemy i montujemy systemy nawadniania pod klucz”.
- **Lead:** „Audyt → projekt → montaż → uruchomienie → gwarancja. Robimy ogrody przydomowe, osiedla, hotele, parki i obiekty sportowe na Pomorzu.”
- **CTA1:** „Zamów bezpłatną wycenę” → anchor `#kontakt`.
- **CTA2:** „Zobacz realizacje” → anchor `#realizacje` (lub `/realizacje`).

### 3. Jak zakładamy nawodnienie (`<InstallProcess />`) — 6 kroków
- **Źródło designu:** szablon 137–174 (numery 01–04 w jasnoszarym tle, prawe kolumny z opisem).
- **Modyfikacja vs. szablon:** **6 kroków zamiast 4** (audyt → projekt → wycena → montaż → uruchomienie → gwarancja). Grid `md:grid-cols-2 lg:grid-cols-3` (2 wiersze po 3).
- **Server component**, brak assetów obrazowych.
- **Treść:** Wywiad i audyt terenu / Projekt techniczny / Bezpłatna wycena / Montaż instalacji / Uruchomienie i nauka obsługi / Gwarancja i serwis. Rozwinięcie z `pages-and-headings.md`.

### 4. Co nawadniamy (`<InstallationTypes />`) — 6 kafli
- **Źródło designu:** szablon 176–333 (kafle z indywidualnym 64×64 SVG `viewBox=0 0 72 72`).
- **Reframing vs. szablon:** te same wizualnie kafle, ale komunikat z „Naszych usług” zmienia się na **typy obiektów/inwestycji**. SVG zostają, tytuły i copy się zmieniają.
- **Server component.** Dane z `src/lib/installationTypes.ts`.
- **Kafle:**
  1. **Ogrody przydomowe** (SVG zraszacza z szablonu) — „kompleksowe instalacje od 200 m² do 5 000 m²”.
  2. **Osiedla i inwestycje deweloperskie** (SVG budynków) — „współpraca z deweloperami i wspólnotami”.
  3. **Hotele, ośrodki wczasowe, apartamenty** (SVG budynku z kroplą — z szablonu „Obiekty Komercyjne”) — z social proofem (Radisson, Mewia Łacha).
  4. **Boiska sportowe i pola golfowe** (SVG boiska) — Sierra Golf, Gryf Wejherowo, boiska gminne.
  5. **Parki miejskie i tereny publiczne** (SVG drzewa/parku — nowy ikonograf w stylu szablonu) — Park Majkowskiego, Plac Wejhera.
  6. **Plantacje, szkółki i zielone dachy** (SVG zielonego dachu z szablonu) — szkółka „Flora”, plantacja borówki.
- **CTA dolny:** „ZAMÓW BEZPŁATNĄ WYCENĘ” → `#kontakt`.

### 5. Introduction Banner (`<IntroBanner />`)
- **Źródło designu:** szablon 335–351 (centrowany H2 z `<span class="text-primary-container">`, watermark `WATER GRASS` 12vw).
- **Treść:** „Zaprojektujemy i zainstalujemy system, który **zaopiekuje się Twoim ogrodem**” + lead o zespole inżynierów.
- **CTA:** „POZNAJ NAS” → `/o-firmie`.

### 6. Stats Bar (`<Stats />`) — `bg-secondary text-white`
- **Źródło designu:** szablon 353–415.
- **Liczby (zaktualizowane vs. szablon):**
  - **„Od 2012”** — rok założenia.
  - **„Kilkaset”** zrealizowanych systemów (lub konkretna liczba — do potwierdzenia z Łukaszem).
  - **„100% gwarancji”** — bo `Serwis gwarancyjny` i `Serwis reklamacyjny` w cenniku za 0 zł.
  - **„Pod klucz”** — projekt + montaż + uruchomienie + serwis (zamiast „24/7”).

### 7. Services Gallery split (`<InstallShowcase />`)
- **Źródło designu:** szablon 417–455 (4 zdjęcia 2×2 po lewej, tekst + checklist + CTA po prawej).
- **Asset (z szablonu):**
  - `public/images/services/irrigation-install.jpg`
  - `public/images/services/sprinkler.jpg`
  - `public/images/services/engineering.jpg`
  - `public/images/services/control.jpg`
- **Reframing copy:** akcent na **kompletność montażu**, nie na konsultacje. „Jeden wykonawca: projekt, materiał, montaż, uruchomienie, gwarancja”. Checklista: Audyt terenu i warunków glebowych / Dobór sprzętu Hunter, Rain Bird, Husqvarna / Pełna automatyzacja i integracja z czujnikami pogody.
- **CTA:** „ZOBACZ JAK PRACUJEMY” → `/montaz-systemow-nawadniania`.

### 8. Marki / Dealer Strip (`<BrandStrip />`) — **NEW**
- **Pozycja:** zaraz po `InstallShowcase`, przed Husqvarna. Cienki pasek `py-12 bg-white border-y border-zinc-100`.
- **Asset:** `public/images/brands/{hunter,rain-bird,weathermatic,fish,husqvarna}.svg` — z press-kitów producentów. Monochrome `text-zinc-400 hover:text-secondary`.
- **Layout:** flex-wrap, gap-12, każde logo h-10.
- **Header sekcji:** „Certyfikowany instalator i autoryzowany dealer”.

### 9. Husqvarna Automower (`<Husqvarna />`)
- **Źródło designu:** szablon 457–482 (split, badge „AUTORYZOWANY DEALER”, obraz po prawej).
- **Asset (primary):** `public/images/services/husqvarna.jpg`.
- **Asset zapasowy:** `content-raw/images/mower/h310-1892.png`.
- **Treść:** kopia z szablonu + akcent na **EPOS RS1 / GPS** — „Montujemy też Automowery z nawigacją GPS, bez przewodu granicznego”.
- **CTA:** „SPRAWDŹ JAK TO DZIAŁA” → `/husqvarna-automower`.

### 10. Realizacje (`<Realizations />`) — data-driven
- **Źródło designu:** szablon 608–646 (3 kafle aspect 4:5 z gradient overlay).
- **Asset:** prawdziwe zdjęcia z `content-raw/images/gallery/` (po obróbce → `public/images/realizacje/`).
- **Layout rozszerzony:** **9–12 kafli** (mix typów), domyślnie pokazane 6, „Pokaż więcej” rozwija resztę. Filtry typu (Publiczne / Hotele / Sport / Komercja / Ogrody) jako proste tagi `<button>` ustawiające URL state.
- **Akcent na pełne MONTAŻE, nie na pojedyncze serwisy:** Park Majkowskiego, Sierra Golf Pętkowice, Hotel Radisson Blu Sopot, Castorama Rumia, Port Lotniczy Gdańsk, Wiczlino Ogród Gdynia, Polpharma Duchnice, Mewia Łacha Sobieszewo, Sąd Rejonowy Tczew, Gryf Wejherowo. Lista zależna od zgód marek (pyt. #9 z `business-context.md §9`).

### 11. Współpraca z architektami i deweloperami (`<Cooperation />`)
- **Źródło designu:** szablon 484–548 (2 kolumny + CTA bar `bg-secondary`).
- **Reframing:** lewa kolumna „Dla architektów krajobrazu i ogrodników” (kompleksowe wsparcie techniczne, dokumentacja CAD, autoryzowany serwis), prawa „Dla deweloperów i wspólnot mieszkaniowych” (montaże osiedlowe pod klucz, harmonogramy zgrane z odbiorami inwestycji, faktury VAT, gwarancje wieloletnie).
- **CTA bar:** „Gotowy na precyzyjny projekt?” → telefon/kontakt.

### 12. Testimonials (`<Testimonials />`) — 3 karty z 5 gwiazdkami
- **Źródło designu:** szablon 550–606.
- **Treść:** placeholdery z szablonu pozostają z flagą `placeholder: true` w `testimonials.ts`. Po stronie produkcji renderujemy tylko `placeholder: false`. W deweloperskim NODE_ENV widoczny banner ostrzegawczy.

### 13. Zakres działania (`<ServiceArea />`) — **NEW**
- **Pozycja:** między Testimonials a sekcją „Dodatkowo serwis”.
- **Layout:** lewa kolumna 60% — interaktywna mapa Pomorza (`react-leaflet` + OSM tiles, marker w Bolszewie + okrąg 80 km). Prawa kolumna 40% — 3 sekcje miast (Rdzeń / Trójmiasto / Pas wakacyjny) z `serviceArea.ts`.
- **Fallback bez JS:** statyczny SVG generowany skryptem `scripts/build-service-area-svg.ts`.
- **Tło sekcji:** `bg-surface-container`.

### 14. Dodatkowo: serwis i konserwacja (`<ServicesTeaser />`) — **NEW (mała sekcja)**
- **Pozycja:** ostatnia sekcja przed CTA i footerem. Krótka, niska, jednoekranowa.
- **Layout:** 2 kolumny: lewa „Po montażu nie zostawiamy Cię samego” z 4 bullet pointami (serwis wiosenny, serwis jesienny, diagnoza awarii, wymiana podzespołów), prawa CTA „Sprawdź ofertę serwisową” → `/serwis-i-konserwacja`.
- **Cel:** komunikat, że dbamy długoterminowo, ale **bez** zajmowania głównej powierzchni home.

### 15. CTA finałowe (`<FinalCta />`) — pas pełnej szerokości
- **Pozycja:** ostatnia sekcja przed footerem. `bg-primary-container text-white py-20`.
- **H2:** „Umów bezpłatną wycenę w swoim ogrodzie”.
- **Sub:** „Przyjedziemy, zmierzymy, doradzimy. Wycena nie zobowiązuje.”
- **CTA1:** telefon (duży, biały). **CTA2:** „Wypełnij formularz” → `#kontakt-form`.

### 16. Footer (`<Footer />`) — 3 kolumny
- **Źródło designu:** szablon 648–705. Logo `brightness-0 invert`.
- **Treść:**
  - Kontakt: realny adres, telefon, e-mail.
  - Na skróty: Montaż / Projektowanie / Husqvarna / Realizacje / O firmie / Zakres działania / Serwis / Cennik serwisu / Kontakt / Polityka prywatności / Cookies.
  - Znajdź nas: social tylko jeśli klient dostarczy linki.
- **Copyright:** „© 2026 WaterGrass — Łukasz Kowalewski. Bolszewo i okolice.”

---

## Sekcje *(przeniesione)* z home na podstrony

| Sekcja | Było (poprzednia wersja spec) | Jest |
|---|---|---|
| `SeasonCycle` (cykl serwisowy) | sekcja 4 na home | **przeniesione w całości** na `/serwis-i-konserwacja` jako sekcja H2 „Serwis sezonowy” z 4 kartami |
| `PricingTeaser` | sekcja 13 na home | **usunięte z home**, istnieje tylko jako `/cennik-serwisu` linkowane z `/serwis-i-konserwacja` i z footera |

## Pipeline assetów (uściślenie ETAP 5)

```
public/
  logo.svg                        ← wektoryzacja content-raw/images/logo.png
  favicon.ico
  apple-touch-icon.png
  og-image.jpg                    ← do wygenerowania z hero.png + nakładka
  images/
    hero/
      hero.png                    ← /watergrass/images/hero.png (POTWIERDZONY)
    services/
      irrigation-install.jpg      ← z szablonu
      sprinkler.jpg               ← z szablonu
      engineering.jpg             ← z szablonu
      control.jpg                 ← z szablonu
      husqvarna.jpg               ← z szablonu
      automower-base.jpg          ← z szablonu (na /husqvarna-automower)
      automower-detail.jpg        ← z szablonu
      sport.jpg                   ← z szablonu (na landingu boiska/golf)
    realizacje/                   ← z content-raw/images/gallery/ po obróbce
      park-majkowskiego-01.webp
      park-majkowskiego-02.webp
      radisson-sopot-01.webp
      castorama-rumia-01.webp
      sierra-golf-01.webp
      gryf-wejherowo-01.webp
      port-lotniczy-gdansk-01.webp
      wiczlino-ogrod-01.webp
      polpharma-duchnice-01.webp
      mewia-lacha-sobieszewo-01.webp
      ...
    mower/
      h310-1892.webp              ← z content-raw/images/mower/
      h310-1176.webp
      automower-generic.webp
    brands/
      hunter.svg
      rain-bird.svg
      weathermatic.svg
      fish.svg
      husqvarna.svg
```

**Optymalizacja `hero.png` (1,93 MB):**
- Next/Image generuje warianty AVIF/WebP automatycznie.
- Trzymamy też `public/images/hero/hero.webp` (~400 kB) jako fallback.
- W `<Hero>`: `placeholder="blur"` z `blurDataURL` wygenerowanym build-time przez `plaiceholder` lub własny skrypt `sharp`.

## Reguły dodawania nowych sekcji w stylu szablonu

Nowe komponenty (`BrandStrip`, `ServiceArea`, `ServicesTeaser`, `FinalCta`) muszą trzymać poniższy wzorzec:

| Element | Wzorzec |
|---|---|
| Padding sekcji | `py-24 md:py-32 px-6 md:px-8` (mniejsze sekcje typu strip: `py-12`) |
| Tło naprzemienne | `bg-surface-container-lowest` ↔ `bg-surface-container` (sekcje na zmianę) |
| H2 | `text-secondary font-headline text-4xl md:text-5xl font-extrabold tracking-tight` |
| Underline pod H2 | `<div class="w-24 h-1 bg-primary-container mt-4">` (lub `mx-auto` jeśli centrowane) |
| Lead pod H2 | `text-zinc-600 font-body mt-6 max-w-2xl mx-auto text-[15px] leading-relaxed` |
| Karta | `bg-white p-8 hover:shadow-lg transition-shadow` |
| Tytuł karty | `font-headline text-base font-bold text-secondary mb-3 uppercase` |
| Tekst karty | `text-zinc-600 text-[14px] leading-relaxed` |
| Główny CTA | `bg-primary-container text-white px-8 py-3 font-headline text-sm font-bold hover:bg-on-primary-fixed-variant transition-all rounded-sm` |
| Drugi CTA | `border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 font-headline text-sm font-bold transition-all rounded-sm` |

## Co zostawiamy z szablonu 1:1, a co modyfikujemy

| Element | Decyzja |
|---|---|
| Tokeny kolorów + fonty | 1:1 do `globals.css` |
| Layout grid + container | 1:1 |
| Sekcje 1, 5, 11, 12, 16 | wizualnie 1:1 (z podmianą placeholderów) |
| Sekcja 2 (Hero) | 1:1, `hero.png` zostaje, podmieniony H1/lead/CTA pod CORE |
| Sekcja 3 (Process) | rozszerzona z 4 do 6 kroków, ten sam styl numerów |
| Sekcja 4 (Co nawadniamy) | te same 6 kafli + SVG, przekomunikowane z usług na typy obiektów |
| Sekcja 6 (Stats) | 4 nowe liczby (Od 2012 / Kilkaset / 100% gwarancji / Pod klucz) |
| Sekcja 7 (InstallShowcase) | wizualnie 1:1, copy zmienione na kompleksowy montaż |
| Sekcja 9 (Husqvarna) | 1:1, dopisany akcent o GPS / EPOS RS1 |
| Sekcja 10 (Realizacje) | wizualnie 1:1, ale 9–12 kafli + filtry zamiast 3 statycznych |
| Sekcja 12 (Testimonials) | wizualnie 1:1, treść z flagą `placeholder` |
| Sekcje **NEW** (8, 13, 14, 15) | nowe komponenty w identycznej stylistyce |
| Sekcje *(przeniesione)* SeasonCycle / PricingTeaser | zdjęte z home, na `/serwis-i-konserwacja` i `/cennik-serwisu` |
| Skrypty inline (scroll header, mobile menu) | przeniesione do `useEffect` w `Header` |

## Finalna kolejność sekcji na home

1. Header (sticky)
2. Hero — *„Projektujemy i montujemy systemy nawadniania pod klucz”*
3. Jak zakładamy nawodnienie (6 kroków)
4. Co nawadniamy (6 kafli — typy obiektów)
5. Introduction Banner („WATER GRASS” watermark)
6. Stats Bar (Od 2012 / Kilkaset / Gwarancja / Pod klucz)
7. InstallShowcase (4 zdjęcia + checklist „Kompleksowy montaż”)
8. **Marki / Dealer Strip** (NEW)
9. Husqvarna Automower
10. Realizacje (9–12 kafli z filtrami)
11. Współpraca z architektami i deweloperami
12. Testimonials
13. **Zakres działania** (NEW — mapa Pomorza)
14. **Dodatkowo: serwis i konserwacja** (NEW — mała sekcja, link do podstrony)
15. **CTA finałowe** (NEW — pas pełnoszerokościowy „Umów bezpłatną wycenę”)
16. Footer
