<script lang="ts">
	import InputNumber from './InputNumber.svelte';
	import InputRange from './Range.svelte';
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
</script>

<div>
	{label}
	<InputRange
		{toolTip}
		name={nameRange}
		min={minRange}
		max={maxRange}
		step={stepRange}
		bind:value={valueRange}
		onInput={onInputRange}
	/>
	<InputNumber
		name={nameInput}
		min={minInput}
		max={maxInput}
		step={stepInput}
		bind:value={valueInput}
		onInput={onInputNumber}
	/>
</div>
