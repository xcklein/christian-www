/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { describe, expect, it } from "vitest";
import { cn } from "../utils";

describe("cn", () => {
  it("should merge single class", () => {
    expect(cn("px-2")).toBe("px-2");
  });

  it("should merge multiple classes", () => {
    expect(cn("px-2", "py-1")).toBe("px-2 py-1");
  });

  it("should handle conditional classes", () => {
    const condition = true;
    expect(cn("px-2", condition && "py-1")).toBe("px-2 py-1");
  });

  it("should handle falsy conditional classes", () => {
    const condition = false;
    expect(cn("px-2", condition && "py-1")).toBe("px-2");
  });

  it("should merge conflicting Tailwind classes correctly", () => {
    const result = cn("px-2", "px-4");
    expect(result).toBe("px-4");
  });

  it("should handle arrays of classes", () => {
    expect(cn(["px-2", "py-1"])).toBe("px-2 py-1");
  });

  it("should handle objects for conditional classes", () => {
    expect(cn({ "px-2": true, "py-1": false })).toBe("px-2");
  });

  it("should handle empty strings", () => {
    expect(cn("px-2", "", "py-1")).toBe("px-2 py-1");
  });

  it("should handle null and undefined", () => {
    expect(cn("px-2", null, undefined, "py-1")).toBe("px-2 py-1");
  });

  it("should merge complex class combinations", () => {
    const result = cn(
      "flex items-center",
      ["gap-4", "p-2"],
      { "text-lg": true, "font-bold": false },
      "px-2 px-4",
    );
    expect(result).toContain("px-4");
    expect(result).toContain("flex");
    expect(result).toContain("text-lg");
  });
});
