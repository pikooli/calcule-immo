<script lang="ts">
	import { t } from 'svelte-i18n';
	import { DisplayAmount } from '$components/displays';
	import { immoStore } from '$lib/stores/immo';
	import { formatCurrency } from '$lib/utils/display';
	import { PERCENT } from '$lib/constants';
</script>

<div class="grid gap-2 md:grid-cols-3">
	<DisplayAmount
		whiteLabel
		label={$t('pages.immo.report.mortgageMonthlyRateAmount')}
		value={formatCurrency($immoStore.mortgageMonthlyRateAmount)}
		toolTip={$t('pages.immo.descriptions.mortgageMonthlyRateAmount')}
		iconAlt={$t('pages.immo.descriptions.mortgageMonthlyRateAmount')}
		iconId="mortgageMonthlyRateAmountId"
	/>
	<DisplayAmount
		whiteLabel
		label={$t('pages.immo.report.mortgageMonthlyRateAmountWithInsurance')}
		value={formatCurrency($immoStore.mortgageMonthlyRateAmountWithInsurance)}
		toolTip={$t('pages.immo.descriptions.mortgageMonthlyRateAmountWithInsurance')}
		iconAlt={$t('pages.immo.descriptions.mortgageMonthlyRateAmountWithInsurance')}
		iconId="mortgageMonthlyRateAmountWithInsuranceId"
	/>
	<DisplayAmount
		whiteLabel
		label={$t('pages.immo.report.mortgageMonthlyRatePercent')}
		sign={PERCENT}
		value={`${$immoStore.mortgageMonthlyRatePercent}`}
		toolTip={$t('pages.immo.descriptions.mortgageMonthlyRatePercent')}
		iconAlt={$t('pages.immo.descriptions.mortgageMonthlyRatePercent')}
		iconId="mortgageMonthlyRatePercentId"
	/>
</div>
<div class="grid grid-cols-2 gap-2">
	<DisplayAmount
		whiteLabel
		label={$t('pages.immo.report.mortgageTotalRateAmount')}
		value={formatCurrency($immoStore.mortgageTotalRateAmount)}
		toolTip={$t('pages.immo.descriptions.mortgageTotalRateAmount')}
		iconAlt={$t('pages.immo.descriptions.mortgageTotalRateAmount')}
		iconId="mortgageTotalRateAmountId"
	/>
	<DisplayAmount
		whiteLabel
		label={$t('pages.immo.report.mortgageInsuranceFeesTotal')}
		value={formatCurrency($immoStore.mortgageInsuranceFeesTotal)}
		toolTip={$t('pages.immo.descriptions.mortgageInsuranceFeesTotal')}
		iconAlt={$t('pages.immo.descriptions.mortgageInsuranceFeesTotal')}
		iconId="mortgageInsuranceFeesTotalId"
	/>
</div>

<DisplayAmount
	classLabel="text-whiteText"
	label={$t('pages.immo.report.total')}
	value={formatCurrency($immoStore.total)}
	toolTip={$t('pages.immo.descriptions.total')}
	iconAlt={$t('pages.immo.descriptions.total')}
	iconId="totalId"
/>
