import { writable } from 'svelte/store';

function createLoaderGlobalStore() {
	const { subscribe, set, update } = writable(false);

	const closeLoading = () => {
		update(() => {
			return false;
		});
	};

	const triggerLoading = (e?: MouseEvent) => {
		e?.preventDefault();
		update((value) => {
			return !value;
		});
	};

	return {
		subscribe,
		set,
		update,
		triggerLoading,
		closeLoading
	};
}

export const loaderGlobalStore = createLoaderGlobalStore();
