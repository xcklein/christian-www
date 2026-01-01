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

  it("should display copyright text", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const copyright = screen.getByText("© 2025 Me");
    expect(copyright).toBeInTheDocument();
  });

  it("should render source button", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const sourceButton = screen.getByText("Source");
    expect(sourceButton).toBeInTheDocument();
  });
});
