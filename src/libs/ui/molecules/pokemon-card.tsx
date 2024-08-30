/* eslint-disable @next/next/no-img-element */

import { PokemonCard } from "@/libs/models/pokemon-card";
import Link from "next/link";

type props = {
	pokemon: PokemonCard;
};

function PokeCard({ pokemon }: props) {
	return (
		<Link href={`/pokemon/${pokemon.key}`} prefetch={true}>
			<div className="w-full max-w-[100px] h-[100px] mt-20 cursor-pointer">
				<img
					className="w-full h-full object-contain"
					src={pokemon.sprite}
					alt={pokemon.species}
					width="100"
					height="100"
					onError={(e) => {
						console.log(`on error capture: ${e}`);
					}}
				/>
				<div className="mt-3">
					<span>{pokemon.species}</span>
				</div>
			</div>
		</Link>
	);
}

PokeCard.displayName = "PokemonCard";

export { PokeCard };
