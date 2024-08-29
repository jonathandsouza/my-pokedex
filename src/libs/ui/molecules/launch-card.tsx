/* eslint-disable @next/next/no-img-element */
type Props = {
	id: string;
	imageURL: string | null;
	name: string;
	date: Date;
	status: "success" | "failure" | "upcoming";
	fav: React.FunctionComponent<{
		id: string;
		width: number;
		height: number;
	}>;
};

function LaunchStatus({ status }: { status: Props["status"] }) {
	if (status === "success") {
		return <span className="text-success">Success</span>;
	}
	if (status === "failure") {
		return <span className="text-failure">Failure</span>;
	}
	if (status === "upcoming") {
		return <span className="text-upcoming">Upcoming</span>;
	}
	return null;
}

function LaunchCard({ id, imageURL, name, date, status, fav: Fav }: Props) {
	return (
		<div className="bg-card border text-card-foreground rounded-lg overflow-hidden shadow-lg basis-72">
			<img
				src={imageURL ?? "/placeholder.svg"}
				width="286"
				height="288"
				alt="SpaceX Launch"
				className="w-full h-72 object-cover"
			/>
			<div className="p-6 bg-card text-card-foreground">
				<div className="flex flex-row gap-2">
					<div className="flex-grow">
						<h3 className="text-xl font-semibold">{name}</h3>
						<p className="text-muted-foreground">
							{date.getFullYear()}&nbsp;
							<LaunchStatus status={status} />
						</p>
					</div>
					<Fav height={40} width={40} id={id} />
				</div>
			</div>
		</div>
	);
}

LaunchCard.displayName = "LaunchCard";

export { LaunchCard };
