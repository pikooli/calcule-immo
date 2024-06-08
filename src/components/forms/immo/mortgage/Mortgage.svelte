<script lang="ts">
	import { t } from 'svelte-i18n';
	import { InputNumberWithSmallRange } from '$components/inputs';
	import { immoStore } from '$lib/stores/immo';
	import { MORTGAGE_DURATION_MAX_YEARS, MORTGAGE_DURATION_MIN_YEARS } from '$lib/constants';
	import { IMMO_FIELDS, EUROS } from '$lib/constants';
</script>

<div class="grid grid-cols-2 gap-2">
	<InputNumberWithSmallRange
		label={$t('pages.immo.report.mortgageAmount')}
		nameInput={IMMO_FIELDS.MORTGAGE_AMOUNT}
		minInput={0}
		maxInput={$immoStore.amount}
		bind:valueInput={$immoStore.mortgageAmount}
		onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGE_AMOUNT)}
		nameRange={IMMO_FIELDS.MORTGAGE_AMOUNT_PERCENT}
		minRange={0}
		maxRange={100}
		bind:valueRange={$immoStore.mortgageAmountPercent}
		onInputRange={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGE_AMOUNT_PERCENT)}
		toolTipRange={`${$immoStore.mortgageAmountPercent} %`}
		sign={EUROS}
		toolTip={$t('pages.immo.descriptions.mortgageAmount')}
		iconAlt={$t('pages.immo.descriptions.mortgageAmount')}
		iconId="mortgageAmountId"
	/>
	<InputNumberWithSmallRange
		label={$t('pages.immo.report.mortgageRatePercent')}
		nameInput={IMMO_FIELDS.MORTGAGE_AMOUNT}
		minInput={0}
		maxInput={100}
		bind:valueInput={$immoStore.mortgageRatePercent}
		onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGE_RATE_PERCENT)}
		nameRange={IMMO_FIELDS.MORTGAGE_RATE_PERCENT}
		minRange={0}
		maxRange={100}
		bind:valueRange={$immoStore.mortgageRatePercent}
		onInputRange={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGE_RATE_PERCENT)}
		toolTipRange={`${$immoStore.mortgageRatePercent} %`}
		sign={EUROS}
		toolTip={$t('pages.immo.descriptions.mortgageRatePercent')}
		iconAlt={$t('pages.immo.descriptions.mortgageRatePercent')}
		iconId="mortgageRatePercentId"
	/>
	<InputNumberWithSmallRange
		label={$t('pages.immo.report.mortgageDurationYears')}
		nameInput={IMMO_FIELDS.MORTGAGE_DURATION_YEARS}
		minInput={MORTGAGE_DURATION_MIN_YEARS}
		maxInput={MORTGAGE_DURATION_MAX_YEARS}
		bind:valueInput={$immoStore.mortgageDurationYears}
		onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGE_DURATION_YEARS)}
		nameRange={IMMO_FIELDS.MORTGAGE_DURATION_YEARS}
		minRange={MORTGAGE_DURATION_MIN_YEARS}
		maxRange={MORTGAGE_DURATION_MAX_YEARS}
		bind:valueRange={$immoStore.mortgageDurationYears}
		onInputRange={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGE_DURATION_YEARS)}
		toolTipRange={`${$immoStore.mortgageDurationYears}`}
		sign={EUROS}
		toolTip={$t('pages.immo.descriptions.mortgageDurationYears')}
		iconAlt={$t('pages.immo.descriptions.mortgageDurationYears')}
		iconId="mortgageDurationYearsId"
	/>
	<InputNumberWithSmallRange
		label={$t('pages.immo.report.mortgageInsuranceFees')}
		nameInput={IMMO_FIELDS.MORTGAGE_INSURANCE_FEES}
		minInput={0}
		maxInput={$immoStore.mortgageAmount}
		bind:valueInput={$immoStore.mortgageInsuranceFees}
		onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGE_INSURANCE_FEES)}
		nameRange={IMMO_FIELDS.MORTGAGE_INSURANCE_PERCENT}
		minRange={0}
		maxRange={100}
		stepRange={0.01}
		bind:valueRange={$immoStore.mortgageInsurancePercent}
		onInputRange={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGE_INSURANCE_PERCENT)}
		toolTipRange={`${$immoStore.mortgageInsurancePercent} %`}
		toolTip={$t('pages.immo.descriptions.mortgageInsuranceFees')}
		iconAlt={$t('pages.immo.descriptions.mortgageInsuranceFees')}
		iconId="mortgageInsuranceFeesId"
	/>
</div>
