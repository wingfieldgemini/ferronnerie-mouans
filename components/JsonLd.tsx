import { siteConfig } from "@/lib/siteConfig";

const dayMap: Record<string, string> = {
  Lundi: "Monday",
  Mardi: "Tuesday",
  Mercredi: "Wednesday",
  Jeudi: "Thursday",
  Vendredi: "Friday",
  Samedi: "Saturday",
  Dimanche: "Sunday",
};

export function JsonLd() {
  const openingHours = siteConfig.hours
    .filter((h) => h.close)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayMap[h.day],
      opens: h.open,
      closes: h.close,
    }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.shortDescription,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: `${siteConfig.url}/assets/og-image.jpeg`,
    logo: `${siteConfig.url}/assets/logo.png`,
    priceRange: "€€-€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressRegion: siteConfig.contact.address.region,
      addressCountry: siteConfig.contact.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    areaServed: siteConfig.serviceArea.map((a) => ({
      "@type": "City",
      name: a,
    })),
    openingHoursSpecification: openingHours,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Savoir-faire",
      itemListElement: siteConfig.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.summary,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
