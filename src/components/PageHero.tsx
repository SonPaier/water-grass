type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
};

export function PageHero({ eyebrow, title, lead }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 px-6 md:px-8 bg-secondary text-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg
          className="absolute -top-20 -right-20 w-[500px] h-[500px] text-white/[0.05]"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <circle cx="100" cy="100" r="100" />
        </svg>
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto">
        {eyebrow ? (
          <p className="text-brand font-headline text-sm font-bold tracking-widest mb-4 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 max-w-3xl">
          {title}
        </h1>
        {lead ? (
          <p className="text-lg text-white/85 font-body max-w-2xl leading-relaxed">
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}
