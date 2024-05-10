import { immoValues } from '$lib/stores/immoValues';

export const inputRange = (e: InputEventElement) => {
	immoValues.updateValue('contribution_percent', e.currentTarget.value);
};

export const inputNumber = (e: InputEventElement) => {
	immoValues.updateValue('contribution_amount', e.currentTarget.value);
};
export const inputMortgage = (e: InputEventElement) => {
	immoValues.updateValue('mortgage_amount', e.currentTarget.value);
};
