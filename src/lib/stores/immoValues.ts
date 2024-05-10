import { writable } from 'svelte/store';

const NOTARY_PERCENT = 0.07;

function createImmoStore() {
	const { subscribe, set, update } = writable({
		amount: '100',
		contribution_percent: '0',
		contribution_amount: '0',
		mortgage_amount: '0',
		mortgage_duration: '0',
		notary_fees: '0',
		lastUpdated: '',
		total: 0
	});
	const calculateAll = () => {
		update((values) => {
			values.notary_fees = (Number(values.amount) * NOTARY_PERCENT).toFixed(0);
			values.total =
				Number(values.contribution_amount) +
				Number(values.notary_fees) +
				Number(values.mortgage_amount);
			return values;
		});
	};

	return {
		subscribe,
		updateValue: (field: string, value: string) => {
			update((values) => ({ ...values, [field]: value, lastUpdated: field }));
			calculateAll();
		},
		calculateAll,
		set,
		update
	};
}

export const immoValues = createImmoStore();
