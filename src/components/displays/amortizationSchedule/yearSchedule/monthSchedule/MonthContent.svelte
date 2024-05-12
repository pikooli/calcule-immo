<script lang="ts">
	import type { MonthSchedule } from '$lib/stores/amortizationSchedule';
	export let monthContent: MonthSchedule;
	const {
		month,
		monthMortgagePayement,
		monthlyInterest,
		monthlyPayment,
		remainingCapital,
		mortageInsuranceFees
	} = monthContent;
</script>

<div class="schedule-row">
	<p>{month + 1}</p>
	<p>{monthlyPayment}</p>
	<p>{monthMortgagePayement}</p>
	<p>{monthlyInterest}</p>
	<p>{mortageInsuranceFees}</p>
	<p>{remainingCapital}</p>
</div>

<style>
	.schedule-row {
		& > p {
			margin: 4px 0; /* Reducing space between paragraphs to mimic a tighter table row */
			padding: 8px; /* Padding for better readability */
			background-color: #f8f8f8; /* Light grey background for each cell */
			border: 1px solid #ddd; /* Borders for each cell */
		}
	}
</style>
