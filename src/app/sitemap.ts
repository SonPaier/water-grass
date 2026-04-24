import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { localPages } from "@/lib/localPages";
import { realizations } from "@/lib/realizations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();
  const heroImage = `${base}/og-image.jpg`;

  const core = [
    { path: "/", priority: 1, freq: "weekly" as const, image: heroImage },
    { path: "/uslugi", priority: 0.95, freq: "monthly" as const, image: heroImage },
    { path: "/montaz-systemow-nawadniania", priority: 0.9, freq: "monthly" as const, image: `${base}/images/services/irrigation-install.jpg` },
    { path: "/projektowanie-systemow-nawadniania", priority: 0.8, freq: "monthly" as const, image: `${base}/images/services/engineering.jpg` },
    { path: "/uslugi/systemy-pompowe", priority: 0.85, freq: "monthly" as const, image: `${base}/images/services/engineering.jpg` },
    { path: "/serwis-i-konserwacja", priority: 0.85, freq: "monthly" as const, image: `${base}/images/services/control.jpg` },
    { path: "/husqvarna-automower", priority: 0.9, freq: "monthly" as const, image: `${base}/images/services/automower-310.png` },
    { path: "/realizacje", priority: 0.8, freq: "monthly" as const, image: heroImage },
    { path: "/wspolpraca", priority: 0.85, freq: "monthly" as const, image: heroImage },
    { path: "/o-firmie", priority: 0.7, freq: "yearly" as const, image: `${base}/images/about/watergrass-van.webp` },
    { path: "/zakres-dzialania", priority: 0.6, freq: "yearly" as const, image: heroImage },
    { path: "/cennik-serwisu", priority: 0.7, freq: "monthly" as const, image: heroImage },
    { path: "/kontakt", priority: 0.8, freq: "yearly" as const, image: heroImage },
    { path: "/polityka-prywatnosci", priority: 0.2, freq: "yearly" as const },
    { path: "/polityka-cookies", priority: 0.2, freq: "yearly" as const },
  ];

  const local = localPages.map((p) => ({
    path: `/nawadnianie-ogrodow-${p.slug}`,
    priority: 0.85,
    freq: "monthly" as const,
    image: heroImage,
  }));

  const cases = realizations.map((r) => ({
    path: `/realizacje/${r.slug}`,
    priority: 0.6,
    freq: "yearly" as const,
    image: `${base}${r.image}`,
  }));

  return [...core, ...local, ...cases].map(({ path, priority, freq, image }) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: freq,
    priority,
    ...(image ? { images: [image] } : {}),
  }));
}
