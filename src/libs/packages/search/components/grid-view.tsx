import { useContextHook } from "../context/hooks";

function GridView() {
	const { pokemons } = useContextHook();
	return <>{JSON.stringify(pokemons, null, 2)}</>;
}

GridView.displayName = "SearchGridView";

export { GridView };
