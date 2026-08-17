import { Nav } from "@/components/Nav";
import { renderWithProviders, screen } from "@/test/render";

export class NavPageObject {
  static render() {
    renderWithProviders(<Nav />);
    return new NavPageObject();
  }

  get productsLink() {
    return screen.getByRole("link", { name: "Products" });
  }

  get aboutLink() {
    return screen.getByRole("link", { name: "About" });
  }

  get githubLink() {
    return screen.getByRole("link", { name: /github/i });
  }

  get themeToggleButton() {
    return screen.getByRole("button", { name: /switch to (light|dark) mode|toggle color theme/i });
  }

  get logoLink() {
    return screen.getByRole("link", { name: /barrio kits, back to top/i });
  }
}
