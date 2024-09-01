import { PokemonGame } from "@/libs/packages/pokemon-game";

export default function Page() {
	return (
		<div className="container mt-10 t:mt-20">
			<PokemonGame.Provider>
				<PokemonGame.Loading>
					<PokemonGame.Start />
					<PokemonGame.Play />
					<PokemonGame.End />
				</PokemonGame.Loading>
			</PokemonGame.Provider>
		</div>
	);
}
