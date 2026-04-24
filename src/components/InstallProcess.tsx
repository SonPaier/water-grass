import { installProcess } from "@/lib/installProcess";
import { SectionHeading } from "./SectionHeading";

export function InstallProcess() {
  return (
    <section
      id="proces"
      className="py-24 md:py-32 px-6 md:px-8 bg-surface-lowest"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          title="Jak zakładamy nawodnienie"
          lead="Od pomysłu do uruchomienia w sześciu krokach. Jeden zespół, jedna gwarancja, zero podwykonawców."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {installProcess.map((step) => (
            <div key={step.number} className="relative">
              <div
                className="font-headline text-8xl font-extrabold text-zinc-100 absolute -top-10 -left-4 z-0"
                aria-hidden="true"
              >
                {step.number}
              </div>
              <div className="relative z-10 pt-4">
                <h3 className="font-headline text-xl font-bold text-secondary mb-4">
                  {step.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-[15px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
