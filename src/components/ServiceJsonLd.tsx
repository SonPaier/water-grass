import { siteConfig } from "@/lib/siteConfig";
import { serviceArea } from "@/lib/serviceArea";

type ServiceJsonLdProps = {
  name: string;
  description: string;
  serviceType: string;
  /** Path relative to site root, e.g. `/montaz-systemow-nawadniania` */
  path: string;
  image?: string;
};

/**
 * Renders Service JSON-LD with provider (LocalBusiness) and full areaServed
 * geographic coverage from serviceArea config.
 */
export function ServiceJsonLd({
  name,
  description,
  serviceType,
  path,
  image,
}: ServiceJsonLdProps) {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  const areas = serviceArea.flatMap((g) =>
    g.cities.map((c) => c.label.replace(/\s*\(.*\)/, ""))
  );

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url,
    ...(image ? { image: image.startsWith("http") ? image : `${siteConfig.url}${image}` } : {}),
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        postalCode: siteConfig.address.postalCode,
        addressLocality: siteConfig.address.city,
        addressCountry: siteConfig.address.country,
      },
    },
    areaServed: Array.from(new Set(areas)).map((city) => ({
      "@type": "City",
      name: city,
    })),
    offers: {
      "@type": "Offer",
      url,
      availability: "https://schema.org/InStock",
      priceCurrency: "PLN",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "PLN",
        description: "Wycena indywidualna po wizycie u klienta — bezpłatnie",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
