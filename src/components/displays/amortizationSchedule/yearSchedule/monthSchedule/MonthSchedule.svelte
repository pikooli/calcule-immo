<script lang="ts">
	import type { MonthSchedule } from '$lib/stores/amortizationSchedule';
	export let monthSchedule: MonthSchedule[];
	console.log('monthSchedule', monthSchedule);
</script>

{#each monthSchedule as month}
	{#each Object.entries(month) as [key, value]}
		{#if key === 'month'}
			<h3>Month : {value}</h3>
		{:else}
			<p>{key}: {JSON.stringify(value)}</p>
		{/if}
	{/each}
{/each}
