<script lang="ts">
	import { modalStore } from '$lib/stores/modals';
	export let open: boolean = false;
</script>

<dialog {open} class="absolute top-0 h-full w-full bg-transparent">
	<div class="absolute z-10 w-full p-4">
		<slot />
	</div>
	<button
		class="absolute left-0 right-0 top-0 z-0 h-full w-full cursor-default bg-slate-900 opacity-15"
		on:click={modalStore.triggerModal}
	/>
</dialog>
