import { z } from 'zod';
import { writable } from 'svelte/store';
import type { ImmoStore } from '$lib/stores/immo/';
import { generateSchedule } from '$lib/stores/amortizationSchedule/logic';
import { monthScheduleValidator, yearScheduleValidator } from '$lib/validator';

export interface MonthSchedule extends z.infer<typeof monthScheduleValidator> {}

export interface YearSchedule extends z.infer<typeof yearScheduleValidator> {}

export type AmortizationScheduleStore = YearSchedule[];

export const defaultMonthSchedule = {
	month: 1,
	monthlyPayment: 0,
	monthlyInterest: 0,
	monthMortgagePayment: 0,
	remainingCapital: 0,
	mortgageInsuranceFees: 0
};
export const defaultYearSchedule = {
	year: 1,
	monthSchedule: [defaultMonthSchedule],
	yearPayment: 0,
	yearInterest: 0,
	yearMortgagePayment: 0,
	remainingCapital: 0,
	mortgageInsuranceFees: 0
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
