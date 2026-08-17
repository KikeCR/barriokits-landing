import { expect, test } from "@playwright/test";
import { LegalPage } from "@/e2e/pages/LegalPage";

test.describe("Legal pages", () => {
  test("terms page renders with a single h1", async ({ page }) => {
    const legal = new LegalPage(page);
    await legal.goto("/terms");

    await expect(legal.heading).toHaveText("Terms of Service");
    await expect(page).toHaveTitle(/Terms of Service/);
  });

  test("privacy page renders with a single h1", async ({ page }) => {
    const legal = new LegalPage(page);
    await legal.goto("/privacy");

    await expect(legal.heading).toHaveText("Privacy Policy");
    await expect(page).toHaveTitle(/Privacy Policy/);
  });

  test("footer links navigate to terms and privacy", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Terms" }).click();
    await expect(page).toHaveURL(/\/terms$/);

    await page.goto("/");
    await page.getByRole("link", { name: "Privacy" }).click();
    await expect(page).toHaveURL(/\/privacy$/);
  });
});
