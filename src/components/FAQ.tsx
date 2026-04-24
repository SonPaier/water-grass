import { faqs } from "@/lib/faqs";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 md:py-32 px-6 md:px-8 bg-surface-lowest"
    >
      <div className="max-w-[900px] mx-auto">
        <SectionHeading
          title="Najczęściej zadawane pytania"
          lead="Wszystko, o co najczęściej pytają nas klienci. Nie znalazłeś swojej odpowiedzi? Zadzwoń — chętnie wytłumaczymy."
          align="center"
        />
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <details
              key={faq.question}
              className="group bg-white border-l-4 border-brand p-6 [&_summary::-webkit-details-marker]:hidden"
              {...(idx === 0 ? { open: true } : {})}
            >
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                <h3 className="font-headline text-base md:text-lg font-bold text-secondary leading-snug">
                  {faq.question}
                </h3>
                <svg
                  className="w-6 h-6 text-brand shrink-0 transition-transform duration-300 group-open:rotate-45 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </summary>
              <p className="text-zinc-600 font-body text-[15px] leading-relaxed mt-4">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
