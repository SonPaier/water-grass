export type PricingItem = {
  label: string;
  price: string;
  unit?: string;
  note?: string;
};

export type PricingGroup = {
  title: string;
  items: PricingItem[];
};

export const servicePricing: PricingGroup[] = [
  {
    title: "Serwis sezonowy",
    items: [
      { label: "Serwis wiosenny", price: "od 250 zł", unit: "" },
      { label: "Serwis jesienny (zazimowanie)", price: "od 350 zł" },
      { label: "Serwis robota Husqvarna", price: "wycena indywidualna" },
    ],
  },
  {
    title: "Diagnostyka i robocizna",
    items: [
      { label: "Diagnoza awarii", price: "200 zł" },
      { label: "Roboczogodzina", price: "75 zł", unit: "/h" },
      { label: "Dojazd", price: "50 zł", note: "w obrębie 30 km" },
    ],
  },
  {
    title: "Najczęstsze wymiany",
    items: [
      { label: "Wymiana zraszacza rotacyjnego", price: "od 100 zł" },
      { label: "Wymiana dyszy / korpusu", price: "od 50 zł" },
      { label: "Wymiana elektrozaworu", price: "wycena" },
      { label: "Wymiana sterownika", price: "wycena" },
      { label: "Wykonanie przepustów", price: "500 zł" },
    ],
  },
  {
    title: "Gwarancja",
    items: [
      { label: "Serwis gwarancyjny", price: "0 zł", note: "w okresie gwarancji" },
      { label: "Serwis reklamacyjny", price: "0 zł" },
    ],
  },
];
