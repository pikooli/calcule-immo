<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { YearSchedule } from '$components/amortizationSchedule/yearSchedule';
	import { DisplayH1 } from '$components/displays';
	import { Icon } from '$components/icons';
	import downArrow from '$lib/assets/downArrow.svg';
	let isAmortizationActived = false;

	function toggleRotation() {
		isAmortizationActived = !isAmortizationActived;
	}
</script>

<div class="rounded-md border bg-stone-50 p-4 shadow-md">
	<div class="flex pb-2">
		<Icon
			handleClick={toggleRotation}
			src={downArrow}
			alt="Down Arrow"
			className={`transform transition-transform duration-300 ${isAmortizationActived ? 'rotate-0' : '-rotate-180'}`}
		/>

		<DisplayH1 className="text-center">{$_('amortizationSchedule.title')}</DisplayH1>
	</div>
	<div
		class={`overflow-hidden transition-all duration-500 ease-in-out ${
			isAmortizationActived ? 'max-h-[500px] overflow-y-auto py-2' : 'max-h-0'
		}`}
		style="transition-property: max-height, padding;"
	>
		{#each $amortizationScheduleStore as yearSchedule (yearSchedule)}
			<YearSchedule {yearSchedule} />
		{/each}
	</div>
</div>
