<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { InputNumberWithRange, InputNumber } from '$components/inputs';
	import { immoStore } from '$lib/stores/immo';
	import { MORTGAGE_DURATION_MAX_YEARS, MORTGAGE_DURATION_MIN_YEARS } from '$lib/constants';
	import { IMMO_FIELDS, SIGN } from '$lib/constants';
</script>

<div class="grid grid-cols-2 gap-2">
	<InputNumberWithRange
		label={$_('pages.immo.report.mortgageAmount')}
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
		sign={SIGN}
	/>
	<InputNumberWithRange
		label={$_('pages.immo.report.mortgageRatePercent')}
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
		sign={SIGN}
	/>
	<InputNumberWithRange
		label={$_('pages.immo.report.mortgageDurationYears')}
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
		toolTip={`${$immoStore.mortgageDurationYears}`}
		sign={SIGN}
	/>
	<InputNumber
		label={$_('pages.immo.report.mortgageInsuranceFees')}
		name={IMMO_FIELDS.mortgageINSURANCEFEES}
		min={0}
		onInput={() => immoStore.updateValue(IMMO_FIELDS.mortgageINSURANCEFEES)}
		sign={SIGN}
		bind:value={$immoStore.mortgageInsuranceFees}
	/>
</div>
