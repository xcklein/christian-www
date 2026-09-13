import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ThemeProvider } from "../theme-provider";

function mockColorScheme(isDark: boolean) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: isDark && query === "(prefers-color-scheme: dark)",
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    }),
  });
}

describe("ThemeProvider", () => {
  let icon: HTMLLinkElement;

  beforeEach(() => {
    localStorage.clear();
    mockColorScheme(false);
    icon = document.createElement("link");
    icon.rel = "icon";
    icon.type = "image/svg+xml";
    icon.setAttribute("href", "/favicon-light.svg");
    document.head.append(icon);
  });

  afterEach(() => {
    icon.remove();
    document.documentElement.classList.remove("light", "dark");
  });

  it("should apply the dark theme and favicon", () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <div />
      </ThemeProvider>,
    );
    expect(document.documentElement).toHaveClass("dark");
    expect(icon).toHaveAttribute("href", "/favicon-dark.svg");
  });

  it("should apply the light theme and favicon", () => {
    icon.setAttribute("href", "/favicon-dark.svg");
    render(
      <ThemeProvider defaultTheme="light">
        <div />
      </ThemeProvider>,
    );
    expect(document.documentElement).toHaveClass("light");
    expect(icon).toHaveAttribute("href", "/favicon-light.svg");
  });

  it("should follow the system color scheme", () => {
    mockColorScheme(true);
    render(
      <ThemeProvider defaultTheme="system">
        <div />
      </ThemeProvider>,
    );
    expect(document.documentElement).toHaveClass("dark");
    expect(icon).toHaveAttribute("href", "/favicon-dark.svg");
  });

  it("should prefer the stored theme over the default", () => {
    localStorage.setItem("theme", "dark");
    render(
      <ThemeProvider defaultTheme="light">
        <div />
      </ThemeProvider>,
    );
    expect(icon).toHaveAttribute("href", "/favicon-dark.svg");
  });
});
