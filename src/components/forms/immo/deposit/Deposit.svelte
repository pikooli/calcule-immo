<script lang="ts">
	import { _ } from 'svelte-i18n';
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { InputCard } from '$components/cards';
	import { immoStore } from '$lib/stores/immo';
	import { IMMO_FIELDS } from '$lib/constants';
	import './deposit.scss';
</script>

<div class="card-block deposit-block">
	<InputCard label={$_('report.depositeAmount')}>
		<RangeInput
			name={IMMO_FIELDS.DEPOSITEPERCENT}
			min={0}
			max={100}
			toolTip={`${$immoStore.depositePercent} %`}
			bind:value={$immoStore.depositePercent}
			onInput={() => immoStore.updateValue(IMMO_FIELDS.DEPOSITEPERCENT)}
		/>
		<InputNumber
			name={IMMO_FIELDS.DEPOSITEAMOUNT}
			min={0}
			max={$immoStore.amount}
			bind:value={$immoStore.depositeAmount}
			onInput={() => immoStore.updateValue(IMMO_FIELDS.DEPOSITEAMOUNT)}
		/>
	</InputCard>
</div>
