<script lang="ts">
	import { _ } from 'svelte-i18n';
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { immoStore } from '$lib/stores/immo';
	import { MORTGAGE_DURATION_MAX_YEARS, MORTGAGE_DURATION_MIN_YEARS } from '../constants';
	import './mortage.scss';
</script>

<div class="mortage-block">
	<RangeInput
		name="mortgageAmountPercent"
		label={$_('report.mortgageAmountPercent')}
		min={0}
		max={100}
		bind:value={$immoStore.mortgageAmountPercent}
		onInput={() => immoStore.updateValue('mortgageAmountPercent')}
	/>
	<InputNumber
		name="mortgageAmount"
		label={$_('report.mortgageAmount')}
		min={0}
		max={$immoStore.amount}
		bind:value={$immoStore.mortgageAmount}
		onInput={() => immoStore.updateValue('mortgageAmount')}
	/>
	<RangeInput
		name="mortgageRatePercent"
		label={$_('report.mortgageRatePercent')}
		min={0}
		max={100}
		bind:value={$immoStore.mortgageRatePercent}
		onInput={() => immoStore.updateValue('mortgageRatePercent')}
	/>
	<InputNumber
		name="mortgageRatePercent"
		label={$_('report.mortgageRatePercent')}
		min={0}
		max={100}
		bind:value={$immoStore.mortgageRatePercent}
		onInput={() => immoStore.updateValue('mortgageRatePercent')}
	/>
	<RangeInput
		name="mortgageDurationYears"
		label={$_('report.mortgageDurationYears')}
		min={MORTGAGE_DURATION_MIN_YEARS}
		max={MORTGAGE_DURATION_MAX_YEARS}
		bind:value={$immoStore.mortgageDurationYears}
		onInput={() => immoStore.updateValue('mortgageDurationYears')}
	/>
	<InputNumber
		name="mortgageDurationYears"
		label={$_('report.mortgageDurationYears')}
		min={MORTGAGE_DURATION_MIN_YEARS}
		max={MORTGAGE_DURATION_MAX_YEARS}
		bind:value={$immoStore.mortgageDurationYears}
		onInput={() => immoStore.updateValue('mortgageDurationYears')}
	/>
</div>
