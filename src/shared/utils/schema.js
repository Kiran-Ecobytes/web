import { SITE_URL } from "@/shared/config";

export const BUSINESS_REF = { "@id": `${SITE_URL}/#business` };

const pageUrl = (path) => `${SITE_URL}${path === "/" ? "/" : path}`;

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function breadcrumbSchema(name, path) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: pageUrl("/") },
      { "@type": "ListItem", position: 2, name, item: pageUrl(path) },
    ],
  };
}

export function serviceSchema({ name, serviceType, path, description }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: pageUrl(path),
    provider: BUSINESS_REF,
    areaServed: { "@type": "City", name: "Bengaluru" },
  };
}
