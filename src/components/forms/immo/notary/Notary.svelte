<script lang="ts">
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { immoStore } from '$lib/stores/immo';
	import './notary.scss';
</script>

<div class="notary-block">
	<RangeInput
		name="notaryFeesPercent"
		min={0}
		max={100}
		bind:value={$immoStore.notaryFeesPercent}
		onInput={() => immoStore.updateValue('notaryFeesPercent')}
	/>
	<InputNumber
		min={0}
		name="notaryFees"
		bind:value={$immoStore.notaryFees}
		onInput={() => immoStore.updateValue('notaryFees')}
	/>
</div>
