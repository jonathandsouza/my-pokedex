import { QUERIES } from "@/libs/graph-ql";
import { Context } from "./context";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import { INITIAL_OFFSET, PAGE_SIZE } from "@/libs/config/pagination";
import { PokemonCard } from "@/libs/models/pokemon-card";

type ProviderProps = {
	children: React.ReactNode;
	initialData?: Array<PokemonCard>;
};

const searchTerm = "";

function Provider({ initialData, children }: ProviderProps) {
	const [
		getFilteredPokemonList,
		{ loading: filterLoading, data: filteredData },
	] = useLazyQuery(QUERIES.GET_POKEMON_BY_TEXT);

	const [getData, { loading, data, fetchMore }] = useLazyQuery(
		QUERIES.GET_ALL_POKEMON,
		{
			variables: {
				offset: INITIAL_OFFSET,
				take: PAGE_SIZE,
			},
		}
	);

	const initialFetch = useRef(true);

	const pokemons =
		searchTerm.length && !filterLoading
			? filteredData?.pokemons ?? []
			: data?.pokemons ?? initialData;

	console.log("🚀 ~ Provider ~ pokemons:", pokemons);
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

				search: (term: string) => {
					getFilteredPokemonList(term);
				},
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Provider };
