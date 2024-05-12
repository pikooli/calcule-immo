<script lang="ts">
	import type { MonthSchedule } from '$lib/stores/amortizationSchedule';
	import MonthContent from '$components/displays/amortizationSchedule/yearSchedule/monthSchedule/MonthContent.svelte';
	export let monthSchedule: MonthSchedule[];
</script>

<div class="schedule-row">
	<p><strong>Month</strong></p>
	<p><strong>Monthly Payment</strong></p>
	<p><strong>Month Mortgage Payment</strong></p>
	<p><strong>Monthly Interest</strong></p>
	<p><strong>Mortgage Insurence</strong></p>
	<p><strong>Remaining Capital</strong></p>
</div>

{#each monthSchedule as monthContent}
	<MonthContent {monthContent} />
{/each}
