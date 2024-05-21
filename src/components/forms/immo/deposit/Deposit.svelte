<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { InputNumberWithRange } from '$components/inputs';
	import { immoStore } from '$lib/stores/immo';
	import { IMMO_FIELDS } from '$lib/constants';
	import './deposit.scss';
</script>

<div class="card-block deposit-block">
	<InputNumberWithRange
		label={$_('report.depositeAmount')}
		nameInput={IMMO_FIELDS.DEPOSITEAMOUNT}
		minInput={0}
		maxInput={$immoStore.amount}
		bind:valueInput={$immoStore.depositeAmount}
		onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.DEPOSITEAMOUNT)}
		nameRange={IMMO_FIELDS.DEPOSITEPERCENT}
		minRange={0}
		maxRange={100}
		toolTip={`${$immoStore.depositePercent} %`}
		bind:valueRange={$immoStore.depositePercent}
		onInputRange={() => immoStore.updateValue(IMMO_FIELDS.DEPOSITEPERCENT)}
		sign="€"
	/>
</div>
