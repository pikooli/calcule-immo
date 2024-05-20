<script lang="ts">
	import { _ } from 'svelte-i18n';
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { InputCard } from '$components/cards';
	import { immoStore } from '$lib/stores/immo';
	import { MORTGAGE_DURATION_MAX_YEARS, MORTGAGE_DURATION_MIN_YEARS } from '../constants';
	import { IMMO_FIELDS } from '$lib/constants';
	import './mortage.scss';
</script>

<div class="card-block mortage-block">
	<InputCard label={$_('report.mortgageAmount')}>
		<RangeInput
			name={IMMO_FIELDS.MORTGAGEAMOUNTPERCENT}
			min={0}
			max={100}
			toolTip={`${$immoStore.mortgageAmountPercent} %`}
			bind:value={$immoStore.mortgageAmountPercent}
			onInput={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGEAMOUNTPERCENT)}
		/>
		<InputNumber
			name="mortgageAmount"
			min={0}
			max={$immoStore.amount}
			bind:value={$immoStore.mortgageAmount}
			onInput={() => immoStore.updateValue('mortgageAmount')}
		/>
	</InputCard>
	<InputCard label={$_('report.mortgageRatePercent')}>
		<RangeInput
			name={IMMO_FIELDS.MORTGAGERATEPERCENT}
			min={0}
			max={100}
			toolTip={`${$immoStore.mortgageRatePercent} %`}
			bind:value={$immoStore.mortgageRatePercent}
			onInput={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGERATEPERCENT)}
		/>
		<InputNumber
			name={IMMO_FIELDS.MORTGAGERATEPERCENT}
			min={0}
			max={100}
			bind:value={$immoStore.mortgageRatePercent}
			onInput={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGERATEPERCENT)}
		/>
	</InputCard>
	<InputCard label={$_('report.mortgageDurationYears')}>
		<RangeInput
			name={IMMO_FIELDS.MORTGAGEDURATIONYEARS}
			min={MORTGAGE_DURATION_MIN_YEARS}
			max={MORTGAGE_DURATION_MAX_YEARS}
			toolTip={`${$immoStore.mortgageDurationYears}`}
			bind:value={$immoStore.mortgageDurationYears}
			onInput={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGEDURATIONYEARS)}
		/>
		<InputNumber
			name={IMMO_FIELDS.MORTGAGEDURATIONYEARS}
			min={MORTGAGE_DURATION_MIN_YEARS}
			max={MORTGAGE_DURATION_MAX_YEARS}
			bind:value={$immoStore.mortgageDurationYears}
			onInput={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGEDURATIONYEARS)}
		/>
	</InputCard>
</div>
