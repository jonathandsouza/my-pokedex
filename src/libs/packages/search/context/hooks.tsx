import { useContext } from "react";
import { Context } from "./context";

const useContextHook = function () {
	const ctx = useContext(Context);

	if (!ctx) {
		throw new Error(
			"usePokemonViewer must be used within a PokemonViewerContextProvider"
		);
	}

	return ctx;
};

export { useContextHook };
