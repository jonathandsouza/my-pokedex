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

const Provider = ({ initialData, children }: ProviderProps) => {
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

	const pokemons = data?.pokemons ?? initialData;

	console.log("🚀 ~ Provider ~ data", pokemons.length);

	return (
		<Context.Provider
			value={{
				pokemons,
				loading: loading,
				nextPage: () => {
					console.log(
						"🚀 ~ Provider ~ INITIAL_OFFSET + pokemons.length:",
						INITIAL_OFFSET,
						PAGE_SIZE + pokemons.length
					);

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
};

export { Provider };
