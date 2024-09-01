import { cleanup, render } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Loading } from "@/libs/packages/pokemon-game/components/loading";
import { useContextHook } from "../context/hooks";
import { GAME_STATE } from "@/libs/config/game";
import "@testing-library/jest-dom/vitest";
import { GAME } from "@/libs/config";

vi.mock("../context/hooks", () => ({
	useContextHook: vi.fn(),
}));

describe("Loading", () => {
	beforeEach(() => {
		cleanup();
	});

	afterEach(() => {
		cleanup();
	});

	it("should render children correctly", () => {
		(useContextHook as any).mockReturnValue({
			gameState: GAME.STATES.IN_PROGRESS,
		});

		const { getByText } = render(
			<Loading>
				<div>Child Component</div>
			</Loading>
		);

		expect(getByText("Child Component")).toBeInTheDocument();
	});

	it("should have loading class when gameState is LOADING", () => {
		(useContextHook as any).mockReturnValue({
			gameState: GAME_STATE.LOADING,
		});

		const { container } = render(
			<Loading>
				<div>Child Component</div>
			</Loading>
		);

		expect(container.firstChild).toHaveClass(
			"opacity-20 pointer-events-none"
		);
	});

	it("should not have loading class when gameState is not LOADING", () => {
		(useContextHook as any).mockReturnValue({
			gameState: GAME.STATES.IN_PROGRESS,
		});

		const { container } = render(
			<Loading>
				<div>Child Component</div>
			</Loading>
		);

		expect(container.firstChild).not.toHaveClass(
			"opacity-20 pointer-events-none"
		);
	});
});
