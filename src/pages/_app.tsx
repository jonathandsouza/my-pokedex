import { GraphQLProvider } from "@/libs/graph-ql";
import { ErrorBoundary } from "@/libs/ui/molecules/error-boundary";
import { TrackerNav } from "@/libs/ui/organisms/tracker-nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>

				<link
					rel="dns-prefetch"
					href="https://graphqlpokemon.favware.tech/"
				/>
				<link
					rel="dns-prefetch"
					href="https://play.pokemonshowdown.com/"
				/>
			</Head>

			<TrackerNav />

			<main className={`${inter.className}`}>
				<ErrorBoundary>
					<GraphQLProvider>
						<Component {...pageProps} />
					</GraphQLProvider>
				</ErrorBoundary>
			</main>
		</>
	);
}
