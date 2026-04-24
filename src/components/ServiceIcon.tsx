import type { ServiceIcon as IconKey } from "@/lib/services";

export function ServiceIcon({ icon }: { icon: IconKey }) {
  switch (icon) {
    case "install":
      return (
        <svg width="64" height="64" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="34" y="40" width="4" height="18" rx="1" stroke="#003366" strokeWidth="1.8" />
          <rect x="28" y="36" width="16" height="6" rx="2" stroke="#003366" strokeWidth="1.8" />
          <path d="M30 36c-4-8-12-14-16-16" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
          <path d="M33 36c-2-9-4-16-4-20" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
          <path d="M36 36c0-10 0-18 0-22" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
          <path d="M39 36c2-9 4-16 4-20" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
          <path d="M42 36c4-8 12-14 16-16" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3" />
          <line x1="26" y1="58" x2="46" y2="58" stroke="#003366" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "pump":
      return (
        <svg width="64" height="64" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="36" cy="36" r="14" stroke="#003366" strokeWidth="1.8" />
          <circle cx="36" cy="36" r="6" stroke="#003366" strokeWidth="1.8" />
          <circle cx="36" cy="36" r="2" fill="#28a745" />
          <line x1="36" y1="30" x2="36" y2="22" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="42" y1="36" x2="50" y2="36" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="36" y1="42" x2="36" y2="50" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="30" y1="36" x2="22" y2="36" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 36h10" stroke="#003366" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 32v8" stroke="#003366" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M50 36h10" stroke="#003366" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M60 32v8" stroke="#003366" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M16 34l2 2-2 2" stroke="#28a745" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M54 34l2 2-2 2" stroke="#28a745" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="36" cy="14" r="5" stroke="#28a745" strokeWidth="1.2" />
          <path d="M36 11v3l2 1" stroke="#28a745" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "service":
      return (
        <svg width="64" height="64" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20 52l18-18" stroke="#003366" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="44" cy="28" r="10" stroke="#003366" strokeWidth="1.8" />
          <circle cx="44" cy="28" r="4" stroke="#003366" strokeWidth="1.8" />
          <path d="M16 56l4-4M16 48l4 4" stroke="#003366" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M52 52L38 38" stroke="#28a745" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M52 52l4 4" stroke="#28a745" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="54" y="54" width="6" height="10" rx="1.5" transform="rotate(-45 54 54)" stroke="#28a745" strokeWidth="1.5" />
          <circle cx="22" cy="20" r="7" stroke="#28a745" strokeWidth="1.5" />
          <path d="M19 20l2 2 4-4" stroke="#28a745" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "mower":
      return (
        <svg width="64" height="64" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M14 42c0-7 6-12 14-12h16c8 0 14 5 14 12v6H14v-6z" stroke="#003366" strokeWidth="1.8" />
          <circle cx="22" cy="50" r="5" stroke="#003366" strokeWidth="1.8" />
          <circle cx="50" cy="50" r="5" stroke="#003366" strokeWidth="1.8" />
          <circle cx="22" cy="50" r="2" fill="#003366" />
          <circle cx="50" cy="50" r="2" fill="#003366" />
          <rect x="28" y="34" width="16" height="4" rx="1" fill="#28a745" />
          <circle cx="36" cy="40" r="2" fill="#28a745" />
          <path d="M32 28v-4M40 28v-4M36 28v-6" stroke="#28a745" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M10 60l2-2M62 60l-2-2M22 62v-2M50 62v-2" stroke="#28a745" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        </svg>
      );
  }
}
