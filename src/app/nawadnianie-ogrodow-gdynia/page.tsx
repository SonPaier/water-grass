import type { Metadata } from "next";
import { LocalLandingPage } from "@/components/LocalLandingPage";
import { getLocalPageBySlug } from "@/lib/localPages";

const page = getLocalPageBySlug("gdynia")!;

export const metadata: Metadata = {
  title: `Nawadnianie ogrodów ${page.city} — osiedla, deweloperzy, ogrody prywatne`,
  description: `Specjalizujemy się w nawadnianiu osiedli ${page.cityIn} — Wiczlino Ogród, Altoria 2, Azymut. Współpraca z deweloperami. Bezpłatna wycena.`,
  alternates: { canonical: `/nawadnianie-ogrodow-${page.slug}` },
};

export default function Page() {
  return <LocalLandingPage page={page} />;
}
