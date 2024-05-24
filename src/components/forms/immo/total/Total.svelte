<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { DisplayAmount } from '$components/displays';
	import { immoStore } from '$lib/stores/immo';
	import { formatNumber } from '$lib/utils/display';
	import { SIGN } from '$lib/constants';
	import questMarkIcon from '$lib/assets/images/questionMark.png';
</script>

<div class="grid grid-cols-2">
	<DisplayAmount
		label={$_('pages.immo.report.mortgageMonthlyRateAmount')}
		sign={SIGN}
		value={formatNumber($immoStore.mortgageMonthlyRateAmount)}
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
		sign={SIGN}
		value={formatNumber($immoStore.mortgageTotalRateAmount)}
	/>
	<DisplayAmount
		label={$_('pages.immo.report.mortgageInsuranceFeesTotal')}
		sign={SIGN}
		value={formatNumber($immoStore.mortgageInsuranceFeesTotal)}
	/>
</div>

<DisplayAmount
	label={$_('pages.immo.report.total')}
	sign={SIGN}
	value={formatNumber($immoStore.total)}
/>
