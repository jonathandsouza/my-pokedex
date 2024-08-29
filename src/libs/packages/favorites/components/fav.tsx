import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useContextHook } from "../context/hooks";

type Props = {
	id: string;
	width: number;
	height: number;
};

function Fav({ id, width, height }: Props) {
	const { isFavorite, addFavorite, removeFavorite } = useContextHook();

	const [active, setActive] = useState(false);

	useEffect(() => {
		setActive(isFavorite(id));
	}, [id, isFavorite]);

	return (
		<span
			className="cursor-pointer"
			onClick={() => {
				if (active) {
					removeFavorite(id);
				} else {
					addFavorite(id);
				}
				setActive(!active);
			}}
		>
			{active && (
				<HeartFilledIcon
					width={width}
					height={height}
					className="text-favorite"
				/>
			)}
			{!active && <HeartIcon width={width} height={height} />}
		</span>
	);
}

Fav.displayName = "Fav";

export { Fav };
