import { writable } from 'svelte/store';
import type { ImmoStore } from '$lib/stores/immo/';
import { generateSchedule } from '$lib/stores/amortizationSchedule/logic';

export interface MonthSchedule {
	month: number;
	monthlyPayment: number;
	monthlyInterest: number;
	monthlyCapital: number;
	remainingCapital: number;
}

export interface YearSchedule {
	year: number;
	monthSchedule: MonthSchedule[];
	yearInterest: number;
	yearPayment: number;
	remainingCapital: number;
}

export type AmortizationScheduleStore = YearSchedule[];

const defaultAmortizationScheduleStore: AmortizationScheduleStore = [
	{
		year: 1,
		monthSchedule: [
			{
				month: 1,
				monthlyPayment: 0,
				monthlyInterest: 0,
				monthlyCapital: 0,
				remainingCapital: 0
			}
		],
		yearInterest: 0,
		yearPayment: 0,
		remainingCapital: 0
	}
];

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
