import { Pokemon } from "@/libs/models/pokemon";
import { createContext } from "react";

type ContextType = {
	isLoading: boolean;
	pokemons: Array<Pokemon>;
	nextPage: () => void;
};

const Context = createContext<ContextType | null>(null);

export { Context };
