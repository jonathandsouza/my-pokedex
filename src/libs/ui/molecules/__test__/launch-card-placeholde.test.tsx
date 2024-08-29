import { render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { LaunchCardPlaceholder } from "../launch-card-placeholder";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";

describe("LaunchCardPlaceholder", () => {
	// Automatically unmount and cleanup DOM after the test is finished.
	afterEach(() => {
		cleanup();
	});

	it("has the correct class names", () => {
		render(<LaunchCardPlaceholder />);
		const placeholder = screen.getByTestId("launch-card-placeholder");
		expect(placeholder).toHaveClass(
			"border bg-card rounded-lg overflow-hidden shadow-lg basis-72 h-[393.6px]"
		);
	});

	it("renders the component", () => {
		render(<LaunchCardPlaceholder />);
		expect(screen.getByRole("presentation")).toBeInTheDocument();
	});
});
