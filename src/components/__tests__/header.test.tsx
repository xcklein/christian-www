import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/hooks/use-theme";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Header } from "../header";

vi.mock("@/hooks/use-mobile");
vi.mock("@/hooks/use-theme");

describe("Header", () => {
  beforeEach(() => {
    vi.mocked(useTheme).mockReturnValue({
      theme: "system",
      actual: "light",
      setTheme: vi.fn(),
    });
  });

  it("should render header", () => {
    vi.mocked(useIsMobile).mockReturnValue(false);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("should display nav component", () => {
    vi.mocked(useIsMobile).mockReturnValue(false);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("should render theme button", () => {
    vi.mocked(useIsMobile).mockReturnValue(false);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const themeButton = screen.getByRole("button", { name: /toggle theme/i });
    expect(themeButton).toBeInTheDocument();
  });

  it("should display home link on desktop", () => {
    vi.mocked(useIsMobile).mockReturnValue(false);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const links = screen.getAllByRole("link");
    const homeLink = links[0];
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("should not display home link on mobile", () => {
    vi.mocked(useIsMobile).mockReturnValue(true);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const homeLink = screen.queryByRole("link", { name: /home/i });
    expect(homeLink).not.toBeInTheDocument();
  });
});
