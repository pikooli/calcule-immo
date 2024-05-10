<script lang="ts">
	export let name: string;
	export let value = '';
	export let min: string = '';
	export let max: string = '';
	export let step: string = '';
	export let onInput: any = null;
</script>

<label>
	{name}
	<input placeholder="test" {name} type="range" {min} {max} {step} bind:value on:input={onInput} />
</label>

<style>
	input {
		flex: 1;
	}
</style>
