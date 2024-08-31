import { Badge } from "../atoms/badge";

type props = {
	type: string;
};

function PokemonTypeBadge({ type }: props) {
	switch (type) {
		case "Normal":
			return (
				<Badge variant="outline" className="bg-[#A8A77A] text-[#333]">
					Normal
				</Badge>
			);
		case "Fire":
			return (
				<Badge variant="outline" className="bg-[#EE8130] text-[#333]">
					Fire
				</Badge>
			);
		case "Water":
			return (
				<Badge variant="outline" className="bg-[#6390F0] text-[#333]">
					Water
				</Badge>
			);
		case "Electric":
			return (
				<Badge variant="outline" className="bg-[#F7D02C] text-[#333]">
					Electric
				</Badge>
			);
		case "Grass":
			return (
				<Badge variant="outline" className="bg-[#7AC74C] text-[#333]">
					Grass
				</Badge>
			);
		case "Ice":
			return (
				<Badge variant="outline" className="bg-[#96D9D6] text-[#333]">
					Ice
				</Badge>
			);
		case "Fighting":
			return (
				<Badge variant="outline" className="bg-[#C22E28] text-[#333]">
					Fighting
				</Badge>
			);
		case "Poison":
			return (
				<Badge variant="outline" className="bg-[#A33EA1] text-[#333]">
					Poison
				</Badge>
			);
		case "Ground":
			return (
				<Badge variant="outline" className="bg-[#E2BF65] text-[#333]">
					Ground
				</Badge>
			);
		case "Flying":
			return (
				<Badge variant="outline" className="bg-[#A98FF3] text-[#333]">
					Flying
				</Badge>
			);
		case "Psychic":
			return (
				<Badge variant="outline" className="bg-[#F95587] text-[#333]">
					Psychic
				</Badge>
			);
		case "Bug":
			return (
				<Badge variant="outline" className="bg-[#A6B91A] text-[#333]">
					Bug
				</Badge>
			);
		case "Rock":
			return (
				<Badge variant="outline" className="bg-[#B6A136] text-[#333]">
					Rock
				</Badge>
			);
		case "Ghost":
			return (
				<Badge variant="outline" className="bg-[#735797] text-[#333]">
					Ghost
				</Badge>
			);
		case "Dragon":
			return (
				<Badge variant="outline" className="bg-[#6F35FC] text-[#333]">
					Dragon
				</Badge>
			);
		case "Dark":
			return (
				<Badge variant="outline" className="bg-[#705746] text-[#333]">
					Dark
				</Badge>
			);
		case "Steel":
			return (
				<Badge variant="outline" className="bg-[#B7B7CE] text-[#333]">
					Steel
				</Badge>
			);
		case "Fairy":
			return (
				<Badge variant="outline" className="bg-[#D685AD] text-[#333]">
					Fairy
				</Badge>
			);
		default:
			return (
				<Badge variant="outline" className="bg-[#333] text-[#fff]">
					Unknown
				</Badge>
			);
	}
}

export { PokemonTypeBadge };
