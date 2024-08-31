import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { PokemonInfoDetails } from "../components/pokemon-info-details";
import { PokemonDetails } from "@/libs/ui/organisms/pokemon-details";
import { Pokemon } from "@/libs/models";
import "@testing-library/jest-dom/vitest";

vi.mock("@/libs/ui/organisms/pokemon-details", () => ({
	PokemonDetails: vi.fn(() => <div>Mocked PokemonDetails</div>),
}));

describe("PokemonInfoDetails", () => {
	it("should render the PokemonDetails component with the provided pokemon prop", () => {
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

		const { getByText } = render(
			<PokemonInfoDetails pokemon={mockPokemon} />
		);

		expect(getByText("Mocked PokemonDetails")).toBeInTheDocument();

		expect(PokemonDetails).toHaveBeenCalledWith(
			{ pokemon: mockPokemon },
			{}
		);
	});
});
