<script lang="ts">
	import type { YearSchedule } from '$lib/stores/amortizationSchedule';
	import { MonthSchedule } from '$components/displays/amortizationSchedule/yearSchedule/monthSchedule/';
	export let yearSchedule: YearSchedule;
</script>

{#each Object.entries(yearSchedule) as [key, value]}
	{#if key === 'year'}
		<h2>Year : {value}</h2>
	{:else if key === 'monthSchedule'}
		<MonthSchedule monthSchedule={value} />
	{:else}
		<p>{key}: {JSON.stringify(value, null, 2)}</p>
	{/if}
{/each}
