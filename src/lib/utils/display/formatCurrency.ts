export const formatCurrency = (number: number): string => {
	if (number === null || number === undefined) return '0';
	return number.toLocaleString('fr-FR', {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 2
	});
};
