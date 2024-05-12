<script lang="ts">
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { immoStore } from '$lib/stores/immo';
	import './agency.scss';
</script>

<div class="agency-block">
	<RangeInput
		name="agencyFeesPercent"
		min={0}
		max={100}
		bind:value={$immoStore.agencyFeesPercent}
		onInput={() => immoStore.updateValue('agencyFeesPercent')}
	/>
	<InputNumber
		min={0}
		max={$immoStore.amount}
		name="agencyFees"
		bind:value={$immoStore.agencyFees}
		onInput={() => immoStore.updateValue('agencyFees')}
	/>
</div>
