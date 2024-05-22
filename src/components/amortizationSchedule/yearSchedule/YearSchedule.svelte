<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { YearSchedule } from '$lib/stores/amortizationSchedule';
	import { formatNumber } from '$lib/utils/display';
	import { MonthSchedule } from '$components/amortizationSchedule/yearSchedule/monthSchedule/';
	import { DisplayStrong, DisplayAmount } from '$components/displays';
	import { sign } from '$lib/constants';

	export let yearSchedule: YearSchedule;
	const {
		monthSchedule,
		remainingCapital,
		year,
		yearInterest,
		yearPayment,
		mortageInsuranceFees,
		yearMortgagePayment
	} = yearSchedule;
</script>

<div class="border-b-2 border-black pb-2">
	<DisplayStrong className="py-2"
		>{$_('amortizationSchedule.yearSchedule.year')} : {year + 1}</DisplayStrong
	>
	<MonthSchedule {monthSchedule} />
	<div class="grid grid-cols-6 gap-2">
		<DisplayStrong className="text-center">
			{$_('amortizationSchedule.yearSchedule.total')}
		</DisplayStrong>
		<DisplayAmount
			label={$_('amortizationSchedule.yearSchedule.yearPayment')}
			classLabel="text-center"
			{sign}
			value={formatNumber(yearPayment)}
		/>
		<DisplayAmount
			label={$_('amortizationSchedule.yearSchedule.yearMortgagePayment')}
			classLabel="text-center"
			{sign}
			value={formatNumber(yearMortgagePayment)}
		/>
		<DisplayAmount
			label={$_('amortizationSchedule.yearSchedule.yearInterest')}
			classLabel="text-center"
			{sign}
			value={formatNumber(yearInterest)}
		/>
		<DisplayAmount
			label={$_('amortizationSchedule.yearSchedule.mortageInsuranceFees')}
			classLabel="text-center"
			{sign}
			value={formatNumber(mortageInsuranceFees)}
		/>
		<DisplayAmount
			label={$_('amortizationSchedule.yearSchedule.remainingCapital')}
			classLabel="text-center"
			{sign}
			value={formatNumber(remainingCapital)}
		/>
	</div>
</div>
