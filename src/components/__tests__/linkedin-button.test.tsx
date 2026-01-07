import { LINKEDIN_URL } from "@/lib/urls";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { LinkedInButton } from "../linkedin-button";

describe("LinkedInButton", () => {
  it("should render LinkedIn button with text", () => {
    render(
      <BrowserRouter>
        <LinkedInButton />
      </BrowserRouter>,
    );
    const link = screen.getByText(/LinkedIn/i).closest("a");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", LINKEDIN_URL);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should render LinkedIn button with icon when size includes 'icon'", () => {
    const { container } = render(
      <BrowserRouter>
        <LinkedInButton size="icon" />
      </BrowserRouter>,
    );
    const link = container.querySelector("a");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", LINKEDIN_URL);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("should have correct link attributes for external navigation", () => {
    render(
      <BrowserRouter>
        <LinkedInButton />
      </BrowserRouter>,
    );
    const link = screen.getByText(/LinkedIn/i).closest("a");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
