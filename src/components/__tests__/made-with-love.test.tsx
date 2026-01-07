import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MadeWithLove } from "../made-with-love";

describe("MadeWithLove", () => {
  it("should render made with love text", () => {
    render(<MadeWithLove />);
    const text = screen.getByText(/With/);
    expect(text).toBeInTheDocument();
  });

  it("should contain 'by Me' text", () => {
    render(<MadeWithLove />);
    const text = screen.getByText(/by Me/);
    expect(text).toBeInTheDocument();
  });

  it("should render heart icon", () => {
    const { container } = render(<MadeWithLove />);
    const heartIcon = container.querySelector("svg");
    expect(heartIcon).toBeInTheDocument();
  });
});
