import { gql } from "@apollo/client";

const GET_ALL_POKEMON = gql`
	query ExampleQuery($offset: Int, $take: Int) {
		pokemons: getAllPokemon(offset: $offset, take: $take) {
			num
			species
			sprite
			key
		}
	}
`;

export { GET_ALL_POKEMON };
