import { PokemonAbility } from "./ability";

type Pokemon = {
	num: number;
	species: string;
	sprite: string;
	stats: {
		hp: number;
		defense: number;
		attack: number;
		specialAttack: number;
		specialDefense: number;
		speed: number;
	};
	types: Array<{
		name: string;
	}>;
	weight: number;
	height: number;
	key: string;
	abilities: {
		first: PokemonAbility | null;
		second: PokemonAbility | null;
		hidden: PokemonAbility | null;
		special: PokemonAbility | null;
	};
	classification: string;
};
export type { Pokemon };
