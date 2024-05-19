import { initValues } from './logic';
import {
	computateMortageTotalRateAmount,
	computedepositeAmountOndepositePercent,
	computeMortgageAmount,
	computeMortgageMontlyRatePercentFixed,
	computeNotaryFees,
	computeTotal
} from './utils';
import { defaultImmoStore } from './immo';
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
		expect(result.mortageTotalRateAmount).toEqual(
			computateMortageTotalRateAmount(defaultImmoStore)
		);
		expect(result.notaryFees).toEqual(computeNotaryFees(defaultImmoStore));
		expect(result.total).toEqual(computeTotal(defaultImmoStore).total);
	});
});
