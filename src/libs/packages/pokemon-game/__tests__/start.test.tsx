import { render, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Start } from "@/libs/packages/pokemon-game/components/start";
import { useContextHook } from "../context/hooks";
import { GAME_STATE } from "@/libs/config/game";
import "@testing-library/jest-dom/vitest";
import { GAME } from "@/libs/config";

vi.mock("../context/hooks");

describe("Start Component", () => {
	beforeEach(() => {
		cleanup();
	});

	afterEach(() => {
		cleanup();
	});

	it("should render correctly when gameState is GAME_STATE.START", () => {
		(useContextHook as any).mockReturnValue({
			start: vi.fn(),
			gameState: GAME_STATE.START,
		});

		const { getByText } = render(<Start />);

		expect(getByText("Play Guess The Pokémon Type")).toBeInTheDocument();
		expect(getByText("Start")).toBeInTheDocument();
	});

	it("should not render when gameState is not GAME_STATE.START", () => {
		(useContextHook as any).mockReturnValue({
			start: vi.fn(),
			gameState: GAME.STATES.IN_PROGRESS,
		});

		const { queryByText } = render(<Start />);

		expect(queryByText("Play Pokemon Game")).not.toBeInTheDocument();
		expect(queryByText("Start")).not.toBeInTheDocument();
	});

	it("should call start function when Start button is clicked", () => {
		const mockStart = vi.fn();
		(useContextHook as any).mockReturnValue({
			start: mockStart,
			gameState: GAME_STATE.START,
		});

		const { getByText } = render(<Start />);

		fireEvent.click(getByText("Start"));

		expect(mockStart).toHaveBeenCalled();
	});
});
