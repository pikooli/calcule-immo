<script lang="ts">
	import { Tooltip } from 'flowbite-svelte';
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
		<label for={name} class="block text-sm font-medium leading-6 text-gray-900">{label}</label>
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
		on:touchstart={showTooltip}
		on:touchend={hideTooltip}
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
		height: 0.7rem;
		width: 0.7rem;
	}

	/* input[type='range']:hover::-webkit-slider-thumb {
		background: green;
	} */
</style>
