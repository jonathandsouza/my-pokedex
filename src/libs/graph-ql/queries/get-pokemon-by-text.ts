import { gql } from "@apollo/client";

const GET_POKEMON_BY_TEXT = gql`
	query GetFuzzyPokemon($pokemon: String!) {
		pokemons: getFuzzyPokemon(pokemon: $pokemon) {
			species
			sprite
			key
		}
	}
`;

export { GET_POKEMON_BY_TEXT };
