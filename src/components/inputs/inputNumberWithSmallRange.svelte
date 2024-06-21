<script lang="ts">
	import type { Placement } from '@floating-ui/dom';
	import { Icon } from '$components/icons';
	import InputNumber from './InputNumber.svelte';
	import SmallRange from './SmallRange.svelte';
	import { questMarkIconAvif } from '$lib/assets/icons';

	export let label: string = '';
	export let nameRange: string = '';
	export let nameInput: string = '';
	export let valueRange: any;
	export let valueInput: any;
	export let minRange: number = 0;
	export let maxRange: number = 100;
	export let minInput: number | null = null;
	export let maxInput: number | null = null;
	export let stepRange: number = 1;
	export let stepInput: number = 1;
	export let onInputRange: any = null;
	export let onInputNumber: any = null;
	export let toolTipRange: string = '';
	export let sign: string = '';
	export let inputRangeClass: string = '';
	export let inputNumberClass: string = '';

	export let iconSrc: string = '';
	export let iconAlt: string = '';
	export let iconClass: string = '';
	export let toolTip: string = '';
	export let toolTipPlacement: Placement = 'top';
	export let iconId: string = '';
	export let classLabel: string = '';
	export let whiteLabel: boolean = false;
</script>

<div class="flex flex-col">
	<div class="mb-1 flex items-center">
		{#if label}
			<label
				for={nameInput}
				class={`mr-2 block text-sm font-medium leading-6 text-gray-900 ${whiteLabel ? 'text-whiteText' : ''} ${classLabel}`}
				>{label}</label
			>
		{/if}
		{#if iconSrc || toolTip}
			<Icon
				src={iconSrc || questMarkIconAvif}
				alt={iconAlt}
				className={`h-[1rem] border-2 rounded-full ${iconClass}`}
				id={iconId || 'question-mark'}
				{toolTip}
				{toolTipPlacement}
			/>
		{/if}
	</div>
	<SmallRange
		toolTip={toolTipRange}
		name={nameRange}
		min={minRange}
		max={maxRange}
		step={stepRange}
		bind:value={valueRange}
		onInput={onInputRange}
		inputClass={inputRangeClass}
		containerClass="mb-2"
	/>
	<InputNumber
		name={nameInput}
		min={minInput}
		max={maxInput}
		step={stepInput}
		bind:value={valueInput}
		onInput={onInputNumber}
		{sign}
		inputClass={inputNumberClass}
	/>
</div>
