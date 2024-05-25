<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { YearSchedule } from '$components/pages/immo/amortizationSchedule/yearSchedule';
	import { DisplayH1 } from '$components/displays';
	import AmortizationTotal from './AmortizationTotal.svelte';
	import { IconBtn } from '$components/buttons';
	import crossIcon from '$lib/assets/images/cross.png';
	import { modalStore } from '$lib/stores/modals';
</script>

<div class="rounded-md border bg-stone-50 shadow-md">
	<IconBtn
		src={crossIcon}
		className="absolute right-0 z-20 mr-6"
		iconClass="h-[25px]"
		handleClick={modalStore.triggerModal}
	/>

	<DisplayH1 className="text-center p-2" text={$_('pages.immo.amortizationSchedule.title')} />
	<div class="max-h-[500px] overflow-hidden overflow-y-auto py-2">
		{#each $amortizationScheduleStore as yearSchedule (yearSchedule)}
			<YearSchedule {yearSchedule} />
		{/each}
		<AmortizationTotal />
	</div>
</div>
