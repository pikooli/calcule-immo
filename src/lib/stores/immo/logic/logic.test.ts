import { initValues } from '$lib/stores/immo/logic';
import { defaultImmoStore } from '$lib/stores/immo/immo';
import { describe, it, expect } from 'vitest';

describe('logic test', () => {
	it('InitValues', () => {
		const result = initValues(defaultImmoStore);
		expect(result.depositeAmount).toEqual(0);
		expect(result.mortgageAmount).toEqual(defaultImmoStore.mortgageAmount);
		expect(result.mortgageMonthlyRatePercent).toEqual(0.000995);
		expect(result.mortgageMonthlyRateAmount).toEqual(937.15);
		expect(result.mortgageTotalRateAmount).toEqual(24916);
		expect(result.notaryFees).toEqual(14000);
		expect(result.total).toEqual(246915.2);
	});
});

describe('updateValues test', () => {
	it('updateValues', () => {});
});
