import type { ImmoStore } from '$lib/stores/immo';
import { computeMortgageTotalCost } from '$lib/stores/immo/logic/maths';

export const computeTotal = (values: ImmoStore) => {
	values.total =
		values.depositeAmount +
		values.mortgageAmount +
		values.notaryFees +
		values.agencyFees +
		values.mortgageTotalRateAmount +
		values.mortgageInsuranceFeesTotal;

	return computeMortgageTotalCost(values);
};
