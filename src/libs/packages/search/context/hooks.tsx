import { useContext } from "react";
import { Context } from "./context";

const useContextHook = function () {
	const ctx = useContext(Context);

	if (!ctx) {
		throw new Error(
			"useLaunchTrackerViewer must be used within a LaunchTrackerViewerContextProvider"
		);
	}

	return ctx;
};

export { useContextHook };
