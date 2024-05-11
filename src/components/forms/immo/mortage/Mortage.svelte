<script lang="ts">
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { immoValues } from '$lib/stores/immo';
	import { MORTGAGE_DURATION_MAX_YEARS, MORTGAGE_DURATION_MIN_YEARS } from '../constants';
	import './mortage.scss';
</script>

<div class="mortage-block">
	<RangeInput
		name="mortgageAmountPercent"
		min={0}
		max={100}
		bind:value={$immoValues.mortgageAmountPercent}
		onInput={() => immoValues.updateValue('mortgageAmountPercent')}
	/>
	<InputNumber
		name="mortgageAmount"
		min={0}
		max={$immoValues.amount}
		bind:value={$immoValues.mortgageAmount}
		onInput={() => immoValues.updateValue('mortgageAmount')}
	/>
	<RangeInput
		name="mortgageRatePercent"
		min={0}
		max={100}
		bind:value={$immoValues.mortgageRatePercent}
		onInput={() => immoValues.updateValue('mortgageRatePercent')}
	/>
	<InputNumber
		name="mortgageRatePercent"
		min={0}
		max={100}
		bind:value={$immoValues.mortgageRatePercent}
		onInput={() => immoValues.updateValue('mortgageRatePercent')}
	/>
	<RangeInput
		name="mortgageDurationYears"
		min={MORTGAGE_DURATION_MIN_YEARS}
		max={MORTGAGE_DURATION_MAX_YEARS}
		bind:value={$immoValues.mortgageDurationYears}
		onInput={() => immoValues.updateValue('mortgageDurationYears')}
	/>
	<InputNumber
		name="mortgageDurationYears"
		min={MORTGAGE_DURATION_MIN_YEARS}
		max={MORTGAGE_DURATION_MAX_YEARS}
		bind:value={$immoValues.mortgageDurationYears}
		onInput={() => immoValues.updateValue('mortgageDurationYears')}
	/>
</div>
