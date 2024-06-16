<script lang="ts">
	import { Spinner } from '$components/spinner';
	export let open: boolean = false;
</script>

{#if open}
	<dialog class="fixed inset-0 z-40 flex items-center justify-center bg-transparent">
		<div class="flex items-center justify-center">
			<Spinner />
		</div>
		<div class="absolute h-[100vh] w-[100vw] cursor-default bg-slate-900 opacity-15"></div>
	</dialog>
{/if}
