import { PAGE_SIZE } from "@/libs/config";
import { INITIAL_OFFSET } from "@/libs/config/pagination";
import { INCREMENTAL_STATIC_REVALIDATION } from "@/libs/config/ttl";
import { client, QUERIES } from "@/libs/graph-ql";
import { Pokemon } from "@/libs/models/pokemon";

export async function getStaticProps() {
	try {
		const { data } = await client.query({
			query: QUERIES.GET_ALL_POKEMON,
			variables: {
				offset: INITIAL_OFFSET,
				take: PAGE_SIZE,
			},
		});

		return {
			props: {
				pokemons: data.pokemons as unknown as Array<Pokemon>,
			},

			revalidate: INCREMENTAL_STATIC_REVALIDATION,
		};
	} catch (e) {
		console.error(`[ERROR] SSR FAILURE`, e);
	}
}
