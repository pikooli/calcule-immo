<script lang="ts">
	export let label: string = '';
	export let name: string;
	export let value: boolean = false;
	export let onInput: any = null;
	export let required: boolean = false;
	export let inputClass: string = '';
</script>

<div class="justify-content-center flex items-center p-1">
	{#if label}
		<label for={name} class="block text-sm font-medium leading-6 text-gray-900">{label}</label>
	{/if}
	<input
		class={`ml-4 block rounded-md text-gray-900 shadow-sm sm:text-sm sm:leading-6 ${inputClass}`}
		{name}
		id={name}
		type="checkbox"
		bind:checked={value}
		{value}
		on:input={onInput}
		{required}
	/>
</div>
