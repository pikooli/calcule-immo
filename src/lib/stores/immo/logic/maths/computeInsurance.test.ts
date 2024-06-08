import { describe, it, expect } from 'vitest';
import {
	computeMonthyInsuranceFeeByPercent,
	computeInsuranceFeePercentByAmount
} from './computeInsurance';
import { defaultImmoStore } from '$lib/stores/immo/immo';

describe('computeMonthyInsuranceFeeByPercent test', () => {
	it('200000 mortgage, 0.2 mortgage Insurance Percent', () => {
		const result = computeMonthyInsuranceFeeByPercent({
			...defaultImmoStore,
			mortgageAmount: 200000,
			mortgageInsurancePercent: 0.2
		});

		expect(result).toEqual(33.33);
	});

	it('200000 mortgage, 0.1 mortgage Insurance Percent', () => {
		const result = computeMonthyInsuranceFeeByPercent({
			...defaultImmoStore,
			mortgageAmount: 200000,
			mortgageInsurancePercent: 0.1
		});

		expect(result).toEqual(16.67);
	});
	it('105600 mortgage, 0.2 mortgage Insurance Percent', () => {
		const result = computeMonthyInsuranceFeeByPercent({
			...defaultImmoStore,
			mortgageAmount: 105600,
			mortgageInsurancePercent: 0.2
		});

		expect(result).toEqual(17.6);
	});

	it('89187,83 mortgage, 0.2 mortgage Insurance Percent', () => {
		const result = computeMonthyInsuranceFeeByPercent({
			...defaultImmoStore,
			mortgageAmount: 89187.83,
			mortgageInsurancePercent: 0.2
		});

		expect(result).toEqual(14.86);
	});
});

describe('computeInsuranceFeePercentByAmount test', () => {
	it('200000 mortgage, 0.2 mortgage Insurance Percent', () => {
		const result = computeInsuranceFeePercentByAmount({
			...defaultImmoStore,
			mortgageAmount: 200000,
			mortgageInsuranceFees: 33.33
		});

		expect(result).toEqual(0.2);
	});

	it('200000 mortgage, 0.1 mortgage Insurance Percent', () => {
		const result = computeInsuranceFeePercentByAmount({
			...defaultImmoStore,
			mortgageAmount: 200000,
			mortgageInsuranceFees: 16.67
		});

		expect(result).toEqual(0.1);
	});
	it('105600 mortgage, 0.2 mortgage Insurance Percent', () => {
		const result = computeInsuranceFeePercentByAmount({
			...defaultImmoStore,
			mortgageAmount: 105600,
			mortgageInsuranceFees: 17.6
		});

		expect(result).toEqual(0.2);
	});

	it('89187,83 mortgage, 0.2 mortgage Insurance Percent', () => {
		const result = computeInsuranceFeePercentByAmount({
			...defaultImmoStore,
			mortgageAmount: 89187.83,
			mortgageInsurancePercent: 0.2
		});

		expect(result).toEqual(0.2);
	});
});
