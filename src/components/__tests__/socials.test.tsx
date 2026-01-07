import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { Socials } from "../socials";

describe("Socials", () => {
  it("should render all social buttons", () => {
    render(
      <BrowserRouter>
        <Socials />
      </BrowserRouter>,
    );
    const container = screen.getByText(/GitHub/i).closest("span");
    expect(container).toBeInTheDocument();
  });

  it("should contain GitHub, LinkedIn, and Source buttons", () => {
    const { container } = render(
      <BrowserRouter>
        <Socials />
      </BrowserRouter>,
    );
    const buttons = container.querySelectorAll("a");
    expect(buttons.length).toBeGreaterThanOrEqual(3);
  });
});
