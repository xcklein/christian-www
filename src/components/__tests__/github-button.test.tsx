import { GITHUB_URL } from "@/lib/urls";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { GitHubButton } from "../github-button";

describe("GitHubButton", () => {
  it("should render GitHub button with text", () => {
    render(
      <BrowserRouter>
        <GitHubButton />
      </BrowserRouter>,
    );
    const link = screen.getByText(/GitHub/i).closest("a");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", GITHUB_URL);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should render GitHub button with icon when size includes 'icon'", () => {
    const { container } = render(
      <BrowserRouter>
        <GitHubButton size="icon" />
      </BrowserRouter>,
    );
    const link = container.querySelector("a");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", GITHUB_URL);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("should have correct link attributes for external navigation", () => {
    render(
      <BrowserRouter>
        <GitHubButton />
      </BrowserRouter>,
    );
    const link = screen.getByText(/GitHub/i).closest("a");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
