import type { Product, ProductDemo } from "@/data/products";
import { siteConfig } from "@/data/site";

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    sameAs: [siteConfig.githubUrl],
    email: siteConfig.contactEmail,
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function siteJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd(), websiteJsonLd()],
  };
}

export function softwareSourceCodeJsonLd(product: Product, demo: ProductDemo) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: demo.label,
    description: demo.description,
    url: demo.url,
    codeSampleType: "full",
    isAccessibleForFree: false,
    author: { "@id": `${siteConfig.url}/#organization` },
    creator: { "@id": `${siteConfig.url}/#organization` },
    ...(demo.buyUrl
      ? {
          offers: {
            "@type": "Offer",
            url: demo.buyUrl,
            availability: "https://schema.org/InStock",
            seller: { "@id": `${siteConfig.url}/#organization` },
          },
        }
      : {}),
    about: product.name,
  };
}
