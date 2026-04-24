import type { Metadata } from "next";
import { LocalLandingPage } from "@/components/LocalLandingPage";
import { getLocalPageBySlug } from "@/lib/localPages";

const page = getLocalPageBySlug("rumia")!;

export const metadata: Metadata = {
  title: `Nawadnianie ogrodów ${page.city} — projekt, montaż, serwis`,
  description: `Profesjonalne systemy nawadniania ${page.cityIn}. Realizacje dla Castoramy, Departamentu Zieleni i ogrodów prywatnych. Bezpłatna wycena.`,
  alternates: { canonical: `/nawadnianie-ogrodow-${page.slug}` },
};

export default function Page() {
  return <LocalLandingPage page={page} />;
}
