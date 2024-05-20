<script lang="ts">
	import { _ } from 'svelte-i18n';
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { InputCard } from '$components/cards';
	import { immoStore } from '$lib/stores/immo';
	import { IMMO_FIELDS } from '$lib/constants';
	import './notary.scss';
</script>

<div class="card-block notary-block">
	<InputCard label={$_('report.notaryFees')}>
		<RangeInput
			name={IMMO_FIELDS.NOTARYFEESPERCENT}
			min={0}
			max={100}
			toolTip={`${$immoStore.notaryFeesPercent} %`}
			bind:value={$immoStore.notaryFeesPercent}
			onInput={() => immoStore.updateValue(IMMO_FIELDS.NOTARYFEESPERCENT)}
		/>
		<InputNumber
			min={0}
			name={IMMO_FIELDS.NOTARYFEES}
			bind:value={$immoStore.notaryFees}
			onInput={() => immoStore.updateValue(IMMO_FIELDS.NOTARYFEES)}
		/>
	</InputCard>
</div>
