import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

export function Products() {
  const [featured, ...rest] = products;

  return (
    <section id="products" className="border-t border-border">
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

        <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <ProductCard product={featured} className="h-full" />
          </Reveal>
          {rest.map((product, index) => (
            <Reveal key={product.slug} delay={0.05 * (index + 1)}>
              <ProductCard product={product} className="h-full" />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-text-muted">
          Want to know the moment a kit ships?{" "}
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
