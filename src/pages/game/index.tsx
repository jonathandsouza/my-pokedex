import { PRODUCTION_URL } from "@/libs/config";
import { PokemonGame } from "@/libs/packages/pokemon-game";
import Head from "next/head";

export default function Page() {
	return (
		<>
			<Head>
				<title>Pokédex: Guess The Type</title>

				<meta
					name="description"
					content="Explore the complete list of all Pokémon, including detailed information about each species, evolutions, types, and abilities. Your ultimate online Pokédex."
				/>

				<meta
					name="keywords"
					content="Pokédex, Pokémon list, Pokémon database, Pokémon types, Pokémon evolutions, Pokémon abilities, Pokémon species"
				/>

				<meta
					property="og:title"
					content="Complete Pokémon List - Your Ultimate Pokédex"
				/>

				<meta
					property="og:description"
					content="Discover every Pokémon in existence with our comprehensive online Pokédex. Find detailed stats, types, evolutions, and more."
				/>

				<meta property="og:url" content={PRODUCTION_URL + "/game"} />

				<link rel="canonical" href={PRODUCTION_URL + "/game"} />
			</Head>
			<div className="container mt-10 t:mt-20">
				<PokemonGame.Provider>
					<PokemonGame.Loading>
						<PokemonGame.Start />
						<PokemonGame.Play />
						<PokemonGame.End />
					</PokemonGame.Loading>
				</PokemonGame.Provider>
			</div>
		</>
	);
}
