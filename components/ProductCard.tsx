import {
  ArrowUpRight,
  Check,
  Code,
  PaintBrush,
  SquaresFour,
} from "@phosphor-icons/react/dist/ssr";
import type { Product } from "@/data/products";
import { cn } from "@/lib/cn";

const icons = {
  code: Code,
  kanban: SquaresFour,
  palette: PaintBrush,
} as const;

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const Icon = icons[product.icon];
  const hasFooter = Boolean(product.highlights?.length || product.demos?.length);
  const isAvailable = Boolean(product.demos?.some((demo) => demo.buyUrl));

  return (
    <article
      className={cn(
        "relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong sm:p-7",
        className,
      )}
    >
      <span className="absolute inset-x-0 top-0 h-[3px] bg-accent-strong" aria-hidden="true" />
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-soft-border bg-accent-soft text-accent">
            <Icon size={20} weight="bold" />
          </span>
          <span className="shrink-0 rounded-full border border-border-strong px-3 py-1 text-xs font-medium text-text-muted">
            {isAvailable ? "Available now" : "Coming soon"}
          </span>
        </div>
        <h3
          className={cn(
            "mt-6 font-display font-bold tracking-tight",
            product.featured ? "text-2xl" : "text-xl",
          )}
        >
          {product.name}
        </h3>
        <p className="mt-2.5 max-w-[60ch] text-sm leading-relaxed text-text-muted">
          {product.description}
        </p>
      </div>

      {hasFooter ? (
        <div className="mt-6 border-t border-border pt-5">
          {product.highlights ? (
            <ul className="space-y-2.5" aria-label="Highlights">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5 text-sm text-text-muted">
                  <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {product.demos?.length ? (
            <ul
              className={cn(
                "divide-y divide-border",
                product.highlights ? "mt-5 border-t border-border" : "",
              )}
              aria-label="Available demos"
            >
              {product.demos.map((demo) => (
                <li
                  key={demo.url}
                  className={cn("py-4 last:pb-0", product.highlights ? "" : "first:pt-0")}
                >
                  {demo.buyUrl ? (
                    <>
                      <p className="font-display text-base font-semibold tracking-tight text-text">
                        {demo.label}
                      </p>
                      <div className="mt-3 flex items-center gap-4">
                        <a
                          href={demo.buyUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`Buy ${demo.label}`}
                          className="inline-flex h-11 items-center justify-center rounded-full bg-accent-strong px-5 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                          Buy
                        </a>
                        <a
                          href={demo.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`View live demo of ${demo.label}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-text-muted transition-colors hover:text-accent"
                        >
                          View demo
                          <ArrowUpRight size={13} weight="bold" />
                        </a>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <p className="font-display text-base font-semibold tracking-tight text-text">
                        {demo.label}
                      </p>
                      <a
                        href={demo.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`View live demo of ${demo.label}`}
                        className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-text-muted transition-colors hover:text-accent"
                      >
                        View demo
                        <ArrowUpRight size={13} weight="bold" />
                      </a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
