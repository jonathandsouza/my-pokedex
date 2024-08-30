import { GetStaticProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

import { PokemonSearch } from "@/libs/packages/search";
import { ScrollToTop } from "@/libs/ui/molecules/scroll-to-top";

import { PAGE_SIZE } from "@/libs/config";
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
				<title>SpaceX Launch Tracker</title>

				<meta
					name="description"
					content="Explore and search a comprehensive list of SpaceX launches. Filter launches by date, mission type, and more. Stay updated with the latest SpaceX news and launch schedules."
				/>

				<meta
					name="keywords"
					content="SpaceX, launches, rockets, space missions, search SpaceX launches, filter SpaceX launches, Falcon 9, Falcon Heavy, Starship, space exploration"
				/>

				<meta name="author" content="Jonathan Dsouza" />

				<meta
					property="og:title"
					content="SpaceX Launches - Search and Filter"
				/>

				<meta
					property="og:description"
					content="Discover the complete list of SpaceX launches. Search and filter launches by various criteria and keep up with the latest SpaceX events."
				/>

				<meta property="og:type" content="website" />

				{/* {launches.slice(0, PAGE_SIZE).map(({ id, image }) => (
					<link key={id} rel="preload" href={image} as="image" />
				))} */}
			</Head>

			<PokemonSearch.Provider initialData={pokemons}>
				<PokemonSearch.GridView />
			</PokemonSearch.Provider>

			<ScrollToTop />
		</>
	);
}
