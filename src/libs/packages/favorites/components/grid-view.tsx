/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { Launch } from "@/libs/models";
import { ReloadIcon } from "@radix-ui/react-icons";
import {
	LaunchGridPlaceholder,
	LaunchGridView,
} from "@/libs/ui/organisms/launch-grid-view";
import { Button } from "@/libs/ui/atoms/button";
import { Fav } from "./fav";
import { useContextHook } from "../context/hooks";

type Props = {
	launches: Array<Launch>;
};

function GridView({ launches }: Props) {
	const { isFavorite } = useContextHook();

	const [favorites, setFavorites] = useState<Array<Launch> | null>(null);

	const refreshFavorites = useCallback(() => {
		setFavorites(launches.filter(({ id }) => isFavorite(id)));
	}, [launches, isFavorite]);

	useEffect(() => {
		refreshFavorites();
	}, []);

	if (!favorites) {
		return <LaunchGridPlaceholder />;
	}

	return (
		<div className="mt-10">
			{favorites.length > 0 && (
				<div className="container mb-10 text-center t:text-start">
					<Button onClick={refreshFavorites}>
						<ReloadIcon />
						<span>&nbsp;Reload</span>
					</Button>
				</div>
			)}
			<LaunchGridView launches={favorites} isLoading={false} fav={Fav} />
		</div>
	);
}

GridView.displayName = "FavoritesGridView";

export { GridView };
