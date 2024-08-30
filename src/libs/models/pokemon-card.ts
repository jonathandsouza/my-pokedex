import { Pokemon } from "./pokemon";

type PokemonCard = Pick<Pokemon, "num" | "species" | "sprite" | "key">;

export type { PokemonCard };
