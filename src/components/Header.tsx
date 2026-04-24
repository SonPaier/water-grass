"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navColor = scrolled ? "text-secondary" : "text-white";
  const headerBg = scrolled ? "bg-white shadow-md" : "bg-transparent";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBg}`}
    >
      <nav className="flex justify-between items-center px-6 md:px-8 h-20 max-w-[1200px] mx-auto">
        <Link href="/" aria-label="WaterGrass — strona główna" className="flex items-center">
          <Image
            src="/logo.png"
            alt="WaterGrass"
            width={140}
            height={48}
            className={`h-12 w-auto ${scrolled ? "" : "brightness-0 invert"}`}
            priority
          />
        </Link>
        <ul className="hidden md:flex space-x-8 items-center font-headline font-semibold tracking-tight text-base">
          {siteConfig.navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${navColor} hover:text-brand transition-colors`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.contact.phoneHref}
            className="hidden lg:flex items-center gap-2 bg-brand text-white font-body text-sm font-medium hover:bg-brand-dark transition-colors px-5 py-2 rounded-full"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            {siteConfig.contact.phone}
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className={`md:hidden ${navColor}`}
            aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {mobileOpen ? (
        <div className="md:hidden bg-white shadow-lg border-t border-zinc-100">
          <ul className="font-headline font-semibold tracking-tight text-sm py-4">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-8 py-3 text-secondary hover:text-brand transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-8 py-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2 rounded-full text-sm"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
