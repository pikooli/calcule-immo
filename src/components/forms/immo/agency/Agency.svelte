<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { InputNumberWithRange } from '$components/inputs';
	import { immoStore } from '$lib/stores/immo';
	import { IMMO_FIELDS, SIGN } from '$lib/constants';
	import './agency.scss';
</script>

<InputNumberWithRange
	label={$_('report.agencyFees')}
	nameInput={IMMO_FIELDS.AGENCYFEES}
	minInput={0}
	maxInput={$immoStore.amount}
	bind:valueInput={$immoStore.agencyFees}
	onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.AGENCYFEES)}
	nameRange={IMMO_FIELDS.AGENCYFEESPERCENT}
	minRange={0}
	maxRange={100}
	toolTip={`${$immoStore.agencyFeesPercent} %`}
	bind:valueRange={$immoStore.agencyFeesPercent}
	onInputRange={() => immoStore.updateValue(IMMO_FIELDS.AGENCYFEESPERCENT)}
	sign={SIGN}
/>
