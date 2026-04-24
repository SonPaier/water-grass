type SectionHeadingProps = {
  title: string;
  lead?: string;
  align?: "left" | "center";
  eyebrow?: string;
};

export function SectionHeading({
  title,
  lead,
  align = "left",
  eyebrow,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`mb-16 md:mb-20 ${isCenter ? "text-center" : ""}`}>
      {eyebrow ? (
        <p className="text-brand font-headline text-sm font-bold tracking-widest mb-4 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-secondary font-headline text-4xl md:text-5xl font-extrabold tracking-tight">
        {title}
      </h2>
      <div
        className={`w-24 h-1 bg-brand mt-4 ${isCenter ? "mx-auto" : ""}`}
      />
      {lead ? (
        <p
          className={`text-zinc-600 font-body mt-6 text-[15px] leading-relaxed ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
