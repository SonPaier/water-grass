export type ServiceIcon = "install" | "pump" | "service" | "mower";

export type Service = {
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  lead: string;
  description: string;
  icon: ServiceIcon;
};

export const services: Service[] = [
  {
    slug: "projektowanie-i-montaz",
    href: "/montaz-systemow-nawadniania",
    title: "Projektowanie i montaż automatycznych systemów nawadniania",
    shortTitle: "Projektowanie i montaż",
    lead: "Pełen zakres pod klucz",
    description:
      "Audyt terenu, projekt techniczny, dobór sprzętu Hunter / Rain Bird / Weathermatic, montaż instalacji i uruchomienie. Ogrody przydomowe, osiedla, hotele, parki, boiska sportowe.",
    icon: "install",
  },
  {
    slug: "systemy-pompowe",
    href: "/uslugi/systemy-pompowe",
    title: "Systemy pompowe",
    shortTitle: "Systemy pompowe",
    lead: "Pompy, hydrofory, regulacja ciśnienia",
    description:
      "Dobór i instalacja pomp dla studni głębinowych, zbiorników i źródeł powierzchniowych. Pompy hydroforowe, czujniki ciśnienia, reduktory, filtry dyskowe. Modernizacje istniejących źródeł wody.",
    icon: "pump",
  },
  {
    slug: "serwis-i-konserwacja",
    href: "/serwis-i-konserwacja",
    title: "Serwis i konserwacja automatycznych systemów nawadniania",
    shortTitle: "Serwis i konserwacja",
    lead: "Sezonowo, w cyklu wiosna / jesień",
    description:
      "Serwis wiosenny (od 250 zł), jesienny (od 350 zł), diagnoza awarii, wymiana podzespołów. Stała opieka nad Twoim systemem przez cały rok. Serwisujemy też instalacje innych firm.",
    icon: "service",
  },
  {
    slug: "roboty-koszace",
    href: "/husqvarna-automower",
    title: "Roboty koszące Husqvarna Automower",
    shortTitle: "Roboty koszące Husqvarna",
    lead: "Autoryzowany dealer dla Pomorza",
    description:
      "Sprzedaż, montaż i serwis robotów Husqvarna Automower — modele klasyczne z przewodem granicznym i nowoczesne z GPS (stacja EPOS RS1). Bezpłatny test u Ciebie w ogrodzie.",
    icon: "mower",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
