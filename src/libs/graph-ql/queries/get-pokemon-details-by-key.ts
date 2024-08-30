import { gql } from "@apollo/client";

const GET_POKEMON_DETAILS_BY_KEY = gql`
	query GetPokemon($pokemon: PokemonEnum!) {
		pokemon: getPokemon(pokemon: $pokemon) {
			weight
			height
			abilities {
				first {
					name
					desc
					shortDesc
					key
				}

				second {
					name
					desc
					shortDesc
					key
				}

				hidden {
					name
					desc
					shortDesc
					key
				}

				special {
					name
					desc
					shortDesc
					key
				}
			}
			num
			types {
				name
			}
			sprite
			species
			key
			color
			baseStats {
				attack
				defense
				hp
				specialAttack: specialattack
				specialDefense: specialdefense
				speed
			}
			classification
		}
	}
`;

export { GET_POKEMON_DETAILS_BY_KEY };
