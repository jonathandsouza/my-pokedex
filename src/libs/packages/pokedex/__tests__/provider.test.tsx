import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Provider } from "@/libs/packages/pokedex/context/providers";
import { Context } from "@/libs/packages/pokedex/context/context";
import { useLazyQuery } from "@apollo/client";
import { INITIAL_OFFSET, PAGE_SIZE } from "@/libs/config/pagination";
import { PokemonCard } from "@/libs/models/pokemon-card";
import "@testing-library/jest-dom/vitest";

// Mocking useLazyQuery from @apollo/client
vi.mock("@apollo/client", () => {
	const actualApolloClient = vi.importActual("@apollo/client");
	return {
		...actualApolloClient,
		useLazyQuery: vi.fn(),
		InMemoryCache: vi.fn(),
		ApolloClient: vi.fn(),
		HttpLink: vi.fn(),
		gql: vi.fn(),
	};
});

const mockGetData = vi.fn();
const mockFetchMore = vi.fn();

const mockPokemonData: Array<PokemonCard> = [
	{
		num: 1,
		species: "Bulbasaur",
		sprite: "/bulbasaur.png",
		key: "bulbasaur",
	},
	{ num: 2, species: "Ivysaur", sprite: "/ivysaur.png", key: "ivysaur" },
];

describe("Provider", () => {
	beforeEach(() => {
		(useLazyQuery as any).mockReturnValue([
			mockGetData,
			{
				loading: false,
				data: { pokemons: mockPokemonData },
				fetchMore: mockFetchMore,
			},
		]);
		cleanup();
	});

	afterEach(() => {
		cleanup(); // Also clean up after each test to be safe
	});

	it("should render children with initial data", () => {
		render(
			<Provider initialData={mockPokemonData}>
				<Context.Consumer>
					{(value: any) => (
						<div>
							{value.pokemons.map((pokemon: PokemonCard) => (
								<div key={pokemon.species}>
									{pokemon.species}
								</div>
							))}
						</div>
					)}
				</Context.Consumer>
			</Provider>
		);

		expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
		expect(screen.getByText("Ivysaur")).toBeInTheDocument();
	});

	it("should call getData on initial fetch", async () => {
		render(
			<Provider initialData={[]}>
				<Context.Consumer>
					{(value) => (
						<button onClick={(value as any).nextPage}>
							Next Page
						</button>
					)}
				</Context.Consumer>
			</Provider>
		);

		screen.getByText("Next Page").click();

		await waitFor(() => {
			expect(mockGetData).toHaveBeenCalledWith({
				variables: {
					offset: INITIAL_OFFSET,
					take: PAGE_SIZE * 2,
				},
			});
		});
	});

	it("should call fetchMore on subsequent fetches", async () => {
		render(
			<Provider initialData={mockPokemonData}>
				<Context.Consumer>
					{(value) => (
						<button onClick={(value as any).nextPage}>
							Next Page
						</button>
					)}
				</Context.Consumer>
			</Provider>
		);

		screen.getByText("Next Page").click(); // Initial fetch
		screen.getByText("Next Page").click(); // Subsequent fetch

		await waitFor(() => {
			expect(mockFetchMore).toHaveBeenCalledWith({
				variables: {
					offset: INITIAL_OFFSET + mockPokemonData.length,
					take: PAGE_SIZE,
				},
			});
		});
	});
});
