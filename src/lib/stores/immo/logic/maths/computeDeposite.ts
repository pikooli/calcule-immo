import type { ImmoStore } from '$lib/stores/immo';
import { computeAmount, computePercent } from '$lib/utils/math';

export const computedepositeAmountOndepositePercent = (values: ImmoStore) =>
	computeAmount(values.amount, values.depositePercent);
export const computedepositePercentOndepositeAmount = (values: ImmoStore) =>
	computePercent(values.depositeAmount, values.amount);
export const computedepositeAmountOnmortgageAmount = (values: ImmoStore) => {
	const deposite = parseFloat((values.amount - values.mortgageAmount).toFixed(2));
	if (deposite < 0) {
		return 0;
	} else {
		return deposite;
	}
};
