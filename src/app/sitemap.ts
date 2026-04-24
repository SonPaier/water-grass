import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { localPages } from "@/lib/localPages";
import { realizations } from "@/lib/realizations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  const core = [
    { path: "/", priority: 1, freq: "weekly" as const },
    { path: "/uslugi", priority: 0.95, freq: "monthly" as const },
    { path: "/montaz-systemow-nawadniania", priority: 0.9, freq: "monthly" as const },
    { path: "/projektowanie-systemow-nawadniania", priority: 0.8, freq: "monthly" as const },
    { path: "/uslugi/systemy-pompowe", priority: 0.85, freq: "monthly" as const },
    { path: "/serwis-i-konserwacja", priority: 0.85, freq: "monthly" as const },
    { path: "/husqvarna-automower", priority: 0.9, freq: "monthly" as const },
    { path: "/realizacje", priority: 0.8, freq: "monthly" as const },
    { path: "/wspolpraca", priority: 0.85, freq: "monthly" as const },
    { path: "/o-firmie", priority: 0.7, freq: "yearly" as const },
    { path: "/zakres-dzialania", priority: 0.6, freq: "yearly" as const },
    { path: "/cennik-serwisu", priority: 0.7, freq: "monthly" as const },
    { path: "/kontakt", priority: 0.8, freq: "yearly" as const },
    { path: "/polityka-prywatnosci", priority: 0.2, freq: "yearly" as const },
    { path: "/polityka-cookies", priority: 0.2, freq: "yearly" as const },
  ];

  const local = localPages.map((p) => ({
    path: `/nawadnianie-ogrodow-${p.slug}`,
    priority: 0.85,
    freq: "monthly" as const,
  }));

  const cases = realizations.map((r) => ({
    path: `/realizacje/${r.slug}`,
    priority: 0.6,
    freq: "yearly" as const,
  }));

  return [...core, ...local, ...cases].map(({ path, priority, freq }) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: freq,
    priority,
  }));
}
