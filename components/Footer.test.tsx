import { describe, expect, it } from "vitest";
import { FooterPageObject } from "@/test/page-objects/FooterPageObject";
import { siteConfig } from "@/data/site";

describe("Footer", () => {
  it("links to the terms and privacy pages", () => {
    const footer = FooterPageObject.render();

    expect(footer.termsLink).toHaveAttribute("href", "/terms");
    expect(footer.privacyLink).toHaveAttribute("href", "/privacy");
  });

  it("links to the GitHub org", () => {
    const footer = FooterPageObject.render();

    expect(footer.githubLink).toHaveAttribute("href", siteConfig.githubUrl);
  });

  it("shows a mailto link with the contact email", () => {
    const footer = FooterPageObject.render();

    expect(footer.contactEmailLink).toHaveAttribute("href", `mailto:${siteConfig.contactEmail}`);
  });

  it("shows the current year in the copyright line", () => {
    const footer = FooterPageObject.render();

    expect(footer.copyrightText).toBeInTheDocument();
  });
});
