import { GAME } from "@/libs/config";
import { useContextHook } from "../context/hooks";
import { cn } from "@/libs/utilities/cn";

type props = {
	children: React.ReactNode;
};

function Loading({ children }: props) {
	const { gameState } = useContextHook();

	const loading = gameState === GAME.STATES.LOADING;

	return (
		<div className={cn({ "opacity-20 pointer-events-none": loading })}>
			{children}
		</div>
	);
}

export { Loading };
