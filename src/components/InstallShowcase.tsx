import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/images/services/irrigation-install.jpg", alt: "Montaż systemu nawadniania" },
  { src: "/images/services/sprinkler.jpg", alt: "Zraszacz Hunter w trawniku" },
  { src: "/images/services/engineering.jpg", alt: "Studzienka i elektrozawory" },
  { src: "/images/services/control.jpg", alt: "Sterownik nawadniania" },
];

const checklist = [
  "Audyt terenu i warunków glebowych",
  "Dobór sprzętu Hunter, Rain Bird, Husqvarna",
  "Pełna automatyzacja z czujnikiem deszczu",
];

function Check() {
  return (
    <svg
      className="w-5 h-5 text-brand shrink-0"
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
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function InstallShowcase() {
  return (
    <section className="bg-surface-alt py-16 md:py-24 relative overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col md:flex-row min-h-[500px] px-6 md:px-8">
        <div className="w-full md:w-[55%] grid grid-cols-2 gap-2 p-2">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative overflow-hidden h-56 md:h-auto md:min-h-[230px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 30vw, 45vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="w-full md:w-[45%] p-10 md:p-16 flex flex-col justify-center">
          <h2 className="text-secondary font-headline text-2xl md:text-3xl font-extrabold mb-6 leading-tight">
            JEDEN WYKONAWCA: PROJEKT, MATERIAŁ,{" "}
            <span className="text-brand">MONTAŻ I GWARANCJA</span>
          </h2>
          <p className="text-zinc-700 font-body mb-8 text-[15px]">
            Nie podzlecamy. Pełną odpowiedzialność za system nawadniania bierzemy
            od pomiaru po wieloletnią gwarancję. Zero przerzucania
            odpowiedzialności między ekipy.
          </p>
          <ul className="space-y-3 mb-8 text-zinc-800 font-medium text-[15px]">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/montaz-systemow-nawadniania"
            className="bg-secondary text-white px-8 py-3 font-headline text-sm font-bold hover:opacity-90 transition-all self-start rounded-sm inline-block"
          >
            ZOBACZ JAK PRACUJEMY
          </Link>
        </div>
      </div>
    </section>
  );
}
