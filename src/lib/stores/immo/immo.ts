import { writable } from 'svelte/store';
import { updateValues, initValues } from './logic';

const NOTARY_PERCENT = 7;

export interface ImmoStore {
	amount: number;
	depositePercent: number;
	depositeAmount: number;
	mortgageAmount: number;
	mortgageAmountPercent: number;
	mortgageDurationYears: number;
	mortgageRatePercent: number;
	mortgageMonthlyRatePercent: number;
	mortgageMonthlyRateAmount: number;
	mortageTotalRateAmount: number;
	mortageInsuranceFees: number; // ===
	agencyFees: number;
	agencyFeesPercent: number;
	notaryFees: number;
	notaryFeesPercent: number;
	lastUpdated: string;
	total: number;
}

export const defaultImmoStore: ImmoStore = {
	amount: 200000,
	depositePercent: 0,
	depositeAmount: 0,
	mortgageAmount: 0,
	mortgageAmountPercent: 100,
	mortgageDurationYears: 20,
	mortgageRatePercent: 1.2,
	mortgageMonthlyRatePercent: 0,
	mortgageMonthlyRateAmount: 0,
	mortageTotalRateAmount: 0,
	mortageInsuranceFees: 30,
	agencyFees: 0,
	agencyFeesPercent: 0,
	notaryFees: 0,
	notaryFeesPercent: NOTARY_PERCENT,
	lastUpdated: '',
	total: 0
};

function createImmoStore() {
	const { subscribe, set, update } = writable(defaultImmoStore);

	const init = () => {
		update(initValues);
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
