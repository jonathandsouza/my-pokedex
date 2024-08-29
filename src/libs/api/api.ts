import { Launch } from "@/libs/models";
import { fetchWithRetry } from "@/libs/utilities/fetch-with-retry";

async function getPokemonInfo() {
	try {
		const res = await fetchWithRetry(
			`${SPACE_X_ENDPOINT_BASE_URL}/launches`
		);

		const launches: Array<Launch> = res.map((launch: any) => {
			const { id, links, name, date_utc, upcoming, success } = launch;
			const { small } = links.patch;

			return {
				id: id,

				image: small,

				date: date_utc,
				status: upcoming ? "upcoming" : success ? "success" : "failure",

				name: name,
			};
		});

		return launches;
	} catch (error) {
		console.error("[ERROR] Failed to fetch launches", error);
		throw error;
	}
}
export { getPokemonInfo as getAllSpaceXLaunches };
