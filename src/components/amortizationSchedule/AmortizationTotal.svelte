<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import { DisplayAmount } from '$components/displays';
	import { SIGN } from '$lib/constants';
	import { formatNumber } from '$lib/utils/display';
</script>

<div class="grap-4 grid grid-cols-4 px-8 pt-2">
	<DisplayAmount
		classLabel="text-center"
		label={$_('amortizationSchedule.total.mortgageInstalment')}
		value={`${$immoStore.mortgageDurationYears * 12}`}
	/>
	<DisplayAmount
		classLabel="text-center"
		label={$_('amortizationSchedule.total.mortgageInsuranceFeesTotal')}
		value={formatNumber($immoStore.mortgageInsuranceFeesTotal)}
		sign={SIGN}
	/>
	<DisplayAmount
		classLabel="text-center"
		label={$_('amortizationSchedule.total.mortgageTotalRateAmount')}
		value={formatNumber($immoStore.mortgageTotalRateAmount)}
		sign={SIGN}
	/>
	<DisplayAmount
		classLabel="text-center"
		label={$_('amortizationSchedule.total.mortgageAmount')}
		value={formatNumber($immoStore.mortgageAmount)}
		sign={SIGN}
	/>
</div>
