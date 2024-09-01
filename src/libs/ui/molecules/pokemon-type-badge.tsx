import { POKEMON_TYPE } from "@/libs/models";
import { Badge } from "../atoms/badge";

type props = {
	type: POKEMON_TYPE;
	onClick?: (type: POKEMON_TYPE) => void;
};

function PokemonTypeBadge({ type, onClick }: props) {
	onClick = onClick || (() => {});

	switch (type) {
		case "Normal":
			return (
				<Badge
					variant="outline"
					className="bg-[#A8A77A] text-[#333]"
					onClick={() => onClick("Normal")}
				>
					Normal
				</Badge>
			);
		case "Fire":
			return (
				<Badge
					variant="outline"
					className="bg-[#EE8130] text-[#333]"
					onClick={() => onClick("Fire")}
				>
					Fire
				</Badge>
			);
		case "Water":
			return (
				<Badge
					variant="outline"
					className="bg-[#6390F0] text-[#333]"
					onClick={() => onClick("Water")}
				>
					Water
				</Badge>
			);
		case "Electric":
			return (
				<Badge
					variant="outline"
					className="bg-[#F7D02C] text-[#333]"
					onClick={() => onClick("Electric")}
				>
					Electric
				</Badge>
			);
		case "Grass":
			return (
				<Badge
					variant="outline"
					className="bg-[#7AC74C] text-[#333]"
					onClick={() => onClick("Grass")}
				>
					Grass
				</Badge>
			);
		case "Ice":
			return (
				<Badge
					variant="outline"
					className="bg-[#96D9D6] text-[#333]"
					onClick={() => onClick("Ice")}
				>
					Ice
				</Badge>
			);
		case "Fighting":
			return (
				<Badge
					variant="outline"
					className="bg-[#C22E28] text-[#333]"
					onClick={() => onClick("Fighting")}
				>
					Fighting
				</Badge>
			);
		case "Poison":
			return (
				<Badge
					variant="outline"
					className="bg-[#A33EA1] text-[#333]"
					onClick={() => onClick("Poison")}
				>
					Poison
				</Badge>
			);
		case "Ground":
			return (
				<Badge
					variant="outline"
					className="bg-[#E2BF65] text-[#333]"
					onClick={() => onClick("Ground")}
				>
					Ground
				</Badge>
			);
		case "Flying":
			return (
				<Badge
					variant="outline"
					className="bg-[#A98FF3] text-[#333]"
					onClick={() => onClick("Flying")}
				>
					Flying
				</Badge>
			);
		case "Psychic":
			return (
				<Badge
					variant="outline"
					className="bg-[#F95587] text-[#333]"
					onClick={() => onClick("Psychic")}
				>
					Psychic
				</Badge>
			);
		case "Bug":
			return (
				<Badge
					variant="outline"
					className="bg-[#A6B91A] text-[#333]"
					onClick={() => onClick("Bug")}
				>
					Bug
				</Badge>
			);
		case "Rock":
			return (
				<Badge
					variant="outline"
					className="bg-[#B6A136] text-[#333]"
					onClick={() => onClick("Rock")}
				>
					Rock
				</Badge>
			);
		case "Ghost":
			return (
				<Badge
					variant="outline"
					className="bg-[#735797] text-[#333]"
					onClick={() => onClick("Ghost")}
				>
					Ghost
				</Badge>
			);
		case "Dragon":
			return (
				<Badge
					variant="outline"
					className="bg-[#6F35FC] text-[#333]"
					onClick={() => onClick("Dragon")}
				>
					Dragon
				</Badge>
			);
		case "Dark":
			return (
				<Badge
					variant="outline"
					className="bg-[#705746] text-[#333]"
					onClick={() => onClick("Dark")}
				>
					Dark
				</Badge>
			);
		case "Steel":
			return (
				<Badge
					variant="outline"
					className="bg-[#B7B7CE] text-[#333]"
					onClick={() => onClick("Steel")}
				>
					Steel
				</Badge>
			);
		case "Fairy":
			return (
				<Badge
					variant="outline"
					className="bg-[#D685AD] text-[#333]"
					onClick={() => onClick("Fairy")}
				>
					Fairy
				</Badge>
			);
		default:
			return (
				<Badge
					variant="outline"
					className="bg-[#333] text-[#fff]"
					onClick={() => onClick("Unknown")}
				>
					Unknown
				</Badge>
			);
	}
}

export { PokemonTypeBadge };
