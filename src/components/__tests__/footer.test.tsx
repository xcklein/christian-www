import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { Footer } from "../footer";

describe("Footer", () => {
  it("should render footer", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  it("should display made with love section", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const madeWithLove = screen.getByText(/With|by Me/i);
    expect(madeWithLove).toBeInTheDocument();
  });

  it("should render social buttons", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const footer = screen.getByRole("contentinfo");
    const links = footer.querySelectorAll("a");
    expect(links.length).toBeGreaterThanOrEqual(3);
  });

  it("should have flex layout with space between", () => {
    const { container } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("flex", "items-center", "justify-between");
  });
});
