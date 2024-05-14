<script lang="ts">
	import type { MonthSchedule } from '$lib/stores/amortizationSchedule';
	import { formatNumber } from '$lib/utils/display';
	export let monthContent: MonthSchedule;
	const {
		month,
		monthMortgagePayment,
		monthlyInterest,
		monthlyPayment,
		remainingCapital,
		mortageInsuranceFees
	} = monthContent;
</script>

<div class="schedule-row">
	<p>{month + 1}</p>
	<p class="euros">{formatNumber(monthlyPayment)}</p>
	<p class="euros">{formatNumber(monthMortgagePayment)}</p>
	<p class="euros">{formatNumber(monthlyInterest)}</p>
	<p class="euros">{formatNumber(mortageInsuranceFees)}</p>
	<p class="euros">{formatNumber(remainingCapital)}</p>
</div>

<style>
	.schedule-row {
		& > p {
			margin: 4px 0;
			padding: 8px;
			background-color: #f8f8f8;
			border: 1px solid #ddd;
		}
	}
</style>
