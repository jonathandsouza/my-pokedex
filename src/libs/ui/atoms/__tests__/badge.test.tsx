import { describe, it, expect } from "vitest";
import { badgeVariants } from "@/libs/ui/atoms/badge";
import { render } from "@testing-library/react";
import { Badge } from "@/libs/ui/atoms/badge";
import "@testing-library/jest-dom/vitest";

describe("badgeVariants", () => {
	it("should return default variant classes", () => {
		const result = badgeVariants({ variant: "default" });
		expect(result).toContain("bg-primary");
		expect(result).toContain("text-primary-foreground");
	});

	it("should return secondary variant classes", () => {
		const result = badgeVariants({ variant: "secondary" });
		expect(result).toContain("bg-secondary");
		expect(result).toContain("text-secondary-foreground");
	});

	it("should return destructive variant classes", () => {
		const result = badgeVariants({ variant: "destructive" });
		expect(result).toContain("bg-destructive");
		expect(result).toContain("text-destructive-foreground");
	});

	it("should return outline variant classes", () => {
		const result = badgeVariants({ variant: "outline" });
		expect(result).toContain("text-foreground");
	});
});

describe("Badge", () => {
	it("should render with default variant classes", () => {
		const { container } = render(<Badge variant="default" />);
		expect(container.firstChild).toHaveClass("bg-primary");
		expect(container.firstChild).toHaveClass("text-primary-foreground");
	});

	it("should render with secondary variant classes", () => {
		const { container } = render(<Badge variant="secondary" />);
		expect(container.firstChild).toHaveClass("bg-secondary");
		expect(container.firstChild).toHaveClass("text-secondary-foreground");
	});

	it("should render with destructive variant classes", () => {
		const { container } = render(<Badge variant="destructive" />);
		expect(container.firstChild).toHaveClass("bg-destructive");
		expect(container.firstChild).toHaveClass("text-destructive-foreground");
	});

	it("should render with outline variant classes", () => {
		const { container } = render(<Badge variant="outline" />);
		expect(container.firstChild).toHaveClass("text-foreground");
	});

	it("should apply additional class names", () => {
		const { container } = render(
			<Badge variant="default" className="extra-class" />
		);
		expect(container.firstChild).toHaveClass("extra-class");
	});
});
