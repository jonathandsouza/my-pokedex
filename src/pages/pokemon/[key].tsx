import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

import { INCREMENTAL_STATIC_REVALIDATION } from "@/libs/config/ttl";
import { client, QUERIES } from "@/libs/graph-ql";
import { Pokemon } from "@/libs/models/pokemon";
import { PokemonDetails } from "@/libs/ui/organisms/pokemon-details";
import { PRODUCTION_URL } from "@/libs/config";

export const getStaticProps = async ({
	params,
}: {
	params: { key: string };
}) => {
	try {
		const { data } = await client.query({
			query: QUERIES.GET_POKEMON_DETAILS_BY_KEY,
			variables: {
				pokemon: params.key,
			},
		});

		return {
			props: {
				pokemon: data.pokemon as Pokemon,
			},

			revalidate: INCREMENTAL_STATIC_REVALIDATION,
		};
	} catch (e) {
		console.error(`[ERROR] SSR FAILURE`, e);
	}
};

export async function getStaticPaths() {
	return { paths: [], fallback: "blocking" };
}

export default function Page({
	pokemon,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
	const url = `${PRODUCTION_URL}/pokemon/${pokemon.key}`;
	return (
		<>
			<Head>
				<title>Pokédex: {pokemon.species}</title>

				<meta
					name="description"
					content={`Explore details about pokemon ${pokemon.species}`}
				/>
				<meta
					name="keywords"
					content={`Pokédex, Pokémon list, Pokémon database, Pokémon types, Pokémon evolutions, Pokémon abilities, Pokémon species, Pokémon details, ${pokemon.species}`}
				/>

				<meta name="author" content="Jonathan Dsouza" />

				<meta
					property="og:title"
					content={`Pokédex: ${pokemon.species}`}
				/>

				<meta
					property="og:description"
					content={`Discover details about pokemon ${pokemon.species}`}
				/>

				<meta property="og:url" content={url} />

				<meta property="og:type" content="website" />

				<link rel="canonical" href={url} />
			</Head>
			<div className="container mt-10">
				<PokemonDetails pokemon={pokemon} />
			</div>
		</>
	);
}
