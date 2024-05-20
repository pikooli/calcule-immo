<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { InputNumberWithRange } from '$components/inputs';
	import { InputCard } from '$components/cards';
	import { immoStore } from '$lib/stores/immo';
	import { MORTGAGE_DURATION_MAX_YEARS, MORTGAGE_DURATION_MIN_YEARS } from '../constants';
	import { IMMO_FIELDS } from '$lib/constants';
	import './mortage.scss';
</script>

<div class="card-block mortage-block">
	<InputCard label={$_('report.mortgageAmount')}>
		<InputNumberWithRange
			nameInput={IMMO_FIELDS.MORTGAGEAMOUNT}
			minInput={0}
			maxInput={$immoStore.amount}
			bind:valueInput={$immoStore.mortgageAmount}
			onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGEAMOUNT)}
			nameRange={IMMO_FIELDS.MORTGAGEAMOUNTPERCENT}
			minRange={0}
			maxRange={100}
			bind:valueRange={$immoStore.mortgageAmountPercent}
			onInputRange={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGEAMOUNTPERCENT)}
			toolTip={`${$immoStore.mortgageAmountPercent} %`}
		/>
	</InputCard>
	<InputCard label={$_('report.mortgageRatePercent')}>
		<InputNumberWithRange
			nameInput={IMMO_FIELDS.MORTGAGEAMOUNT}
			minInput={0}
			maxInput={100}
			bind:valueInput={$immoStore.mortgageRatePercent}
			onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGERATEPERCENT)}
			nameRange={IMMO_FIELDS.MORTGAGERATEPERCENT}
			minRange={0}
			maxRange={100}
			bind:valueRange={$immoStore.mortgageRatePercent}
			onInputRange={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGERATEPERCENT)}
			toolTip={`${$immoStore.mortgageRatePercent} %`}
		/>
	</InputCard>
	<InputCard label={$_('report.mortgageDurationYears')}>
		<InputNumberWithRange
			nameInput={IMMO_FIELDS.MORTGAGEDURATIONYEARS}
			minInput={0}
			maxInput={100}
			bind:valueInput={$immoStore.mortgageDurationYears}
			onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGEDURATIONYEARS)}
			nameRange={IMMO_FIELDS.MORTGAGEDURATIONYEARS}
			minRange={MORTGAGE_DURATION_MIN_YEARS}
			maxRange={MORTGAGE_DURATION_MAX_YEARS}
			bind:valueRange={$immoStore.mortgageDurationYears}
			onInputRange={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGEDURATIONYEARS)}
			toolTip={`${$immoStore.mortgageDurationYears} %`}
		/>
	</InputCard>
</div>
