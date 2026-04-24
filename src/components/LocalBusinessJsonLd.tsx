import { siteConfig } from "@/lib/siteConfig";
import { serviceArea } from "@/lib/serviceArea";

export function LocalBusinessJsonLd() {
  const areas = serviceArea.flatMap((g) =>
    g.cities.map((c) => c.label.replace(/\s*\(.*\)/, ""))
  );

  const sameAs = [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.google].filter(
    (v): v is string => Boolean(v)
  );

  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#localbusiness`,
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.openingHours.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.days.map(
        (d) =>
          ({
            Mo: "Monday",
            Tu: "Tuesday",
            We: "Wednesday",
            Th: "Thursday",
            Fr: "Friday",
            Sa: "Saturday",
            Su: "Sunday",
          }[d])
      ),
      opens: spec.opens,
      closes: spec.closes,
    })),
    areaServed: Array.from(new Set(areas)).map((city) => ({
      "@type": "City",
      name: city,
    })),
    priceRange: "$$",
    image: `${siteConfig.url}/og-image.jpg`,
    logo: `${siteConfig.url}/logo.png`,
    ...(sameAs.length > 0 ? { sameAs } : {}),
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
