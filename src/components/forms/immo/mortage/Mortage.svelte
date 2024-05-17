<script lang="ts">
	import { _ } from 'svelte-i18n';
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { InputCard } from '$components/cards';
	import { immoStore } from '$lib/stores/immo';
	import { MORTGAGE_DURATION_MAX_YEARS, MORTGAGE_DURATION_MIN_YEARS } from '../constants';
	import './mortage.scss';
</script>

<div class="card-block mortage-block">
	<InputCard label={$_('report.mortgageAmount')}>
		<RangeInput
			name="mortgageAmountPercent"
			min={0}
			max={100}
			bind:value={$immoStore.mortgageAmountPercent}
			onInput={() => immoStore.updateValue('mortgageAmountPercent')}
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
			name="mortgageRatePercent"
			min={0}
			max={100}
			bind:value={$immoStore.mortgageRatePercent}
			onInput={() => immoStore.updateValue('mortgageRatePercent')}
		/>
		<InputNumber
			name="mortgageRatePercent"
			min={0}
			max={100}
			bind:value={$immoStore.mortgageRatePercent}
			onInput={() => immoStore.updateValue('mortgageRatePercent')}
		/>
	</InputCard>
	<InputCard label={$_('report.mortgageDurationYears')}>
		<RangeInput
			name="mortgageDurationYears"
			min={MORTGAGE_DURATION_MIN_YEARS}
			max={MORTGAGE_DURATION_MAX_YEARS}
			bind:value={$immoStore.mortgageDurationYears}
			onInput={() => immoStore.updateValue('mortgageDurationYears')}
		/>
		<InputNumber
			name="mortgageDurationYears"
			min={MORTGAGE_DURATION_MIN_YEARS}
			max={MORTGAGE_DURATION_MAX_YEARS}
			bind:value={$immoStore.mortgageDurationYears}
			onInput={() => immoStore.updateValue('mortgageDurationYears')}
		/>
	</InputCard>
</div>
