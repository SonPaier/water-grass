"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "wg-consent-v1";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  acceptedAt: string;
};

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function save(analytics: boolean, marketing: boolean) {
    const consent: Consent = {
      necessary: true,
      analytics,
      marketing,
      acceptedAt: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {
      // ignore — third-party cookies blocked, fall through
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[100] bg-white shadow-2xl border-t-4 border-brand p-6"
    >
      <h2
        id="cookie-banner-title"
        className="font-headline text-base font-bold text-secondary mb-2 uppercase tracking-wide"
      >
        Cookies i prywatność
      </h2>
      <p className="text-zinc-600 text-sm leading-relaxed mb-4">
        Używamy plików cookie do prawidłowego działania strony. Statystyki i
        marketing — tylko po Twojej zgodzie. Szczegóły w{" "}
        <Link
          href="/polityka-cookies"
          className="text-brand underline underline-offset-2"
        >
          polityce cookies
        </Link>
        .
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          type="button"
          onClick={() => save(true, true)}
          className="bg-brand text-white px-5 py-2.5 font-headline text-sm font-bold hover:bg-brand-dark transition-colors rounded-sm flex-1"
        >
          Akceptuj wszystkie
        </button>
        <button
          type="button"
          onClick={() => save(false, false)}
          className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-5 py-2.5 font-headline text-sm font-bold transition-colors rounded-sm flex-1"
        >
          Tylko niezbędne
        </button>
      </div>
    </div>
  );
}
