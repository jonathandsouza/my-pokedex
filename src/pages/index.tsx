import { GetStaticProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

import { PokemonSearch } from "@/libs/packages/search";
import { ScrollToTop } from "@/libs/ui/molecules/scroll-to-top";

import { PAGE_SIZE, PRODUCTION_URL } from "@/libs/config";
import { INITIAL_OFFSET } from "@/libs/config/pagination";
import { INCREMENTAL_STATIC_REVALIDATION } from "@/libs/config/ttl";
import { client, QUERIES } from "@/libs/graph-ql";
import { PokemonCard } from "@/libs/models/pokemon-card";

export const getStaticProps = async () => {
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
				pokemons: data.pokemons as PokemonCard[],
			},

			revalidate: INCREMENTAL_STATIC_REVALIDATION,
		};
	} catch (e) {
		console.error(`[ERROR] SSR FAILURE`, e);
	}
};

export default function Page({
	pokemons,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>Pokédex</title>

				<meta
					name="description"
					content="Explore the complete list of all Pokémon, including detailed information about each species, evolutions, types, and abilities. Your ultimate online Pokédex."
				/>

				<meta
					name="keywords"
					content="Pokédex, Pokémon list, Pokémon database, Pokémon types, Pokémon evolutions, Pokémon abilities, Pokémon species"
				/>

				<meta name="author" content="Jonathan Dsouza" />

				<meta
					property="og:title"
					content="Complete Pokémon List - Your Ultimate Pokédex"
				/>
				<meta
					property="og:description"
					content="Discover every Pokémon in existence with our comprehensive online Pokédex. Find detailed stats, types, evolutions, and more."
				/>

				<meta property="og:url" content={PRODUCTION_URL} />

				<meta property="og:type" content="website" />

				<link rel="canonical" href={PRODUCTION_URL} />

				{pokemons.map(({ sprite, key }) => (
					<link key={key} rel="preload" href={sprite} as="image" />
				))}
			</Head>

			<PokemonSearch.Provider initialData={pokemons}>
				<PokemonSearch.GridView />
			</PokemonSearch.Provider>

			<ScrollToTop />
		</>
	);
}
