import { initValues } from '$lib/stores/immo/logic';
import {
	computatemortgageTotalRateAmount,
	computedepositeAmountOndepositePercent,
	computeMortgageAmount,
	computeMortgageMontlyRatePercentFixed,
	computeNotaryFees,
	computeTotal
} from './utils';
import { defaultImmoStore } from '$lib/stores/immo/immo';
import { describe, it, expect } from 'vitest';

describe('logic test', () => {
	it('InitValues', () => {
		const result = initValues(defaultImmoStore);
		expect(result.depositeAmount).toEqual(computedepositeAmountOndepositePercent(defaultImmoStore));
		expect(result.mortgageAmount).toEqual(computeMortgageAmount(defaultImmoStore));
		expect(result.mortgageMonthlyRatePercent).toEqual(
			computeMortgageMontlyRatePercentFixed(defaultImmoStore)
		);
		expect(result.mortgageMonthlyRateAmount).toEqual(937.2);
		expect(result.mortgageTotalRateAmount).toEqual(
			computatemortgageTotalRateAmount(defaultImmoStore)
		);
		expect(result.notaryFees).toEqual(computeNotaryFees(defaultImmoStore));
		expect(result.total).toEqual(computeTotal(defaultImmoStore).total);
	});
});

describe('updateValues test', () => {
	it('updateValues', () => {});
});
