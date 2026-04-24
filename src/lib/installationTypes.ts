export type InstallationType = {
  slug: string;
  title: string;
  description: string;
  icon: "sprinkler" | "estate" | "hotel" | "sport" | "park" | "green-roof";
};

export const installationTypes: InstallationType[] = [
  {
    slug: "ogrody-przydomowe",
    title: "Ogrody przydomowe",
    description:
      "Kompleksowe systemy dla działek 200–5 000 m². Zraszacze, linia kroplująca, sterownik z aplikacją, czujnik deszczu.",
    icon: "sprinkler",
  },
  {
    slug: "osiedla-deweloperskie",
    title: "Osiedla i inwestycje deweloperskie",
    description:
      "Współpracujemy z deweloperami i wspólnotami. Harmonogram zgrany z odbiorami inwestycji, pełna dokumentacja powykonawcza, gwarancje wieloletnie.",
    icon: "estate",
  },
  {
    slug: "hotele-osrodki",
    title: "Hotele, ośrodki wczasowe, apartamenty",
    description:
      "Realizacje dla Radisson Blu, ośrodków w Łebie i Władysławowie. Systemy odporne na intensywną eksploatację sezonową.",
    icon: "hotel",
  },
  {
    slug: "boiska-pola-golfowe",
    title: "Boiska sportowe i pola golfowe",
    description:
      "Sierra Golf Club, Gryf Wejherowo, boiska gminne. Specjalistyczne nawadnianie murawy z zachowaniem standardów PZPN.",
    icon: "sport",
  },
  {
    slug: "parki-tereny-publiczne",
    title: "Parki miejskie i tereny publiczne",
    description:
      "Park Majkowskiego, Plac Wejhera, tereny wokół kościołów i sądów. Współpraca z gminami i instytucjami publicznymi.",
    icon: "park",
  },
  {
    slug: "plantacje-zielone-dachy",
    title: "Plantacje, szkółki i zielone dachy",
    description:
      "Szkółka „Flora” Bolszewo, plantacje borówki, instalacje na zielonych dachach i rabatach w trudno dostępnych miejscach.",
    icon: "green-roof",
  },
];
