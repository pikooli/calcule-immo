<script lang="ts">
	import type { YearSchedule } from '$lib/stores/amortizationSchedule';
	import { MonthSchedule } from '$components/displays/amortizationSchedule/yearSchedule/monthSchedule/';
	import './YearSchedule.scss';

	export let yearSchedule: YearSchedule;
	const { monthSchedule, remainingCapital, year, yearInterest, yearPayment } = yearSchedule;
</script>

<div class="yearSchedule">
	<h2>Year : {year + 1}</h2>
	<MonthSchedule {monthSchedule} />
	<div class="yearSchedule-conclusion">
		<p>
			RemainingCapital : {remainingCapital}
		</p>
		<p>
			YearInterest : {yearInterest}
		</p>
		<p>
			YearPayment : {yearPayment}
		</p>
	</div>
</div>
