import type { Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { renderWithProviders, screen } from "@/test/render";

export class ProductCardPageObject {
  static render(product: Product) {
    renderWithProviders(<ProductCard product={product} />);
    return new ProductCardPageObject();
  }

  get heading() {
    return screen.getByRole("heading");
  }

  get statusBadge() {
    return screen.getByText("Coming soon");
  }

  get highlightItems() {
    return screen.queryAllByRole("listitem");
  }
}
