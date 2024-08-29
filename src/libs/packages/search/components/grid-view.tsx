import { useContextHook } from "../context/hooks";

function GridView() {
	const { pokemons, nextPage } = useContextHook();
	return (
		<>
			{JSON.stringify(pokemons, null, 2)}

			<h1>{pokemons.length}</h1>

			<br />
			<br />
			<br />

			<button onClick={nextPage}>NextPage</button>
		</>
	);
}

GridView.displayName = "SearchGridView";

export { GridView };
