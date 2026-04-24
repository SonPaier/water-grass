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
    itemListElement: items.map((item, idx) => {
      const isLast = idx === items.length - 1;
      const entry: Record<string, unknown> = {
        "@type": "ListItem",
        position: idx + 1,
        name: item.name,
      };
      // Per Google spec: omit `item` URL on last (current) breadcrumb entry.
      if (!isLast) {
        entry.item = `${siteConfig.url}${item.path === "/" ? "" : item.path}`;
      }
      return entry;
    }),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
