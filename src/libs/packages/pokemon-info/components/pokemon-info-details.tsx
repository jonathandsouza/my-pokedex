import { Pokemon } from "@/libs/models";
import { PokemonDetails } from "@/libs/ui/organisms/pokemon-details";

type props = {
	pokemon: Pokemon;
};

function PokemonInfoDetails({ pokemon }: props) {
	return (
		<div className="container mt-10">
			<PokemonDetails pokemon={pokemon} />
		</div>
	);
}

export { PokemonInfoDetails };
