import Image from "next/image";
import type { ReactNode } from "react";

type Bg = "lowest" | "alt" | "secondary";

const BG: Record<Bg, string> = {
  lowest: "bg-surface-lowest",
  alt: "bg-surface-alt",
  secondary: "bg-secondary text-white",
};

type StorySectionProps = {
  eyebrow?: string;
  title: ReactNode;
  /** Image/video on one side. */
  image: string;
  imageAlt: string;
  /** Reversed = image on the LEFT (default: right). */
  reversed?: boolean;
  bg?: Bg;
  /** Sticky image on desktop (useful for tall right-column content). */
  stickyImage?: boolean;
  children: ReactNode;
};

/**
 * Two-column section with text + photo. Naprzemienne tła + reversed prop pozwalają
 * łatwo przeplatać sekcje na stronach usługowych.
 */
export function StorySection({
  eyebrow,
  title,
  image,
  imageAlt,
  reversed = false,
  bg = "lowest",
  stickyImage = false,
  children,
}: StorySectionProps) {
  const isDark = bg === "secondary";
  return (
    <section className={`py-20 md:py-28 px-6 md:px-8 ${BG[bg]}`}>
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className={reversed ? "lg:order-2" : ""}>
          {eyebrow ? (
            <p className="text-brand font-headline text-sm font-bold tracking-widest uppercase mb-3">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={`font-headline text-3xl md:text-4xl font-extrabold leading-tight mb-6 ${
              isDark ? "text-white" : "text-secondary"
            }`}
          >
            {title}
          </h2>
          <div
            className={`prose-content space-y-5 text-[15px] md:text-[16px] leading-relaxed ${
              isDark ? "text-white/85" : "text-zinc-700"
            }`}
          >
            {children}
          </div>
        </div>
        <div
          className={`relative aspect-[4/3] bg-zinc-100 ${
            reversed ? "lg:order-1" : ""
          } ${stickyImage ? "lg:sticky lg:top-28" : ""}`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
