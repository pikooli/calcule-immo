<script lang="ts">
	import { _ } from 'svelte-i18n';
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { InputCard } from '$components/cards';
	import { immoStore } from '$lib/stores/immo';
	import { IMMO_FIELDS } from '$lib/constants';
	import './agency.scss';
</script>

<div class="card-block agency-block">
	<InputCard label={$_('report.agencyFees')}>
		<RangeInput
			name={IMMO_FIELDS.AGENCYFEESPERCENT}
			min={0}
			max={100}
			bind:value={$immoStore.agencyFeesPercent}
			onInput={() => immoStore.updateValue(IMMO_FIELDS.AGENCYFEESPERCENT)}
		/>
		<InputNumber
			min={0}
			max={$immoStore.amount}
			name={IMMO_FIELDS.AGENCYFEES}
			bind:value={$immoStore.agencyFees}
			onInput={() => immoStore.updateValue(IMMO_FIELDS.AGENCYFEES)}
		/>
	</InputCard>
</div>
