<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { InputNumberWithRange } from '$components/inputs';
	import { immoStore } from '$lib/stores/immo';
	import { IMMO_FIELDS, SIGN } from '$lib/constants';
	import { AgencyBlock } from '$components/forms/immo/agency';
	import { NotaryBlock } from '$components/forms/immo/notary';
	import './deposit.scss';
</script>

<div class="grid grid-cols-3">
	<InputNumberWithRange
		label={$_('report.depositAmount')}
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
		sign={SIGN}
	/>
	<AgencyBlock />
	<NotaryBlock />
</div>
