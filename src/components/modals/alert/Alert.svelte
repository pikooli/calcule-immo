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

{#if open}
	<dialog class="fixed inset-0 z-40 flex h-dvh w-dvw bg-transparent">
		<div
			class="absolute z-10 mx-[2.5vw] my-[2.5vh] max-h-[95vh] w-[95vw] overflow-scroll rounded-md border border-black bg-grayColor shadow-md"
		>
			{#if haveCloseBtn}
				<IconBtn
					src={crossIconAvif}
					className="absolute right-1 top-1 z-40"
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
		<div class="absolute h-[100vh] w-[100vw] cursor-default bg-slate-900 opacity-15" />
	</dialog>
{/if}
