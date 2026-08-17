import { describe, expect, it } from "vitest";
import { ProductCardPageObject } from "@/test/page-objects/ProductCardPageObject";
import { products } from "@/data/products";

describe("ProductCard", () => {
  it("renders the product name and a coming soon badge", () => {
    const [codeStarters] = products;
    const card = ProductCardPageObject.render(codeStarters);

    expect(card.heading).toHaveTextContent(codeStarters.name);
    expect(card.statusBadge).toBeInTheDocument();
  });

  it("renders highlight bullets only when the product has them", () => {
    const featured = products.find((product) => product.featured);
    const nonFeatured = products.find((product) => !product.featured);

    expect(featured).toBeDefined();
    expect(nonFeatured).toBeDefined();

    const featuredCard = ProductCardPageObject.render(featured!);
    expect(featuredCard.highlightItems.length).toBe(featured!.highlights?.length ?? 0);
    expect(featuredCard.highlightItems.length).toBeGreaterThan(0);
  });

  it("renders no bullet list for a product without highlights", () => {
    const nonFeatured = products.find((product) => !product.featured);
    const card = ProductCardPageObject.render(nonFeatured!);

    expect(card.highlightItems).toHaveLength(0);
  });
});
