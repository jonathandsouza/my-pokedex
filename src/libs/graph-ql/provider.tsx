import { ApolloProvider } from "@apollo/client/react";
import client from "./client";

type props = {
	children: React.ReactNode;
};

function GraphQLProvider({ children }: props) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export { GraphQLProvider };
