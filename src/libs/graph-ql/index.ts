import client from "./client";
import { GraphQLProvider } from "./provider";
import { GET_ALL_POKEMON } from "./queries/get-all-pokemons";
import { GET_POKEMON_BY_NUMBER } from "./queries/get-pokemon-by-number";
import { GET_POKEMON_BY_TEXT } from "./queries/get-pokemon-by-text";
import { GET_POKEMON_DETAILS_BY_KEY } from "./queries/get-pokemon-details-by-key";

const QUERIES = {
	GET_ALL_POKEMON,
	GET_POKEMON_DETAILS_BY_KEY,
	GET_POKEMON_BY_TEXT,
	GET_POKEMON_BY_NUMBER,
};

export { client, GraphQLProvider, QUERIES };
