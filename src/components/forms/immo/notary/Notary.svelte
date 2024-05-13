<script lang="ts">
	import { _ } from 'svelte-i18n';
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { immoStore } from '$lib/stores/immo';
	import './notary.scss';
</script>

<div class="notary-block">
	<RangeInput
		name="notaryFeesPercent"
		label={$_('report.notaryFeesPercent')}
		min={0}
		max={100}
		bind:value={$immoStore.notaryFeesPercent}
		onInput={() => immoStore.updateValue('notaryFeesPercent')}
	/>
	<InputNumber
		min={0}
		name="notaryFees"
		label={$_('report.notaryFees')}
		bind:value={$immoStore.notaryFees}
		onInput={() => immoStore.updateValue('notaryFees')}
	/>
</div>
