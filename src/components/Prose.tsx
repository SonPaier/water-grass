import type { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-6 md:px-8 py-16 md:py-24 font-body text-zinc-700 text-[16px] leading-relaxed space-y-6 [&_h2]:text-secondary [&_h2]:font-headline [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-extrabold [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-secondary [&_h3]:font-headline [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-2 [&_a]:text-brand [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-2">
      {children}
    </div>
  );
}
