import { writable } from 'svelte/store';
import { updateValues, initValues } from '$lib/stores/immo/logic';
import { z } from 'zod';
import { immoValidator } from '$lib/validator';

const NOTARY_PERCENT = 7;

export interface ImmoStore extends z.infer<typeof immoValidator> {}

export const defaultImmoStore: ImmoStore = {
	amount: 200000,
	depositePercent: 0,
	depositeAmount: 0,
	mortgageAmount: 200000,
	mortgageAmountPercent: 100,
	mortgageDurationYears: 20,
	mortgageRatePercent: 1.2,
	mortgageMonthlyRatePercent: 0,
	mortgageMonthlyAmount: 0,
	mortgageMonthlyAmountWithInsurance: 0,
	mortgageTotalRateAmount: 0,
	mortgageInsuranceFees: 0,
	mortgageInsuranceAnnuallyFees: 0,
	mortgageInsurancePercent: 0.2,
	mortgageInsuranceFeesTotal: 0,
	agencyFees: 0,
	agencyFeesPercent: 0,
	notaryFees: 0,
	notaryFeesPercent: NOTARY_PERCENT,
	lastUpdated: '',
	totalMortgageCost: 0,
	total: 0
};

function createImmoStore() {
	const { subscribe, set, update } = writable(defaultImmoStore);

	const init = (immoValues?: ImmoStore) => {
		update(immoValues ? () => initValues(immoValues) : initValues);
	};

	const updateValue = (field: string = '') => {
		update((values) => {
			return updateValues(field, values);
		});
	};

	return {
		subscribe,
		updateValue,
		init,
		set,
		update
	};
}

export const immoStore = createImmoStore();
