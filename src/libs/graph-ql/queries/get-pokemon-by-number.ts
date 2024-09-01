import { gql } from "@apollo/client";

const GET_POKEMON_BY_NUMBER = gql`
	query GetPokemonByDexNumber($number: Int!) {
		pokemon: getPokemonByDexNumber(number: $number) {
			sprite
			species
			types {
				name
			}
		}
	}
`;

export { GET_POKEMON_BY_NUMBER };
