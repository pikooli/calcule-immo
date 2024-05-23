<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { DisplayAmount } from '$components/displays';
	import { immoStore } from '$lib/stores/immo';
	import { formatNumber } from '$lib/utils/display';
	import { SIGN } from '$lib/constants';
</script>

<div class="grid grid-cols-2">
	<DisplayAmount
		label={$_('report.mortgageMonthlyRateAmount')}
		sign={SIGN}
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
		label={$_('report.mortgageTotalRateAmount')}
		sign={SIGN}
		value={formatNumber($immoStore.mortgageTotalRateAmount)}
	/>
	<DisplayAmount
		label={$_('report.mortgageInsuranceFeesTotal')}
		sign={SIGN}
		value={formatNumber($immoStore.mortgageInsuranceFeesTotal)}
	/>
</div>

<DisplayAmount label={$_('report.total')} sign={SIGN} value={formatNumber($immoStore.total)} />
