import { render, screen } from "@testing-library/react";
import { ScrollToTop } from "../scroll-to-top";
import { beforeEach, describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

// Mocking window.scrollTo
vi.spyOn(window, "scrollTo").mockImplementation(() => {});

describe("ScrollToTop Component", () => {
	beforeEach(() => {
		(window.scrollTo as any).mockClear();
	});

	test("button is not visible when scrolled less than 300px", () => {
		render(<ScrollToTop />);
		window.pageYOffset = 200;
		window.dispatchEvent(new Event("scroll"));

		const button = screen.queryByRole("button");
		expect(button).not.toBeInTheDocument();
	});

	test("removes event listener on unmount", () => {
		const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");
		const { unmount } = render(<ScrollToTop />);
		unmount();

		expect(removeEventListenerSpy).toHaveBeenCalledWith(
			"scroll",
			expect.any(Function)
		);
	});
});
