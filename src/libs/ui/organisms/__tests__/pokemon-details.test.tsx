import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { PokemonDetails } from "../pokemon-details";
import { Pokemon } from "@/libs/models/pokemon";
import "@testing-library/jest-dom/vitest";

// Mock data for the Pokemon
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

// Mocking PokemonTypeBadge component
vi.mock("../molecules/pokemon-type-badge", () => ({
	PokemonTypeBadge: ({ type }: { type: string }) => (
		<div data-testid="type-badge">{type}</div>
	),
}));

describe("PokemonDetails Component", () => {
	beforeEach(() => {
		cleanup();
	});

	afterEach(() => {
		cleanup();
	});

	it("renders correctly with provided Pokemon data", () => {
		render(<PokemonDetails pokemon={mockPokemon} />);

		expect(screen.getByText("Pikachu")).toBeInTheDocument();

		expect(screen.getByText("Mouse Pokémon")).toBeInTheDocument();

		expect(screen.getByText("No. 25")).toBeInTheDocument();

		expect(screen.getByText("Color: Yellow")).toBeInTheDocument();

		expect(screen.getByText("6 kg")).toBeInTheDocument();

		expect(screen.getByText("0.4 m")).toBeInTheDocument();

		expect(screen.getByText("Static")).toBeInTheDocument();

		expect(screen.getByText("Attack")).toBeInTheDocument();

		expect(screen.getByText("55")).toBeInTheDocument();

		expect(screen.getByText("Defense")).toBeInTheDocument();

		expect(screen.getByText("40")).toBeInTheDocument();

		expect(screen.getByText("HP")).toBeInTheDocument();
		expect(screen.getByText("35")).toBeInTheDocument();

		expect(screen.getByText("Special Attack")).toBeInTheDocument();

		expect(screen.getByText("Special Defense")).toBeInTheDocument();

		expect(screen.getByText("Speed")).toBeInTheDocument();
		expect(screen.getByText("90")).toBeInTheDocument();
	});
});
