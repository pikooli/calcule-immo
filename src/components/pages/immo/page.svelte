<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import { modalStore } from '$lib/stores/modals';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { AmortizationSchedule } from '$components/pages/immo/amortizationSchedule';
	import { Modal } from '$components/modals';
	import { default as Compute } from '$components/pages/immo/Compute.svelte';

	onMount(() => {
		immoStore.init();
		amortizationScheduleStore.init($immoStore);
	});
</script>

<title>{$_('website')}</title>

<div class="mt-4">
	<Compute />
</div>
<Modal open={$modalStore}>
	<AmortizationSchedule />
</Modal>
