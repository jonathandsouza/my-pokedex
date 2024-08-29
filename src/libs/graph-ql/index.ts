import client from "./client";
import { GraphQLProvider } from "./provider";
import { GET_ALL_POKEMON } from "./queries/get-all-pokemons";

const QUERIES = {
	GET_ALL_POKEMON,
};

export { client, GraphQLProvider, QUERIES };
