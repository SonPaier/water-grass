import type { Metadata } from "next";
import { LocalLandingPage } from "@/components/LocalLandingPage";
import { getLocalPageBySlug } from "@/lib/localPages";

const page = getLocalPageBySlug("reda")!;

export const metadata: Metadata = {
  title: `Nawadnianie ogrodów ${page.city} — najszybszy serwis w okolicy`,
  description: `Systemy nawadniania ${page.cityIn}. Krótki dojazd z Bolszewa, najszybsza reakcja serwisowa. Bezpłatna wycena u Ciebie.`,
  alternates: { canonical: `/nawadnianie-ogrodow-${page.slug}` },
};

export default function Page() {
  return <LocalLandingPage page={page} />;
}
