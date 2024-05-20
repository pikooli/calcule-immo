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
	{label}
	{#if toolTip}
		<Tooltip triggeredBy={`#${name}`}>{toolTip}</Tooltip>
	{/if}
	<input
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
