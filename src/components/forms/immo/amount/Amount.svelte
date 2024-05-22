<script>
	import { _ } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import { IMMO_FIELDS } from '$lib/constants';
</script>

<InputNumber
	label={$_('report.amount')}
	name={IMMO_FIELDS.AMOUNT}
	min={0}
	sign="€"
	bind:value={$immoStore.amount}
	onInput={() => immoStore.updateValue(IMMO_FIELDS.AMOUNT)}
/>
