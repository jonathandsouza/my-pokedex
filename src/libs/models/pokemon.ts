type Pokemon = {
	num: number;
	species: string;
	sprite: string;
	stats: {
		hp: number;
		defense: number;
		attack: number;
	};
	types: Array<{
		name: string;
	}>;
	weight: number;
	key: string;
};

export type { Pokemon };
