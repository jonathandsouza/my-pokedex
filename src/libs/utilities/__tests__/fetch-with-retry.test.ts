import { describe, it, expect, vi } from "vitest";
import { RETRY_ATTEMPTS, RETRY_DELAY } from "@/libs/config";
import { fetchWithRetry } from "@/libs/utilities/fetch-with-retry";

describe("fetchWithRetry", () => {
	it("should fetch data successfully on the first attempt", async () => {
		const mockResponse = { data: "test" };
		global.fetch = vi.fn().mockResolvedValue({
			ok: true,
			json: vi.fn().mockResolvedValue(mockResponse),
		});

		const data = await fetchWithRetry("https://api.example.com/data");

		expect(data).toEqual(mockResponse);
		expect(global.fetch).toHaveBeenCalledTimes(1);
	});

	it("should retry fetching data on failure and eventually succeed", async () => {
		const mockResponse = { data: "test" };
		global.fetch = vi
			.fn()
			.mockRejectedValueOnce(new Error("Network error"))
			.mockResolvedValueOnce({
				ok: true,
				json: vi.fn().mockResolvedValue(mockResponse),
			});

		const data = await fetchWithRetry("https://api.example.com/data");

		expect(data).toEqual(mockResponse);
		expect(global.fetch).toHaveBeenCalledTimes(2);
	});

	it("should retry fetching data up to the maximum attempts and then fail", async () => {
		global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

		await expect(
			fetchWithRetry("https://api.example.com/data")
		).rejects.toThrow("Network error");
		expect(global.fetch).toHaveBeenCalledTimes(RETRY_ATTEMPTS);
	});

	it("should handle non-OK responses and retry", async () => {
		global.fetch = vi
			.fn()
			.mockResolvedValueOnce({
				ok: false,
				status: 500,
			})
			.mockResolvedValueOnce({
				ok: true,
				json: vi.fn().mockResolvedValue({ data: "test" }),
			});

		const data = await fetchWithRetry("https://api.example.com/data");

		expect(data).toEqual({ data: "test" });
		expect(global.fetch).toHaveBeenCalledTimes(2);
	});
});
