import Link from "next/link";
function TrackerNav() {
	return (
		<header className="bg-primary">
			<div className="container flex h-16 items-center justify-between px-4 t:px-6">
				<Link
					href="/"
					className="flex items-center gap-2"
					prefetch={false}
				>
					<span className="text-3xl font-semibold text-secondary">
						Pokédex
					</span>
				</Link>
			</div>
		</header>
	);
}

TrackerNav.displayName = "TrackerNav";

export { TrackerNav };
