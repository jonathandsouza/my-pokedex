import { useContext } from "react";
import { Context } from "./context";

const useContextHook = () => {
	const ctx = useContext(Context);

	if (!ctx) {
		throw new Error(
			"useLaunchTrackerFavorites must be used within a LaunchTrackerFavoritesProvider"
		);
	}

	return ctx;
};

export { useContextHook };
