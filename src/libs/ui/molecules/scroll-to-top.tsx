import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<div className="fixed bottom-5 right-5 z-50">
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
				>
					↑
				</button>
			)}
		</div>
	);
};

export { ScrollToTop };
