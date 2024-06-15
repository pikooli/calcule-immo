<script lang="ts">
	import { t } from 'svelte-i18n';
	import { InputNumberWithSmallRange } from '$components/inputs';
	import { immoStore } from '$lib/stores/immo';
	import { IMMO_FIELDS, EUROS, PERCENT } from '$lib/constants';
</script>

<InputNumberWithSmallRange
	label={$t('pages.immo.report.notaryFees')}
	nameInput={IMMO_FIELDS.NOTARY_FEES}
	minInput={0}
	bind:valueInput={$immoStore.notaryFees}
	onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.NOTARY_FEES)}
	nameRange={IMMO_FIELDS.NOTARY_FEES_PERCENT}
	minRange={0}
	maxRange={100}
	bind:valueRange={$immoStore.notaryFeesPercent}
	onInputRange={() => immoStore.updateValue(IMMO_FIELDS.NOTARY_FEES_PERCENT)}
	toolTipRange={`${$immoStore.notaryFeesPercent} ${PERCENT}`}
	sign={EUROS}
	toolTip={$t('pages.immo.descriptions.notaryFees')}
	iconAlt={$t('pages.immo.descriptions.notaryFees')}
	iconId="notaryFeesId"
/>
