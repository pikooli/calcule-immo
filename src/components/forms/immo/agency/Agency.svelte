<script lang="ts">
	import { t } from 'svelte-i18n';
	import { InputNumberWithSmallRange } from '$components/inputs';
	import { immoStore } from '$lib/stores/immo';
	import { IMMO_FIELDS, EUROS, PERCENT } from '$lib/constants';
	import './agency.scss';
</script>

<InputNumberWithSmallRange
	whiteLabel
	label={$t('pages.immo.report.agencyFees')}
	nameInput={IMMO_FIELDS.AGENCY_FEES}
	minInput={0}
	maxInput={$immoStore.amount}
	bind:valueInput={$immoStore.agencyFees}
	onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.AGENCY_FEES)}
	nameRange={IMMO_FIELDS.AGENCY_FEES_PERCENT}
	minRange={0}
	maxRange={100}
	toolTipRange={`${$immoStore.agencyFeesPercent} ${PERCENT}`}
	bind:valueRange={$immoStore.agencyFeesPercent}
	onInputRange={() => immoStore.updateValue(IMMO_FIELDS.AGENCY_FEES_PERCENT)}
	sign={EUROS}
	toolTip={$t('pages.immo.descriptions.agencyFees')}
	iconAlt={$t('pages.immo.descriptions.agencyFees')}
	iconId="agencyFeesId"
/>
