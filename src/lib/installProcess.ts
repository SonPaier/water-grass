export type InstallStep = {
  number: string;
  title: string;
  description: string;
};

export const installProcess: InstallStep[] = [
  {
    number: "01",
    title: "Wywiad i audyt terenu",
    description:
      "Spotykamy się u Ciebie, badamy ukształtowanie terenu, źródło wody, ciśnienie i wydajność. Analizujemy nasłonecznienie i typy roślin.",
  },
  {
    number: "02",
    title: "Projekt techniczny",
    description:
      "Przygotowujemy schemat rozmieszczenia zraszaczy, linii kroplujących, elektrozaworów i sterownika. Dobieramy sprzęt Hunter, Rain Bird lub Weathermatic.",
  },
  {
    number: "03",
    title: "Bezpłatna wycena",
    description:
      "Dostajesz wycenę bez ukrytych kosztów — z listą materiałów i robocizny. Wszelkie zmiany w trakcie realizacji ustalamy z Tobą wcześniej.",
  },
  {
    number: "04",
    title: "Montaż instalacji",
    description:
      "Profesjonalna ekipa montuje system z dbałością o trawnik i nasadzenia. Czas zależy od wielkości i stopnia skomplikowania ogrodu — ustalamy go w trakcie wyceny.",
  },
  {
    number: "05",
    title: "Uruchomienie i nauka obsługi",
    description:
      "Programujemy sterownik pod Twoje rośliny, testujemy każdą sekcję i uczymy obsługi aplikacji oraz panelu sterownika.",
  },
  {
    number: "06",
    title: "Gwarancja i serwis",
    description:
      "Gwarancja na wykonanie i podzespoły. Serwis gwarancyjny i reklamacyjny w cenie. Pamiętamy o sezonowych przeglądach.",
  },
];
