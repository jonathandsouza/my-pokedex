import client from "./client";
import { GraphQLProvider } from "./provider";
import { GET_ALL_POKEMON } from "./queries/get-all-pokemons";
import { GET_POKEMON_DETAILS_BY_KEY } from "./queries/get-pokemon-details-by-key";

const QUERIES = {
	GET_ALL_POKEMON,
	GET_POKEMON_DETAILS_BY_KEY,
};

export { client, GraphQLProvider, QUERIES };
