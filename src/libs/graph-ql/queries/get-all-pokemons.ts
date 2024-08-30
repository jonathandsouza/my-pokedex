import { gql } from "@apollo/client";

const GET_ALL_POKEMON = gql`
	query ExampleQuery($offset: Int, $take: Int) {
		pokemons: getAllPokemon(offset: $offset, take: $take) {
			num
			species
			sprite
			stats: baseStats {
				hp
				defense
				attack
			}
			types {
				name
			}
			key
		}
	}
`;

export { GET_ALL_POKEMON };
