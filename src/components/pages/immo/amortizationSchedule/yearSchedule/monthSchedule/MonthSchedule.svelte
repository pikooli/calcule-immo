<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { MonthSchedule } from '$lib/stores/amortizationSchedule';
	import MonthContent from '$components/pages/immo/amortizationSchedule/yearSchedule/monthSchedule/MonthContent.svelte';
	import { DisplayStrong } from '$components/displays';
	export let monthSchedule: MonthSchedule[];
</script>

<div class="grid grid-cols-6 gap-2">
	<DisplayStrong>
		{$_('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.month')}
	</DisplayStrong>
	<DisplayStrong
		>{$_(
			'pages.immo.amortizationSchedule.yearSchedule.monthSchedule.monthlyPayment'
		)}</DisplayStrong
	>
	<DisplayStrong
		>{$_(
			'pages.immo.amortizationSchedule.yearSchedule.monthSchedule.monthMortgagePayment'
		)}</DisplayStrong
	>
	<DisplayStrong
		>{$_(
			'pages.immo.amortizationSchedule.yearSchedule.monthSchedule.monthlyInterest'
		)}</DisplayStrong
	>
	<DisplayStrong
		>{$_(
			'pages.immo.amortizationSchedule.yearSchedule.monthSchedule.mortgageInsuranceFees'
		)}</DisplayStrong
	>
	<DisplayStrong
		>{$_(
			'pages.immo.amortizationSchedule.yearSchedule.monthSchedule.remainingCapital'
		)}</DisplayStrong
	>
</div>

{#each monthSchedule as monthContent}
	<MonthContent {monthContent} />
{/each}
