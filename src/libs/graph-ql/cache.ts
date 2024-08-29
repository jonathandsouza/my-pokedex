import { InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				getAllPokemon: offsetLimitPagination(),
			},
		},
	},
});

export { cache };
