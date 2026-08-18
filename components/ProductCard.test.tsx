import { describe, expect, it } from "vitest";
import { ProductCardPageObject } from "@/test/page-objects/ProductCardPageObject";
import { products } from "@/data/products";

describe("ProductCard", () => {
  it("renders the product name and a status badge", () => {
    const [codeStarters] = products;
    const card = ProductCardPageObject.render(codeStarters);

    expect(card.heading).toHaveTextContent(codeStarters.name);
    expect(card.statusBadge).toBeInTheDocument();
  });

  it("shows Available now when a demo has a buy link", () => {
    const available = products.find((product) => product.demos?.some((demo) => demo.buyUrl));
    expect(available).toBeDefined();

    const card = ProductCardPageObject.render(available!);
    expect(card.statusBadge).toHaveTextContent("Available now");
  });

  it("shows Coming soon when there is no buy link yet", () => {
    const comingSoon = products.find((product) => !product.demos?.length);
    expect(comingSoon).toBeDefined();

    const card = ProductCardPageObject.render(comingSoon!);
    expect(card.statusBadge).toHaveTextContent("Coming soon");
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

  it("renders a demo and buy link for every demo with a buy URL", () => {
    const featured = products.find((product) => product.featured);
    expect(featured?.demos?.length).toBeGreaterThan(0);

    const card = ProductCardPageObject.render(featured!);
    expect(card.demoItems).toHaveLength(featured!.demos!.length);

    for (const demo of featured!.demos!) {
      expect(card.demoLink(demo.label)).toHaveAttribute("href", demo.url);

      const buyLink = card.buyLink(demo.label);
      if (demo.buyUrl) {
        expect(buyLink).toHaveAttribute("href", demo.buyUrl);
        expect(buyLink).toHaveAttribute("target", "_blank");
        expect(buyLink).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
      } else {
        expect(buyLink).not.toBeInTheDocument();
      }
    }
  });

  it("renders no demo list for a product without demos", () => {
    const nonFeatured = products.find((product) => !product.demos?.length);
    const card = ProductCardPageObject.render(nonFeatured!);

    expect(card.demoItems).toHaveLength(0);
  });
});
