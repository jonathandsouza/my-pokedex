import { gql } from "@apollo/client";

const GET_ALL_POKEMON = gql`
	query GetAllPokemon($offset: Int, $take: Int) {
		pokemons: getAllPokemon(offset: $offset, take: $take) {
			num
			sprite
			species
			weight
			key
		}
	}
`;

export { GET_ALL_POKEMON };
