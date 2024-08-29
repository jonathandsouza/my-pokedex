import { useContextHook } from "../context/hooks";

function GridView() {
	const { pokemons, nextPage, loading } = useContextHook();
	return (
		<>
			{JSON.stringify(pokemons, null, 2)}

			<h1>{pokemons.length}</h1>

			<br />
			<br />
			<br />
			<h2>{loading.toString()}</h2>
			<button onClick={nextPage}>NextPage</button>
		</>
	);
}

GridView.displayName = "SearchGridView";

export { GridView };
