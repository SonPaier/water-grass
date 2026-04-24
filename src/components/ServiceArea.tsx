import Link from "next/link";
import { serviceArea } from "@/lib/serviceArea";
import { SectionHeading } from "./SectionHeading";

export function ServiceArea() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-surface-lowest">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          title="Obsługujemy Pomorze i Trójmiasto"
          lead="Bolszewo to nasza baza, ale jeździmy daleko poza okolicę. Sprawdź, czy działamy u Ciebie — kliknij w miasto, żeby zobaczyć dedykowaną ofertę."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceArea.map((group) => (
            <div key={group.title} className="bg-white p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-headline text-base font-bold text-secondary uppercase mb-2">
                {group.title}
              </h3>
              <p className="text-zinc-500 font-body text-sm mb-5">{group.subtitle}</p>
              <ul className="space-y-2 text-zinc-700 text-[14px]">
                {group.cities.map((city) => (
                  <li key={city.label} className="flex items-start gap-2">
                    <span className="text-brand mt-1.5 w-1.5 h-1.5 rounded-full bg-brand inline-block shrink-0" />
                    {city.slug ? (
                      <Link
                        href={`/nawadnianie-ogrodow-${city.slug}`}
                        className="hover:text-brand underline-offset-2 hover:underline transition-colors font-medium"
                      >
                        {city.label}
                      </Link>
                    ) : (
                      <span>{city.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-zinc-600 text-[15px]">
          Nie ma Twojego miasta na liście? Zadzwoń —{" "}
          <strong className="text-secondary">i tak warto sprawdzić</strong>.
        </p>
      </div>
    </section>
  );
}
