import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { POKEMON_GRAPH_QL_ENDPOINT_BASE_URL } from "../config";

import { offsetLimitPagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				GetAllPokemon: offsetLimitPagination(),
			},
		},
	},
});

const client = new ApolloClient({
	link: new HttpLink({
		uri: POKEMON_GRAPH_QL_ENDPOINT_BASE_URL,
	}),
	cache,
});

export default client;
