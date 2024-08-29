import { QUERIES } from "@/libs/graph-ql";
import { Context } from "./context";
import { useLazyQuery } from "@apollo/client";
import { Pokemon } from "@/libs/models/pokemon";
import { useRef } from "react";
import { INITIAL_OFFSET, PAGE_SIZE } from "@/libs/config/pagination";

type ProviderProps = {
	children: React.ReactNode;
	initialData?: Array<Pokemon>;
};

const Provider = ({ initialData, children }: ProviderProps) => {
	const [getData, { loading, data }] = useLazyQuery(QUERIES.GET_ALL_POKEMON, {
		variables: {
			offset: INITIAL_OFFSET,
			take: PAGE_SIZE,
		},
	});

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

					getData({
						variables: {
							offset: INITIAL_OFFSET,
							take: pokemons.length + PAGE_SIZE,
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
