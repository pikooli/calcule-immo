<script lang="ts">
	export let label: string = '';
	export let name: string;
	export let value: any;
	export let min: number | null = null;
	export let max: number | null = null;
	export let step: number = 1;
	export let onInput: any = null;
</script>

<label>
	{label}
	<input placeholder="test" {name} type="text" {min} {max} {step} bind:value on:input={onInput} />
</label>

<style>
	input {
		flex: 1;
	}
</style>
