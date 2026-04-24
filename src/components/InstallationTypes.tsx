import Link from "next/link";
import { installationTypes, type InstallationType } from "@/lib/installationTypes";
import { SectionHeading } from "./SectionHeading";

function TypeIcon({ icon }: { icon: InstallationType["icon"] }) {
  switch (icon) {
    case "sprinkler":
      return (
        <svg width="64" height="64" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="34" y="40" width="4" height="18" rx="1" stroke="#003366" strokeWidth="1.8" />
          <rect x="28" y="36" width="16" height="6" rx="2" stroke="#003366" strokeWidth="1.8" />
          <path d="M30 36c-4-8-12-14-16-16" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
          <path d="M33 36c-2-9-4-16-4-20" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
          <path d="M36 36c0-10 0-18 0-22" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
          <path d="M39 36c2-9 4-16 4-20" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
          <path d="M42 36c4-8 12-14 16-16" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
          <circle cx="14" cy="24" r="2" stroke="#28a745" strokeWidth="1.2" />
          <circle cx="22" cy="18" r="1.5" stroke="#28a745" strokeWidth="1.2" />
          <circle cx="50" cy="18" r="1.5" stroke="#28a745" strokeWidth="1.2" />
          <circle cx="58" cy="24" r="2" stroke="#28a745" strokeWidth="1.2" />
          <circle cx="36" cy="12" r="2" stroke="#28a745" strokeWidth="1.2" />
          <line x1="26" y1="58" x2="46" y2="58" stroke="#003366" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "estate":
      return (
        <svg width="64" height="64" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="8" y="22" width="20" height="36" rx="1.5" stroke="#003366" strokeWidth="1.8" />
          <rect x="32" y="14" width="20" height="44" rx="1.5" stroke="#003366" strokeWidth="1.8" />
          <rect x="56" y="28" width="10" height="30" rx="1.5" stroke="#003366" strokeWidth="1.8" />
          <rect x="12" y="28" width="3.5" height="3.5" stroke="#28a745" strokeWidth="1.2" />
          <rect x="20" y="28" width="3.5" height="3.5" stroke="#28a745" strokeWidth="1.2" />
          <rect x="12" y="36" width="3.5" height="3.5" stroke="#28a745" strokeWidth="1.2" />
          <rect x="20" y="36" width="3.5" height="3.5" stroke="#28a745" strokeWidth="1.2" />
          <rect x="36" y="20" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <rect x="44" y="20" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <rect x="36" y="28" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <rect x="44" y="28" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <rect x="36" y="36" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <rect x="44" y="36" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <rect x="59" y="34" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <rect x="59" y="42" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <line x1="4" y1="58" x2="68" y2="58" stroke="#003366" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 58c0-2 2-4 4-4s4 2 4 4" stroke="#28a745" strokeWidth="1.3" />
          <path d="M50 58c0-2 2-4 4-4s4 2 4 4" stroke="#28a745" strokeWidth="1.3" />
        </svg>
      );
    case "hotel":
      return (
        <svg width="64" height="64" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="14" y="20" width="44" height="38" rx="1.5" stroke="#003366" strokeWidth="1.8" />
          <line x1="14" y1="30" x2="58" y2="30" stroke="#003366" strokeWidth="1.5" />
          <rect x="20" y="36" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <rect x="28" y="36" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <rect x="36" y="36" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <rect x="44" y="36" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <rect x="20" y="44" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <rect x="28" y="44" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <rect x="36" y="44" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <rect x="44" y="44" width="4" height="4" stroke="#28a745" strokeWidth="1.2" />
          <rect x="32" y="52" width="8" height="6" rx="1" stroke="#003366" strokeWidth="1.4" />
          <path d="M22 22c0-3 2-6 4-7" stroke="#28a745" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M36 22c0-4 2-7 3-8" stroke="#28a745" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M50 22c0-3 2-6 4-7" stroke="#28a745" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M36 14c0 0-3 4-3 6.5a3 3 0 006 0c0-2.5-3-6.5-3-6.5z" stroke="#28a745" strokeWidth="1.3" />
        </svg>
      );
    case "sport":
      return (
        <svg width="64" height="64" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="10" y="18" width="52" height="36" rx="2" stroke="#003366" strokeWidth="1.8" />
          <line x1="36" y1="18" x2="36" y2="54" stroke="#003366" strokeWidth="1.5" strokeDasharray="4 3" />
          <circle cx="36" cy="36" r="8" stroke="#003366" strokeWidth="1.5" />
          <circle cx="36" cy="36" r="1.5" fill="#003366" />
          <rect x="10" y="28" width="10" height="16" rx="1" stroke="#28a745" strokeWidth="1.3" />
          <rect x="52" y="28" width="10" height="16" rx="1" stroke="#28a745" strokeWidth="1.3" />
          <line x1="18" y1="8" x2="18" y2="18" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M18 8h8l-2 3 2 3h-8z" stroke="#28a745" strokeWidth="1.3" fill="none" />
          <circle cx="54" cy="12" r="3" stroke="#28a745" strokeWidth="1.2" />
          <path d="M54 9v-2M51 10l-1.5-1.5M57 10l1.5-1.5" stroke="#28a745" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    case "park":
      return (
        <svg width="64" height="64" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M22 38c-6 0-10 5-10 10h20c0-5-4-10-10-10z" stroke="#28a745" strokeWidth="1.6" />
          <path d="M22 38c-3 0-6 3-6 6" stroke="#28a745" strokeWidth="1.2" opacity="0.5" />
          <line x1="22" y1="48" x2="22" y2="58" stroke="#003366" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M50 22c-7 0-12 7-12 14h24c0-7-5-14-12-14z" stroke="#28a745" strokeWidth="1.6" />
          <path d="M44 28c2-2 4-3 6-3" stroke="#28a745" strokeWidth="1.2" opacity="0.5" />
          <line x1="50" y1="36" x2="50" y2="58" stroke="#003366" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="6" y1="58" x2="66" y2="58" stroke="#003366" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="14" cy="22" r="2" stroke="#28a745" strokeWidth="1.2" />
          <path d="M14 22v-4M11 19l-2-1M17 19l2-1" stroke="#28a745" strokeWidth="1" strokeLinecap="round" />
          <path d="M10 26c0-2 2-3 4-3" stroke="#28a745" strokeWidth="1" strokeLinecap="round" strokeDasharray="1 2" opacity="0.7" />
        </svg>
      );
    case "green-roof":
      return (
        <svg width="64" height="64" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 34l24-18 24 18" stroke="#003366" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="18" y="34" width="36" height="24" rx="1" stroke="#003366" strokeWidth="1.8" />
          <rect x="30" y="46" width="8" height="12" rx="1" stroke="#003366" strokeWidth="1.5" />
          <circle cx="36" cy="53" r="1" fill="#003366" />
          <rect x="42" y="38" width="8" height="6" rx="1" stroke="#003366" strokeWidth="1.3" />
          <line x1="46" y1="38" x2="46" y2="44" stroke="#003366" strokeWidth="1" />
          <path d="M22 34c0-3 2-6 4-7M26 34c0-4 2-7 3-8" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M32 30c0-2 1.5-5 3-6M36 28c0-3 2-6 3-7" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M44 32c0-3 2-5 3-6M48 34c0-4 1.5-6 3-7" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" />
          <ellipse cx="26" cy="25" rx="3" ry="2" transform="rotate(-20 26 25)" stroke="#28a745" strokeWidth="1.2" />
          <ellipse cx="35" cy="21" rx="3.5" ry="2" transform="rotate(10 35 21)" stroke="#28a745" strokeWidth="1.2" />
          <ellipse cx="47" cy="25" rx="3" ry="2" transform="rotate(15 47 25)" stroke="#28a745" strokeWidth="1.2" />
          <path d="M22 38c0 0-2 3-2 4.5a2 2 0 004 0c0-1.5-2-4.5-2-4.5z" stroke="#28a745" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
  }
}

export function InstallationTypes() {
  return (
    <section id="co-nawadniamy" className="py-24 md:py-32 px-6 md:px-8 bg-surface-alt">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          title="Co nawadniamy"
          lead="Od ogrodów przydomowych po pola golfowe i parki miejskie. Każda inwestycja dostaje system dobrany pod jej skalę i specyfikę."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {installationTypes.map((type) => (
            <article
              key={type.slug}
              className="bg-white p-8 hover:shadow-lg transition-shadow"
            >
              <div className="mb-7 w-24 h-24 bg-zinc-50 rounded-lg flex items-center justify-center">
                <TypeIcon icon={type.icon} />
              </div>
              <h3 className="font-headline text-base font-bold text-secondary mb-3 uppercase">
                {type.title}
              </h3>
              <p className="text-zinc-600 text-[14px] leading-relaxed">
                {type.description}
              </p>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-zinc-700 font-body text-[15px] mb-6">
            Czekamy na zaproszenie do Państwa ogrodu w celu sporządzenia{" "}
            <strong className="text-brand">BEZPŁATNEJ</strong> wyceny systemu nawadniania.
          </p>
          <Link
            href="/kontakt"
            className="bg-brand text-white px-8 py-3 font-headline text-sm font-bold hover:bg-brand-dark transition-all rounded-sm inline-block"
          >
            ZAMÓW BEZPŁATNĄ WYCENĘ
          </Link>
        </div>
      </div>
    </section>
  );
}
