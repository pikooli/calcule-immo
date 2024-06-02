<script lang="ts">
	import { onMount } from 'svelte';
	import { modalStore } from '$lib/stores/modals';
	import { IconBtn } from '$components/buttons';
	import crossIcon from '$lib/assets/icons/cross.png';
	export let open: boolean = false;
	export let haveCloseBtn: boolean = false;

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			modalStore.closeModal();
		}
	}

	onMount(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	});
</script>

<dialog {open} class="absolute top-0 h-full w-full bg-transparent">
	<div class="absolute z-10 w-full p-4">
		{#if haveCloseBtn}
			<IconBtn
				src={crossIcon}
				className="absolute right-0 z-20 mr-6"
				iconClass="h-[25px]"
				handleClick={modalStore.triggerModal}
			/>
		{/if}
		{#if $modalStore.component}
			<svelte:component this={$modalStore.component} />
		{/if}
	</div>
	<button
		class="absolute left-0 right-0 top-0 z-0 h-full w-full cursor-default bg-slate-900 opacity-15"
		on:click={modalStore.triggerModal}
	/>
</dialog>
