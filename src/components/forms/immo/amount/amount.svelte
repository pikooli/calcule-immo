<script>
	import { _ } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import InputNumber from '$components/inputs/InputNumber.svelte';
</script>

<InputNumber
	name="amount"
	label={$_('report.amount')}
	min={0}
	bind:value={$immoStore.amount}
	onInput={() => immoStore.updateValue('amount')}
/>
