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
  const isBrowsableList = Boolean(product.demos?.length) && !isAvailable;

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
            isBrowsableList ? (
              <ul
                className={cn(
                  "grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3",
                  product.highlights ? "mt-5 border-t border-border pt-3" : "",
                )}
                aria-label="Available demos"
              >
                {product.demos.map((demo) => (
                  <li key={demo.url}>
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`View live demo of ${demo.label}`}
                      className="group -mx-2.5 flex items-center justify-between gap-3 rounded-lg px-2.5 py-2.5 transition-colors hover:bg-accent-soft"
                    >
                      <span className="truncate text-sm font-medium text-text">{demo.label}</span>
                      <ArrowUpRight
                        size={13}
                        weight="bold"
                        className="shrink-0 text-text-muted transition-colors group-hover:text-accent"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
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
                  </li>
                ))}
              </ul>
            )
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function ProductTeaser({ product, className }: ProductCardProps) {
  const Icon = icons[product.icon];

  return (
    <article
      className={cn(
        "relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong sm:flex-row sm:items-center sm:justify-between sm:p-7",
        className,
      )}
    >
      <span className="absolute inset-x-0 top-0 h-[3px] bg-accent-strong" aria-hidden="true" />
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-soft-border bg-accent-soft text-accent">
          <Icon size={20} weight="bold" />
        </span>
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <h3 className="font-display text-lg font-bold tracking-tight">{product.name}</h3>
            <span className="rounded-full border border-border-strong px-3 py-1 text-xs font-medium text-text-muted">
              Coming soon
            </span>
          </div>
          <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-text-muted">
            {product.description}
          </p>
        </div>
      </div>

      {product.highlights?.length ? (
        <ul
          className="flex shrink-0 flex-col gap-2 border-t border-border pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0"
          aria-label="Highlights"
        >
          {product.highlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-2 text-sm text-text-muted">
              <Check size={14} weight="bold" className="shrink-0 text-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
