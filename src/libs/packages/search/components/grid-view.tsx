import { PokemonGridView } from "@/libs/ui/organisms/grid-view";
import { useContextHook } from "../context/hooks";
import { InView } from "react-intersection-observer";

function Grid() {
	const { pokemons } = useContextHook();
	return <PokemonGridView pokemons={pokemons} />;
}

function InfiniteScroll() {
	const { loading, nextPage } = useContextHook();
	return (
		<InView
			onChange={(inView) => {
				inView && nextPage();
			}}
		>
			{loading && <p>Loading...</p>}
		</InView>
	);
}

function GridView() {
	return (
		<>
			<Grid />
			<InfiniteScroll />
		</>
	);
}

GridView.displayName = "SearchGridView";

export { GridView };
