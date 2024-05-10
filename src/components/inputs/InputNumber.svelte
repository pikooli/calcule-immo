<script lang="ts">
	export let name: string;
	export let value: string = '';
	export let min: string = '';
	export let max: string = '';
	export let step: string = '';
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
