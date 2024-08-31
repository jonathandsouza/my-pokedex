import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { GridView } from "../components/grid-view";
import { useContextHook } from "../context/hooks";
import "@testing-library/jest-dom/vitest";
import { PokemonCard } from "@/libs/models";

vi.mock("../context/hooks", () => ({
	useContextHook: vi.fn(),
}));

vi.mock("react-intersection-observer", () => ({
	InView: ({ onChange, children }: any) => {
		setTimeout(() => onChange(false), 0);
		setTimeout(() => onChange(true), 100);
		return <div>{children}</div>;
	},
}));

describe("GridView", () => {
	afterEach(() => {
		vi.clearAllMocks();
	});

	it("renders the PokemonGridView with pokemons", () => {
		const mockPokemons: Array<PokemonCard> = [
			{ species: "Pikachu", num: 1, sprite: "pikachu.png", key: "1" },
			{
				species: "Charmander",
				num: 4,
				sprite: "charmander.png",
				key: "4",
			},
		];
		(useContextHook as any).mockReturnValue({
			pokemons: mockPokemons,
			loading: false,
			nextPage: vi.fn(),
		});

		render(<GridView />);

		expect(screen.getByText("Pikachu")).toBeInTheDocument();
		expect(screen.getByText("Charmander")).toBeInTheDocument();
	});

	it("triggers nextPage when InView is in view", async () => {
		const nextPageMock = vi.fn();
		(useContextHook as any).mockReturnValue({
			pokemons: [],
			loading: false,
			nextPage: nextPageMock,
		});

		render(<GridView />);

		await new Promise((resolve) => setTimeout(resolve, 150));

		expect(nextPageMock).toHaveBeenCalledTimes(1);
	});

	it("displays loading text when loading is true", () => {
		(useContextHook as any).mockReturnValue({
			pokemons: [],
			loading: true,
			nextPage: vi.fn(),
		});

		render(<GridView />);

		expect(screen.getByText("Loading...")).toBeInTheDocument();
	});
});
