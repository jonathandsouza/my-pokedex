import { PokemonAbility } from "./ability";
import { POKEMON_TYPE } from "./types";

type Pokemon = {
	num: number;
	species: string;
	sprite: string;
	color: string;
	stats: {
		hp: number;
		defense: number;
		attack: number;
		specialAttack: number;
		specialDefense: number;
		speed: number;
	};
	types: Array<{
		name: POKEMON_TYPE;
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
