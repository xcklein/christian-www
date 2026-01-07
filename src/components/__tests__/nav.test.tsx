import { useIsMobile } from "@/hooks/use-mobile";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";
import { Nav } from "../nav";

vi.mock("@/hooks/use-mobile");

describe("Nav", () => {
  it("should render NavDesktop when not mobile", () => {
    vi.mocked(useIsMobile).mockReturnValue(false);

    const { container } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );
    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass("flex", "flex-row");
  });

  it("should render NavMobile when on mobile", () => {
    vi.mocked(useIsMobile).mockReturnValue(true);

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => {},
      }),
    });

    const { container } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );
    const button = container.querySelector("button");
    expect(button).toBeInTheDocument();
  });
});
