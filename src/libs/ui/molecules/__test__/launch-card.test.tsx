import { render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { LaunchCard } from "../pokemon-card";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";

// Mock Fav component
const MockFav = ({
	id,
	width,
	height,
}: {
	id: string;
	width: number;
	height: number;
}) => <div data-testid="fav-component" style={{ width, height }}></div>;

describe("LaunchCard", () => {
	afterEach(() => {
		cleanup();
	});

	const defaultProps = {
		id: "1",
		imageURL: "/test-image.jpg",
		name: "Falcon 1",
		date: new Date("2024-08-03"),
		status: "success" as const,
		fav: MockFav,
	};

	it("renders the component with given props", () => {
		render(<LaunchCard {...defaultProps} />);
		expect(screen.getByAltText("SpaceX Launch")).toHaveAttribute(
			"src",
			defaultProps.imageURL
		);
		expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
		expect(screen.getByText("2024")).toBeInTheDocument();
		expect(screen.getByText("Success")).toBeInTheDocument();
		expect(screen.getByTestId("fav-component")).toBeInTheDocument();
	});

	it("renders the placeholder image when imageURL is not provided", () => {
		render(<LaunchCard {...defaultProps} imageURL={null} />);
		expect(screen.getByAltText("SpaceX Launch")).toHaveAttribute(
			"src",
			"/placeholder.svg"
		);
	});

	it("renders the correct status text", () => {
		const { rerender } = render(
			<LaunchCard {...defaultProps} status="success" />
		);
		expect(screen.getByText("Success")).toBeInTheDocument();

		rerender(<LaunchCard {...defaultProps} status="failure" />);
		expect(screen.getByText("Failure")).toBeInTheDocument();

		rerender(<LaunchCard {...defaultProps} status="upcoming" />);
		expect(screen.getByText("Upcoming")).toBeInTheDocument();
	});
});
