<script>
	import { t } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import { IMMO_FIELDS, EUROS } from '$lib/constants';
</script>

<InputNumber
	whiteLabel
	label={$t('pages.immo.report.amount')}
	name={IMMO_FIELDS.AMOUNT}
	min={0}
	sign={EUROS}
	bind:value={$immoStore.amount}
	onInput={() => immoStore.updateValue(IMMO_FIELDS.AMOUNT)}
	toolTip={$t('pages.immo.descriptions.amount')}
	iconAlt={$t('pages.immo.descriptions.amount')}
	iconId="amountId"
/>
