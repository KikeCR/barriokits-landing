import { describe, expect, it } from "vitest";
import { products } from "@/data/products";

describe("products data", () => {
  it("has exactly one featured product", () => {
    const featured = products.filter((product) => product.featured);
    expect(featured).toHaveLength(1);
  });

  it("has unique slugs", () => {
    const slugs = products.map((product) => product.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has no em dashes in any product copy", () => {
    for (const product of products) {
      expect(product.name).not.toMatch(/[–—]/);
      expect(product.description).not.toMatch(/[–—]/);
      for (const highlight of product.highlights ?? []) {
        expect(highlight).not.toMatch(/[–—]/);
      }
    }
  });
});
