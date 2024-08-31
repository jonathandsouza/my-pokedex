import { PokemonCard } from "@/libs/models/pokemon-card";
import { PokemonCardPlaceholder } from "../molecules/pokemon-card-placeholder";
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

function PokemonGridPlaceholder() {
	return (
		<PokemonGridContainer>
			{[1, 2, 3, 4, 5, 6].map((val, index) => {
				return <PokemonCardPlaceholder key={index} />;
			})}
		</PokemonGridContainer>
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

export { PokemonGridView, PokemonGridPlaceholder };
