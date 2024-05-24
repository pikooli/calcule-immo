<script lang="ts">
	import type { Placement } from '@floating-ui/dom';
	import { Icon } from '$components/icons';

	export let label: string = '';
	export let value: string = '';
	export let sign: string = '';
	export let className: string = '';
	export let classLabel: string = '';
	export let classAmount: string = '';
	export let classSign: string = '';

	export let iconSrc: string = '';
	export let iconAlt: string = '';
	export let iconClass: string = '';
	export let toolTip: string = '';
	export let toolTipPlacement: Placement = 'top';
	export let iconId: string = '';
</script>

<div class={`relative px-1 text-gray-900 shadow-sm sm:text-sm sm:leading-6 ${className}`}>
	<div class="flex items-center">
		{#if label}
			<div class={`mr-2 text-sm font-medium leading-6 text-gray-900 ${classLabel}`}>{label}</div>
		{/if}
		{#if iconSrc}
			<Icon
				src={iconSrc}
				alt={iconAlt}
				className={`h-[1rem] border-2 rounded-full ${iconClass}`}
				id={iconId}
				{toolTip}
				{toolTipPlacement}
			/>
		{/if}
	</div>
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
