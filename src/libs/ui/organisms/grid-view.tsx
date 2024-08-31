import { PokemonCard } from "@/libs/models/pokemon-card";
import { PokeCard } from "../molecules/pokemon-card";

type PokemonGridViewProps = {
	pokemons: Array<PokemonCard>;
};

type PokemonGridContainerProps = {
	children: React.ReactNode;
};

function PokemonGridContainer({ children }: PokemonGridContainerProps) {
	return (
		<div className="container mx-auto flex flex-wrap gap-8 jus justify-center">
			{children}
		</div>
	);
}

function PokemonGridView({ pokemons }: PokemonGridViewProps) {
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
					return <PokeCard pokemon={pokemon} key={pokemon.key} />;
				})}
			</PokemonGridContainer>
		</>
	);
}

PokemonGridView.displayName = "PokemonGridView";

export { PokemonGridView };
