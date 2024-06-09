import type { ImmoStore } from '$lib/stores/immo';

export const computeMonthyInsuranceFeeByPercent = (values: ImmoStore) => {
	if (values.mortgageAmount === 0) {
		return 0;
	}
	const percentMonthy = values.mortgageInsurancePercent / 12;
	return parseFloat(((values.mortgageAmount * percentMonthy) / 100).toFixed(2));
};

export const computeInsuranceFeePercentByAmount = (values: ImmoStore) => {
	if (values.mortgageAmount === 0) {
		return 0;
	}
	return parseFloat(((values.mortgageInsuranceFees * 100 * 12) / values.mortgageAmount).toFixed(2));
};

export const computeInsuranceAnnuallyFees = (values: ImmoStore) =>
	parseFloat((values.mortgageInsuranceFees * 12).toFixed(2));
export const computeInsuranceMonthyFeesByAnnually = (values: ImmoStore) =>
	parseFloat((values.mortgageInsuranceAnnuallyFees / 12).toFixed(2));
