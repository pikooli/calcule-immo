<script lang="ts">
	import InputNumber from './InputNumber.svelte';
	import SmallRange from './SmallRange.svelte';
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
	export let toolTip: string = '';
	export let sign: string = '';
	export let inputRangeClass: string = '';
	export let inputNumberClass: string = '';
</script>

<div class="flex flex-col">
	{#if label}
		<label for={nameInput} class="block text-sm font-medium leading-6 text-gray-900">{label}</label>
	{/if}
	<SmallRange
		{toolTip}
		name={nameRange}
		min={minRange}
		max={maxRange}
		step={stepRange}
		bind:value={valueRange}
		onInput={onInputRange}
		inputClass={inputRangeClass}
		containerClass="mb-1"
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
