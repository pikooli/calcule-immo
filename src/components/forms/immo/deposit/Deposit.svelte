<script lang="ts">
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { immoStore } from '$lib/stores/immo';
	import './deposit.scss';
</script>

<div class="deposit-block">
	<RangeInput
		name="depositePercent"
		min={0}
		max={100}
		bind:value={$immoStore.depositePercent}
		onInput={() => immoStore.updateValue('depositePercent')}
	/>
	<InputNumber
		min={0}
		max={$immoStore.amount}
		name="depositeAmount"
		bind:value={$immoStore.depositeAmount}
		onInput={() => immoStore.updateValue('depositeAmount')}
	/>
</div>
