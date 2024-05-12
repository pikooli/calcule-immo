<script lang="ts">
	import type { MonthSchedule } from '$lib/stores/amortizationSchedule';
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
	<p>{monthlyPayment}</p>
	<p>{monthMortgagePayment}</p>
	<p>{monthlyInterest}</p>
	<p>{mortageInsuranceFees}</p>
	<p>{remainingCapital}</p>
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
