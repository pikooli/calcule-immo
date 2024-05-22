import { writable } from 'svelte/store';

function createModalStore() {
	const { subscribe, set, update } = writable(false);

	const triggerModal = (e: MouseEvent) => {
		e.preventDefault();
		update((value) => {
			return !value;
		});
	};
	return {
		subscribe,
		set,
		update,
		triggerModal
	};
}

export const modalStore = createModalStore();
