/* eslint-disable @next/next/no-img-element */
import { useContextHook } from "../context/hooks";
import { PokemonTypeBadge } from "@/libs/ui/molecules/pokemon-type-badge";
import { POKEMON_TYPE, POKEMON_TYPE_STRING } from "@/libs/models";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { GAME } from "@/libs/config";

type PokemonTypeSelectorProps = {
	list: Array<POKEMON_TYPE>;
	onSelect: (type: POKEMON_TYPE) => void;
	label: string;
};

function PokemonTypeSelector({
	list,
	onSelect,
	label,
}: PokemonTypeSelectorProps) {
	return (
		<div className="mt-5 min-h-24 cursor-pointer">
			<span className="text-xl">{label}</span>

			<div className="flex gap-2 flex-wrap justify-center">
				{list.map((type) => {
					return (
						<PokemonTypeBadge
							key={type}
							type={type}
							onClick={() => {
								onSelect(type);
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}

function Play() {
	const { pokemon, gameState, guess, lives, streak } = useContextHook();

	if (gameState !== GAME.STATES.IN_PROGRESS) {
		return null;
	}

	if (!pokemon) {
		console.error("[ERROR] Pokemon not found", JSON.stringify(pokemon));
		return null;
	}

	const arr = new Array(lives).fill(0);

	return (
		<div className="text-center">
			<div className="flex justify-between mb-10">
				<div>
					<span className="mr-2 text-2xl">Streak: {streak}</span>
				</div>
				<div className="flex">
					{arr.map((v, index) => (
						<HeartFilledIcon
							key={index}
							color="red"
							width={30}
							height={30}
						/>
					))}
				</div>
			</div>
			<img
				className="object-contain mx-auto mb-10"
				src={pokemon.sprite}
				alt={pokemon.species}
				width="100"
				height="100"
				onError={(e: any) => {
					e.target.src = "/placeholder.svg";
				}}
			/>
			<h1 className="text-center text-2xl t:text-3xl mb-10">
				{pokemon.species}
			</h1>

			<h2 className="text-2xl">Guess the Pokemon Type ?</h2>

			<PokemonTypeSelector
				list={POKEMON_TYPE_STRING as any}
				onSelect={guess}
				label="Select:"
			/>
		</div>
	);
}

export { Play };
