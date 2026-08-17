import { Footer } from "@/components/Footer";
import { renderWithProviders, screen } from "@/test/render";
import { siteConfig } from "@/data/site";

export class FooterPageObject {
  static render() {
    renderWithProviders(<Footer />);
    return new FooterPageObject();
  }

  get termsLink() {
    return screen.getByRole("link", { name: "Terms" });
  }

  get privacyLink() {
    return screen.getByRole("link", { name: "Privacy" });
  }

  get githubLink() {
    return screen.getByRole("link", { name: "GitHub" });
  }

  get contactEmailLink() {
    return screen.getByRole("link", { name: siteConfig.contactEmail });
  }

  get copyrightText() {
    return screen.getByText(new RegExp(`${new Date().getFullYear()}.*Barrio Kits`));
  }
}
