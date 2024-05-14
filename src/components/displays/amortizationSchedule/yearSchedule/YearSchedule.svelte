<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { YearSchedule } from '$lib/stores/amortizationSchedule';
	import { formatNumber } from '$lib/utils/display';
	import { MonthSchedule } from '$components/displays/amortizationSchedule/yearSchedule/monthSchedule/';
	import './YearSchedule.scss';

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

<div class="yearSchedule">
	<h2>{$_('amortizationSchedule.yearSchedule.year')} : {year + 1}</h2>
	<MonthSchedule {monthSchedule} />
	<div class="yearSchedule-conclusion">
		<p class="euros">
			{$_('amortizationSchedule.yearSchedule.yearPayment')} : {formatNumber(yearPayment)}
		</p>
		<p class="euros">
			{$_('amortizationSchedule.yearSchedule.yearMortgagePayment')} : {formatNumber(
				yearMortgagePayment
			)}
		</p>
		<p class="euros">
			{$_('amortizationSchedule.yearSchedule.yearInterest')} : {formatNumber(yearInterest)}
		</p>
		<p class="euros">
			{$_('amortizationSchedule.yearSchedule.mortageInsuranceFees')} : {formatNumber(
				mortageInsuranceFees
			)}
		</p>
		<p class="euros">
			{$_('amortizationSchedule.yearSchedule.remainingCapital')} : {formatNumber(remainingCapital)}
		</p>
	</div>
</div>
