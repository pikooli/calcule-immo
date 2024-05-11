<script lang="ts">
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { immoValues } from '$lib/stores/immo';
	import './notary.scss';
</script>

<div class="notary-block">
	<RangeInput
		name="notaryFeesPercent"
		min={0}
		max={100}
		bind:value={$immoValues.notaryFeesPercent}
		onInput={() => immoValues.updateValue('notaryFeesPercent')}
	/>
	<InputNumber
		min={0}
		name="notaryFees"
		bind:value={$immoValues.notaryFees}
		onInput={() => immoValues.updateValue('notaryFees')}
	/>
</div>
