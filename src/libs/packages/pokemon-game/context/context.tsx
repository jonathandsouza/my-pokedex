import { GAME_STATE } from "@/libs/config/game";
import { Pokemon } from "@/libs/models/pokemon";
import { POKEMON_TYPE } from "@/libs/models/types";
import { createContext } from "react";

type ContextType = {
	streak: number;
	lives: number;
	gameState: GAME_STATE;
	pokemon: Pokemon | null;
	guess: (types: Array<POKEMON_TYPE>) => void;
	end: () => void;
	start: () => void;
};

const Context = createContext<ContextType | null>(null);

export { Context };
