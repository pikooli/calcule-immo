<script lang="ts">
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { immoValues } from '$lib/stores/immo';
	import './agency.scss';
</script>

<div class="agency-block">
	<RangeInput
		name="agencyFeesPercent"
		min={0}
		max={100}
		bind:value={$immoValues.agencyFeesPercent}
		onInput={() => immoValues.updateValue('agencyFeesPercent')}
	/>
	<InputNumber
		min={0}
		max={$immoValues.amount}
		name="agencyFees"
		bind:value={$immoValues.agencyFees}
		onInput={() => immoValues.updateValue('agencyFees')}
	/>
</div>
