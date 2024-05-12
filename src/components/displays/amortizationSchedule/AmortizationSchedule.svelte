<script lang="ts">
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { YearSchedule } from '$components/displays/amortizationSchedule/yearSchedule';
</script>

<h1>Amortization Schedule</h1>
{#each $amortizationScheduleStore as yearSchedule}
	<YearSchedule {yearSchedule} />
{/each}
