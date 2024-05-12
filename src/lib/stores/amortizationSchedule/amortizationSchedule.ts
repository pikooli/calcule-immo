import { writable } from 'svelte/store';
import type { ImmoStore } from '$lib/stores/immo/';
import { generateSchedule } from '$lib/stores/amortizationSchedule/logic';

export interface MonthSchedule {
	month: number;
	monthlyPayment: number;
	monthlyInterest: number;
	monthMortgagePayement: number;
	remainingCapital: number;
	mortageInsuranceFees: number;
}

export interface YearSchedule {
	year: number;
	monthSchedule: MonthSchedule[];
	yearInterest: number;
	yearPayment: number;
	remainingCapital: number;
	mortageInsuranceFees: number;
}

export type AmortizationScheduleStore = YearSchedule[];

export const defaultMonthSchedule = {
	month: 1,
	monthlyPayment: 0,
	monthlyInterest: 0,
	monthMortgagePayement: 0,
	remainingCapital: 0,
	mortageInsuranceFees: 0
};
export const defaultYearSchedule = {
	year: 1,
	monthSchedule: [defaultMonthSchedule],
	yearInterest: 0,
	yearPayment: 0,
	remainingCapital: 0,
	mortageInsuranceFees: 0
};

export const defaultAmortizationScheduleStore: AmortizationScheduleStore = [defaultYearSchedule];

function createAmortizationScheduleStore() {
	const { subscribe, set, update } = writable(defaultAmortizationScheduleStore);

	const init = (immoValues: ImmoStore) => {
		update(() => generateSchedule(immoValues));
	};

	return {
		subscribe,
		set,
		update,
		init
	};
}

export const amortizationScheduleStore = createAmortizationScheduleStore();
