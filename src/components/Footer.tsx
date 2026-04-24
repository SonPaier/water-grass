import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-white w-full pt-24 pb-12 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg
          className="absolute -top-20 -right-20 w-[500px] h-[500px] text-white/[0.03]"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <circle cx="100" cy="100" r="100" />
        </svg>
        <svg
          className="absolute -bottom-32 -left-16 w-[400px] h-[400px] text-white/[0.03]"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <circle cx="100" cy="100" r="100" />
        </svg>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 px-6 md:px-8 max-w-[1200px] mx-auto">
        <div>
          <h2 className="font-headline text-lg text-brand font-bold mb-8 tracking-wider">
            KONTAKT
          </h2>
          <div className="font-body text-white/80 space-y-6 text-[15px]">
            <p className="flex items-start gap-4">
              <svg
                className="w-5 h-5 text-brand shrink-0 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span>
                {siteConfig.legalName}
                <br />
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </span>
            </p>
            <p className="flex items-center gap-4">
              <svg
                className="w-5 h-5 text-brand shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <a
                href={siteConfig.contact.phoneHref}
                className="hover:text-brand transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
            </p>
            <p className="flex items-center gap-4">
              <svg
                className="w-5 h-5 text-brand shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <a
                href={siteConfig.contact.emailHref}
                className="hover:text-brand transition-colors whitespace-nowrap"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-headline text-lg text-brand font-bold mb-8 tracking-wider">
            NA SKRÓTY
          </h2>
          <ul className="font-body text-white/80 space-y-4 text-[15px]">
            {siteConfig.footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-brand transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-headline text-lg text-brand font-bold mb-8 tracking-wider">
            DZIAŁAMY OD 2012 ROKU
          </h2>
          <p className="font-body text-white/70 mb-8 leading-relaxed text-[15px]">
            Specjalizujemy się wyłącznie w nawadnianiu i robotach koszących
            Husqvarna. Setki ogrodów, kilkadziesiąt obiektów komercyjnych,
            autoryzowane szkolenia w czterech topowych markach branży.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="font-headline text-xs font-bold text-white/60 px-3 py-1 border border-white/20 uppercase">
              Hunter
            </span>
            <span className="font-headline text-xs font-bold text-white/60 px-3 py-1 border border-white/20 uppercase">
              Rain Bird
            </span>
            <span className="font-headline text-xs font-bold text-white/60 px-3 py-1 border border-white/20 uppercase">
              Weathermatic
            </span>
            <span className="font-headline text-xs font-bold text-white/60 px-3 py-1 border border-white/20 uppercase">
              Husqvarna
            </span>
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <Image
          src="/logo.png"
          alt="WaterGrass"
          width={120}
          height={40}
          className="h-10 w-auto brightness-0 invert"
        />
        <p className="font-body text-xs text-white/50 text-center md:text-right">
          &copy; {year} {siteConfig.legalName} — wszystkie prawa zastrzeżone.{" "}
          <Link
            href="/polityka-prywatnosci"
            className="hover:text-brand transition-colors"
          >
            Polityka prywatności
          </Link>{" "}
          ·{" "}
          <Link
            href="/polityka-cookies"
            className="hover:text-brand transition-colors"
          >
            Cookies
          </Link>
        </p>
      </div>
    </footer>
  );
}
