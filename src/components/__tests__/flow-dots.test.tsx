import { render } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import { FlowDots } from "../flow-dots";

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

describe("FlowDots", () => {
  it("should render three dots by default", () => {
    const { container } = render(<FlowDots period={4} />);
    expect(container.querySelectorAll("span")).toHaveLength(3);
  });

  it("should render the requested number of dots", () => {
    const { container } = render(<FlowDots count={5} period={4} />);
    expect(container.querySelectorAll("span")).toHaveLength(5);
  });

  it("should be hidden from assistive technology", () => {
    const { container } = render(<FlowDots period={4} />);
    expect(container.firstElementChild).toHaveAttribute("aria-hidden", "true");
  });

  it("should apply additional classes", () => {
    const { container } = render(<FlowDots period={4} className="md:h-32" />);
    expect(container.firstElementChild).toHaveClass("md:h-32");
  });
});
