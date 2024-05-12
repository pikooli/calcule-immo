<script lang="ts">
	import type { YearSchedule } from '$lib/stores/amortizationSchedule';
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
	<h2>Year : {year + 1}</h2>
	<MonthSchedule {monthSchedule} />
	<div class="yearSchedule-conclusion">
		<p>
			YearPayment : {yearPayment}
		</p>
		<p>
			YearMortgagePayment : {yearMortgagePayment}
		</p>
		<p>
			YearInterest : {yearInterest}
		</p>
		<p>
			mortageInsuranceFees : {mortageInsuranceFees}
		</p>
		<p>
			RemainingCapital : {remainingCapital}
		</p>
	</div>
</div>
