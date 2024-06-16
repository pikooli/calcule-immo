<script lang="ts">
	import { onMount } from 'svelte';
	import { alertStore } from '$lib/stores/alerts';
	import { IconBtn } from '$components/buttons';
	import { crossIconAvif } from '$lib/assets/icons';
	export let open: boolean = false;
	export let haveCloseBtn: boolean = false;

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			alertStore.closeAlert();
		}
	}

	onMount(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	});
</script>

<dialog {open} class="absolute top-0 z-40 h-full w-full bg-transparent">
	<div
		class="absolute z-10 mx-[2.5vw] my-[2.5vh] max-h-[95vh] w-[95vw] overflow-scroll rounded-md border border-black bg-grayColor shadow-md"
	>
		{#if haveCloseBtn}
			<IconBtn
				src={crossIconAvif}
				className="absolute right-0 z-20 mr-6"
				iconClass="h-[25px]"
				handleClick={alertStore.triggerAlert}
				iconId="close-alert"
				alt="close-alert"
			/>
		{/if}
		{#if $alertStore.component}
			<svelte:component this={$alertStore.component} message={$alertStore.options?.message} />
		{/if}
	</div>
	<button
		class="absolute left-0 right-0 top-0 z-0 h-full w-full cursor-default bg-slate-900 opacity-15"
		on:click={alertStore.triggerAlert}
	/>
</dialog>
