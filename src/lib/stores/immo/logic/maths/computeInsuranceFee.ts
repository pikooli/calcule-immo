import type { ImmoStore } from '$lib/stores/immo';

export const computeMonthyInsuranceFeeByPercent = (values: ImmoStore) => {
	const percentMonthy = values.mortgageInsurancePercent / 12;
	return parseFloat(((values.mortgageAmount * percentMonthy) / 100).toFixed(2));
};

export const computeInsuranceFeePercentByAmount = (values: ImmoStore) => {
	return parseFloat(((values.mortgageInsuranceFees * 100 * 12) / values.mortgageAmount).toFixed(2));
};
