<script lang="ts">
	import type { Placement } from '@floating-ui/dom';
	import { questMarkIconAvif } from '$lib/assets/icons';
	import { Icon } from '$components/icons';

	export let label: string = '';
	export let name: string;
	export let value: any;
	export let min: number | null = null;
	export let max: number | null = null;
	export let step: number = 1;
	export let onInput: any = null;
	export let sign: string = '';
	export let placeholder: string = 'test';
	export let inputClass: string = '';

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
	<div class="flex items-center">
		{#if label}
			<label
				for={name}
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
	<div class="relative rounded-md shadow-sm">
		<input
			class={`block w-full rounded-md border-0 py-1.5 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300
		placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${inputClass}`}
			{placeholder}
			id={name}
			{name}
			type="number"
			{min}
			{max}
			{step}
			bind:value
			on:input={onInput}
		/>
		{#if sign}
			<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
				<span class="text-gray-500 sm:text-sm">{sign}</span>
			</div>
		{/if}
	</div>
</div>
