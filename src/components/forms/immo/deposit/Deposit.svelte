<script lang="ts">
	import { t } from 'svelte-i18n';
	import { InputNumberWithSmallRange } from '$components/inputs';
	import { immoStore } from '$lib/stores/immo';
	import { IMMO_FIELDS, EUROS, PERCENT } from '$lib/constants';
	import { AgencyBlock } from '$components/forms/immo/agency';
	import { NotaryBlock } from '$components/forms/immo/notary';
	import './deposit.scss';
</script>

<div class="grid gap-2 md:grid-cols-3">
	<InputNumberWithSmallRange
		whiteLabel
		label={$t('pages.immo.report.depositAmount')}
		nameInput={IMMO_FIELDS.DEPOSITE_AMOUNT}
		minInput={0}
		maxInput={$immoStore.amount}
		bind:valueInput={$immoStore.depositeAmount}
		onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.DEPOSITE_AMOUNT)}
		nameRange={IMMO_FIELDS.DEPOSITE_PERCENT}
		minRange={0}
		maxRange={100}
		toolTipRange={`${$immoStore.depositePercent} ${PERCENT}`}
		bind:valueRange={$immoStore.depositePercent}
		onInputRange={() => immoStore.updateValue(IMMO_FIELDS.DEPOSITE_PERCENT)}
		sign={EUROS}
		toolTip={$t('pages.immo.descriptions.deposit')}
		iconAlt={$t('pages.immo.descriptions.deposit')}
		iconId="depositId"
	/>
	<AgencyBlock />
	<NotaryBlock />
</div>
