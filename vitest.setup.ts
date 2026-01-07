/// <reference lib="dom" />

import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// Polyfill pointer capture for Drawer component testing (vaul library)
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (!HTMLElement.prototype.setPointerCapture) {
  HTMLElement.prototype.setPointerCapture = () => {};
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (!HTMLElement.prototype.releasePointerCapture) {
  HTMLElement.prototype.releasePointerCapture = () => {};
}

// Polyfill getComputedStyle to handle transform property
const originalGetComputedStyle = window.getComputedStyle;
vi.stubGlobal("getComputedStyle", (element: Element, pseudoElt?: string | null) => {
  const computedStyle = originalGetComputedStyle(element, pseudoElt);
  if (!computedStyle.transform) {
    Object.defineProperty(computedStyle, "transform", {
      value: "none",
      writable: true,
    });
  }
  return computedStyle;
});

afterEach(() => {
  cleanup();
});
