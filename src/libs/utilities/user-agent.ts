function isServer() {
	return typeof window === "undefined";
}

function isClient() {
	return typeof window !== "undefined";
}

export { isServer, isClient };
