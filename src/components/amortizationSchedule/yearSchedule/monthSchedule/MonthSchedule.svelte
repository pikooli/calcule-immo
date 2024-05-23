<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { MonthSchedule } from '$lib/stores/amortizationSchedule';
	import MonthContent from '$components/amortizationSchedule/yearSchedule/monthSchedule/MonthContent.svelte';
	import { DisplayStrong } from '$components/displays';
	export let monthSchedule: MonthSchedule[];
</script>

<div class="grid grid-cols-6 gap-2">
	<DisplayStrong>
		{$_('amortizationSchedule.yearSchedule.monthSchedule.month')}
	</DisplayStrong>
	<DisplayStrong
		>{$_('amortizationSchedule.yearSchedule.monthSchedule.monthlyPayment')}</DisplayStrong
	>
	<DisplayStrong
		>{$_('amortizationSchedule.yearSchedule.monthSchedule.monthMortgagePayment')}</DisplayStrong
	>
	<DisplayStrong
		>{$_('amortizationSchedule.yearSchedule.monthSchedule.monthlyInterest')}</DisplayStrong
	>
	<DisplayStrong
		>{$_('amortizationSchedule.yearSchedule.monthSchedule.mortgageInsuranceFees')}</DisplayStrong
	>
	<DisplayStrong
		>{$_('amortizationSchedule.yearSchedule.monthSchedule.remainingCapital')}</DisplayStrong
	>
</div>

{#each monthSchedule as monthContent}
	<MonthContent {monthContent} />
{/each}
