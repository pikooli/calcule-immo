<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { InputNumberWithRange, InputNumber } from '$components/inputs';
	import { DisplayAmount } from '$components/displays';
	import { immoStore } from '$lib/stores/immo';
	import { MORTGAGE_DURATION_MAX_YEARS, MORTGAGE_DURATION_MIN_YEARS } from '$lib/constants';
	import { IMMO_FIELDS } from '$lib/constants';
	import { formatNumber } from '$lib/utils/display';

	import './mortage.scss';
</script>

<div class="card-block mortage-block grid grid-cols-2 gap-2">
	<div>
		<InputNumberWithRange
			label={$_('report.mortgageAmount')}
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
			sign="€"
		/>
		<InputNumberWithRange
			label={$_('report.mortgageRatePercent')}
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
			sign="€"
		/>
		<InputNumberWithRange
			label={$_('report.mortgageDurationYears')}
			nameInput={IMMO_FIELDS.MORTGAGEDURATIONYEARS}
			minInput={MORTGAGE_DURATION_MIN_YEARS}
			maxInput={MORTGAGE_DURATION_MAX_YEARS}
			bind:valueInput={$immoStore.mortgageDurationYears}
			onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGEDURATIONYEARS)}
			nameRange={IMMO_FIELDS.MORTGAGEDURATIONYEARS}
			minRange={MORTGAGE_DURATION_MIN_YEARS}
			maxRange={MORTGAGE_DURATION_MAX_YEARS}
			bind:valueRange={$immoStore.mortgageDurationYears}
			onInputRange={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGEDURATIONYEARS)}
			toolTip={`${$immoStore.mortgageDurationYears} %`}
			sign="€"
		/>
	</div>
	<div>
		<InputNumber
			label={$_('report.mortageInsuranceFees')}
			name={IMMO_FIELDS.MORTAGEINSURANCEFEES}
			min={0}
			onInput={() => immoStore.updateValue(IMMO_FIELDS.MORTAGEINSURANCEFEES)}
			sign="€"
			bind:value={$immoStore.mortageInsuranceFees}
		/>
		<DisplayAmount
			label={$_('report.mortgageMonthlyRatePercent')}
			sign="%"
			value={`${$immoStore.mortgageMonthlyRatePercent}`}
		/>
		<DisplayAmount
			label={$_('report.mortgageMonthlyRateAmount')}
			sign="€"
			value={formatNumber($immoStore.mortgageMonthlyRateAmount)}
		/>
		<DisplayAmount
			label={$_('report.mortageTotalRateAmount')}
			sign="€"
			value={formatNumber($immoStore.mortageTotalRateAmount)}
		/>
		<DisplayAmount
			label={$_('report.mortageInsuranceFeesTotal')}
			sign="€"
			value={formatNumber($immoStore.mortageInsuranceFeesTotal)}
		/>
	</div>
</div>
