import { useTheme } from "@/hooks/use-theme";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ThemeButton } from "../theme-button";

vi.mock("@/hooks/use-theme");

describe("ThemeButton", () => {
  it("should render theme button", () => {
    const mockSetTheme = vi.fn();
    vi.mocked(useTheme).mockReturnValue({
      theme: "system",
      actual: "light",
      setTheme: mockSetTheme,
    });

    render(<ThemeButton />);
    const button = screen.getByText("Toggle theme");
    expect(button).toBeInTheDocument();
  });

  it("should toggle theme from light to dark on click", async () => {
    const user = userEvent.setup();
    const mockSetTheme = vi.fn();
    vi.mocked(useTheme).mockReturnValue({
      theme: "light",
      actual: "light",
      setTheme: mockSetTheme,
    });

    render(<ThemeButton />);
    const button = screen.getByText("Toggle theme").closest("button");
    expect(button).toBeTruthy();
    if (button) {
      await user.click(button);
      expect(mockSetTheme).toHaveBeenCalledWith("dark");
    }
  });

  it("should toggle theme from dark to light on click", async () => {
    const user = userEvent.setup();
    const mockSetTheme = vi.fn();
    vi.mocked(useTheme).mockReturnValue({
      theme: "dark",
      actual: "dark",
      setTheme: mockSetTheme,
    });

    render(<ThemeButton />);
    const button = screen.getByText("Toggle theme").closest("button");
    expect(button).toBeTruthy();
    if (button) {
      await user.click(button);
      expect(mockSetTheme).toHaveBeenCalledWith("light");
    }
  });
});
