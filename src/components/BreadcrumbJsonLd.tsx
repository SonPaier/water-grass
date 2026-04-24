import { siteConfig } from "@/lib/siteConfig";

export type BreadcrumbItem = {
  name: string;
  /** Path relative to site root, e.g. `/realizacje` */
  path: string;
};

/**
 * Renders BreadcrumbList JSON-LD for SEO. The first item should typically be
 * "Strona główna" pointing to "/". The current page should be the last item.
 */
export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
