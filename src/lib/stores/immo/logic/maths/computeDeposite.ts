import type { ImmoStore } from '$lib/stores/immo';
import { computeAmount, computePercent } from '$lib/utils/math';

export const computedepositeAmountOndepositePercent = (values: ImmoStore) =>
	computeAmount(values.amount, values.depositePercent);
export const computedepositePercentOndepositeAmount = (values: ImmoStore) =>
	computePercent(values.depositeAmount, values.amount);
export const computedepositeAmountOnmortgageAmount = (values: ImmoStore) =>
	values.amount - values.mortgageAmount;
