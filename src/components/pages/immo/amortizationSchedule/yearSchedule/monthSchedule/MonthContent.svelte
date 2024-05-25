<script lang="ts">
	import type { MonthSchedule } from '$lib/stores/amortizationSchedule';
	import { formatCurrency } from '$lib/utils/display';
	import { DisplayAmount } from '$components/displays';
	export let monthContent: MonthSchedule;
	const {
		month,
		monthMortgagePayment,
		monthlyInterest,
		monthlyPayment,
		remainingCapital,
		mortgageInsuranceFees
	} = monthContent;
</script>

<div class="grid grid-cols-6 gap-2">
	<DisplayAmount className="my-1" value={(month + 1).toString()} />
	<DisplayAmount className="my-1" value={formatCurrency(monthlyPayment)} />
	<DisplayAmount className="my-1" value={formatCurrency(monthMortgagePayment)} />
	<DisplayAmount className="my-1" value={formatCurrency(monthlyInterest)} />
	<DisplayAmount className="my-1" value={formatCurrency(mortgageInsuranceFees)} />
	<DisplayAmount className="my-1" value={formatCurrency(remainingCapital)} />
</div>
