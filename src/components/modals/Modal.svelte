<script lang="ts">
	import { onMount } from 'svelte';
	import { modalStore } from '$lib/stores/modals';
	import { IconBtn } from '$components/buttons';
	import { crossIconAvif } from '$lib/assets/icons';
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

{#if open}
	<dialog class="fixed inset-0 z-40 flex h-dvh w-dvw bg-transparent">
		{#if haveCloseBtn}
			<IconBtn
				src={crossIconAvif}
				className="absolute top-[6vh] right-[6vw] z-50"
				iconClass="h-[25px]"
				handleClick={modalStore.triggerModal}
				iconId="close-modal"
				alt="close-modal"
			/>
		{/if}
		<div
			class="relative z-40 mx-[2.5vw] my-[2.5vh] w-[95vw] overflow-scroll rounded-md border border-black bg-grayColor shadow-md"
		>
			{#if $modalStore.component}
				<svelte:component this={$modalStore.component} />
			{/if}
		</div>

		<button
			class="absolute inset-0 h-dvh w-dvw cursor-default bg-slate-900 opacity-15"
			on:click={modalStore.triggerModal}
		/>
	</dialog>
{/if}
