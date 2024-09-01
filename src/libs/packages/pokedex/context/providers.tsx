import { QUERIES } from "@/libs/graph-ql";
import { Context } from "./context";
import { useLazyQuery } from "@apollo/client";
import { useRef } from "react";
import { INITIAL_OFFSET, PAGE_SIZE } from "@/libs/config/pagination";
import { PokemonCard } from "@/libs/models/pokemon-card";

type ProviderProps = {
	children: React.ReactNode;
	initialData?: Array<PokemonCard>;
};

function Provider({ initialData, children }: ProviderProps) {
	const [getData, { loading, data, fetchMore }] = useLazyQuery(
		QUERIES.GET_ALL_POKEMON,
		{
			variables: {
				offset: INITIAL_OFFSET,
				take: 1,
			},
		}
	);

	const initialFetch = useRef(true);

	const pokemons = data?.pokemons ?? initialData;

	return (
		<Context.Provider
			value={{
				pokemons,
				loading: loading,
				nextPage: () => {
					if (initialFetch.current) {
						initialFetch.current = false;
						getData({
							variables: {
								offset: INITIAL_OFFSET,
								take: PAGE_SIZE * 2,
							},
						});
						return;
					}

					fetchMore({
						variables: {
							offset: INITIAL_OFFSET + pokemons.length,
							take: PAGE_SIZE,
						},
					});
				},
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Provider };
