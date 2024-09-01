type POKEMON_TYPE =
	| "Normal"
	| "Fire"
	| "Water"
	| "Electric"
	| "Grass"
	| "Ice"
	| "Fighting"
	| "Poison"
	| "Ground"
	| "Flying"
	| "Psychic"
	| "Bug"
	| "Rock"
	| "Ghost"
	| "Dragon"
	| "Dark"
	| "Steel"
	| "Fairy"
	| "Unknown";

const POKEMON_TYPE_STRING = [
	"Normal",
	"Fire",
	"Water",
	"Electric",
	"Grass",
	"Ice",
	"Fighting",
	"Poison",
	"Ground",
	"Flying",
	"Psychic",
	"Bug",
	"Rock",
	"Ghost",
	"Dragon",
	"Dark",
	"Steel",
	"Fairy",
] as const;

export type { POKEMON_TYPE };

export { POKEMON_TYPE_STRING };
