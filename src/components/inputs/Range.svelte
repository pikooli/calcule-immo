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
</script>

<label>
	{#if label}
		<label for={name} class="block text-sm font-medium leading-6 text-gray-900">{label}</label>
	{/if}
	{#if toolTip}
		<Tooltip triggeredBy={`#${name}`}>{toolTip}</Tooltip>
	{/if}

	<input
		class="range-sm h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-red-500 dark:bg-gray-700"
		id={name}
		placeholder="test"
		{name}
		type="range"
		{min}
		{max}
		{step}
		bind:value
		on:input={onInput}
	/>
</label>

<style>
	input {
		flex: 1;
	}
</style>
