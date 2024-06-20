<script lang="ts">
	export let label: string = '';
	export let name: string;
	export let value: any;
	export let onInput: any = null;
	export let placeholder: string = '';
	export let inputClass: string = '';
	export let classLabel: string = '';
	export let whiteLabel: boolean = false;
</script>

<div class="flex flex-col">
	{#if label}
		<label
			for={name}
			class={`block text-sm font-medium leading-6 text-gray-900 ${whiteLabel ? 'text-whiteText' : ''} ${classLabel}`}
			>{label}</label
		>
	{/if}
	<div class="relative mt-2 rounded-md shadow-sm">
		<input
			class={`block w-full rounded-md border-0 py-1.5 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300
		placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${inputClass}`}
			{placeholder}
			{name}
			id={name}
			type="text"
			bind:value
			on:input={onInput}
		/>
	</div>
</div>
