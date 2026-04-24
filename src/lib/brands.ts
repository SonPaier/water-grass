export type Brand = {
  slug: string;
  name: string;
  description: string;
};

export const brands: Brand[] = [
  {
    slug: "hunter",
    name: "Hunter",
    description:
      "Sterowniki X-Core, X2, NODE, WiFi HC. Zraszacze PGP, PGJ, PROS-04, dysze MP Rotator.",
  },
  {
    slug: "rain-bird",
    name: "Rain Bird",
    description: "Profesjonalny sprzęt do nawadniania ogrodów i terenów zielonych.",
  },
  {
    slug: "weathermatic",
    name: "Weathermatic",
    description: "Inteligentne sterowniki i czujniki pogody Smart Line.",
  },
  {
    slug: "fish",
    name: "FISH",
    description: "Akcesoria do profesjonalnych systemów nawadniania.",
  },
  {
    slug: "husqvarna",
    name: "Husqvarna Automower",
    description:
      "Autoryzowany dealer i serwis robotów koszących. Modele klasyczne i z GPS (EPOS RS1).",
  },
];
