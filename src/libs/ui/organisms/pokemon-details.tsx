/* eslint-disable @next/next/no-img-element */
import { Pokemon } from "@/libs/models/pokemon";
import { Badge } from "../atoms/ui/badge";

type props = {
	pokemon: Pokemon;
};

export function PokemonDetails({ pokemon }: props) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-[#f0f0f0]">
			<div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
				<div className="flex flex-col t:flex-row">
					<div className="t:w-1/3 bg-[#e6e6e6] p-8">
						<div className="flex items-center justify-center">
							<img
								src={pokemon.sprite}
								alt="Pokemon Sprite"
								width={50}
								height={0}
								className="w-full max-w-[200px] h-auto"
							/>
						</div>
						<div className="mt-8">
							<h2 className="text-2xl font-bold text-[#333]">
								{pokemon.species}
							</h2>
							<p className="text-[#666] mt-2">
								{pokemon.types[0].name}
							</p>
							<p className="text-[#666] mt-2">
								{pokemon.classification}
							</p>
							<p className="text-[#666] mt-2">
								No. {pokemon.num}
							</p>
							<p className="text-[#666] mt-2">
								Color: {pokemon.color}
							</p>
						</div>
					</div>
					<div className="t:w-2/3 p-8">
						<div className="grid grid-cols-2 gap-4">
							<div>
								<h3 className="text-lg font-bold text-[#333]">
									Weight
								</h3>
								<p className="text-[#666] mt-2">
									{pokemon.weight} kg
								</p>
							</div>
							<div>
								<h3 className="text-lg font-bold text-[#333]">
									Height
								</h3>
								<p className="text-[#666] mt-2">
									{pokemon.height} m
								</p>
							</div>
						</div>
						<div className="mt-8">
							<h3 className="text-lg font-bold text-[#333]">
								Abilities
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
								{[
									pokemon.abilities.first,
									pokemon.abilities.second,
									pokemon.abilities.hidden,
									pokemon.abilities.special,
								]
									.filter((ability) => ability)
									.map(({ name, desc, shortDesc }: any) => (
										<div key={name}>
											<h4 className="text-[#333] font-bold">
												{name}
											</h4>
											{shortDesc && (
												<p className="text-[#666] mt-2">
													{shortDesc}
												</p>
											)}
											{desc && (
												<p className="text-[#666] mt-2">
													{desc}
												</p>
											)}
										</div>
									))}
							</div>
						</div>
						<div className="mt-8">
							<h3 className="text-lg font-bold text-[#333]">
								Types
							</h3>
							<div className="flex flex-wrap gap-2 mt-4">
								{pokemon.types.map(({ name }) => (
									<Badge
										key={name}
										variant="outline"
										className="bg-[#f8d030] text-[#333]"
									>
										{name}
									</Badge>
								))}
							</div>
						</div>
						<div className="mt-8">
							<h3 className="text-lg font-bold text-[#333]">
								Base Stats
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
								<div>
									<h4 className="text-[#333] font-bold">
										Attack
									</h4>
									<p className="text-[#666] mt-2">
										{pokemon.stats.attack}
									</p>
								</div>
								<div>
									<h4 className="text-[#333] font-bold">
										Defense
									</h4>
									<p className="text-[#666] mt-2">
										{pokemon.stats.defense}
									</p>
								</div>
								<div>
									<h4 className="text-[#333] font-bold">
										HP
									</h4>
									<p className="text-[#666] mt-2">
										{pokemon.stats.hp}
									</p>
								</div>
								<div>
									<h4 className="text-[#333] font-bold">
										Special Attack
									</h4>
									<p className="text-[#666] mt-2">
										{pokemon.stats.specialAttack}
									</p>
								</div>
								<div>
									<h4 className="text-[#333] font-bold">
										Special Defense
									</h4>
									<p className="text-[#666] mt-2">
										{pokemon.stats.specialDefense}
									</p>
								</div>
								<div>
									<h4 className="text-[#333] font-bold">
										Speed
									</h4>
									<p className="text-[#666] mt-2">
										{pokemon.stats.speed}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
