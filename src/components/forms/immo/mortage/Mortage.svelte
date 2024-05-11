<script lang="ts">
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { immoValues } from '$lib/stores/immo';
	import { mortgageDurationYears_MIN, mortgageDurationYears_MAX } from '../constants';
	import './mortage.scss';
</script>

<div class="mortage-block">
	<RangeInput
		name="mortgagePercent"
		min={0}
		max={100}
		bind:value={$immoValues.mortgagePercent}
		onInput={() => immoValues.updateValue('mortgagePercent')}
	/>
	<InputNumber
		name="mortgageAmount"
		min={0}
		max={$immoValues.amount}
		bind:value={$immoValues.mortgageAmount}
		onInput={() => immoValues.updateValue('mortgageAmount')}
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
		min={mortgageDurationYears_MIN}
		max={mortgageDurationYears_MAX}
		bind:value={$immoValues.mortgageDurationYears}
	/>
</div>
