import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "@/components/ThemeToggle";
import { renderWithProviders, screen } from "@/test/render";

export class ThemeTogglePageObject {
  private readonly user = userEvent.setup();

  static render() {
    renderWithProviders(<ThemeToggle />);
    return new ThemeTogglePageObject();
  }

  get button() {
    return screen.getByRole("button");
  }

  async click() {
    await this.user.click(this.button);
  }
}
