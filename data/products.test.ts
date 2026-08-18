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
      for (const demo of product.demos ?? []) {
        expect(demo.label).not.toMatch(/[–—]/);
        expect(demo.description).not.toMatch(/[–—]/);
      }
    }
  });

  it("has valid https URLs for every demo and buy link", () => {
    for (const product of products) {
      for (const demo of product.demos ?? []) {
        expect(demo.url).toMatch(/^https:\/\//);
        if (demo.buyUrl) {
          expect(demo.buyUrl).toMatch(/^https:\/\//);
        }
      }
    }
  });
});
