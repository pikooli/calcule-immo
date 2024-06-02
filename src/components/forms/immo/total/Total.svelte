<script lang="ts">
	import { t } from 'svelte-i18n';
	import { DisplayAmount } from '$components/displays';
	import { immoStore } from '$lib/stores/immo';
	import { formatCurrency } from '$lib/utils/display';
	import questMarkIcon from '$lib/assets/icons/questionMark.png';
</script>

<div class="grid grid-cols-2">
	<DisplayAmount
		label={$t('pages.immo.report.mortgageMonthlyRateAmount')}
		value={formatCurrency($immoStore.mortgageMonthlyRateAmount)}
	/>
	<DisplayAmount
		label={$t('pages.immo.report.mortgageMonthlyRatePercent')}
		sign="%"
		value={`${$immoStore.mortgageMonthlyRatePercent}`}
	/>
</div>
<div class="grid grid-cols-2">
	<DisplayAmount
		toolTip="test"
		iconId="test"
		iconSrc={questMarkIcon}
		label={$t('pages.immo.report.mortgageTotalRateAmount')}
		value={formatCurrency($immoStore.mortgageTotalRateAmount)}
	/>
	<DisplayAmount
		label={$t('pages.immo.report.mortgageInsuranceFeesTotal')}
		value={formatCurrency($immoStore.mortgageInsuranceFeesTotal)}
	/>
</div>

<DisplayAmount label={$t('pages.immo.report.total')} value={formatCurrency($immoStore.total)} />
