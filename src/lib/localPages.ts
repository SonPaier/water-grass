import type { RealizationCategory } from "./realizations";

export type LocalReference = {
  name: string;
  type: string;
  realizationSlug?: string;
};

export type LocalPage = {
  /** Slug bez prefiksu — używany w URL `/nawadnianie-ogrodow-{slug}` */
  slug: string;
  city: string;
  /** Forma w mianowniku z miastem ("Wejherowo i okolice") */
  cityWithArea: string;
  /** Forma w miejscowniku ("w Wejherowie") */
  cityIn: string;
  /** Forma w dopełniaczu ("klientów z Wejherowa") */
  cityFrom: string;
  intro: string;
  references: LocalReference[];
  highlights: string[];
  /** Opcjonalna sekcja o specyfice terenu / lokalnej architekturze (long-tail SEO) */
  terrainContext?: {
    title: string;
    paragraph: string;
  };
  realizationFilter?: RealizationCategory | "all";
};

export const localPages: LocalPage[] = [
  {
    slug: "wejherowo",
    city: "Wejherowo",
    cityWithArea: "Wejherowo i okolice",
    cityIn: "w Wejherowie",
    cityFrom: "klientów z Wejherowa",
    intro:
      "Wejherowo to miasto, w którym pracujemy najwięcej. Jako lokalna firma z Bolszewa znamy każdą dzielnicę — od Śmiechowa, przez Centrum, po Pruszkowskiego i Gryfa. Realizujemy zarówno ogrody przydomowe, jak i obiekty publiczne, sportowe oraz oświatowe.",
    references: [
      { name: "Park Miejski im. A. Majkowskiego", type: "Park miejski" },
      { name: "Plac Wejhera", type: "Przestrzeń publiczna" },
      { name: "Muzeum Piaśnickie", type: "Obiekt kultury" },
      { name: "Boisko KS Gryf Wejherowo", type: "Obiekt sportowy" },
      { name: "Szkoła Podstawowa nr 9", type: "Oświata" },
      { name: "Przedszkole im. Kubusia Puchatka", type: "Oświata" },
    ],
    highlights: [
      "Najszybsze dojazdy — pracujemy 10 km od miasta",
      "Doświadczenie z obiektami publicznymi i sportowymi",
      "Stała współpraca z miejskim Departamentem Zieleni",
    ],
  },
  {
    slug: "rumia",
    city: "Rumia",
    cityWithArea: "Rumia i okolice",
    cityIn: "w Rumi",
    cityFrom: "klientów z Rumi",
    intro:
      "W Rumi nawadniamy zarówno ogrody prywatne, jak i obiekty komercyjne. Współpracujemy z Departamentem Zieleni miasta i z lokalnymi inwestorami. Trasówka mamy ułożoną tak, że w sezonie wiosennym jesteśmy w Rumi praktycznie codziennie.",
    references: [
      { name: "Departament Zieleni — ul. Chylońska", type: "Tereny publiczne" },
      { name: "Ul. Królowej Bony", type: "Ogród prywatny" },
      { name: "Ul. Ormińskiego", type: "Ogród prywatny" },
      { name: "Ogrody na osiedlach Rumia-Janowo", type: "Ogrody prywatne" },
    ],
    highlights: [
      "Współpraca z miastem przy zieleni publicznej",
      "Serwis sezonowy w cyklu wiosna/jesień",
      "Krótki dojazd z bazy w Bolszewie",
    ],
  },
  {
    slug: "gdynia",
    city: "Gdynia",
    cityWithArea: "Gdynia i Trójmiasto",
    cityIn: "w Gdyni",
    cityFrom: "klientów z Gdyni",
    intro:
      "Gdynia to miasto z największą gęstością naszych realizacji osiedlowych. Pracujemy na Wiczlinie, w Altorii, na Karwinach i Bernadowie. Specjalizujemy się w nawadnianiu osiedli deweloperskich i wspólnot — z dokumentacją powykonawczą, harmonogramem zgranym z GW i gwarancją wieloletnią.",
    terrainContext: {
      title: "Nawadnianie ogrodów na skarpach i wzniesieniach",
      paragraph:
        "Gdyńskie ogrody to często skarpy, tarasy i wzniesienia — Wiczlino, Karwiny, Bernadowo. Automatyczne nawadnianie ogrodów na nierównościach wymaga doświadczonego instalatora: zaworów zwrotnych zapobiegających opróżnianiu rur na niższych sekcjach, niezależnego doboru ciśnienia dla każdego poziomu i zabezpieczeń przed kawitacją pomp. Robimy to od lat na trójmiejskich skarpach.",
    },
    references: [
      { name: "Osiedle Wiczlino Ogród", type: "Osiedle deweloperskie" },
      { name: "Osiedle Altoria 2", type: "Osiedle deweloperskie" },
      { name: "Osiedle Azymut", type: "Osiedle deweloperskie" },
      { name: "Ul. Bernadowska", type: "Ogród prywatny" },
      { name: "Ul. Wolności", type: "Ogród prywatny" },
      { name: "Ul. Jachtowa", type: "Ogród prywatny" },
    ],
    highlights: [
      "Specjalizacja w nawadnianiu osiedli mieszkaniowych",
      "Współpraca z deweloperami z Trójmiasta",
      "Doświadczenie z ogrodami na skarpach i tarasach",
      "Gwarancja wieloletnia i pełna dokumentacja",
    ],
  },
  {
    slug: "gdansk",
    city: "Gdańsk",
    cityWithArea: "Gdańsk i Trójmiasto",
    cityIn: "w Gdańsku",
    cityFrom: "klientów z Gdańska",
    intro:
      "W Gdańsku pracujemy zarówno przy obiektach infrastrukturalnych (Port Lotniczy, PGNiG), jak i przy ogrodach prywatnych w Oliwie, na Wrzeszczu i w Brzeźnie. Mamy doświadczenie z dużymi terenami komercyjnymi i z wymagającymi instalacjami przy obiektach pierwszego znaczenia.",
    references: [
      { name: "Port Lotniczy Gdańsk", type: "Infrastruktura" },
      { name: "PGNiG", type: "Obiekt komercyjny" },
      { name: "Pozytywna Szkoła Podstawowa", type: "Oświata" },
      { name: "Osiedle Harmonia Oliwska", type: "Osiedle deweloperskie" },
      { name: "Ul. Oliwkowa", type: "Ogród prywatny" },
      { name: "Zielony Trójkąt", type: "Tereny publiczne" },
    ],
    highlights: [
      "Realizacje przy obiektach infrastruktury krytycznej",
      "Doświadczenie z dużymi terenami zielonymi",
      "Pełna obsługa Trójmiasta",
    ],
  },
  {
    slug: "reda",
    city: "Reda",
    cityWithArea: "Reda i okolice",
    cityIn: "w Redzie",
    cityFrom: "klientów z Redy",
    intro:
      "Reda jest po sąsiedzku z naszą bazą w Bolszewie, więc jesteśmy tu praktycznie codziennie. Pracujemy głównie w ogrodach prywatnych i przy mniejszych obiektach komercyjnych. Krótki dojazd oznacza najszybszą reakcję serwisową.",
    references: [
      { name: "Ul. Nasienna", type: "Ogród prywatny" },
      { name: "Centrum Redy", type: "Tereny zielone" },
    ],
    highlights: [
      "Najkrótszy czas dojazdu serwisowego",
      "Pełna obsługa przez cały sezon",
      "Stała baza klientów indywidualnych",
    ],
  },
  {
    slug: "sopot",
    city: "Sopot",
    cityWithArea: "Sopot",
    cityIn: "w Sopocie",
    cityFrom: "klientów z Sopotu",
    intro:
      "W Sopocie nawadniamy zarówno hotele i obiekty komercyjne (Radisson Blu, Aldi), jak i prestiżowe rezydencje. Sopockie ogrody wymagają szczególnej dbałości — dyskrecji w pracy, czystości i terminowości. To właśnie nasza domena.",
    terrainContext: {
      title: "Nawadnianie sopockich skarp i ogrodów nadmorskich",
      paragraph:
        "Sopockie ogrody na karlikowskich skarpach i nadmorskich tarasach wymagają specjalnych rozwiązań: zaworów zwrotnych dla każdej niższej sekcji, drenażu pod systemem, sprzętu odpornego na słone powietrze i rzęsisty deszcz znad zatoki. Inaczej projektujemy nawadnianie tarasu reprezentacyjnego, inaczej rabat na zboczach. Pracujemy w Sopocie od lat — znamy specyfikę.",
    },
    references: [
      { name: "Hotel Radisson Blu Sopot", type: "Hotel" },
      { name: "Hotel Testa Sopot", type: "Hotel" },
      { name: "Aldi Sopot", type: "Retail" },
      { name: "Karlikowo, ul. Ceynowy", type: "Rezydencja" },
    ],
    highlights: [
      "Realizacje dla hoteli pięciogwiazdkowych",
      "Dyskretna i czysta praca w prestiżowych lokalizacjach",
      "Sprzęt odporny na warunki nadmorskie (sól, wiatr)",
      "Stałe kontrakty serwisowe z hotelami",
    ],
  },
];

export function getLocalPageBySlug(slug: string): LocalPage | undefined {
  return localPages.find((p) => p.slug === slug);
}
