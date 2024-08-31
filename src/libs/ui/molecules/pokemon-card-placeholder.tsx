function PokemonCardPlaceholder() {
	return (
		<div
			className="border bg-card  rounded-lg overflow-hidden shadow-lg basis-72 h-[393.6px]"
			role="presentation"
			data-testid="pokemon-card-placeholder"
		></div>
	);
}

PokemonCardPlaceholder.displayName = "PokemonCardPlaceholder";

export { PokemonCardPlaceholder };
