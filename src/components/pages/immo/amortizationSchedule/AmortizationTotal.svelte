<script lang="ts">
	import { t } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import { DisplayAmount } from '$components/displays';
	import { formatCurrency } from '$lib/utils/display';
</script>

<div class="grap-4 grid grid-cols-4 px-8 pb-6 pt-2">
	<DisplayAmount
		classLabel="text-center"
		label={$t('pages.immo.amortizationSchedule.total.mortgageInstalment')}
		value={`${$immoStore.mortgageDurationYears * 12}`}
	/>
	<DisplayAmount
		classLabel="text-center"
		label={$t('pages.immo.amortizationSchedule.total.mortgageInsuranceFeesTotal')}
		value={formatCurrency($immoStore.mortgageInsuranceFeesTotal)}
	/>
	<DisplayAmount
		classLabel="text-center"
		label={$t('pages.immo.amortizationSchedule.total.mortgageTotalRateAmount')}
		value={formatCurrency($immoStore.mortgageTotalRateAmount)}
	/>
	<DisplayAmount
		classLabel="text-center"
		label={$t('pages.immo.amortizationSchedule.total.mortgageAmount')}
		value={formatCurrency($immoStore.mortgageAmount)}
	/>
</div>
