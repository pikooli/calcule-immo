<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { DisplayAmount } from '$components/displays';
	import { immoStore } from '$lib/stores/immo';
	import { formatNumber } from '$lib/utils/display';
</script>

<div class="grid grid-cols-2">
	<DisplayAmount
		label={$_('report.mortgageMonthlyRateAmount')}
		sign="€"
		value={formatNumber($immoStore.mortgageMonthlyRateAmount)}
	/>
	<DisplayAmount
		label={$_('report.mortgageMonthlyRatePercent')}
		sign="%"
		value={`${$immoStore.mortgageMonthlyRatePercent}`}
	/>
</div>
<div class="grid grid-cols-2">
	<DisplayAmount
		label={$_('report.mortageTotalRateAmount')}
		sign="€"
		value={formatNumber($immoStore.mortageTotalRateAmount)}
	/>
	<DisplayAmount
		label={$_('report.mortageInsuranceFeesTotal')}
		sign="€"
		value={formatNumber($immoStore.mortageInsuranceFeesTotal)}
	/>
</div>

<DisplayAmount label={$_('report.total')} sign="€" value={formatNumber($immoStore.total)} />
