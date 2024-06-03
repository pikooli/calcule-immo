<script lang="ts">
	import Company from './Company.svelte';
	import HelpCenter from './HelpCenter.svelte';
	import Legal from './Legal.svelte';
	import Download from './Download.svelte';
	import SubFooter from './SubFooter.svelte';
</script>

<footer class="bg-secondary">
	<div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="grid grid-cols-2 gap-8 px-10 px-4 py-6 md:grid-cols-4">
			<Company />
			<HelpCenter />
			<Legal />
			<Download />
		</div>
		<div class="p-4 md:flex md:items-center md:justify-between">
			<SubFooter />
		</div>
	</div>
</footer>
