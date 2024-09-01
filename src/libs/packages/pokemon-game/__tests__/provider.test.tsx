import { cleanup, render, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Provider } from "@/libs/packages/pokemon-game/context/providers";
import { Context } from "@/libs/packages/pokemon-game/context/context";
import { GAME } from "@/libs/config";
import { Pokemon } from "@/libs/models";
import { client } from "@/libs/graph-ql";
import "@testing-library/jest-dom/vitest";

vi.mock("@/libs/graph-ql", () => ({
	client: {
		query: vi.fn(),
	},
	QUERIES: {
		GET_POKEMON_BY_NUMBER: {},
	},
}));

const mockPokemon: Pokemon = {
	species: "Pikachu",
	classification: "Mouse Pokémon",
	num: 25,
	color: "Yellow",
	weight: 6,
	height: 0.4,
	sprite: "/pikachu.png",
	types: [{ name: "Electric" }],
	abilities: {
		first: {
			name: "Static",
			desc: "May cause paralysis if touched.",
			key: "static",
			shortDesc: "May cause paralysis if touched.",
		},
		second: null,
		hidden: null,
		special: null,
	},
	stats: {
		attack: 55,
		defense: 40,
		hp: 35,
		specialAttack: 50,
		specialDefense: 50,
		speed: 90,
	},
	key: "pikachu",
};

describe("Provider", () => {
	beforeEach(() => {
		cleanup();
	});

	afterEach(() => {
		cleanup();
	});

	it("should initialize with correct default values", () => {
		const { getByText } = render(
			<Provider>
				<Context.Consumer>
					{(value: any) => (
						<div>
							<span>{value.gameState}</span>
							<span>{value.streak}</span>
							<span>{value.lives}</span>
							<span>
								{value.pokemon
									? value.pokemon.species
									: "No Pokemon"}
							</span>
						</div>
					)}
				</Context.Consumer>
			</Provider>
		);

		expect(getByText(GAME.STATES.START)).toBeInTheDocument();
		expect(getByText("0")).toBeInTheDocument();
		expect(getByText(GAME.LIVES.toString())).toBeInTheDocument();
		expect(getByText("No Pokemon")).toBeInTheDocument();
	});

	it("should start the game and fetch a pokemon", async () => {
		(client.query as any).mockResolvedValueOnce({
			data: { pokemon: mockPokemon },
		});

		const { getByText } = render(
			<Provider>
				<Context.Consumer>
					{(value: any) => (
						<div>
							<button onClick={value.start}>Start</button>
							<span>{value.gameState}</span>
							<span>{value.streak}</span>
							<span>{value.lives}</span>
							<span>
								{value.pokemon
									? value.pokemon.species
									: "No Pokemon"}
							</span>
						</div>
					)}
				</Context.Consumer>
			</Provider>
		);

		getByText("Start").click();

		await waitFor(() =>
			expect(getByText(GAME.STATES.IN_PROGRESS)).toBeInTheDocument()
		);
		expect(getByText("0")).toBeInTheDocument();
		expect(getByText(GAME.LIVES.toString())).toBeInTheDocument();
		expect(getByText(mockPokemon.species)).toBeInTheDocument();
	});

	it("should handle correct guesses", async () => {
		(client.query as any).mockResolvedValueOnce({
			data: { pokemon: mockPokemon },
		});

		const { getByText } = render(
			<Provider>
				<Context.Consumer>
					{(value: any) => (
						<div>
							<button onClick={value.start}>Start</button>
							<button onClick={() => value.guess("Electric")}>
								Guess Correct
							</button>
							<button onClick={() => value.guess("Water")}>
								Guess Incorrect
							</button>
							<span>{value.gameState}</span>
							<span>{value.streak}</span>
							<span>{value.lives}</span>
							<span>
								{value.pokemon
									? value.pokemon.species
									: "No Pokemon"}
							</span>
						</div>
					)}
				</Context.Consumer>
			</Provider>
		);

		getByText("Start").click();

		await waitFor(() =>
			expect(getByText(GAME.STATES.IN_PROGRESS)).toBeInTheDocument()
		);

		getByText("Guess Correct").click();
		await waitFor(() => expect(getByText("1")).toBeInTheDocument());
	});

	it("should handle incorrect guesses", async () => {
		(client.query as any).mockResolvedValueOnce({
			data: { pokemon: mockPokemon },
		});

		const { getByText } = render(
			<Provider>
				<Context.Consumer>
					{(value: any) => (
						<div>
							<button onClick={value.start}>Start</button>
							<button onClick={() => value.guess("Electric")}>
								Guess Correct
							</button>
							<button onClick={() => value.guess("Water")}>
								Guess Incorrect
							</button>
							<span>{value.gameState}</span>
							<span>{value.streak}</span>
							<span>{value.lives}</span>
							<span>
								{value.pokemon
									? value.pokemon.species
									: "No Pokemon"}
							</span>
						</div>
					)}
				</Context.Consumer>
			</Provider>
		);

		getByText("Start").click();

		await waitFor(() =>
			expect(getByText(GAME.STATES.IN_PROGRESS)).toBeInTheDocument()
		);

		getByText("Guess Incorrect").click();
		await waitFor(() =>
			expect(getByText((GAME.LIVES - 1).toString())).toBeInTheDocument()
		);
	});
});
