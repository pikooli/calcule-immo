<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { YearSchedule } from '$lib/stores/amortizationSchedule';
	import { formatNumber } from '$lib/utils/display';
	import { MonthSchedule } from '$components/pages/immo/amortizationSchedule/yearSchedule/monthSchedule/';
	import { DisplayStrong, DisplayAmount } from '$components/displays';
	import { SIGN } from '$lib/constants';

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
		text={`${$_('pages.immo.amortizationSchedule.yearSchedule.year')} : ${year + 1}`}
	></DisplayStrong>
	<MonthSchedule {monthSchedule} />
	<div class="grid grid-cols-6 gap-2">
		<DisplayStrong
			className="text-center"
			text={$_('pages.immo.amortizationSchedule.yearSchedule.total')}
		/>
		<DisplayAmount
			label={$_('pages.immo.amortizationSchedule.yearSchedule.yearPayment')}
			classLabel="text-center"
			sign={SIGN}
			value={formatNumber(yearPayment)}
		/>
		<DisplayAmount
			label={$_('pages.immo.amortizationSchedule.yearSchedule.yearMortgagePayment')}
			classLabel="text-center"
			sign={SIGN}
			value={formatNumber(yearMortgagePayment)}
		/>
		<DisplayAmount
			label={$_('pages.immo.amortizationSchedule.yearSchedule.yearInterest')}
			classLabel="text-center"
			sign={SIGN}
			value={formatNumber(yearInterest)}
		/>
		<DisplayAmount
			label={$_('pages.immo.amortizationSchedule.yearSchedule.mortgageInsuranceFees')}
			classLabel="text-center"
			sign={SIGN}
			value={formatNumber(mortgageInsuranceFees)}
		/>
		<DisplayAmount
			label={$_('pages.immo.amortizationSchedule.yearSchedule.remainingCapital')}
			classLabel="text-center"
			sign={SIGN}
			value={formatNumber(remainingCapital)}
		/>
	</div>
</div>
