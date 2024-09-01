import { render, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Play } from "@/libs/packages/pokemon-game/components/play";
import { useContextHook } from "../context/hooks";
import "@testing-library/jest-dom/vitest";
import { GAME_STATE } from "@/libs/config/game";
import { POKEMON_TYPE } from "@/libs/models";

vi.mock("../context/hooks", () => ({
	useContextHook: vi.fn(),
}));

describe("Play Component", () => {
	beforeEach(() => {
		cleanup();
	});

	afterEach(() => {
		cleanup();
	});

	it("should render correctly when game state is GAME_STATE.IN_PROGRESS", () => {
		(useContextHook as any).mockReturnValue({
			pokemon: { species: "Pikachu", sprite: "/pikachu.png" },
			gameState: GAME_STATE.IN_PROGRESS,
			guess: vi.fn(),
			lives: 3,
			streak: 5,
			end: vi.fn(),
		});

		const { getByText, getByAltText } = render(<Play />);

		expect(getByText("Streak: 5")).toBeInTheDocument();
		expect(getByAltText("Pikachu")).toBeInTheDocument();
		expect(getByText("Guess the Pokemon Type ?")).toBeInTheDocument();
		expect(getByText("Guess")).toBeInTheDocument();
		expect(getByText("End")).toBeInTheDocument();
	});

	it("should not render when game state is not GAME_STATE.IN_PROGRESS", () => {
		(useContextHook as any).mockReturnValue({
			pokemon: { species: "Pikachu", sprite: "/pikachu.png" },
			gameState: GAME_STATE.OVER,
			guess: vi.fn(),
			lives: 3,
			streak: 5,
			end: vi.fn(),
		});

		const { queryByText, queryByAltText } = render(<Play />);

		expect(queryByText("Streak: 5")).toBeNull();
		expect(queryByAltText("Pikachu")).toBeNull();
		expect(queryByText("Guess the Pokemon Type ?")).toBeNull();
		expect(queryByText("Guess")).toBeNull();
		expect(queryByText("End")).toBeNull();
	});

	it("should call end function when End button is clicked", () => {
		const mockEnd = vi.fn();
		(useContextHook as any).mockReturnValue({
			pokemon: { species: "Pikachu", sprite: "/pikachu.png" },
			gameState: GAME_STATE.IN_PROGRESS,
			guess: vi.fn(),
			lives: 3,
			streak: 5,
			end: mockEnd,
		});

		const { getByText } = render(<Play />);

		const endButton = getByText("End");
		fireEvent.click(endButton);

		expect(mockEnd).toHaveBeenCalled();
	});

	it("should handle image error correctly", () => {
		(useContextHook as any).mockReturnValue({
			pokemon: { species: "Pikachu", sprite: "/invalid.png" },
			gameState: GAME_STATE.IN_PROGRESS,
			guess: vi.fn(),
			lives: 3,
			streak: 5,
			end: vi.fn(),
		});

		const { getByAltText } = render(<Play />);

		const img = getByAltText("Pikachu");
		fireEvent.error(img);

		expect(img).toHaveAttribute("src", "/placeholder.svg");
	});
});
