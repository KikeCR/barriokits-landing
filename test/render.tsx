import { render, type RenderOptions } from "@testing-library/react";
import type { ReactElement } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";

export function renderWithProviders(ui: ReactElement, options?: RenderOptions) {
  return render(ui, { wrapper: ThemeProvider, ...options });
}

export * from "@testing-library/react";
