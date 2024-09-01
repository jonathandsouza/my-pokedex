import { Context } from "./context";
import { useState } from "react";
import { GAME } from "@/libs/config";
import { client, QUERIES } from "@/libs/graph-ql";
import { POKEMON_TYPE } from "@/libs/models/types";
import { Pokemon } from "@/libs/models";
import { GAME_STATE } from "@/libs/config/game";

type ProviderProps = {
	children: React.ReactNode;
};

async function fetchRandomPokemon() {
	try {
		const { data } = await client.query({
			query: QUERIES.GET_POKEMON_BY_NUMBER,
			variables: {
				number: Math.floor(Math.random() * 898),
			},
		});

		return data.pokemon as Pokemon;
	} catch (e) {
		console.error("[ERROR] Failed to fetch random pokemon", e);
		return null;
	}
}

function Provider({ children }: ProviderProps) {
	const [gameState, setGameState] = useState<GAME_STATE>(GAME_STATE.START);

	const [streak, setStreak] = useState(0);

	const [lives, setLives] = useState(GAME.LIVES);

	const [pokemon, setPokemon] = useState<Pokemon | null>(null);

	return (
		<>
			<Context.Provider
				value={{
					streak,
					gameState,
					lives,
					pokemon,
					guess: (types: Array<POKEMON_TYPE>) => {
						setGameState(GAME_STATE.LOADING);

						if (!pokemon) {
							console.error(" [ERROR] No pokemon to guess");
							return;
						}

						const set = new Set(
							pokemon.types.map((type) => type.name)
						);

						const correct = types.every((type) => set.has(type));

						const goNext = async () => {
							const pokemon = await fetchRandomPokemon();
							setPokemon(pokemon);
							setGameState(GAME_STATE.IN_PROGRESS);
						};

						if (correct) {
							setStreak(streak + 1);
							goNext();
						} else {
							setLives(lives - 1);

							if (lives === 1) {
								setGameState(GAME_STATE.OVER);
							} else {
								goNext();
							}
						}
					},
					end: () => {
						setGameState(GAME_STATE.OVER);
					},
					start: async () => {
						setGameState(GAME_STATE.LOADING);
						const pokemon = await fetchRandomPokemon();
						setPokemon(pokemon);
						setGameState(GAME_STATE.IN_PROGRESS);
						setStreak(0);
						setLives(GAME.LIVES);
					},
				}}
			>
				{children}
			</Context.Provider>
		</>
	);
}

export { Provider };
