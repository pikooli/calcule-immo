<script lang="ts">
	import { _ } from 'svelte-i18n';
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { immoStore } from '$lib/stores/immo';
	import './deposit.scss';
</script>

<div class="deposit-block">
	<RangeInput
		name="depositePercent"
		label={$_('report.depositePercent')}
		min={0}
		max={100}
		bind:value={$immoStore.depositePercent}
		onInput={() => immoStore.updateValue('depositePercent')}
	/>
	<InputNumber
		name="depositeAmount"
		label={$_('report.depositeAmount')}
		min={0}
		max={$immoStore.amount}
		bind:value={$immoStore.depositeAmount}
		onInput={() => immoStore.updateValue('depositeAmount')}
	/>
</div>
