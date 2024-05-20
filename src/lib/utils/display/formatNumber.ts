export const formatNumber = (number: number): string => {
	if (number === null || number === undefined) return '0';
	return number.toLocaleString('fr-FR', {
		style: 'decimal',
		maximumFractionDigits: 2
	});
};
