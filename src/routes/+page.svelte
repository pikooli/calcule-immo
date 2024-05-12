<script lang="ts">
	import { onMount } from 'svelte';
	import { immoStore } from '$lib/stores/immo';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { ImmoForm } from '$components/forms';
	import { AmortizationSchedule } from '$components/displays/amortizationSchedule';

	onMount(() => {
		immoStore.init();
		amortizationScheduleStore.init($immoStore);
	});
	$: console.log($amortizationScheduleStore);
</script>

<ImmoForm />

<ul class="display">
	{#each Object.entries($immoStore) as [key, value]}
		{#if key !== 'lastUpdated'}
			<li><strong>{key.replace(/_/g, ' ')}:</strong> {value}</li>
		{/if}
	{/each}
</ul>

<AmortizationSchedule />

<style>
	.display {
		display: grid;
		grid-template-columns: repeat(2, 2fr);
		padding-left: 80px;
		padding-right: 80px;
		& > li {
			list-style-type: none;
			border: solid 1px #679;
			padding: 10px;
		}
	}
</style>
