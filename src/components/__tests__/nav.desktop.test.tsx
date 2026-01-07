import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { NavDesktop } from "../nav.desktop";

describe("NavDesktop", () => {
  it("should render navigation with three links", () => {
    render(
      <BrowserRouter>
        <NavDesktop />
      </BrowserRouter>,
    );
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("should have Home link", () => {
    render(
      <BrowserRouter>
        <NavDesktop />
      </BrowserRouter>,
    );
    const links = screen.getAllByRole("link", { hidden: true });
    const homeLink = links[0];
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("should have Technology link", () => {
    render(
      <BrowserRouter>
        <NavDesktop />
      </BrowserRouter>,
    );
    const links = screen.getAllByRole("link", { hidden: true });
    const techLink = links.find((link) => link.getAttribute("href") === "/technology");
    expect(techLink).toHaveAttribute("href", "/technology");
  });

  it("should have Contact link", () => {
    render(
      <BrowserRouter>
        <NavDesktop />
      </BrowserRouter>,
    );
    const links = screen.getAllByRole("link", { hidden: true });
    const contactLink = links.find((link) => link.getAttribute("href") === "/contact");
    expect(contactLink).toHaveAttribute("href", "/contact");
  });

  it("should use flexbox row layout", () => {
    const { container } = render(
      <BrowserRouter>
        <NavDesktop />
      </BrowserRouter>,
    );
    const nav = container.querySelector("nav");
    expect(nav).toHaveClass("flex", "flex-row", "items-center", "gap-1");
  });

  it("should have three navigation links", () => {
    render(
      <BrowserRouter>
        <NavDesktop />
      </BrowserRouter>,
    );
    const links = screen.getAllByRole("link", { hidden: true });
    expect(links.length).toBe(3);
  });
});
