<script lang="ts">
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { immoValues } from '$lib/stores/immo';
	import './deposit.scss';
</script>

<div class="deposit-block">
	<RangeInput
		name="depositePercent"
		min={0}
		max={100}
		bind:value={$immoValues.depositePercent}
		onInput={() => immoValues.updateValue('depositePercent')}
	/>
	<InputNumber
		min={0}
		max={$immoValues.amount}
		name="depositeAmount"
		bind:value={$immoValues.depositeAmount}
		onInput={() => immoValues.updateValue('depositeAmount')}
	/>
</div>
