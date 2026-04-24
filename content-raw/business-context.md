# WaterGrass — kontekst operacyjny (z dumpa hiservice 2026-04-24)

Źródło: `carfect/water-grass-dump.md` (Supabase `czwrpwdlkvcgaibfzbyk`, instancja `water-grass`).

## 1. Firma w liczbach (faktyczne)

- **112 pozycji** w katalogu (`unified_services`): 27 usług nawadniania, 11 usług robotów, 74 produkty.
- **~250 zleceń** w okresie marzec–maj 2026 (sezon wiosenny), status ≥ 95% `completed`.
- **5 aktywnych projektów** (grupy zleceń): Montaż systemu Żarnowiec, Ogród, Lubiatowo, Gdańsk Zielony Trójkąt, generyczny „Montaż systemu nawadniania”.
- Model komentarzy: 1 pole `admin_notes` per zlecenie (bez historii) → trzeba pamiętać jeśli kiedyś integrujemy formularz z hiservice.

## 2. Faktyczny zakres usług + ceny bazowe (realny cennik firmowy)

**Usługi serwisowe (ceny z systemu):**

| Usługa | Cena | Jedn. | Uwaga |
|---|---|---|---|
| Serwis wiosenny | 250 zł | szt | bardzo częsty, sezonowy rdzeń |
| Serwis jesienny | 350 zł | szt | zazimowanie systemu |
| Serwis (ogólny) | 350 zł | szt | |
| Serwis reklamacyjny | 0 zł | szt | w ramach gwarancji |
| Serwis gwarancyjny | 0 zł | szt | |
| Diagnoza awarii | 200 zł | szt | |
| Roboczogodzina | 75 zł | szt | do zleceń rozliczanych czasowo |
| Dojazd | 50 zł | szt | **UWAGA:** płatny — nie pisać „bezpłatny dojazd” |
| Wymiana zraszacza rotacyjnego | 100 zł | szt | |
| Wykonanie przepustów | 500 zł | szt | |

**Najczęstsze typy prac (z dumpa):** Serwis wiosenny, Zwrot robota po serwisie zimowym, Montaż systemu nawadniania, Montaż robota koszącego, Serwis robota, Wycena, Wymiana zraszacza/dyszy/elektrozaworu/membrany, Uszczelnienie systemu, Diagnoza awarii.

**Typowy ticket z dumpa:**
- Serwis drobny: 125–500 zł
- Serwis średni: 500–1 500 zł (np. Marta Gronkiewicz 478,5 zł, p. Przybylska 1 035 zł, Mirosław Więcki 479 zł)
- Duży serwis / montaż częściowy: 1 500–3 000 zł (np. Gryf Wejherowo 1 040 zł, Marcin Labuda 1 432 zł, Krzysztof Orlex 2 554 zł)
- Montaż / rozbudowa: 2 500–5 200 zł (Mateusz Doppek 4 560 zł i 4 101 zł, Radunica Kasztanowa 5 149 zł, Biszkopt Orle 1 291 zł)

## 3. Obsługiwane marki / produkty

Z 74 pozycji produktowych wyłania się katalog dealerski:

- **Hunter** — sterowniki X-Core (4/6/8 sekcji, wewn./zewn.), X2 (4/6/8/14), NODE i NODE-BT, WiFi HC, moduły WAND, zraszacze PGP, PGJ, PROS-04, dysze MP Rotator, czujniki Rain-Clik, WR-Clik, Solar Sync.
- **Rain Bird, Weathermatic, FISH** — wymienieni jako marki certyfikacyjne (na /o-firmie).
- **Husqvarna Automower** — w pełni obsługiwane: montaż, serwis, stacje dokujące, części zamienne, kabel zasilacza 5 m, stacja referencyjna GPS **EPOS RS1** (1 399 zł — czyli firma obsługuje już Automowery z nawigacją GPS/RTK, nie tylko przewodowe).
- **Rury / hydraulika** — pełny asortyment PE (16/20/25/32/40/50 mm), złączki kujota, studzienki zaworowe standard/jumbo/large/mini, linia kroplująca z/bez kompensacji, reduktory ciśnienia, pompa Divertron 900 (1 750 zł), filtry dyskowe.

→ Stąd cenne badge'e do hero i sekcji usług: **„Autoryzowany dealer Husqvarna Automower” + „Certyfikowany instalator Hunter / Rain-Bird / Weathermatic / FISH”**.

## 4. Sezonowość (rdzeń modelu biznesowego)

Z dumpa widać, że firma żyje w **cyklu 4-sezonowym**:

1. **Wiosna (marzec–maj):** `Zwrot robota po serwisie zimowym` + `Serwis wiosenny`. To **dominujący wolumen zleceń** — można łatwo zebrać ponad 100 takich zleceń w ciągu 6 tygodni. Na stronie należy wyraźnie zachęcać do zapisów z wyprzedzeniem.
2. **Lato (czerwiec–sierpień):** montaże nowych systemów + interwencje serwisowe (wymiany dysz, uszczelnianie, awarie).
3. **Jesień (wrzesień–październik):** `Serwis jesienny` (zazimowanie, spust wody), odbiór robota do serwisu.
4. **Zima (listopad–luty):** przegląd i serwis robotów w warsztacie + wyceny na wiosnę.

**Implikacja dla strony:** sztuczka konwersyjna — sekcja „Zarezerwuj termin” która dynamicznie pokazuje „aktualny etap sezonu” (wiosna → Serwis wiosenny, jesień → Serwis jesienny) z CTA „Zapisz się na termin”.

## 5. Zasięg geograficzny (faktyczny)

Na podstawie 250 zleceń i 5 projektów:

**Rdzeń (≤ 30 km od Bolszewa):** Bolszewo, Wejherowo, Gościcino, Gowino, Kębłowo, Orle, Reda, Rumia, Luzino, Koleczkowo, Bojano, Kąpino, Kiełpino, Mrzezino, Pępowo, Robakowo, Chocielewko, Niepoczołowice, Ostaszewo, Karlikowo, Rokitnica, Sołtys (Smolno?), Pruszcz Gdański.

**Aglomeracja trójmiejska:** Gdańsk (Oliwa, ul. Oliwkowa, Zielony Trójkąt, Chylonska), Gdynia (Wiczlino, Wolności, Jachtowa, Chylońska, Bernadowska, Kotwiczna, Azymut, Altoria 2), Sopot, Sobieszewo.

**Pas wakacyjny / sezonowy:** Łeba, Nowęcin, Lubiatowo, Władysławowo (Tuwima, Klif Residence, Zatoka Mew, Osada Chłapowska), Ulinia, Dąbki.

**Odleglejsze, komercyjne:** Żarnowiec, Mściszewice, Lębork, Tczew, Kowale, Tuczno, Trąbki Wielkie, Żukowo, Duchnice, Warszawa (Polpharma), Pętkowice (Sierra Golf).

→ **Region obsługi ≈ 80 km od Bolszewa**, z outlierami komercyjnymi. Idealna mapa na landing: Bolszewo jako środek + kółko 80 km + punktowo zaznaczone realizacje komercyjne.

## 6. Prawdziwy social proof (z dumpa + starej /o-firmie)

**Obiekty komercyjne, które na 100% można wymienić (aktywne rekordy serwisowe):**

- **Retail:** Castorama Rumia (Grzegorz Egzmond), Aldi Sopot.
- **Infrastruktura / przemysł:** Port Lotniczy Gdańsk (Jarosław Lewkowicz), PGNiG Gdańsk, Rolls Royce Gdynia, Voestalpine Signaling Trąbki Wielkie, Wikęd Kębłowo, Polpharma Biologics Duchnice.
- **Hotele / apartamenty:** Radisson Blu Sopot, Testa Sopot, Villa Milla Łeba, Mewia Łacha Sobieszewo.
- **Sport / rekreacja:** Sierra Golf Club Pętkowice, Gryf Wejherowo (Wojtek — stały klient, regularne zlecenia), boiska gminne KS Kamienica Królewska / FC Gowidlino / GKS Sierakowice / Orle / Kąpino.
- **Publiczne:** Park Miejski Majkowskiego Wejherowo, Plac Wejhera, Muzeum Piaśnickie, Sąd Rejonowy Tczew, Kościół MBNP Pruszcz Gdański.
- **Oświata:** SP nr 9 Wejherowo, Pozytywna SP Gdańsk, Przedszkole Kubusia Puchatka i „Burczymucha” Bolszewo.
- **B2B ogród / rolnictwo:** Szkółka „Flora” Bolszewo, plantacja borówki Sierakowice/Orle, Orlex Inwest Gościcino, Resort Zieleni, Departament Zieleni Rumia.

**B2B partnerzy powracający (z dumpa):** Krzysztof Orlex (Orlex Inwest) — kilka zleceń; Mateusz Doppek — duże montaże; Marcin Orlikowski — serwisowy wielokrotnie; Grzegorz Horodecki; Adrian z „Pępowa”; Darek (Boisko Kąpino); Renata Baranowska.

## 7. Fraza, której używa właściciel (ton komentarzy)

Z `admin_notes` (styl Łukasza): bardzo bezpośredni, techniczny, ale ciepły, po imieniu do klientów, używa zdrobnień („pierdoły”, „bądź o 7.00”, „zadzwoń jak będzie na ogrodzie”). Na stronie warto stonować, ale zostawić część tej **bezpośredniości i zaufania** — pasuje do archetypu rzetelnego fachowca.

## 8. Rozszerzenie planu — co dodać w oparciu o te dane

Na bazie tego kontekstu **rewiduję plan** (dodatki do wcześniejszych ETAP-ów):

### Dodatek do ETAP 3 (Dane)
- `src/lib/serviceCatalog.ts` — 10–15 najczęstszych usług z cenami z cennika (zasilone `business-context §2`). Źródło prawdy na `/cennik-serwisu`.
- `src/lib/brands.ts` — katalog sterowników Hunter + akcesoria do sekcji „obsługiwane marki”.
- `src/lib/serviceArea.ts` — lista miast z dzieleniem na rdzeń / trójmiasto / pas wakacyjny / komercja — do mapy i do landingów lokalnych.
- `src/lib/seasonCycle.ts` — 4 kwartały z opisami (do sekcji „Cykl serwisowy”).

### Nowa sekcja na home: „Cykl serwisowy” (między „Jak działamy” a „Nasze usługi”)
- 4 karty (wiosna / lato / jesień / zima), każda z listą typowych prac.
- Badge „Aktualny sezon: Serwis wiosenny” wyliczany server-side z `new Date()`.
- CTA konwersyjne: „Zarezerwuj termin serwisu wiosennego” → scroll do formularza.

### Nowa sekcja: „Orientacyjny cennik serwisu”
- Transparentny cennik — w branży nawadniania prawie nikt tego nie pokazuje → silny sygnał zaufania.
- 8–12 pozycji (serwis wiosenny/jesienny, diagnoza, roboczogodzina, dojazd, najpopularniejsze wymiany).
- Disclaimer: „Ceny brutto, bez montażu nowych instalacji. Bezpłatna wycena pełnych systemów u klienta.”
- Plik: `src/app/cennik-serwisu/page.tsx` (jako osobna strona + skrót na home).

### Nowa sekcja: „Zakres działania”
- Mapa (nie Google Maps, bo API kosztuje — prostsze: statyczny SVG Polski północnej + markery lub OpenStreetMap via `leaflet` w client component).
- 3 kolumny: „Bolszewo + 30 km” / „Trójmiasto” / „Pas wakacyjny (Łeba, Władysławowo, Lubiatowo)”.
- Wylistowane miasta z `serviceArea.ts`.

### Nowa sekcja „Obsługiwane marki” (mini logo strip)
- Hunter, Rain Bird, Weathermatic, FISH, Husqvarna Automower — zwiększa autorytet.
- Logotypy marek jako zewnętrzne wektory (pobrane z ich press kitów) w `public/images/brands/`.

### Wzmocnienie „Realizacje” — prawdziwe portfolio
Zamiast 3 fikcyjnych kafli z szablonu, data-driven z `realizations.ts`:

```ts
[
  { slug:'park-majkowskiego', name:'Park Majkowskiego', city:'Wejherowo',
    type:'public', images:['...'], year:2019 },
  { slug:'castorama', name:'Castorama', city:'Rumia', type:'retail', ... },
  { slug:'radisson-blu', name:'Hotel Radisson Blu', city:'Sopot', type:'hospitality', ... },
  { slug:'sierra-golf', name:'Sierra Golf Club', city:'Pętkowice', type:'sport', ... },
  { slug:'port-lotniczy', name:'Port Lotniczy', city:'Gdańsk', type:'infrastructure', ... },
  { slug:'gryf-wejherowo', name:'Gryf Wejherowo', city:'Wejherowo', type:'sport', ... },
  …
]
```

**Ważne:** przed użyciem nazw komercyjnych (Castorama, Radisson, Aldi itp.) na stronie potrzebna jest **zgoda klientów** (RODO/prawo prasowe). Dodajemy do listy pytań do Łukasza.

### ETAP 10 (SEO lokalne) — konkretniejsze lądowania
Na bazie geografii z dumpa rekomenduję priorytet:
1. `/nawadnianie-ogrodow-wejherowo` — najwięcej klientów
2. `/nawadnianie-ogrodow-rumia`
3. `/nawadnianie-ogrodow-gdynia`
4. `/nawadnianie-ogrodow-gdansk`
5. `/nawadnianie-ogrodow-reda`
6. `/husqvarna-automower-pomorze` — ze względu na dealerstwo (wysoki intent zakupowy)
7. `/serwis-nawadniania-wladyslawowo-leba` — sezonowy obiekt wakacyjny

### Faza 2 (opcjonalnie, później) — „Smart booking”
Skoro hiservice/Supabase ma `calendar_items`, możemy docelowo:
- formularz rezerwacji serwisu wiosennego z podpiętym webhookiem do backendu WaterGrass,
- portal klienta: logowanie → historia zleceń, daty serwisu, komentarze Łukasza,
- przypomnienia mailowe „Twój system czeka na zazimowanie”.

To znacząco zwiększa wartość strony, ale wymaga koordynacji z zespołem hiservice (czyli najpewniej z Tobą). Dodaję jako **ETAP 12 — Smart Booking (faza 2, ~1 tydzień)**.

## 9. Zaktualizowane otwarte pytania do klienta

Dodatkowo do listy z §10 w `content-inventory.md`:

9. **Zgody na nazwy komercyjne** — Castorama, Aldi, Radisson, Port Lotniczy, Polpharma, Rolls Royce, Voestalpine: które wolno wymienić z nazwy, a które tylko opisowo („sieć hotelowa w Sopocie”)?
10. **Cennik serwisowy publiczny** — czy pokazujemy ceny netto czy brutto? Czy klient chce pokazać wszystkie 10 pozycji czy selektywnie?
11. **Integracja z hiservice** — czy strona ma mieć formularz który trafia do `calendar_items`, czy wystarczy prosty formularz email do `nawadnianieogrodow@wp.pl`? (Wpływa na ETAP 12.)
12. **Preferowany kanał kontaktu** — formularz vs telefon vs WhatsApp? W dumpach widać częste „wyślę Tobie filmik na WhatsApp” — być może warto dodać CTA WhatsApp obok telefonu.
13. **Priorytet landingów lokalnych** — potwierdzenie kolejności 1→7 z mojej rekomendacji.

## 10. Krótkie TL;DR zmian w planie

| Element | Było | Jest |
|---|---|---|
| Sekcje home | 12 | 14 (dodane „Cykl serwisowy” i „Obsługiwane marki”, mocniejsze „Realizacje”) |
| Podstrony MVP | `/`, `/polityka-*` | + `/cennik-serwisu`, `/zakres-dzialania`, `/husqvarna-automower` |
| Landingi SEO (ETAP 10) | 6 miast | 7 miast + dealer Husqvarna (priorytety z dumpa) |
| Formularz | tylko mail | opcjonalnie integracja z hiservice (ETAP 12) |
| Social proof | 3 kafle testimonial | + pasek logo marek + 9–12 realizacji z realnymi nazwami |
| Orientacyjny czas MVP | ~2 dni | ~2,5 dnia (dodane: cennik + mapa + marki) |
