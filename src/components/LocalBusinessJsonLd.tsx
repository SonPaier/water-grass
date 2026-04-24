import { siteConfig } from "@/lib/siteConfig";
import { serviceArea } from "@/lib/serviceArea";

export function LocalBusinessJsonLd() {
  const areas = serviceArea.flatMap((g) =>
    g.cities.map((c) => c.label.replace(/\s*\(.*\)/, ""))
  );

  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    foundingDate: String(siteConfig.founded),
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    areaServed: Array.from(new Set(areas)).map((city) => ({
      "@type": "City",
      name: city,
    })),
    priceRange: "$$",
    image: `${siteConfig.url}/images/hero/hero.png`,
    logo: `${siteConfig.url}/logo.png`,
    knowsAbout: [
      "Systemy nawadniania",
      "Husqvarna Automower",
      "Hunter",
      "Rain Bird",
      "Weathermatic",
      "Roboty koszące",
      "Serwis nawadniania",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
