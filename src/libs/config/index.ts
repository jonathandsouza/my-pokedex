import { POKEMON_GRAPH_QL_ENDPOINT_BASE_URL } from "./endpoints";
import { PAGE_SIZE } from "./pagination";
import { INCREMENTAL_STATIC_REVALIDATION } from "./ttl";
import { PRODUCTION_URL } from "./url";

export {
	// ENDPOINTS
	POKEMON_GRAPH_QL_ENDPOINT_BASE_URL,

	// TTLs
	INCREMENTAL_STATIC_REVALIDATION,

	// PAGINATION
	PAGE_SIZE,

	// URL
	PRODUCTION_URL,
};
