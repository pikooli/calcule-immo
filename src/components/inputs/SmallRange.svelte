<script lang="ts">
	import { Tooltip } from 'flowbite-svelte';
	import { colors } from '$colors';

	export let label: string = '';
	export let name: string = '';
	export let value: any;
	export let min: number = 0;
	export let max: number = 100;
	export let step: number = 1;
	export let onInput: any = null;
	export let toolTip: string = '';
	export let inputClass: string = '';
	export let containerClass: string = '';
	export let classLabel: string = '';
	export let whiteLabel: boolean = false;

	let tooltipVisible = false;

	function showTooltip() {
		tooltipVisible = true;
	}

	function hideTooltip() {
		tooltipVisible = false;
	}
</script>

<div class={`flex p-1 ${containerClass}`}>
	{#if label}
		<label
			for={name}
			class={`block text-sm font-medium leading-6 text-gray-900 ${whiteLabel ? 'text-whiteText' : ''} ${classLabel}`}
			>{label}</label
		>
	{/if}
	{#if toolTip}
		<Tooltip triggeredBy={`#${name}`} open={tooltipVisible}>{toolTip}</Tooltip>
	{/if}

	<input
		class={`range-sm h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-red-500 dark:bg-gray-700 ${inputClass}`}
		id={name}
		placeholder="test"
		{name}
		type="range"
		{min}
		{max}
		{step}
		bind:value
		on:input={onInput}
		on:input={showTooltip}
		on:touchend={hideTooltip}
		on:mouseenter={showTooltip}
		on:mouseleave={hideTooltip}
		style={`--thumb-color: ${colors.darkBlue[700]}; --thumb-border: ${colors.darkBlue[300]};`}
	/>
</div>

<style>
	/* input[type='range'] {
		-webkit-appearance: none;
	} */

	/* input[type='range']::-webkit-slider-runnable-track {
		background: gray;
	}

	input[type='range']:hover::-webkit-slider-runnable-track {
		background: blue;
	} */
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		height: 1.2rem;
		width: 1.2rem;
		border-radius: 4px;
		background-color: var(--thumb-color);
		border: 0.1px solid var(--thumb-border);
	}

	/* input[type='range']:hover::-webkit-slider-thumb {
		background: green;
	} */
</style>
