import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { PokemonTypeBadge } from "@/libs/ui/molecules/pokemon-type-badge";
import "@testing-library/jest-dom/vitest";

describe("PokemonTypeBadge", () => {
	const types = [
		{ type: "Normal", bg: "bg-[#A8A77A]", text: "Normal" },
		{ type: "Fire", bg: "bg-[#EE8130]", text: "Fire" },
		{ type: "Water", bg: "bg-[#6390F0]", text: "Water" },
		{ type: "Electric", bg: "bg-[#F7D02C]", text: "Electric" },
		{ type: "Grass", bg: "bg-[#7AC74C]", text: "Grass" },
		{ type: "Ice", bg: "bg-[#96D9D6]", text: "Ice" },
		{ type: "Fighting", bg: "bg-[#C22E28]", text: "Fighting" },
		{ type: "Poison", bg: "bg-[#A33EA1]", text: "Poison" },
		{ type: "Ground", bg: "bg-[#E2BF65]", text: "Ground" },
		{ type: "Flying", bg: "bg-[#A98FF3]", text: "Flying" },
		{ type: "Psychic", bg: "bg-[#F95587]", text: "Psychic" },
		{ type: "Bug", bg: "bg-[#A6B91A]", text: "Bug" },
		{ type: "Rock", bg: "bg-[#B6A136]", text: "Rock" },
		{ type: "Ghost", bg: "bg-[#735797]", text: "Ghost" },
		{ type: "Dragon", bg: "bg-[#6F35FC]", text: "Dragon" },
		{ type: "Dark", bg: "bg-[#705746]", text: "Dark" },
		{ type: "Steel", bg: "bg-[#B7B7CE]", text: "Steel" },
		{ type: "Fairy", bg: "bg-[#D685AD]", text: "Fairy" },
		{ type: "Unknown", bg: "bg-[#333]", text: "Unknown" },
	];

	types.forEach(({ type, bg, text }) => {
		it(`should render ${type} type badge correctly`, () => {
			const { container } = render(<PokemonTypeBadge type={type} />);
			expect(container.firstChild).toHaveClass(bg);
			expect(container.firstChild).toHaveTextContent(text);
		});
	});
});
