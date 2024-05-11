<script lang="ts">
	export let name: string;
	export let value: any;
	export let min: number | null = null;
	export let max: number | null = null;
	export let step: number = 1;
	export let onInput: any = null;
</script>

<label>
	{name}
	<input placeholder="test" {name} type="number" {min} {max} {step} bind:value on:input={onInput} />
</label>

<style>
	input {
		flex: 1;
	}
</style>
