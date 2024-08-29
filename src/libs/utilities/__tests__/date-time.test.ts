import { describe, it, expect } from "vitest";
import { getAllYearsFrom } from "../date-time";

describe("getAllYearsFrom", () => {
	it("should return all years from the given start year to the current year", () => {
		const currentYear = new Date().getFullYear();

		const result = getAllYearsFrom(2020);
		const expected = [];
		for (let year = 2020; year <= currentYear; year++) {
			expected.push(year);
		}

		expect(result).toEqual(expected);
	});

	it("should return an empty array if the start year is greater than the current year", () => {
		const nextYear = new Date().getFullYear() + 1;
		const result = getAllYearsFrom(nextYear);
		expect(result).toEqual([]);
	});

	it("should include the start year in the result", () => {
		const currentYear = new Date().getFullYear();
		const startYear = currentYear - 5;

		const result = getAllYearsFrom(startYear);
		expect(result[0]).toBe(startYear);
	});

	it("should include the current year in the result", () => {
		const currentYear = new Date().getFullYear();

		const result = getAllYearsFrom(currentYear);
		expect(result[result.length - 1]).toBe(currentYear);
	});
});
