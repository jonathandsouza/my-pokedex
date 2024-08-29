import { describe, it, expect } from "vitest";
import { isClient, isServer } from "../user-agent";

describe("Environment check functions", () => {
	it("should return true for isServer when window is undefined", () => {
		// Mock the window object
		const originalWindow = global.window;
		delete global.window;

		expect(isServer()).toBe(true);

		// Restore the original window object
		global.window = originalWindow;
	});

	it("should return false for isClient when window is undefined", () => {
		// Mock the window object
		const originalWindow = global.window;
		delete global.window;

		expect(isClient()).toBe(false);

		// Restore the original window object
		global.window = originalWindow;
	});

	it("should return false for isServer when window is defined", () => {
		// Mock the window object
		global.window = {};

		expect(isServer()).toBe(false);

		// Clean up
		delete global.window;
	});

	it("should return true for isClient when window is defined", () => {
		// Mock the window object
		global.window = {};

		expect(isClient()).toBe(true);

		// Clean up
		delete global.window;
	});
});
