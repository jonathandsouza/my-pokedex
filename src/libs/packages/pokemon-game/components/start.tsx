import { GAME } from "@/libs/config";
import { useContextHook } from "../context/hooks";
import { Button } from "@/libs/ui/atoms/button";

function Start() {
	const { start, gameState } = useContextHook();

	if (gameState !== GAME.STATES.START) {
		return null;
	}

	return (
		<div className="text-center">
			<h1 className="text-4xl">Play Guess The Pokémon Type</h1>

			<Button className="mt-10" onClick={start} size="lg">
				<span className="text-2xl">Start</span>
			</Button>
		</div>
	);
}

export { Start };
