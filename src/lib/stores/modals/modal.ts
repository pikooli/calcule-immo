import type { ComponentType } from 'svelte';
import { writable } from 'svelte/store';
import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
import { immoStore } from '$lib/stores/immo';
import type { ImmoStore } from '$lib/stores/immo';
import { AmortizationSchedule } from '$components/pages/immo/amortizationSchedule';
import { Email } from '$components/pages/immo/email';

export interface ModalStore {
	isOpen: boolean;
	component: ComponentType | null;
}

const defaultState: ModalStore = {
	isOpen: false,
	component: null
};

function createModalStore() {
	let immoStoreValue: ImmoStore;
	const unsubscribe = immoStore.subscribe((value) => {
		immoStoreValue = value;
	});

	const { subscribe, set, update } = writable<ModalStore>(defaultState);

	const triggerModal = (e: MouseEvent) => {
		e.preventDefault();
		update((value) => {
			return { ...value, isOpen: !value.isOpen };
		});
	};

	const openModal = (e: MouseEvent, { component }: Pick<ModalStore, 'component'>) => {
		e.preventDefault();
		update(() => {
			return { component, isOpen: true };
		});
	};

	const openAmortizationScheduleModal = (e: MouseEvent) => {
		amortizationScheduleStore.init(immoStoreValue);
		openModal(e, { component: AmortizationSchedule });
	};
	const openEmailModal = (e: MouseEvent) => {
		amortizationScheduleStore.init(immoStoreValue);
		openModal(e, { component: Email });
	};

	return {
		subscribe,
		set,
		update,
		triggerModal,
		openModal,
		openAmortizationScheduleModal,
		openEmailModal,
		destroy() {
			unsubscribe();
		}
	};
}

export const modalStore = createModalStore();
