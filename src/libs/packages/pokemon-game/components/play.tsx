/* eslint-disable @next/next/no-img-element */
import { GAME_STATE } from "@/libs/config/game";
import { useContextHook } from "../context/hooks";
import { useState } from "react";
import { PokemonTypeBadge } from "@/libs/ui/molecules/pokemon-type-badge";
import { POKEMON_TYPE, POKEMON_TYPE_STRING } from "@/libs/models";
import { Button } from "@/libs/ui/atoms/button";
import { HeartFilledIcon } from "@radix-ui/react-icons";

function Play() {
	const { pokemon, gameState, guess, lives, streak, end } = useContextHook();

	const [guesses, setGuesses] = useState<Set<POKEMON_TYPE>>(new Set());

	if (gameState !== GAME_STATE.IN_PROGRESS) {
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
					<span className="mr-2">Streak: {streak}</span>
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

			<div className="mt-5 min-h-24 cursor-pointer">
				<span className="text-xl">Select:</span>

				<div className="flex gap-2 flex-wrap cursor-pointer mt-5 justify-center">
					{POKEMON_TYPE_STRING.map((type) => {
						return (
							<PokemonTypeBadge
								key={type}
								type={type}
								onClick={() => {
									setGuesses((guesses) => {
										guesses.add(type);
										return new Set(guesses);
									});
								}}
							/>
						);
					})}
				</div>
			</div>

			<div className="mt-5 min-h-24 cursor-pointer">
				<span className="text-xl">Selected:</span>

				<div className="flex gap-2 flex-wrap justify-center">
					{Array.from(guesses).map((type) => {
						return (
							<PokemonTypeBadge
								key={type}
								type={type}
								onClick={() => {
									setGuesses((guesses) => {
										guesses.delete(type);
										return new Set(guesses);
									});
								}}
							/>
						);
					})}
				</div>
			</div>

			<Button
				onClick={() => {
					guess(Array.from(guesses));
				}}
			>
				Guess
			</Button>

			<Button
				className="ml-2"
				variant={"secondary"}
				onClick={() => {
					end();
				}}
			>
				End
			</Button>
		</div>
	);
}

export { Play };
