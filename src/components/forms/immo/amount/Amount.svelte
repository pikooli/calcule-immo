<script>
	import { t } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import { IMMO_FIELDS, SIGN } from '$lib/constants';
</script>

<InputNumber
	label={$t('pages.immo.report.amount')}
	name={IMMO_FIELDS.AMOUNT}
	min={0}
	sign={SIGN}
	bind:value={$immoStore.amount}
	onInput={() => immoStore.updateValue(IMMO_FIELDS.AMOUNT)}
/>
