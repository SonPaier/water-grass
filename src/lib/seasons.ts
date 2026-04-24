export type SeasonId = "spring" | "autumn";

export type Season = {
  id: SeasonId;
  name: string;
  months: string;
  headline: string;
  bullets: string[];
  ctaLabel: string;
};

export const seasons: Season[] = [
  {
    id: "spring",
    name: "Wiosna i sezon aktywny",
    months: "marzec — sierpień",
    headline: "Rozruch i bieżąca obsługa systemu",
    bullets: [
      "Zwrot robota Husqvarna po serwisie zimowym",
      "Sprawdzenie sterownika i czujników, pierwsze uruchomienie",
      "Przegląd zraszaczy, dysz i elektrozaworów",
      "Wymiana uszkodzonych podzespołów po zimie",
      "Diagnoza i naprawa awarii w trakcie sezonu",
      "Optymalizacja harmonogramu podlewania",
    ],
    ctaLabel: "Zarezerwuj serwis wiosenny",
  },
  {
    id: "autumn",
    name: "Jesień i zima",
    months: "wrzesień — luty",
    headline: "Zazimowanie systemu i serwis warsztatowy",
    bullets: [
      "Spust wody z instalacji sprężonym powietrzem",
      "Zabezpieczenie sterownika i czujników na mróz",
      "Odbiór robota Husqvarna do serwisu zimowego",
      "Pełny przegląd robota w warsztacie",
      "Wymiana noży, akumulatora, części eksploatacyjnych",
      "Czyszczenie, konserwacja, aktualizacja oprogramowania",
      "Wyceny montaży na nowy sezon",
    ],
    ctaLabel: "Zarezerwuj serwis jesienny",
  },
];

export function getCurrentSeason(date: Date = new Date()): Season {
  const month = date.getMonth() + 1;
  if (month >= 3 && month <= 8) return seasons[0];
  return seasons[1];
}
