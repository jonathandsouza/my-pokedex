import { useContext } from "react";
import { Context } from "./context";

const useContextHook = function () {
	const ctx = useContext(Context);

	if (!ctx) {
		throw new Error(
			"usePokemonSearch must be used within a PokemonSearchContextProvider"
		);
	}

	return ctx;
};

export { useContextHook };
