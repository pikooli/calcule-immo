<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import { DisplayAmount } from '$components/displays';

	import { formatCurrency } from '$lib/utils/display';
</script>

<div class="grap-4 grid grid-cols-4 px-8 pt-2">
	<DisplayAmount
		classLabel="text-center"
		label={$_('pages.immo.amortizationSchedule.total.mortgageInstalment')}
		value={`${$immoStore.mortgageDurationYears * 12}`}
	/>
	<DisplayAmount
		classLabel="text-center"
		value={formatCurrency($immoStore.mortgageInsuranceFeesTotal)}
	/>
	<DisplayAmount
		classLabel="text-center"
		value={formatCurrency($immoStore.mortgageTotalRateAmount)}
	/>
	<DisplayAmount classLabel="text-center" value={formatCurrency($immoStore.mortgageAmount)} />
</div>
