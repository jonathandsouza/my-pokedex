import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/libs/ui/molecules/sheet";
import { Button } from "@/libs/ui/atoms/button";
import { useRouter } from "next/router";
import { cn } from "@/libs/utilities/cn";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

function TrackerNav() {
	const router = useRouter();

	const path = router.pathname;
	const isHomePath = path === "/";
	const isFavoritesPath = path === "/favorites";

	return (
		<header className="bg-background">
			<div className="container flex h-16 items-center justify-between px-4 t:px-6">
				<Link
					href="/"
					className="flex items-center gap-2"
					prefetch={false}
				>
					<span className="text-lg font-semibold">PokeDex</span>
				</Link>
				<nav className="hidden items-center gap-4 t:flex">
					<Link
						href="/"
						className={cn("text-sm font-medium", {
							underline: isHomePath,
						})}
					>
						Home
					</Link>
				</nav>
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant="outline"
							size="icon"
							className="t:hidden"
						>
							<HamburgerMenuIcon className="h-6 w-6" />
							<span className="sr-only">
								Toggle navigation menu
							</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="w-full max-w-xs">
						<div className="grid gap-4 p-4">
							<Link
								href="/"
								className={cn("text-sm font-medium", {
									underline: isHomePath,
								})}
							>
								Home
							</Link>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}

TrackerNav.displayName = "TrackerNav";

export { TrackerNav };
