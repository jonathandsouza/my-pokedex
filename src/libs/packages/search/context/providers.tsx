import { QUERIES } from "@/libs/graph-ql";
import { Context } from "./context";
import { useLazyQuery } from "@apollo/client";
import { Pokemon } from "@/libs/models/pokemon";

type ProviderProps = {
	children: React.ReactNode;
	initialData?: Array<Pokemon>;
};

const Provider = ({ initialData, children }: ProviderProps) => {
	const [getData, { loading, data }] = useLazyQuery(QUERIES.GET_ALL_POKEMON, {
		variables: {
			offset: 93,
			take: 10,
		},
	});

	return (
		<Context.Provider
			value={{
				pokemons: data?.pokemons ?? initialData,
				isLoading: loading,
				nextPage: () => {
					getData({
						variables: {
							offset: data?.pokemons.length,
							take: 10,
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
