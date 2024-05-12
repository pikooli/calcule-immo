<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { MonthSchedule } from '$lib/stores/amortizationSchedule';
	import MonthContent from '$components/displays/amortizationSchedule/yearSchedule/monthSchedule/MonthContent.svelte';
	export let monthSchedule: MonthSchedule[];
</script>

<div class="schedule-row">
	<p><strong>{$_('amortizationSchedule.yearSchedule.monthSchedule.month')}</strong></p>
	<p>
		<strong>{$_('amortizationSchedule.yearSchedule.monthSchedule.monthlyPayment')}</strong>
	</p>
	<p>
		<strong>{$_('amortizationSchedule.yearSchedule.monthSchedule.monthMortgagePayment')} </strong>
	</p>
	<p>
		<strong>{$_('amortizationSchedule.yearSchedule.monthSchedule.monthlyInterest')}</strong>
	</p>
	<p>
		<strong>{$_('amortizationSchedule.yearSchedule.monthSchedule.mortageInsuranceFees')} </strong>
	</p>
	<p>
		<strong>{$_('amortizationSchedule.yearSchedule.monthSchedule.remainingCapital')}</strong>
	</p>
</div>

{#each monthSchedule as monthContent}
	<MonthContent {monthContent} />
{/each}
