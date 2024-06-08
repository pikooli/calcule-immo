import type { ComponentType } from 'svelte';
import { writable } from 'svelte/store';
import { ErrorAlert, SuccessAlert } from '$components/displays';

const ALERT_DURATION = 3000;

export interface AlertStore {
	isOpen: boolean;
	component: ComponentType | null;
	options?: { message?: string };
}

const defaultState: AlertStore = {
	isOpen: false,
	component: null,
	options: {}
};

function createAlertStore() {
	const { subscribe, set, update } = writable<AlertStore>(defaultState);

	const closeAlert = () => {
		update((value) => {
			return { ...value, isOpen: false };
		});
	};

	const triggerAlert = (e: MouseEvent) => {
		e.preventDefault();
		update((value) => {
			return { ...value, isOpen: !value.isOpen };
		});
	};

	const openAlert = (e: MouseEvent, { component }: Pick<AlertStore, 'component'>) => {
		e.preventDefault();
		update(() => {
			return { component, isOpen: true };
		});
	};

	const openAlertModal = (
		{ component }: Pick<AlertStore, 'component'>,
		options?: AlertStore['options']
	) => {
		update(() => {
			return { component, isOpen: true, options };
		});
		setTimeout(() => {
			closeAlert();
		}, ALERT_DURATION);
	};

	const openErrorAlert = (message: string) => {
		openAlertModal({ component: ErrorAlert }, { message });
	};

	const openSuccessAlert = (message: string) => {
		openAlertModal({ component: SuccessAlert }, { message });
	};

	return {
		subscribe,
		set,
		update,
		triggerAlert,
		openAlert,
		closeAlert,
		openErrorAlert,
		openSuccessAlert
	};
}

export const alertStore = createAlertStore();
