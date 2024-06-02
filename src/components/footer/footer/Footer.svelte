<script lang="ts">
	import Company from './Company.svelte';
	import HelpCenter from './HelpCenter.svelte';
	import Legal from './Legal.svelte';
	import Download from './Download.svelte';
	import SubFooter from './SubFooter.svelte';
</script>

<footer class="bg-secondary">
	<div class="w-full">
		<div class="grid grid-cols-2 gap-8 px-10 px-4 py-6 md:grid-cols-4 lg:py-8">
			<Company />
			<HelpCenter />
			<Legal />
			<Download />
		</div>
		<div class="bg-gray-100 px-4 py-6 md:flex md:items-center md:justify-between dark:bg-gray-700">
			<SubFooter />
		</div>
	</div>
</footer>
