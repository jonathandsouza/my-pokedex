import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { NavBar } from "../nav";
import "@testing-library/jest-dom/vitest";

describe("NavBar component", () => {
	beforeEach(() => {
		cleanup();
	});

	afterEach(() => {
		cleanup();
	});

	it("should render the NavBar with the correct title", () => {
		render(<NavBar />);

		const titleElement = screen.getByText(/Pokédex/i);
		expect(titleElement).toBeInTheDocument();
		expect(titleElement).toHaveClass(
			"text-3xl font-semibold text-secondary"
		);
	});

	it("should have a link that navigates to the home page", () => {
		render(<NavBar />);

		const linkElement = screen.getByRole("link", { name: /Pokédex/i });
		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveAttribute("href", "/");
	});

	it("should have the correct container and header classes", () => {
		render(<NavBar />);

		const headerElement = screen.getByRole("banner");
		expect(headerElement).toHaveClass("bg-primary");

		const containerElement = screen
			.getByRole("banner")
			.querySelector(".container");
		expect(containerElement).toHaveClass(
			"flex h-16 items-center justify-between px-4 t:px-6"
		);
	});
});
