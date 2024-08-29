import { RETRY_ATTEMPTS, RETRY_DELAY } from "@/libs/config";
import { ApolloClient } from "@apollo/client";

async function fetchWithRetry(client: ApolloClient, url: string) {
	for (let attempt = 0; attempt < RETRY_ATTEMPTS; attempt++) {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(
					`[ERROR] HTTP error! status: ${response.status}`
				);
			}
			return await response.json();
		} catch (error) {
			if (attempt < RETRY_ATTEMPTS - 1) {
				console.warn(
					`Attempt ${
						attempt + 1
					} failed. Retrying in ${RETRY_DELAY}ms...`
				);
				await new Promise((resolve) =>
					setTimeout(resolve, RETRY_DELAY)
				);
			} else {
				console.error("[ERROR] All attempts failed.");
				throw error;
			}
		}
	}
}

export { fetchWithRetry };
