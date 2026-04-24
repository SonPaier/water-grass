import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinalCta } from "@/components/FinalCta";
import {
  realizations,
  getRealizationBySlug,
  getOtherRealizations,
} from "@/lib/realizations";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return realizations.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getRealizationBySlug(slug);
  if (!r) return { title: "Realizacja nie znaleziona" };
  return {
    title: `${r.name} | ${r.city} — System Nawadniania`,
    description: r.description,
    alternates: { canonical: `/realizacje/${r.slug}` },
    openGraph: {
      title: `${r.name} | ${r.city} — System Nawadniania`,
      description: r.description,
      images: [{ url: r.image, alt: r.alt }],
    },
  };
}

function Check() {
  return (
    <svg
      className="w-5 h-5 text-brand shrink-0 mt-0.5"
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

export default async function RealizacjaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const r = getRealizationBySlug(slug);
  if (!r) notFound();
  const others = getOtherRealizations(slug, 3);

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 pb-12 md:pb-20 px-6 md:px-8 bg-secondary text-white">
          <div className="max-w-[1200px] mx-auto">
            <nav className="text-sm text-white/70 font-body mb-10" aria-label="Ścieżka okruszków">
              <Link href="/" className="hover:text-brand">
                Strona główna
              </Link>{" "}
              <span aria-hidden="true">/</span>{" "}
              <Link href="/realizacje" className="hover:text-brand">
                Realizacje
              </Link>{" "}
              <span aria-hidden="true">/</span>{" "}
              <span className="text-white">{r.name}</span>
            </nav>
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10">
              <div className="relative aspect-[4/3] bg-zinc-700">
                <Image
                  src={r.image}
                  alt={r.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-brand font-headline text-sm font-bold tracking-widest mb-3 uppercase">
                  {r.categoryLabel}
                </p>
                <h1 className="font-headline text-3xl md:text-5xl font-extrabold leading-[1.1] mb-3">
                  {r.name}
                </h1>
                <p className="text-white/70 font-body text-lg mb-6">{r.city}</p>
                <p className="text-white/85 font-body text-[16px] leading-relaxed mb-8">
                  {r.description}
                </p>
                <ul className="space-y-3 text-white/90 text-[15px]">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <Check />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-alt">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.6fr_1fr] gap-10 items-start">
            <div>
              <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
                Zakres prac
              </h2>
              <div className="w-24 h-1 bg-brand mt-4 mb-8" />
              <ol className="space-y-4">
                {r.scope.map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 bg-white p-5 border-l-4 border-brand"
                  >
                    <span
                      className="font-headline text-2xl font-extrabold text-brand shrink-0 w-10"
                      aria-hidden="true"
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-zinc-700 text-[15px] leading-relaxed pt-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <aside className="bg-secondary text-white p-8 lg:sticky lg:top-28">
              <h2 className="font-headline text-lg font-bold uppercase tracking-wider text-brand mb-6">
                Specyfikacja
              </h2>
              <dl className="space-y-5">
                {r.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="border-b border-white/15 pb-4 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-white/60 font-headline text-xs uppercase tracking-widest mb-1">
                      {spec.label}
                    </dt>
                    <dd className="font-headline font-bold text-white text-base leading-snug">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-white/60 text-xs mt-8 leading-relaxed">
                Specyfikacje orientacyjne. Każdy projekt skalujemy pod konkretne
                potrzeby i warunki terenowe.
              </p>
            </aside>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 md:px-8 bg-surface-lowest">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-secondary font-headline text-3xl md:text-4xl font-extrabold tracking-tight">
                  Inne realizacje
                </h2>
                <div className="w-24 h-1 bg-brand mt-4" />
              </div>
              <Link
                href="/realizacje"
                className="text-brand font-headline font-bold text-sm hover:text-brand-dark"
              >
                Zobacz wszystkie →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/realizacje/${o.slug}`}
                  className="group relative overflow-hidden aspect-[4/5] bg-zinc-200 block"
                  aria-label={`Zobacz realizację: ${o.name}, ${o.city}`}
                >
                  <Image
                    src={o.image}
                    alt={o.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 to-transparent flex flex-col justify-end p-6">
                    <span className="text-brand font-headline font-bold text-xs mb-1 uppercase">
                      {o.categoryLabel}
                    </span>
                    <h3 className="text-white font-headline text-xl font-bold leading-tight">
                      {o.name}
                    </h3>
                    <p className="text-white/80 font-body text-sm mt-1">{o.city}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
