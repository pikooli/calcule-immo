<script lang="ts">
	import { t } from 'svelte-i18n';
	import { InputNumberWithSmallRange, InputNumber } from '$components/inputs';
	import { immoStore } from '$lib/stores/immo';
	import {
		MORTGAGE_DURATION_MAX_YEARS,
		MORTGAGE_DURATION_MIN_YEARS,
		MAX_MORTGAGE_INTERET,
		MORTGAGE_INTERET_STEP
	} from '$lib/constants';
	import { IMMO_FIELDS, EUROS, PERCENT } from '$lib/constants';
</script>

<div class="grid gap-2 md:grid-cols-2">
	<InputNumberWithSmallRange
		whiteLabel
		label={$t('pages.immo.report.mortgageAmount')}
		nameInput={IMMO_FIELDS.MORTGAGE_AMOUNT_PERCENT}
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
		whiteLabel
		label={$t('pages.immo.report.mortgageRatePercent')}
		nameInput={IMMO_FIELDS.MORTGAGE_AMOUNT}
		minInput={0}
		maxInput={MAX_MORTGAGE_INTERET}
		stepRange={MORTGAGE_INTERET_STEP}
		stepInput={MORTGAGE_INTERET_STEP}
		bind:valueInput={$immoStore.mortgageRatePercent}
		onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGE_RATE_PERCENT)}
		nameRange={IMMO_FIELDS.MORTGAGE_RATE_PERCENT}
		minRange={0}
		maxRange={MAX_MORTGAGE_INTERET}
		bind:valueRange={$immoStore.mortgageRatePercent}
		onInputRange={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGE_RATE_PERCENT)}
		toolTipRange={`${$immoStore.mortgageRatePercent} ${PERCENT}`}
		sign={PERCENT}
		toolTip={$t('pages.immo.descriptions.mortgageRatePercent')}
		iconAlt={$t('pages.immo.descriptions.mortgageRatePercent')}
		iconId="mortgageRatePercentId"
	/>
	<div class="grid gap-2">
		<InputNumberWithSmallRange
			whiteLabel
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
			toolTip={$t('pages.immo.descriptions.mortgageDurationYears')}
			iconAlt={$t('pages.immo.descriptions.mortgageDurationYears')}
			iconId="mortgageDurationYearsId"
		/>
		<InputNumber
			whiteLabel
			label={$t('pages.immo.report.mortgageMonthlyAmount')}
			name={IMMO_FIELDS.MORTGAGE_MONTHLY_AMOUNT}
			min={0}
			max={$immoStore.mortgageAmount}
			bind:value={$immoStore.mortgageMonthlyAmount}
			sign={EUROS}
			onInput={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGE_MONTHLY_AMOUNT)}
			toolTip={$t('pages.immo.descriptions.mortgageMonthlyAmount')}
			iconAlt={$t('pages.immo.descriptions.mortgageMonthlyAmount')}
			iconId="mortgageMonthlyAmountId"
		/>
	</div>
	<div class="grid gap-2">
		<InputNumberWithSmallRange
			whiteLabel
			label={$t('pages.immo.report.mortgageInsuranceAnnuallyFees')}
			nameInput={IMMO_FIELDS.MORTGAGE_INSURANCE_ANNUALLY_FEES}
			minInput={0}
			maxInput={$immoStore.mortgageAmount}
			bind:valueInput={$immoStore.mortgageInsuranceAnnuallyFees}
			onInputNumber={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGE_INSURANCE_ANNUALLY_FEES)}
			nameRange={IMMO_FIELDS.MORTGAGE_INSURANCE_PERCENT}
			minRange={0}
			maxRange={100}
			stepRange={0.01}
			sign={EUROS}
			bind:valueRange={$immoStore.mortgageInsurancePercent}
			onInputRange={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGE_INSURANCE_PERCENT)}
			toolTipRange={`${$immoStore.mortgageInsurancePercent} %`}
			toolTip={$t('pages.immo.descriptions.mortgageInsuranceAnnuallyFees')}
			iconAlt={$t('pages.immo.descriptions.mortgageInsuranceAnnuallyFees')}
			iconId="mortgageInsuranceAnnuallyFeesId"
		/>
		<InputNumber
			whiteLabel
			label={$t('pages.immo.report.mortgageInsuranceFees')}
			name={IMMO_FIELDS.MORTGAGE_INSURANCE_FEES}
			min={0}
			max={$immoStore.mortgageAmount}
			bind:value={$immoStore.mortgageInsuranceFees}
			sign={EUROS}
			onInput={() => immoStore.updateValue(IMMO_FIELDS.MORTGAGE_INSURANCE_FEES)}
			toolTip={$t('pages.immo.descriptions.mortgageInsuranceFees')}
			iconAlt={$t('pages.immo.descriptions.mortgageInsuranceFees')}
			iconId="mortgageInsuranceFeesId"
		/>
	</div>
</div>
