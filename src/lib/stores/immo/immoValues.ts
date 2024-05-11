import { writable } from 'svelte/store';
import { computeAmount, computePercent } from '$lib/utils/math';

const NOTARY_PERCENT = 7;

interface ImmoValues {
	amount: number;
	depositePercent: number;
	depositeAmount: number;
	mortgageAmount: number;
	mortgagePercent: number;
	mortgageDurationYears: number; // ===
	mortgageRatePercent: number; // ===
	mortage_insurance: number; // ===
	agencyFees: number; // ===
	notaryFees: number;
	notaryFeesPercent: number;
	lastUpdated: string;
	total: number;
}

const defaultImmoValues: ImmoValues = {
	amount: 100,
	depositePercent: 10,
	depositeAmount: 0,
	mortgageAmount: 0,
	mortgagePercent: 90,
	mortgageDurationYears: 0,
	mortgageRatePercent: 0,
	mortage_insurance: 0,
	agencyFees: 0,
	notaryFees: 0,
	notaryFeesPercent: NOTARY_PERCENT,
	lastUpdated: '',
	total: 0
};

const computeNotaryFees = (values: ImmoValues) =>
	computeAmount(values.amount, values.notaryFeesPercent);
const computenotaryFees = (values: ImmoValues) => computePercent(values.notaryFees, values.amount);
const computedepositeAmountOndepositePercent = (values: ImmoValues) =>
	computeAmount(values.amount, values.depositePercent);
const computedepositePercentOndepositeAmount = (values: ImmoValues) =>
	computeAmount(values.depositeAmount, values.amount);
const computeMortgageAmountOnMortagePercent = (values: ImmoValues) =>
	computeAmount(values.amount, values.mortgagePercent);
const computeMortgageAmountOnMortageAmount = (values: ImmoValues) =>
	computePercent(values.mortgageAmount, values.amount);

const computedepositeAmountOnMortageAmount = (values: ImmoValues) =>
	values.amount - values.mortgageAmount;
const computeMortgageAmount = (values: ImmoValues) => values.amount - values.depositeAmount;

function createImmoStore() {
	const { subscribe, set, update } = writable(defaultImmoValues);

	const init = () => {
		update((values) => {
			values.depositeAmount = computedepositeAmountOndepositePercent(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.notaryFees = computeNotaryFees(values);
			values.total =
				Number(values.depositeAmount) + Number(values.notaryFees) + Number(values.mortgageAmount);
			return values;
		});
	};

	const computeTotal = (values: ImmoValues) => {
		values.total =
			Number(values.depositeAmount) + Number(values.notaryFees) + Number(values.mortgageAmount);

		return values;
	};

	const updateValue = (field?: string) => {
		update((values) => {
			switch (field) {
				case 'amount': {
					values.depositeAmount = computedepositeAmountOndepositePercent(values);
					values.mortgageAmount = computeMortgageAmount(values);
					values.notaryFees = computeNotaryFees(values);
					break;
				}
				case 'depositePercent': {
					values.depositeAmount = computedepositeAmountOndepositePercent(values);
					values.mortgageAmount = computeMortgageAmount(values);
					values.mortgagePercent = computeMortgageAmountOnMortageAmount(values);
					break;
				}
				case 'depositeAmount': {
					values.depositePercent = computedepositePercentOndepositeAmount(values);
					values.mortgageAmount = computeMortgageAmount(values);
					values.mortgagePercent = computeMortgageAmountOnMortageAmount(values);
					break;
				}
				case 'mortgagePercent': {
					values.mortgageAmount = computeMortgageAmountOnMortagePercent(values);
					values.depositeAmount = computedepositeAmountOnMortageAmount(values);
					values.depositePercent = computedepositePercentOndepositeAmount(values);
					break;
				}
				case 'mortgageAmount': {
					values.mortgagePercent = computeMortgageAmountOnMortageAmount(values);
					values.depositeAmount = computedepositeAmountOnMortageAmount(values);
					values.depositePercent = computedepositePercentOndepositeAmount(values);
					break;
				}
				case 'mortgageRatePercent': {
					values.mortgagePercent = computeMortgageAmountOnMortageAmount(values);
					values.depositeAmount = computedepositeAmountOnMortageAmount(values);
					values.depositePercent = computedepositePercentOndepositeAmount(values);
					break;
				}
				case 'notaryFees': {
					values.notaryFeesPercent = computenotaryFees(values);
					break;
				}
				case 'notaryFeesPercent': {
					values.notaryFees = computeNotaryFees(values);
					break;
				}
			}

			return computeTotal(values);
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

export const immoValues = createImmoStore();
