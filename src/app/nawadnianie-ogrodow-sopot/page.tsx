import type { Metadata } from "next";
import { LocalLandingPage } from "@/components/LocalLandingPage";
import { getLocalPageBySlug } from "@/lib/localPages";

const page = getLocalPageBySlug("sopot")!;

export const metadata: Metadata = {
  title: `Nawadnianie ogrodów ${page.city} — hotele, rezydencje, ogrody`,
  description: `Systemy nawadniania ${page.cityIn} — Hotel Radisson Blu, Hotel Testa, prestiżowe rezydencje karlikowskie. Dyskretna i terminowa praca.`,
  alternates: { canonical: `/nawadnianie-ogrodow-${page.slug}` },
};

export default function Page() {
  return <LocalLandingPage page={page} />;
}
