import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { PokemonGridView } from "../grid-view";
import { Pokemon } from "@/libs/models";
import "@testing-library/jest-dom/vitest";

// Mock data
const mockPokemons: Array<Pokemon> = [
	{
		num: 1,
		species: "Bulbasaur",
		sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
		color: "green",
		stats: {
			hp: 45,
			defense: 49,
			attack: 49,
			specialAttack: 65,
			specialDefense: 65,
			speed: 45,
		},
		types: [{ name: "Grass" }],
		weight: 69,
		height: 7,
		key: "1",
		abilities: { first: null, second: null, hidden: null, special: null },
		classification: "Seed Pokémon",
	},
];

describe("PokemonGridView", () => {
	beforeEach(() => {
		cleanup();
	});

	afterEach(() => {
		cleanup();
	});

	it('renders "No Pokemon found" when the list is empty', () => {
		render(<PokemonGridView pokemons={[]} />);

		expect(screen.getByText("No Pokemon found")).toBeInTheDocument();
	});

	it("renders a list of PokeCard components when the list is populated", () => {
		render(<PokemonGridView pokemons={mockPokemons} />);

		const pokeCards = screen.getAllByTestId("poke-card");
		expect(pokeCards).toHaveLength(mockPokemons.length);

		pokeCards.forEach((card, index) => {
			expect(card).toHaveTextContent(mockPokemons[index].species);
		});
	});
});
