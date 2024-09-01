import { GAME } from "@/libs/config";
import { useContextHook } from "../context/hooks";
import { Button } from "@/libs/ui/atoms/button";

function End() {
	const { gameState, streak, start } = useContextHook();

	if (gameState !== GAME.STATES.OVER) {
		return null;
	}
	return (
		<div className="text-center">
			<h1 className="text-4xl">Game Over</h1>
			<p className="mt-2 text-xl">Streak: {streak}</p>

			<Button className="mt-10" onClick={start}>
				Re-start
			</Button>
		</div>
	);
}

export { End };
