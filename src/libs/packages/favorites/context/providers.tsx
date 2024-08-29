import { LOCAL_STORAGE_FAV_KEY } from "@/libs/config";
import { isClient } from "@/libs/utilities/user-agent";
import { Context } from "./context";

type LaunchTrackerFavoritesProviderProps = {
	children: React.ReactNode;
};

let favSet: Set<string> | null = null;

const addFavorite = (id: string) => {
	if (!favSet) {
		return;
	}

	favSet.add(id);
	favSet = new Set(favSet);

	window.localStorage.setItem(
		LOCAL_STORAGE_FAV_KEY,
		JSON.stringify(Array.from(favSet))
	);
};

const removeFavorite = (id: string) => {
	if (!favSet) {
		return;
	}

	favSet.delete(id);
	favSet = new Set(favSet);

	window.localStorage.setItem(
		LOCAL_STORAGE_FAV_KEY,
		JSON.stringify(Array.from(favSet))
	);
};

const isFavorite = (id: string) => {
	if (!favSet) {
		return false;
	}

	return favSet.has(id);
};

const Provider = ({ children }: LaunchTrackerFavoritesProviderProps) => {
	if (!favSet && isClient()) {
		const storedFav = window.localStorage.getItem(LOCAL_STORAGE_FAV_KEY);

		if (storedFav) {
			favSet = new Set(JSON.parse(storedFav));
		} else {
			favSet = new Set();
		}
	}

	return (
		<Context.Provider
			value={{
				addFavorite,
				removeFavorite,
				isFavorite,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export { Provider };
