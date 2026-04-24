type StatItem = {
  value: string;
  label: string;
  icon: "medal" | "checklist" | "shield" | "key";
};

const stats: StatItem[] = [
  { value: "Od 2012", label: "Specjalizujemy się w nawadnianiu", icon: "medal" },
  { value: "Kilkaset", label: "Zrealizowanych systemów", icon: "checklist" },
  { value: "100%", label: "Gwarancja na wykonanie i sprzęt", icon: "shield" },
  { value: "Pod klucz", label: "Projekt + montaż + uruchomienie", icon: "key" },
];

function Icon({ name }: { name: StatItem["icon"] }) {
  switch (name) {
    case "medal":
      return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="mx-auto mb-5" aria-hidden="true">
          <circle cx="36" cy="32" r="22" stroke="white" strokeWidth="1.5" opacity="0.3" />
          <circle cx="36" cy="32" r="16" stroke="white" strokeWidth="1.8" />
          <path d="M36 20l3.5 7 7.5 1-5.5 5.3 1.3 7.7L36 37.5 29.2 41l1.3-7.7L25 28l7.5-1L36 20z" stroke="#28a745" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M26 50l4-6M46 50l-4-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M26 50l-3 6M46 50l3 6" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "checklist":
      return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="mx-auto mb-5" aria-hidden="true">
          <rect x="18" y="8" width="36" height="48" rx="3" stroke="white" strokeWidth="1.8" />
          <rect x="28" y="4" width="16" height="8" rx="2" stroke="white" strokeWidth="1.5" />
          <circle cx="36" cy="8" r="2" fill="#28a745" />
          <path d="M25 24l3 3 6-6" stroke="#28a745" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="38" y1="24" x2="48" y2="24" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
          <path d="M25 34l3 3 6-6" stroke="#28a745" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="38" y1="34" x2="48" y2="34" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
          <path d="M25 44l3 3 6-6" stroke="#28a745" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="38" y1="44" x2="48" y2="44" stroke="white" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    case "shield":
      return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="mx-auto mb-5" aria-hidden="true">
          <path d="M36 8L14 18v16c0 14 10 22 22 28 12-6 22-14 22-28V18L36 8z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M27 36l6 6 12-12" stroke="#28a745" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "key":
      return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="mx-auto mb-5" aria-hidden="true">
          <circle cx="22" cy="36" r="10" stroke="white" strokeWidth="1.8" />
          <circle cx="22" cy="36" r="3" fill="#28a745" />
          <line x1="32" y1="36" x2="58" y2="36" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="48" y1="36" x2="48" y2="44" stroke="#28a745" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="54" y1="36" x2="54" y2="42" stroke="#28a745" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
}

export function Stats() {
  return (
    <section className="bg-secondary text-white py-16 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <Icon name={s.icon} />
              <span className="font-headline text-3xl md:text-4xl font-extrabold text-white block mb-1">
                {s.value}
              </span>
              <span className="font-body text-sm text-white/60 tracking-wide uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
