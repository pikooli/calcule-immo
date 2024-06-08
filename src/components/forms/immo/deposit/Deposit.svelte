<script lang="ts">
	import { t } from 'svelte-i18n';
	import { InputNumberWithSmallRange } from '$components/inputs';
	import { immoStore } from '$lib/stores/immo';
	import { IMMO_FIELDS, EUROS } from '$lib/constants';
	import { AgencyBlock } from '$components/forms/immo/agency';
	import { NotaryBlock } from '$components/forms/immo/notary';
	import './deposit.scss';
</script>

<div class="grid grid-cols-3">
	<InputNumberWithSmallRange
		label={$t('pages.immo.report.depositAmount')}
		nameInput={IMMO_FIELDS.DEPOSITE_AMOUNT}
		minInput={0}
		maxInput={$immoStore.amount}
		bind:valueInput={$immoStore.depositeAmount}
		onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.DEPOSITE_AMOUNT)}
		nameRange={IMMO_FIELDS.DEPOSITE_PERCENT}
		minRange={0}
		maxRange={100}
		toolTip={`${$immoStore.depositePercent} %`}
		bind:valueRange={$immoStore.depositePercent}
		onInputRange={() => immoStore.updateValue(IMMO_FIELDS.DEPOSITE_PERCENT)}
		sign={EUROS}
	/>
	<AgencyBlock />
	<NotaryBlock />
</div>
