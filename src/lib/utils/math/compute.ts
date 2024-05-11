export const computePercent = (value1: number, value2: number = 0): number => {
	if (Number(value2) === 0) return 0;
	return Math.round((Number(value1) / Number(value2)) * 100);
};

export const computeAmount = (value: number, percent: number = 0): number => {
	return Math.round((Number(value) * Number(percent)) / 100);
};
