import { describe, it, expect, vi } from "vitest";
import { fetchWithRetry } from "@/libs/utilities/fetch-with-retry";
import type { Mock } from "vitest";
import { getAllSpaceXLaunches } from "@/libs/api";

vi.mock("@/libs/utilities/fetch-with-retry");
vi.mock("@/libs/config", () => ({
	SPACE_X_ENDPOINT_BASE_URL: "https://mocked-url.com",
}));

describe("getAllSpaceXLaunches", () => {
	it("should fetch and transform SpaceX launches", async () => {
		const mockLaunches = [
			{
				id: "1",
				links: { patch: { small: "image-url-1" } },
				name: "Launch 1",
				date_utc: "2022-01-01T00:00:00.000Z",
				upcoming: false,
				success: true,
			},
			{
				id: "2",
				links: { patch: { small: "image-url-2" } },
				name: "Launch 2",
				date_utc: "2022-02-01T00:00:00.000Z",
				upcoming: true,
				success: false,
			},
		];

		(fetchWithRetry as Mock).mockResolvedValue(mockLaunches);

		const launches = await getAllSpaceXLaunches();

		expect(fetchWithRetry).toHaveBeenCalledWith(
			"https://mocked-url.com/launches"
		);
		expect(launches).toEqual([
			{
				id: "1",
				image: "image-url-1",
				name: "Launch 1",
				date: "2022-01-01T00:00:00.000Z",
				status: "success",
			},
			{
				id: "2",
				image: "image-url-2",
				name: "Launch 2",
				date: "2022-02-01T00:00:00.000Z",
				status: "upcoming",
			},
		]);
	});

	it("should throw an error if fetch fails", async () => {
		(fetchWithRetry as Mock).mockRejectedValue(new Error("Network error"));

		await expect(getAllSpaceXLaunches()).rejects.toThrow("Network error");
		expect(fetchWithRetry).toHaveBeenCalledWith(
			"https://mocked-url.com/launches"
		);
	});
});
