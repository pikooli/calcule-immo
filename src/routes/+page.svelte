<script lang="ts">
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { ImmoForm } from '$components/forms';
	import { AmortizationSchedule } from '$components/displays';
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
</div>

<AmortizationSchedule />

<style>
	.block_1 {
		display: flex;
		justify-content: center;
	}
</style>
