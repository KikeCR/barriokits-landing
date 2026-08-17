import type { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly heroCta: Locator;
  readonly productsHeading: Locator;
  readonly aboutHeading: Locator;
  readonly productCards: Locator;
  readonly themeToggle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroCta = page.getByRole("link", { name: "View products" });
    this.productsHeading = page.getByRole("heading", { name: "Three ways to skip the setup." });
    this.aboutHeading = page.getByRole("heading", { name: "Built for people who would rather ship." });
    this.productCards = page.getByRole("article");
    this.themeToggle = page.getByRole("button", { name: /switch to (light|dark) mode/i });
  }

  async goto() {
    await this.page.goto("/");
  }

  async clickHeroCta() {
    await this.heroCta.click();
  }

  async toggleTheme() {
    await this.themeToggle.click();
  }

  isDarkMode() {
    return this.page.evaluate(() => document.documentElement.classList.contains("dark"));
  }
}
