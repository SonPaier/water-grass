import { brands } from "@/lib/brands";

export function BrandStrip() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-zinc-100">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <p className="text-center font-headline text-sm tracking-widest text-zinc-500 uppercase mb-8">
          Certyfikowany instalator i autoryzowany dealer
        </p>
        <ul className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {brands.map((brand) => (
            <li
              key={brand.slug}
              className="font-headline text-2xl md:text-3xl font-extrabold text-zinc-400 tracking-tight hover:text-secondary transition-colors"
              title={brand.description}
            >
              {brand.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
