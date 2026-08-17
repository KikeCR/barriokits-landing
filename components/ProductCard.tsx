import { Check, Code, PaintBrush, SquaresFour } from "@phosphor-icons/react/dist/ssr";
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
            Coming soon
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
        <p className="mt-2.5 text-sm leading-relaxed text-text-muted">{product.description}</p>
      </div>

      {product.highlights ? (
        <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
          {product.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2.5 text-sm text-text-muted">
              <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
