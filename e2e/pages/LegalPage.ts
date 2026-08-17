import type { Locator, Page } from "@playwright/test";

export class LegalPage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole("heading", { level: 1 });
  }

  async goto(path: "/terms" | "/privacy") {
    await this.page.goto(path);
  }
}
