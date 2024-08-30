import { PokemonCardPlaceholder } from "../molecules/pokemon-card-placeholder";
import { PokemonCard } from "../molecules/pokemon-card";
import { Pokemon } from "@/libs/models/pokemon";

type LaunchGridViewProps = {
	pokemons: Array<Pokemon>;
};

type LaunchGridContainerProps = {
	children: React.ReactNode;
};

function PokemonGridContainer({ children }: LaunchGridContainerProps) {
	return (
		<div className="container mx-auto flex flex-wrap gap-8 jus justify-center">
			{children}
		</div>
	);
}

function PokemonGridPlaceholder() {
	return (
		<PokemonGridContainer>
			{[1, 2, 3, 4, 5, 6].map((val, index) => {
				return <PokemonCardPlaceholder key={index} />;
			})}
		</PokemonGridContainer>
	);
}

function PokemonGridView({ pokemons }: LaunchGridViewProps) {
	if (pokemons.length === 0) {
		return (
			<PokemonGridContainer>
				<p>No Pokemon found</p>
			</PokemonGridContainer>
		);
	}

	return (
		<>
			<PokemonGridContainer>
				{pokemons.map((pokemon) => {
					return <PokemonCard pokemon={pokemon} key={pokemon.key} />;
				})}
			</PokemonGridContainer>
		</>
	);
}

PokemonGridView.displayName = "PokemonGridView";

export { PokemonGridView, PokemonGridPlaceholder };
