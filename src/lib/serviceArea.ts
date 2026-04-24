export type ServiceAreaCity = {
  label: string;
  /** Slug do landing pagea `/nawadnianie-ogrodow-{slug}` jeśli istnieje. */
  slug?: string;
};

export type ServiceAreaGroup = {
  title: string;
  subtitle: string;
  cities: ServiceAreaCity[];
};

export const serviceArea: ServiceAreaGroup[] = [
  {
    title: "Bolszewo i 30 km dookoła",
    subtitle: "Rdzeń działalności — najszybsze dojazdy i serwis",
    cities: [
      { label: "Bolszewo" },
      { label: "Wejherowo", slug: "wejherowo" },
      { label: "Reda", slug: "reda" },
      { label: "Rumia", slug: "rumia" },
      { label: "Gościcino" },
      { label: "Gowino" },
      { label: "Kębłowo" },
      { label: "Luzino" },
      { label: "Bojano" },
      { label: "Koleczkowo" },
      { label: "Pruszcz Gdański" },
      { label: "Mrzezino" },
    ],
  },
  {
    title: "Trójmiasto",
    subtitle: "Gdańsk, Gdynia, Sopot — pełna obsługa",
    cities: [
      { label: "Gdańsk (Oliwa, Wrzeszcz, Brzeźno)", slug: "gdansk" },
      { label: "Gdynia (Wiczlino, Chylonia, Karwiny)", slug: "gdynia" },
      { label: "Sopot", slug: "sopot" },
      { label: "Sobieszewo" },
      { label: "Kowale" },
    ],
  },
  {
    title: "Wybrzeże turystyczne",
    subtitle: "Hotele, ośrodki wczasowe, apartamenty",
    cities: [
      { label: "Władysławowo" },
      { label: "Łeba" },
      { label: "Lubiatowo" },
      { label: "Nowęcin" },
      { label: "Ulinia" },
      { label: "Dąbki" },
      { label: "Chłapowo" },
    ],
  },
  {
    title: "Realizacje komercyjne (poza regionem)",
    subtitle: "Większe zlecenia w całej Polsce północnej",
    cities: [
      { label: "Tczew" },
      { label: "Lębork" },
      { label: "Żarnowiec" },
      { label: "Trąbki Wielkie" },
      { label: "Mściszewice" },
      { label: "Sierakowice" },
      { label: "Pętkowice" },
      { label: "Duchnice (k. Warszawy)" },
    ],
  },
];
