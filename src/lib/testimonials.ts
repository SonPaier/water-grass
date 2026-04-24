export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  rating: number;
  /** Placeholder true = nie wyświetlamy w produkcji; do podmiany na realne opinie. */
  placeholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Profesjonalne podejście od A do Z. System nawadniania działa bez zarzutu już trzeci sezon. Trawnik wygląda idealnie nawet w najgorętsze dni lata.",
    author: "Marek Kowalski",
    role: "Właściciel posesji, Bolszewo",
    rating: 5,
    placeholder: true,
  },
  {
    quote:
      "Współpracujemy z WaterGrass przy projektach osiedlowych od trzech lat. Terminowość, czysta dokumentacja techniczna i zawsze gotowi na niestandardowe rozwiązania. Polecam każdemu deweloperowi.",
    author: "Anna Wiśniewska",
    role: "Architekt krajobrazu, Studio Zieleni",
    rating: 5,
    placeholder: true,
  },
  {
    quote:
      "Automower zmienił moje podejście do ogrodu. Montaż przebiegł sprawnie, a ekipa WaterGrass wszystko cierpliwie wytłumaczyła. Trawnik kosi się sam, a ja mam czas na odpoczynek.",
    author: "Tomasz Lewandowski",
    role: "Klient indywidualny, Rumia",
    rating: 5,
    placeholder: true,
  },
];
