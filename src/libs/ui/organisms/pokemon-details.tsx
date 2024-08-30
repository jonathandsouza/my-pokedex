import { Badge } from "@/libs/ui/atoms/ui/badge";

export function PokemonDetails() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-[#f0f0f0]">
			<div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
				<div className="flex flex-col t:flex-row">
					<div className="t:w-1/3 bg-[#e6e6e6] p-8">
						<div className="flex items-center justify-center">
							<img
								src="/placeholder.svg"
								alt="Pokemon Sprite"
								width={200}
								height={200}
								className="w-full max-w-[200px] h-auto"
								style={{
									aspectRatio: "200/200",
									objectFit: "cover",
								}}
							/>
						</div>
						<div className="mt-8">
							<h2 className="text-2xl font-bold text-[#333]">
								Pikachu
							</h2>
							<p className="text-[#666] mt-2">Electric</p>
							<p className="text-[#666] mt-2">Mouse Pokemon</p>
							<p className="text-[#666] mt-2">No. 025</p>
							<p className="text-[#666] mt-2">Color: Yellow</p>
						</div>
					</div>
					<div className="t:w-2/3 p-8">
						<div className="grid grid-cols-2 gap-4">
							<div>
								<h3 className="text-lg font-bold text-[#333]">
									Weight
								</h3>
								<p className="text-[#666] mt-2">6.0 kg</p>
							</div>
							<div>
								<h3 className="text-lg font-bold text-[#333]">
									Height
								</h3>
								<p className="text-[#666] mt-2">0.4 m</p>
							</div>
						</div>
						<div className="mt-8">
							<h3 className="text-lg font-bold text-[#333]">
								Abilities
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
								<div>
									<h4 className="text-[#333] font-bold">
										Static
									</h4>
									<p className="text-[#666] mt-2">
										Paralyzes attacking Pokemon on contact.
									</p>
									<p className="text-[#666] mt-2">
										Paralyzes the foe if it makes direct
										contact with the Pokémon.
									</p>
								</div>
								<div>
									<h4 className="text-[#333] font-bold">
										Lightning Rod
									</h4>
									<p className="text-[#666] mt-2">
										Draws in all Electric-type moves to
										boost the Pokémon's Special Attack.
									</p>
									<p className="text-[#666] mt-2">
										Draws in all Electric-type moves to
										boost the Pokémon's Special Attack.
									</p>
								</div>
							</div>
						</div>
						<div className="mt-8">
							<h3 className="text-lg font-bold text-[#333]">
								Types
							</h3>
							<div className="flex flex-wrap gap-2 mt-4">
								<Badge
									variant="outline"
									className="bg-[#f8d030] text-[#333]"
								>
									Electric
								</Badge>
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
									<p className="text-[#666] mt-2">55</p>
								</div>
								<div>
									<h4 className="text-[#333] font-bold">
										Defense
									</h4>
									<p className="text-[#666] mt-2">40</p>
								</div>
								<div>
									<h4 className="text-[#333] font-bold">
										HP
									</h4>
									<p className="text-[#666] mt-2">35</p>
								</div>
								<div>
									<h4 className="text-[#333] font-bold">
										Special Attack
									</h4>
									<p className="text-[#666] mt-2">50</p>
								</div>
								<div>
									<h4 className="text-[#333] font-bold">
										Special Defense
									</h4>
									<p className="text-[#666] mt-2">50</p>
								</div>
								<div>
									<h4 className="text-[#333] font-bold">
										Speed
									</h4>
									<p className="text-[#666] mt-2">90</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
