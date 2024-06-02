<script lang="ts">
	import { t } from 'svelte-i18n';
	import type { YearSchedule } from '$lib/stores/amortizationSchedule';
	import { formatCurrency } from '$lib/utils/display';
	import { MonthSchedule } from '$components/pages/immo/amortizationSchedule/yearSchedule/monthSchedule/';
	import { DisplayStrong, DisplayAmount } from '$components/displays';

	export let yearSchedule: YearSchedule;
	const {
		monthSchedule,
		remainingCapital,
		year,
		yearInterest,
		yearPayment,
		mortgageInsuranceFees,
		yearMortgagePayment
	} = yearSchedule;
</script>

<div class="border-b-2 border-black pb-2">
	<DisplayStrong
		className="py-2"
		text={`${$t('pages.immo.amortizationSchedule.yearSchedule.year')} : ${year + 1}`}
	/>
	<MonthSchedule {monthSchedule} />
	<div class="grid grid-cols-6 gap-2">
		<DisplayStrong
			className="text-center"
			text={$t('pages.immo.amortizationSchedule.yearSchedule.total')}
		/>
		<DisplayAmount
			label={$t('pages.immo.amortizationSchedule.yearSchedule.yearPayment')}
			classLabel="text-center"
			value={formatCurrency(yearPayment)}
		/>
		<DisplayAmount
			label={$t('pages.immo.amortizationSchedule.yearSchedule.yearMortgagePayment')}
			classLabel="text-center"
			value={formatCurrency(yearMortgagePayment)}
		/>
		<DisplayAmount
			label={$t('pages.immo.amortizationSchedule.yearSchedule.yearInterest')}
			classLabel="text-center"
			value={formatCurrency(yearInterest)}
		/>
		<DisplayAmount
			label={$t('pages.immo.amortizationSchedule.yearSchedule.mortgageInsuranceFees')}
			classLabel="text-center"
			value={formatCurrency(mortgageInsuranceFees)}
		/>
		<DisplayAmount
			label={$t('pages.immo.amortizationSchedule.yearSchedule.remainingCapital')}
			classLabel="text-center"
			value={formatCurrency(remainingCapital)}
		/>
	</div>
</div>
