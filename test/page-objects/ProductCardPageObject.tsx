import type { Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { renderWithProviders, screen, within } from "@/test/render";

export class ProductCardPageObject {
  static render(product: Product) {
    renderWithProviders(<ProductCard product={product} />);
    return new ProductCardPageObject();
  }

  get heading() {
    return screen.getByRole("heading");
  }

  get statusBadge() {
    return screen.getByText(/Available now|Coming soon/);
  }

  get highlightItems() {
    const list = screen.queryByRole("list", { name: "Highlights" });
    return list ? within(list).getAllByRole("listitem") : [];
  }

  get demoItems() {
    const list = screen.queryByRole("list", { name: "Available demos" });
    return list ? within(list).getAllByRole("listitem") : [];
  }

  buyLink(demoLabel: string) {
    return screen.queryByRole("link", { name: `Buy ${demoLabel}` });
  }

  demoLink(demoLabel: string) {
    return screen.getByRole("link", { name: `View live demo of ${demoLabel}` });
  }
}
