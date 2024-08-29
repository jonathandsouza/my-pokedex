import { LaunchCardPlaceholder } from "@/libs/ui/molecules/launch-card-placeholder";
import { Launch } from "@/libs/models";
import { useState } from "react";
import { PAGE_SIZE } from "@/libs/config";
import { InView } from "react-intersection-observer";
import { LaunchCard } from "../molecules/launch-card";

type LaunchGridViewProps = {
	isLoading?: boolean;
	launches: Array<Launch>;
	fav: React.FunctionComponent<{
		id: string;
		width: number;
		height: number;
	}>;
};

type LaunchGridContainerProps = {
	children: React.ReactNode;
};

function LaunchGridContainer({ children }: LaunchGridContainerProps) {
	return (
		<div className="container mx-auto flex flex-wrap gap-8 jus justify-center">
			{children}
		</div>
	);
}

function LaunchGridPlaceholder() {
	return (
		<LaunchGridContainer>
			{[1, 2, 3, 4, 5, 6].map((val, index) => {
				return <LaunchCardPlaceholder key={index} />;
			})}
		</LaunchGridContainer>
	);
}

function LaunchGridView({ isLoading, launches, fav }: LaunchGridViewProps) {
	const [page, setPage] = useState(1);

	const [prevItems, setPrevItems] = useState(launches);
	if (launches !== prevItems) {
		setPrevItems(launches);
		setPage(1);
	}

	if (launches.length === 0) {
		return (
			<LaunchGridContainer>
				<p>No launches found</p>
			</LaunchGridContainer>
		);
	}

	if (isLoading) {
		return (
			<LaunchGridContainer>
				{[1, 2, 3, 4, 5, 6].map((val, index) => {
					return <LaunchCardPlaceholder key={index} />;
				})}
			</LaunchGridContainer>
		);
	}

	return (
		<>
			<LaunchGridContainer>
				{launches
					.slice(0, page * PAGE_SIZE)
					.map(({ name, image, id, date, status }) => {
						return (
							<LaunchCard
								key={id}
								id={id}
								imageURL={image}
								name={name}
								date={new Date(date)}
								status={status}
								fav={fav}
							/>
						);
					})}
			</LaunchGridContainer>

			<InView
				onChange={(inView) => {
					inView && setPage((p) => p + 1);
				}}
			>
				<div id="in-view" className="mt-10 h-2"></div>
			</InView>
		</>
	);
}

LaunchGridView.displayName = "LaunchGridView";

export { LaunchGridView, LaunchGridPlaceholder };
