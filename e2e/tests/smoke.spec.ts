import { expect, test } from "@playwright/test";
import { HomePage } from "@/e2e/pages/HomePage";

test.describe("Homepage smoke", () => {
  test("loads with no console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") {
        errors.push(message.text());
      }
    });

    const home = new HomePage(page);
    await home.goto();

    await expect(page).toHaveTitle(/Barrio Kits/);
    expect(errors).toEqual([]);
  });

  test("hero CTA scrolls to the products section", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await home.clickHeroCta();
    await expect(home.productsHeading).toBeInViewport();
  });

  test("renders three product cards", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await expect(home.productCards).toHaveCount(3);
  });

  test("about section is reachable", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await expect(home.aboutHeading).toBeVisible();
  });
});
