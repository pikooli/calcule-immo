<script lang="ts">
	import type { MonthSchedule } from '$lib/stores/amortizationSchedule';
	import { formatNumber } from '$lib/utils/display';
	import { DisplayAmount } from '$components/displays';
	export let monthContent: MonthSchedule;
	import { sign } from '$lib/constants';
	const {
		month,
		monthMortgagePayment,
		monthlyInterest,
		monthlyPayment,
		remainingCapital,
		mortageInsuranceFees
	} = monthContent;
</script>

<div class="grid grid-cols-6 gap-2">
	<DisplayAmount className="my-1" value={(month + 1).toString()} />
	<DisplayAmount className="my-1" value={formatNumber(monthlyPayment)} {sign} />
	<DisplayAmount className="my-1" value={formatNumber(monthMortgagePayment)} {sign} />
	<DisplayAmount className="my-1" value={formatNumber(monthlyInterest)} {sign} />
	<DisplayAmount className="my-1" value={formatNumber(mortageInsuranceFees)} {sign} />
	<DisplayAmount className="my-1" value={formatNumber(remainingCapital)} {sign} />
</div>
