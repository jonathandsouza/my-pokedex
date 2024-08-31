import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { PokeCard } from "@/libs/ui/molecules/pokemon-card";
import "@testing-library/jest-dom/vitest";
import { PokemonCard } from "@/libs/models/pokemon-card";

describe("PokeCard", () => {
	const mockPokemon: PokemonCard = {
		num: 1,
		key: "pikachu",
		sprite: "/pikachu.png",
		species: "Pikachu",
	};

	beforeEach(() => {
		cleanup();
	});

	it("should render the pokemon image and species name", () => {
		const { getByAltText, getByText } = render(
			<PokeCard pokemon={mockPokemon} />
		);

		const imgElement = getByAltText("Pikachu");
		expect(imgElement).toBeInTheDocument();
		expect(imgElement).toHaveAttribute("src", "/pikachu.png");

		const speciesElement = getByText("Pikachu");
		expect(speciesElement).toBeInTheDocument();
	});

	it("should handle image error and set placeholder image", () => {
		const { getByAltText } = render(<PokeCard pokemon={mockPokemon} />);

		const imgElement = getByAltText("Pikachu");
		expect(imgElement).toBeInTheDocument();

		// Simulate image error
		imgElement.dispatchEvent(new Event("error"));

		expect(imgElement).toHaveAttribute("src", "/placeholder.svg");
	});
});
