<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { InputNumberWithRange } from '$components/inputs';
	import { immoStore } from '$lib/stores/immo';
	import { IMMO_FIELDS, SIGN } from '$lib/constants';
</script>

<InputNumberWithRange
	label={$_('pages.immo.report.notaryFees')}
	nameInput={IMMO_FIELDS.NOTARYFEES}
	minInput={0}
	bind:valueInput={$immoStore.notaryFees}
	onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.NOTARYFEES)}
	nameRange={IMMO_FIELDS.NOTARYFEESPERCENT}
	minRange={0}
	maxRange={100}
	bind:valueRange={$immoStore.notaryFeesPercent}
	onInputRange={() => immoStore.updateValue(IMMO_FIELDS.NOTARYFEESPERCENT)}
	toolTip={`${$immoStore.notaryFeesPercent} %`}
	sign={SIGN}
/>
