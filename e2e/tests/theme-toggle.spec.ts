import { expect, test } from "@playwright/test";
import { HomePage } from "@/e2e/pages/HomePage";

test.describe("Theme toggle", () => {
  test("switches between light and dark mode", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    const initiallyDark = await home.isDarkMode();
    await home.toggleTheme();
    const afterToggle = await home.isDarkMode();

    expect(afterToggle).toBe(!initiallyDark);
  });

  test("persists the chosen theme across a reload", async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await home.toggleTheme();
    const afterToggle = await home.isDarkMode();

    await page.reload();
    const afterReload = await home.isDarkMode();

    expect(afterReload).toBe(afterToggle);
  });
});
