import clsx from "clsx";
import { useContextHook } from "../context/hooks";
import { GAME_STATE } from "@/libs/config/game";

function Loading() {
	const { gameState } = useContextHook();

	const loading = gameState === GAME_STATE.LOADING;

	if (!loading) {
		return null;
	}

	return (
		<div>
			<h1>Loading...</h1>
		</div>
	);
}

export { Loading };
