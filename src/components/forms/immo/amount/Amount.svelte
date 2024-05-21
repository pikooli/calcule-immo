<script>
	import { _ } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import { IMMO_FIELDS } from '$lib/constants';
</script>

<div class="card-block amount-block">
	<InputNumber
		label={$_('report.amount')}
		name={IMMO_FIELDS.AMOUNT}
		min={0}
		sign="€"
		bind:value={$immoStore.amount}
		onInput={() => immoStore.updateValue(IMMO_FIELDS.AMOUNT)}
	/>
</div>

<style>
	.amount-block {
		background-color: #f0f9d0;
		border: 1px solid #f0f9d0;
		border-radius: 8px 8px 0 0;
	}
</style>
