import { describe, expect, it } from "vitest";
import { ThemeTogglePageObject } from "@/test/page-objects/ThemeTogglePageObject";

describe("ThemeToggle", () => {
  it("renders a single toggle button", () => {
    const toggle = ThemeTogglePageObject.render();

    expect(toggle.button).toBeInTheDocument();
  });

  it("flips the html class between light and dark on click", async () => {
    const toggle = ThemeTogglePageObject.render();
    const root = document.documentElement;

    const wasDark = root.classList.contains("dark");
    await toggle.click();

    expect(root.classList.contains("dark")).toBe(!wasDark);
  });
});
