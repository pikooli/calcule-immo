<script lang="ts">
	import { t } from 'svelte-i18n';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { YearSchedule } from '$components/pages/immo/amortizationSchedule/yearSchedule';
	import { DisplayH1 } from '$components/displays';
	import AmortizationTotal from './AmortizationTotal.svelte';
</script>

<div class="bg-stone-50 px-40">
	<DisplayH1 className="text-center p-2" text={$t('pages.immo.amortizationSchedule.title')} />
	<div class="py-2">
		{#each $amortizationScheduleStore as yearSchedule (yearSchedule)}
			<YearSchedule {yearSchedule} />
		{/each}
		<AmortizationTotal />
	</div>
</div>
