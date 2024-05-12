<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { YearSchedule } from '$components/displays/amortizationSchedule/yearSchedule';
	import './AmortizationSchedule.scss';
</script>

<div class="amortizationSchedule">
	<div class="amortizationSchedule-content">
		<h1 class="amortizationSchedule-title">{$_('amortizationSchedule.title')}</h1>
		{#each $amortizationScheduleStore as yearSchedule (yearSchedule)}
			<YearSchedule {yearSchedule} />
		{/each}
	</div>
</div>
