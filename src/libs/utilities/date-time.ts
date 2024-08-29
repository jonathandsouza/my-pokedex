function getAllYearsFrom(startYear: number) {
	const currentYear = new Date().getFullYear();
	const years = [];
	for (let year = startYear; year <= currentYear; year++) {
		years.push(year);
	}

	return years;
}

export { getAllYearsFrom };
