import { beforeEach, describe, expect, it, vi } from "vitest";
import { submit, SUBMIT_URL, type SubmitResponse } from "../web3forms";

describe("web3forms", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  describe("submit", () => {
    it("should send POST request to web3forms API", async () => {
      const mockResponse: SubmitResponse = { success: true };
      fetchMock.mockResolvedValueOnce({
        json: () => Promise.resolve(mockResponse),
      });

      const testData = { email: "test@example.com", message: "Hello" };
      const result = await submit(testData);

      expect(fetchMock).toHaveBeenCalledWith(
        SUBMIT_URL,
        expect.objectContaining({
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }),
      );
      expect(result).toEqual(mockResponse);
    });

    it("should stringify data with proper formatting", async () => {
      const mockResponse: SubmitResponse = { success: true };
      fetchMock.mockResolvedValueOnce({
        json: () => Promise.resolve(mockResponse),
      });

      const testData = { email: "test@example.com", message: "Hello" };
      await submit(testData);

      const callArgs = fetchMock.mock.calls[0];
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const body = callArgs[1].body;
      expect(body).toBe(JSON.stringify(testData, null, 2));
    });

    it("should return success response", async () => {
      const mockResponse: SubmitResponse = { success: true, message: "Email sent" };
      fetchMock.mockResolvedValueOnce({
        json: () => Promise.resolve(mockResponse),
      });

      const result = await submit({ test: "data" });

      expect(result.success).toBe(true);
      expect(result.message).toBe("Email sent");
    });

    it("should return error response", async () => {
      const mockResponse: SubmitResponse = { success: false, message: "Invalid email" };
      fetchMock.mockResolvedValueOnce({
        json: () => Promise.resolve(mockResponse),
      });

      const result = await submit({ email: "invalid" });

      expect(result.success).toBe(false);
      expect(result.message).toBe("Invalid email");
    });

    it("should handle different data types", async () => {
      const mockResponse: SubmitResponse = { success: true };
      fetchMock.mockResolvedValueOnce({
        json: () => Promise.resolve(mockResponse),
      });

      const testData = {
        string: "value",
        number: 42,
        boolean: true,
        array: [1, 2, 3],
        object: { nested: "value" },
      };

      const result = await submit(testData);

      expect(result.success).toBe(true);
      const callArgs = fetchMock.mock.calls[0];
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(callArgs[1].body).toContain("nested");
    });

    it("should set correct headers", async () => {
      const mockResponse: SubmitResponse = { success: true };
      fetchMock.mockResolvedValueOnce({
        json: () => Promise.resolve(mockResponse),
      });

      await submit({ test: "data" });

      const callArgs = fetchMock.mock.calls[0];
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(callArgs[1].headers["Content-Type"]).toBe("application/json");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(callArgs[1].headers["Accept"]).toBe("application/json");
    });

    it("should use correct SUBMIT_URL", async () => {
      const mockResponse: SubmitResponse = { success: true };
      fetchMock.mockResolvedValueOnce({
        json: () => Promise.resolve(mockResponse),
      });

      await submit({ test: "data" });

      expect(fetchMock).toHaveBeenCalledWith(
        "https://api.web3forms.com/submit",
        expect.any(Object),
      );
    });
  });
});
