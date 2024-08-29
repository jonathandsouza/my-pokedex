import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

import { PokemonSearch } from "@/libs/packages/search";
import { getStaticProps } from "@/libs/packages/ssr";
import { ScrollToTop } from "@/libs/ui/molecules/scroll-to-top";

export { getStaticProps };

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
