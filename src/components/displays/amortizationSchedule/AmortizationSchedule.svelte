<script lang="ts">
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { YearSchedule } from '$components/displays/amortizationSchedule/yearSchedule';
	import './AmortizationSchedule.scss';
</script>

<div class="amortizationSchedule">
	<div class="amortizationSchedule-content">
		<h1 class="amortizationSchedule-title">Amortization Schedule</h1>
		{#each $amortizationScheduleStore as yearSchedule (yearSchedule)}
			<YearSchedule {yearSchedule} />
		{/each}
	</div>
</div>
