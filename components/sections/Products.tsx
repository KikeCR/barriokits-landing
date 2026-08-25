import { ProductCard, ProductTeaser } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { softwareSourceCodeJsonLd } from "@/lib/structured-data";

export function Products() {
  const featured = products.find((product) => product.featured)!;
  const notionTemplates = products.find((product) => product.slug === "notion-templates")!;
  const canvaTemplates = products.find((product) => product.slug === "canva-templates")!;
  const demoJsonLd = featured.demos?.map((demo) => softwareSourceCodeJsonLd(featured, demo)) ?? [];

  return (
    <section id="products" className="border-t border-border">
      {demoJsonLd.map((entry) => (
        <script
          key={entry.url}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Three ways to skip the setup.
          </h2>
          <p className="mt-4 max-w-[60ch] text-text-muted">
            Each kit is a complete, opinionated starting point. Pick the format for what you are
            building, and customize from there.
          </p>
        </Reveal>

        <div className="mt-12 space-y-5">
          <Reveal>
            <ProductCard product={featured} />
          </Reveal>
          <Reveal delay={0.05}>
            <ProductCard product={notionTemplates} />
          </Reveal>
          <Reveal delay={0.1}>
            <ProductTeaser product={canvaTemplates} />
          </Reveal>
        </div>

        <p className="mt-10 text-center text-sm text-text-muted">
          Want to know when the Canva kits ship?{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-medium text-accent underline underline-offset-4"
          >
            {siteConfig.contactEmail}
          </a>
        </p>
      </div>
    </section>
  );
}
