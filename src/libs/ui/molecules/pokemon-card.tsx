/* eslint-disable @next/next/no-img-element */

import { Pokemon } from "@/libs/models/pokemon";

type props = {
	pokemon: Pokemon;
};

function PokemonCard({ pokemon }: props) {
	return (
		<div className="w-full max-w-[100px] h-[100px] mt-20">
			<img
				className="w-full h-full object-contain"
				src={pokemon.sprite}
				alt={pokemon.species}
				width="100"
				height="100"
			/>
			<div className="mt-3">
				<span>{pokemon.species}</span>
			</div>
		</div>
	);
}

PokemonCard.displayName = "PokemonCard";

export { PokemonCard };
