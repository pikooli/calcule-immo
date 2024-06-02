<script lang="ts">
	import { t } from 'svelte-i18n';
	import type { MonthSchedule } from '$lib/stores/amortizationSchedule';
	import MonthContent from '$components/pages/immo/amortizationSchedule/yearSchedule/monthSchedule/MonthContent.svelte';
	import { DisplayStrong } from '$components/displays';
	export let monthSchedule: MonthSchedule[];
</script>

<div class="grid grid-cols-6 gap-2">
	<DisplayStrong text={$t('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.month')} />

	<DisplayStrong
		text={$t('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.monthlyPayment')}
	/>
	<DisplayStrong
		text={$t('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.monthMortgagePayment')}
	/>
	<DisplayStrong
		text={$t('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.monthlyInterest')}
	/>
	<DisplayStrong
		text={$t('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.mortgageInsuranceFees')}
	/>

	<DisplayStrong
		text={$t('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.remainingCapital')}
	/>
</div>

{#each monthSchedule as monthContent}
	<MonthContent {monthContent} />
{/each}
