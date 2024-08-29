import { createContext } from "react";

type ContextType = {
	addFavorite: (id: string) => void;
	removeFavorite: (id: string) => void;
	isFavorite: (id: string) => boolean;
};

const Context = createContext<ContextType | null>(null);

export { Context };
