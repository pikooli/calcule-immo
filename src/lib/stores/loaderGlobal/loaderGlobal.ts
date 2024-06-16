import { writable } from 'svelte/store';

function createLoaderGlobalStore() {
	const { subscribe, set, update } = writable(false);

	const closeAlert = () => {
		update(() => {
			return false;
		});
	};

	const triggerAlert = (e: MouseEvent) => {
		e.preventDefault();
		update((value) => {
			return !value;
		});
	};

	return {
		subscribe,
		set,
		update,
		triggerAlert,
		closeAlert
	};
}

export const loaderGlobalStore = createLoaderGlobalStore();
