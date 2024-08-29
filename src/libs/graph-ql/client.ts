import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { POKEMON_GRAPH_QL_ENDPOINT_BASE_URL } from "../config";

const client = new ApolloClient({
	link: new HttpLink({
		uri: POKEMON_GRAPH_QL_ENDPOINT_BASE_URL,
	}),
	cache: new InMemoryCache(),
});

export default client;
