import { render, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { End } from "@/libs/packages/pokemon-game/components/end";
import { useContextHook } from "../context/hooks";
import "@testing-library/jest-dom/vitest";
import { GAME } from "@/libs/config";

vi.mock("../context/hooks", () => ({
	useContextHook: vi.fn(),
}));

describe("End Component", () => {
	beforeEach(() => {
		cleanup();
	});

	afterEach(() => {
		cleanup();
	});

	it("should render correctly when game state is GAME_STATE.OVER", () => {
		(useContextHook as any).mockReturnValue({
			gameState: GAME.STATES.OVER,
			streak: 5,
			start: vi.fn(),
		});

		const { getByText } = render(<End />);

		expect(getByText("Game Over")).toBeInTheDocument();
		expect(getByText("Streak: 5")).toBeInTheDocument();
		expect(getByText("Re-start")).toBeInTheDocument();
	});

	it("should not render when game state is not GAME_STATE.OVER", () => {
		(useContextHook as any).mockReturnValue({
			gameState: GAME.STATES.IN_PROGRESS,
			streak: 5,
			start: vi.fn(),
		});

		const { queryByText } = render(<End />);

		expect(queryByText("Game Over")).toBeNull();
		expect(queryByText("Streak: 5")).toBeNull();
		expect(queryByText("Re-start")).toBeNull();
	});

	it("should call start function when Re-start button is clicked", () => {
		const mockStart = vi.fn();
		(useContextHook as any).mockReturnValue({
			gameState: GAME.STATES.OVER,
			streak: 5,
			start: mockStart,
		});

		const { getByText } = render(<End />);

		const button = getByText("Re-start");
		fireEvent.click(button);

		expect(mockStart).toHaveBeenCalled();
	});
});
