import { describe, expect, it } from "vitest";
import { NavPageObject } from "@/test/page-objects/NavPageObject";
import { siteConfig } from "@/data/site";

describe("Nav", () => {
  it("links to the products and about sections", () => {
    const nav = NavPageObject.render();

    expect(nav.productsLink).toHaveAttribute("href", "/#products");
    expect(nav.aboutLink).toHaveAttribute("href", "/#about");
  });

  it("links to the GitHub org in a new tab", () => {
    const nav = NavPageObject.render();

    expect(nav.githubLink).toHaveAttribute("href", siteConfig.githubUrl);
    expect(nav.githubLink).toHaveAttribute("target", "_blank");
    expect(nav.githubLink).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });

  it("renders a theme toggle button", () => {
    const nav = NavPageObject.render();

    expect(nav.themeToggleButton).toBeInTheDocument();
  });

  it("links the logo back to the top of the page", () => {
    const nav = NavPageObject.render();

    expect(nav.logoLink).toHaveAttribute("href", "/#top");
  });
});
