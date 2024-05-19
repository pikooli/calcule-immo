<script lang="ts">
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { ImmoForm } from '$components/forms';
	import { Report } from '$components/displays/report';
	import { AmortizationSchedule } from '$components/displays/amortizationSchedule';
	import { _ } from 'svelte-i18n';

	onMount(() => {
		immoStore.init();
		amortizationScheduleStore.init($immoStore);
	});
</script>

<button on:click={() => locale.set('en')}>Change language</button>
{$_('start')}

<h1>Calcule-immo</h1>

<div class="block_1">
	<ImmoForm />

	<Report />
</div>

<AmortizationSchedule />

<style>
	.block_1 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}
</style>
