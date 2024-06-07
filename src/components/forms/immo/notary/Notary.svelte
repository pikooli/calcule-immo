<script lang="ts">
	import { t } from 'svelte-i18n';
	import { InputNumberWithRange } from '$components/inputs';
	import { immoStore } from '$lib/stores/immo';
	import { IMMO_FIELDS, SIGN } from '$lib/constants';
</script>

<InputNumberWithRange
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
	toolTip={`${$immoStore.notaryFeesPercent} %`}
	sign={SIGN}
/>
