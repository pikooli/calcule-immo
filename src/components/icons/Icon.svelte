<script lang="ts">
	import { Tooltip } from 'flowbite-svelte';
	import type { Placement } from '@floating-ui/dom';

	export let src: string = '';
	export let alt: string = '';
	export let className: string = '';
	export let toolTip: string = '';
	export let toolTipPlacement: Placement = 'top';
	export let id: string = '';
	export let width: number = 24;
	export let height: number = 24;
</script>

{#if toolTip}
	<Tooltip
		triggeredBy={`#${id}`}
		placement={toolTipPlacement}
		type="custom"
		class="z-50	w-52 text-wrap bg-black p-2 text-sm font-medium text-gray-100"
	>
		{toolTip}</Tooltip
	>
{/if}
<img
	{src}
	{alt}
	{id}
	class={`h-6 w-auto transform transition-transform duration-200 ease-in-out hover:scale-[1.2] ${className}`}
	{width}
	{height}
/>
