export type RealizationCategory =
  | "publiczne"
  | "hotele"
  | "sport"
  | "komercja"
  | "osiedla"
  | "ogrody";

export type RealizationSpec = {
  label: string;
  value: string;
};

export type Realization = {
  slug: string;
  name: string;
  city: string;
  category: RealizationCategory;
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
  highlights: string[];
  scope: string[];
  specs: RealizationSpec[];
};

export const realizations: Realization[] = [
  {
    slug: "park-majkowskiego",
    name: "Park Miejski Majkowskiego",
    city: "Wejherowo",
    category: "publiczne",
    categoryLabel: "Park miejski",
    image: "/images/realizacje/park-majkowskiego-wejherowo.jpg",
    alt: "System nawadniania — Park Miejski Majkowskiego, Wejherowo",
    description:
      "Jeden z większych parków miejskich w regionie. Pełen system nawadniania z wieloma sekcjami sterowanymi centralnie, dopasowany do różnych typów zieleni — od trawników po rabaty kwiatowe i drzewostan.",
    highlights: [
      "Wielosekcyjny sterownik Hunter z czujnikiem deszczu",
      "Mieszanka zraszaczy rotacyjnych i linii kroplujących",
      "Współpraca z Departamentem Zieleni miasta",
    ],
    scope: [
      "Inwentaryzacja i pomiar terenu, audyt źródła wody",
      "Projekt techniczny systemu z podziałem na strefy zieleni",
      "Wykop tras pod magistralę PE 32 mm i odgałęzienia PE 25 mm",
      "Montaż studzienek zaworowych jumbo z elektrozaworami Hunter",
      "Instalacja zraszaczy rotacyjnych Hunter PGP i statycznych PROS-04",
      "Linia kroplująca dla rabat kwiatowych i nasadzeń drzew",
      "Wpięcie sterownika Hunter z czujnikiem deszczu Rain-Clik",
      "Programowanie harmonogramu pod różne typy zieleni",
      "Stała umowa serwisowa: serwis wiosenny i zazimowanie jesienne",
    ],
    specs: [
      { label: "Typ obiektu", value: "Park miejski" },
      { label: "Sterownik", value: "Hunter X-Core / X2" },
      { label: "Liczba sekcji", value: "8+" },
      { label: "Czujnik", value: "Rain-Clik" },
      { label: "Status", value: "W stałym serwisie sezonowym" },
    ],
  },
  {
    slug: "sierra-golf",
    name: "Sierra Golf Club",
    city: "Pętkowice",
    category: "sport",
    categoryLabel: "Pole golfowe",
    image: "/images/realizacje/sierra-golf-petkowice.jpg",
    alt: "System nawadniania — Sierra Golf Club, Pętkowice",
    description:
      "Specjalistyczne nawadnianie murawy pola golfowego. Sterowanie precyzyjne strefa po strefie, automatyczne dopasowanie do warunków pogodowych, harmonogram dostosowany do dni turniejowych.",
    highlights: [
      "Sterownik Hunter wielosekcyjny z modułem WAND",
      "Stacja pogodowa Solar Sync",
      "Rozdzielenie nawadniania greenów, fairwayów i tee",
    ],
    scope: [
      "Specjalistyczny projekt nawadniania greenów, fairwayów i tee",
      "Strefowy system z różnymi parametrami dla każdego typu murawy",
      "Montaż zraszaczy Hunter o dużym zasięgu na fairwayach",
      "Precyzyjne zraszacze sektorowe na greenach",
      "Sterownik centralny z modułem WAND do zdalnego sterowania",
      "Stacja pogodowa Solar Sync — automatyczne dopasowanie do warunków",
      "Programy nawadniania zgrane z harmonogramem turniejów",
      "Szkolenie greenkeepera z obsługi systemu",
    ],
    specs: [
      { label: "Typ obiektu", value: "Pole golfowe 18-dołkowe" },
      { label: "Sterownik", value: "Hunter z modułem WAND" },
      { label: "Strefy", value: "Greeny / fairwaye / tee — niezależne" },
      { label: "Stacja pogodowa", value: "Solar Sync" },
    ],
  },
  {
    slug: "radisson-blu-sopot",
    name: "Hotel Radisson Blu",
    city: "Sopot",
    category: "hotele",
    categoryLabel: "Hotel pięciogwiazdkowy",
    image: "/images/realizacje/radisson-blu-sopot.jpg",
    alt: "System nawadniania — Hotel Radisson Blu, Sopot",
    description:
      "Tereny zielone wokół hotelu pięciogwiazdkowego. System zaprojektowany pod intensywną eksploatację letnią — dyskretna praca, zero kłopotów dla gości, regularny serwis sezonowy.",
    highlights: [
      "Stałe kontrakty serwisowe wiosna/jesień",
      "Praca w godzinach nocnych, niewidoczna dla gości",
      "Pełna automatyzacja z czujnikiem pogody",
    ],
    scope: [
      "Projekt z uwzględnieniem dyskrecji wykonania",
      "Wykopy z minimalnym wpływem na nawierzchnie i nasadzenia",
      "Studzienki zaworowe ukryte pod nawierzchnią trawnika",
      "Linia kroplująca dla rabat i żywopłotów",
      "Zraszacze rotacyjne Hunter dla trawników",
      "Sterownik z czujnikiem pogody — automatyczne wstrzymanie podlewania",
      "Programowanie nawadniania na godziny nocne (poza ruchem gości)",
      "Stała umowa serwisowa — uruchomienie wiosenne, zazimowanie jesienne",
      "Reagowanie na awarie tego samego dnia",
    ],
    specs: [
      { label: "Typ obiektu", value: "Hotel 5★" },
      { label: "Sterownik", value: "Hunter z czujnikiem pogody" },
      { label: "Praca", value: "Wyłącznie w godzinach nocnych" },
      { label: "Status", value: "Stała umowa serwisowa" },
    ],
  },
  {
    slug: "ogrod-prywatny-rumia",
    name: "Jan Nowak",
    city: "Rumia",
    category: "ogrody",
    categoryLabel: "Ogród prywatny",
    image: "/images/realizacje/ogrod-prywatny-rumia.jpg",
    alt: "System nawadniania — ogród prywatny, Rumia",
    description:
      "Kompleksowy system nawadniania prywatnej posesji w Rumi. Mieszanka zraszaczy rotacyjnych dla trawnika i linii kroplującej dla rabat, ze sterownikiem WiFi do zdalnego sterowania z aplikacji.",
    highlights: [
      "Studzienki zaworowe jumbo z łatwym dostępem serwisowym",
      "Mieszanka zraszaczy rotacyjnych i linii kroplujących",
      "Sterownik Hunter z modułem WiFi",
    ],
    scope: [
      "Pomiar terenu i analiza istniejącego źródła wody",
      "Projekt techniczny z podziałem na strefy trawnika i rabat",
      "Magistrala PE 32 mm dla części głównej",
      "Studzienki zaworowe jumbo — łatwy dostęp serwisowy",
      "Zraszacze rotacyjne Hunter PGP dla trawnika",
      "Linia kroplująca dla rabat i żywopłotów",
      "Sterownik Hunter z modułem WiFi i czujnikiem deszczu",
      "Serwis gwarancyjny w cyklu sezonowym",
    ],
    specs: [
      { label: "Typ obiektu", value: "Ogród prywatny" },
      { label: "Sterownik", value: "Hunter z modułem WiFi" },
      { label: "Studzienki", value: "Jumbo — łatwy dostęp serwisowy" },
      { label: "Status", value: "Stała opieka serwisowa" },
    ],
  },
  {
    slug: "port-lotniczy-gdansk",
    name: "Port Lotniczy Gdańsk",
    city: "Gdańsk",
    category: "komercja",
    categoryLabel: "Infrastruktura krytyczna",
    image: "/images/realizacje/port-lotniczy-gdansk.jpg",
    alt: "System nawadniania — Port Lotniczy, Gdańsk",
    description:
      "Realizacja przy obiekcie infrastruktury krytycznej. Wymagająca koordynacja prac z procedurami bezpieczeństwa portu, najwyższe standardy techniczne, zero kompromisów na jakości materiałów.",
    highlights: [
      "Pełna zgodność z procedurami bezpieczeństwa lotniska",
      "Sprzęt klasy professional Hunter",
      "Stała opieka serwisowa",
    ],
    scope: [
      "Uzgodnienia z wewnętrznymi służbami bezpieczeństwa portu",
      "Projekt zgodny z wymaganiami obiektu infrastruktury krytycznej",
      "Wykonawstwo w godzinach uzgodnionych z operatorem",
      "Wszystkie materiały klasy professional (Hunter Industrial)",
      "Studzienki zaworowe i sterowniki w lokalizacjach poza ścieżkami obsługi",
      "Pełna dokumentacja powykonawcza dla inwestora",
      "Wieloletnia gwarancja na wykonanie i sprzęt",
      "Stała opieka serwisowa — przeglądy sezonowe i interwencje",
    ],
    specs: [
      { label: "Typ obiektu", value: "Infrastruktura krytyczna" },
      { label: "Sprzęt", value: "Hunter Industrial" },
      { label: "Dokumentacja", value: "Pełna powykonawcza" },
      { label: "Status", value: "Stała opieka serwisowa" },
    ],
  },
  {
    slug: "wiczlino-ogrod",
    name: "Osiedle Wiczlino Ogród",
    city: "Gdynia",
    category: "osiedla",
    categoryLabel: "Osiedle deweloperskie",
    image: "/images/realizacje/wiczlino-ogrod-gdynia.jpg",
    alt: "System nawadniania — Osiedle Wiczlino Ogród, Gdynia",
    description:
      "Kompleksowe nawadnianie osiedla deweloperskiego. Pełna dokumentacja techniczna, harmonogram zgrany z odbiorami inwestycji, gwarancja wieloletnia dla wspólnoty mieszkaniowej.",
    highlights: [
      "Projekt techniczny z pełną dokumentacją",
      "Harmonogram zgrany z generalnym wykonawcą",
      "Gwarancja wieloletnia + serwis sezonowy",
    ],
    scope: [
      "Projekt techniczny dla generalnego wykonawcy",
      "Koordynacja z innymi branżami (drogi, zieleń, energetyka)",
      "Wykop tras pod magistrale w trakcie budowy infrastruktury podziemnej",
      "Studzienki zaworowe zgrupowane wg sekcji wspólnoty",
      "Wiele sterowników w lokalizacjach budynkowych",
      "Magistrala główna PE 32–40 mm",
      "Zraszacze rotacyjne i statyczne dla części wspólnych",
      "Linia kroplująca dla rabat i żywopłotów",
      "Pełna dokumentacja powykonawcza dla zarządcy",
      "Gwarancja wieloletnia i przeglądy sezonowe w cenie",
    ],
    specs: [
      { label: "Typ obiektu", value: "Osiedle deweloperskie" },
      { label: "Sterowniki", value: "Hunter — wiele jednostek" },
      { label: "Dokumentacja", value: "Pełna techniczna + powykonawcza" },
      { label: "Gwarancja", value: "Wieloletnia + serwis sezonowy" },
    ],
  },
  {
    slug: "gryf-wejherowo",
    name: "Gryf Wejherowo",
    city: "Wejherowo",
    category: "sport",
    categoryLabel: "Boisko sportowe",
    image: "/images/realizacje/gryf-wejherowo.jpg",
    alt: "System nawadniania — boisko klubu Gryf, Wejherowo",
    description:
      "Boisko piłkarskie z systemem pełnoautomatycznym. Murawa wymaga równomiernego nawadniania — program dopasowaliśmy do harmonogramu meczów, treningów i prac pielęgnacyjnych.",
    highlights: [
      "Zraszacze sektorowe Hunter PGP do murawy",
      "Sterowanie programem turniejowym",
      "Stała współpraca serwisowa",
    ],
    scope: [
      "Pomiar boiska i analiza istniejącego źródła wody",
      "Projekt sektorowego nawadniania pełnowymiarowego boiska piłkarskiego",
      "Montaż zraszaczy Hunter PGP po obwodzie i w narożach",
      "Studzienki zaworowe poza polem gry",
      "Sterownik z programem turniejowym",
      "Programowanie czasów pracy z uwzględnieniem treningów i meczów",
      "Pełna integracja z infrastrukturą wodną klubu",
      "Stała współpraca serwisowa — wymiany dysz, regulacja zraszaczy",
    ],
    specs: [
      { label: "Typ obiektu", value: "Boisko piłkarskie pełnowymiarowe" },
      { label: "Sterownik", value: "Hunter z programem turniejowym" },
      { label: "Zraszacze", value: "Hunter PGP — sektorowe" },
      { label: "Status", value: "Stała współpraca serwisowa" },
    ],
  },
  {
    slug: "polpharma-duchnice",
    name: "Polpharma Biologics",
    city: "Duchnice",
    category: "komercja",
    categoryLabel: "Zakład biotechnologiczny",
    image: "/images/realizacje/polpharma-duchnice.jpg",
    alt: "System nawadniania — Polpharma Biologics, Duchnice",
    description:
      "Tereny zielone przy zakładzie biotechnologicznym. Współpraca z generalnym wykonawcą inwestycji, koordynacja z innymi branżami, pełna dokumentacja powykonawcza.",
    highlights: [
      "Praca w środowisku zakładu produkcyjnego",
      "Koordynacja z generalnym wykonawcą",
      "Pełna dokumentacja powykonawcza",
    ],
    scope: [
      "Uzgodnienia z generalnym wykonawcą inwestycji",
      "Projekt techniczny terenów zielonych wokół zakładu",
      "Wykonawstwo zgodne z harmonogramem GW i odbiorami inwestycji",
      "Magistrala PE 32 mm z odgałęzieniami",
      "Studzienki zaworowe w lokalizacjach uzgodnionych z architektem",
      "Zraszacze rotacyjne Hunter dla trawników reprezentacyjnych",
      "Linia kroplująca dla rabat i żywopłotów",
      "Sterownik centralny z czujnikiem deszczu",
      "Pełna dokumentacja powykonawcza i gwarancja",
    ],
    specs: [
      { label: "Typ obiektu", value: "Zakład biotechnologiczny" },
      { label: "Sterownik", value: "Hunter z czujnikiem deszczu" },
      { label: "Współpraca", value: "Generalny wykonawca inwestycji" },
      { label: "Dokumentacja", value: "Pełna dokumentacja powykonawcza" },
    ],
  },
  {
    slug: "mewia-lacha",
    name: "Apartamenty Mewia Łacha",
    city: "Sobieszewo",
    category: "hotele",
    categoryLabel: "Apartamenty wakacyjne",
    image: "/images/realizacje/mewia-lacha-sobieszewo.jpg",
    alt: "System nawadniania — Apartamenty Mewia Łacha, Sobieszewo",
    description:
      "Apartamenty w pasie nadmorskim. System odporny na sól i piasek, łatwy w obsłudze dla zarządcy obiektu, ze sterownikiem WiFi do zdalnego nadzoru poza sezonem.",
    highlights: [
      "Sprzęt odporny na warunki nadmorskie",
      "Sterownik WiFi z aplikacją mobilną",
      "Serwis sezonowy z zazimowaniem",
    ],
    scope: [
      "Projekt z uwzględnieniem warunków nadmorskich (sól, piasek, wiatr)",
      "Wszystkie elementy odporne na korozję",
      "Magistrala PE z dodatkową ochroną przed osiadaniem",
      "Studzienki zaworowe z pokrywami szczelnymi",
      "Zraszacze rotacyjne Hunter dla trawników wokół apartamentów",
      "Linia kroplująca dla rabat ozdobnych",
      "Sterownik Hunter z modułem WiFi — zdalny nadzór dla zarządcy",
      "Aplikacja mobilna do sterowania poza sezonem",
      "Serwis sezonowy: pełne zazimowanie jesienią, uruchomienie wiosną",
    ],
    specs: [
      { label: "Typ obiektu", value: "Apartamenty wakacyjne" },
      { label: "Sterownik", value: "Hunter z modułem WiFi" },
      { label: "Materiały", value: "Odporne na warunki nadmorskie" },
      { label: "Obsługa", value: "Aplikacja mobilna dla zarządcy" },
      { label: "Status", value: "Serwis sezonowy z zazimowaniem" },
    ],
  },
];

export const realizationCategories: Array<{
  value: RealizationCategory | "all";
  label: string;
}> = [
  { value: "all", label: "Wszystkie" },
  { value: "publiczne", label: "Publiczne" },
  { value: "hotele", label: "Hotele i apartamenty" },
  { value: "sport", label: "Sport" },
  { value: "komercja", label: "Komercja" },
  { value: "osiedla", label: "Osiedla" },
];

export function getRealizationBySlug(slug: string): Realization | undefined {
  return realizations.find((r) => r.slug === slug);
}

export function getOtherRealizations(slug: string, count = 3): Realization[] {
  return realizations.filter((r) => r.slug !== slug).slice(0, count);
}
