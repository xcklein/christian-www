import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { SourceButton } from "../source-button";

describe("SourceButton", () => {
  it("should render source button with correct link", () => {
    render(
      <BrowserRouter>
        <SourceButton />
      </BrowserRouter>,
    );
    const link = screen.getByText("Source");
    expect(link).toBeInTheDocument();
  });

  it("should link to github repository", () => {
    render(
      <BrowserRouter>
        <SourceButton />
      </BrowserRouter>,
    );
    const link = screen.getByText("Source").closest("a");
    expect(link).toHaveAttribute("href", "https://github.com/xcklein/christian-www");
  });

  it("should open link in new tab", () => {
    render(
      <BrowserRouter>
        <SourceButton />
      </BrowserRouter>,
    );
    const link = screen.getByText("Source").closest("a");
    expect(link).toHaveAttribute("target", "_blank");
  });
});
