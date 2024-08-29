import { describe, it, expect } from "vitest";
import { cn } from "../cn";

describe("cn function", () => {
	it("should merge class names correctly", () => {
		const result = cn("bg-red-500", "text-white", "p-4");
		expect(result).toBe("bg-red-500 text-white p-4");
	});

	it("should handle conditional class names", () => {
		const result = cn("bg-red-500", false && "hidden", "text-white");
		expect(result).toBe("bg-red-500 text-white");
	});

	it("should handle arrays of class names", () => {
		const result = cn(["bg-red-500", "text-white"], "p-4");
		expect(result).toBe("bg-red-500 text-white p-4");
	});

	it("should handle objects with boolean values", () => {
		const result = cn({
			"bg-red-500": true,
			"text-white": true,
			hidden: false,
		});
		expect(result).toBe("bg-red-500 text-white");
	});

	it("should merge Tailwind classes correctly", () => {
		const result = cn("bg-red-500", "bg-blue-500", "text-white");
		expect(result).toBe("bg-blue-500 text-white"); // tailwind-merge should merge bg-red-500 and bg-blue-500 to bg-blue-500
	});

	it("should handle no arguments", () => {
		const result = cn();
		expect(result).toBe("");
	});
});
