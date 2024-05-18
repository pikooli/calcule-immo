<script>
	import { _ } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import { InputCard } from '$components/cards';
	import InputNumber from '$components/inputs/InputNumber.svelte';
</script>

<div class="card-block amount-block">
	<InputCard label={$_('report.amount')}>
		<InputNumber
			name="amount"
			min={0}
			bind:value={$immoStore.amount}
			onInput={() => immoStore.updateValue('amount')}
		/>
	</InputCard>
</div>

<style>
	.amount-block {
		background-color: #f0f9d0;
		border: 1px solid #f0f9d0;
		border-radius: 8px 8px 0 0;
	}
</style>
