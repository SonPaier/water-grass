import type { Metadata } from "next";
import { LocalLandingPage } from "@/components/LocalLandingPage";
import { getLocalPageBySlug } from "@/lib/localPages";

const page = getLocalPageBySlug("gdansk")!;

export const metadata: Metadata = {
  title: `Nawadnianie ogrodów ${page.city} — projekt, montaż, serwis`,
  description: `Systemy nawadniania ${page.cityIn} — Port Lotniczy, PGNiG, osiedla Oliwa, ogrody prywatne na Wrzeszczu i Brzeźnie. Bezpłatna wycena.`,
  alternates: { canonical: `/nawadnianie-ogrodow-${page.slug}` },
};

export default function Page() {
  return <LocalLandingPage page={page} />;
}
