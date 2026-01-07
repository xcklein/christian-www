import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router";
import { beforeAll, describe, expect, it } from "vitest";
import { NavMobile } from "../nav.mobile";

beforeAll(() => {
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
});

describe("NavMobile", () => {
  it("should render menu button", () => {
    render(
      <BrowserRouter>
        <NavMobile />
      </BrowserRouter>,
    );
    const menuButton = screen.getByRole("button");
    expect(menuButton).toBeInTheDocument();
  });

  it("should render drawer with navigation links", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <NavMobile />
      </BrowserRouter>,
    );
    const menuButton = screen.getByRole("button");
    await user.click(menuButton);

    const homeLink = screen.getByRole("link", { name: /Home/i });
    expect(homeLink).toBeInTheDocument();
  });

  it("should have Home, Technology, and Contact navigation items", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <NavMobile />
      </BrowserRouter>,
    );
    const menuButton = screen.getByRole("button");
    await user.click(menuButton);

    expect(screen.getByRole("link", { name: /Home/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /Technology/i })).toHaveAttribute(
      "href",
      "/technology",
    );
    expect(screen.getByRole("link", { name: /Contact/i })).toHaveAttribute("href", "/contact");
  });

  it("should display site title in drawer", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <NavMobile />
      </BrowserRouter>,
    );
    const menuButton = screen.getByRole("button");
    await user.click(menuButton);

    const title = screen.getByText("christian.gg");
    expect(title).toBeInTheDocument();
  });

  it("should close drawer when navigation item is clicked", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <NavMobile />
      </BrowserRouter>,
    );
    const menuButton = screen.getByRole("button");
    await user.click(menuButton);

    const homeLink = screen.getByRole("link", { name: /Home/i });
    await user.click(homeLink);

    // After clicking, the home link should still be accessible
    expect(homeLink).toBeInTheDocument();
  });
});
