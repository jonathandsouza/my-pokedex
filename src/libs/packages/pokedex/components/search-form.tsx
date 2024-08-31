import { useContextHook } from "../context/hooks";

function SearchForm() {
	const { search } = useContextHook();

	return (
		<>
			<button onClick={() => search("bulbasaur")}>Search</button>
		</>
	);
}

SearchForm.displayName = "SearchForm";

export { SearchForm };
