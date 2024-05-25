<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { DisplayAmount } from '$components/displays';
	import { immoStore } from '$lib/stores/immo';
	import { formatCurrency } from '$lib/utils/display';
	import questMarkIcon from '$lib/assets/images/questionMark.png';
</script>

<div class="grid grid-cols-2">
	<DisplayAmount
		label={$_('pages.immo.report.mortgageMonthlyRateAmount')}
		value={formatCurrency($immoStore.mortgageMonthlyRateAmount)}
	/>
	<DisplayAmount
		label={$_('pages.immo.report.mortgageMonthlyRatePercent')}
		sign="%"
		value={`${$immoStore.mortgageMonthlyRatePercent}`}
	/>
</div>
<div class="grid grid-cols-2">
	<DisplayAmount
		toolTip="test"
		iconId="test"
		iconSrc={questMarkIcon}
		label={$_('pages.immo.report.mortgageTotalRateAmount')}
		value={formatCurrency($immoStore.mortgageTotalRateAmount)}
	/>
	<DisplayAmount
		label={$_('pages.immo.report.mortgageInsuranceFeesTotal')}
		value={formatCurrency($immoStore.mortgageInsuranceFeesTotal)}
	/>
</div>

<DisplayAmount label={$_('pages.immo.report.total')} value={formatCurrency($immoStore.total)} />
