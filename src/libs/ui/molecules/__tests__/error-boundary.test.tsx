import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { ErrorBoundary } from "../error-boundary";
import "@testing-library/jest-dom/vitest";

// Mock Component that throws an error
const ProblemChild = () => {
	throw new Error("Test error");
};

describe("ErrorBoundary", () => {
	it("should render the fallback UI when a child component throws an error", () => {
		// Render the ErrorBoundary with the ProblemChild inside it
		render(
			<ErrorBoundary>
				<ProblemChild />
			</ErrorBoundary>
		);

		// Check if the fallback UI is displayed
		expect(
			screen.getByText(/oops, there is an error/i)
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /try again/i })
		).toBeInTheDocument();
	});
});
