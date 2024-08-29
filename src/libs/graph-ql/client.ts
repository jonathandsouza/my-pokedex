import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { POKEMON_GRAPH_QL_ENDPOINT_BASE_URL } from "../config";

import { cache } from "./cache";

const client = new ApolloClient({
	link: new HttpLink({
		uri: POKEMON_GRAPH_QL_ENDPOINT_BASE_URL,
	}),
	cache,
});

export default client;
