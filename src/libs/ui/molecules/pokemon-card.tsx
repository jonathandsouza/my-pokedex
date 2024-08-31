/* eslint-disable @next/next/no-img-element */

import { PokemonCard } from "@/libs/models/pokemon-card";
import Link from "next/link";

type props = {
	pokemon: PokemonCard;
};

function PokeCard({ pokemon }: props) {
	return (
		<div className="w-[100px] h-[100px] mt-20 cursor-pointer">
			<Link href={`/pokemon/${pokemon.key}`}>
				<img
					className="w-full h-full object-contain"
					src={pokemon.sprite}
					alt={pokemon.species}
					width="100"
					height="100"
					onError={(e: any) => {
						console.log(`on error capture: ${e}`);
						e.target.src = "/placeholder.svg";
					}}
				/>
				<div className="mt-3">
					<span>{pokemon.species}</span>
				</div>
			</Link>
		</div>
	);
}

PokeCard.displayName = "PokemonCard";

export { PokeCard };
