import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

import { PokemonSearch } from "@/libs/packages/search";
import { ScrollToTop } from "@/libs/ui/molecules/scroll-to-top";

import { PAGE_SIZE } from "@/libs/config";
import { INITIAL_OFFSET } from "@/libs/config/pagination";
import { INCREMENTAL_STATIC_REVALIDATION } from "@/libs/config/ttl";
import { client, QUERIES } from "@/libs/graph-ql";
import { Pokemon } from "@/libs/models/pokemon";

export async function getStaticProps(context: any) {
	console.log("🚀 ~ getStaticProps ~ context:", context);

	try {
		// const { data } = await client.query({
		// 	query: QUERIES.GET_ALL_POKEMON,
		// 	variables: {
		// 		offset: INITIAL_OFFSET,
		// 		take: PAGE_SIZE,
		// 	},
		// });

		return {
			props: {
				pokemon: context.params.id,
			},

			revalidate: INCREMENTAL_STATIC_REVALIDATION,
		};
	} catch (e) {
		console.error(`[ERROR] SSR FAILURE`, e);
	}
}

export async function getStaticPaths() {
	return { paths: [], fallback: "blocking" };
}

export default function Page({
	pokemon,
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
			</Head>

			{JSON.stringify(pokemon)}
		</>
	);
}
