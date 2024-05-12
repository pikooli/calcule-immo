export const formatNumber = (number: number): string =>
	number.toLocaleString('fr-FR', {
		style: 'decimal',
		maximumFractionDigits: 2
	});
