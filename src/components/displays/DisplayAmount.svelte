<script lang="ts">
	export let label: string = '';
	export let value: string = '';
	export let sign: string = '';
	export let className: string = '';
	export let classLabel: string = '';
	export let classAmount: string = '';
	export let classSign: string = '';
</script>

<div class={`relative px-1 text-gray-900 shadow-sm sm:text-sm sm:leading-6 ${className}`}>
	{#if label}
		<div class={`text-sm font-medium leading-6 text-gray-900 ${classLabel}`}>{label}</div>
	{/if}
	<div
		class={`rounded-md rounded-md border-0
			bg-slate-200 p-2 py-1.5
			text-end ring-1
			ring-1 ring-inset ring-inset ring-gray-300
			ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
			focus:ring-indigo-600
			${classAmount}`}
	>
		<span>
			{value}
		</span>
		{#if sign}
			<span class={`text-gray-500 sm:text-sm ${classSign}`}>{sign}</span>
		{/if}
	</div>
</div>
