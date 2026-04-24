"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reset scroll to top whenever route changes. Skips when URL has hash —
 * anchor navigation should land on the targeted element.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
