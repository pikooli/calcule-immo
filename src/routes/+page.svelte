<script lang="ts">
	import { onMount } from 'svelte';
	import { immoStore } from '$lib/stores/immo';
	import { modalStore } from '$lib/stores/modals';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { ImmoForm } from '$components/forms';
	import { AmortizationSchedule, DisplayH1 } from '$components/displays';
	import { Modal } from '$components/modals';
	import { _ } from 'svelte-i18n';

	onMount(() => {
		immoStore.init();
		amortizationScheduleStore.init($immoStore);
	});
</script>

<DisplayH1>Calcule-immo</DisplayH1>

<div class="block_1">
	<ImmoForm />
</div>

<Modal open={$modalStore}>
	<AmortizationSchedule />
</Modal>

<style>
	.block_1 {
		display: flex;
		justify-content: center;
	}
</style>
