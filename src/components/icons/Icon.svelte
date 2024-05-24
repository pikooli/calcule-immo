<script lang="ts">
	import { Tooltip } from 'flowbite-svelte';
	import type { Placement } from '@floating-ui/dom';

	export let src: string = '';
	export let alt: string = '';
	export let className: string = '';
	export let toolTip: string = '';
	export let toolTipPlacement: Placement = 'top';
	export let id: string = '';
</script>

{#if toolTip}
	<Tooltip triggeredBy={`#${id}`} placement={toolTipPlacement}>{toolTip}</Tooltip>
{/if}
<img
	{src}
	{alt}
	{id}
	class={`h-5 w-auto transform transition-transform duration-200 ease-in-out hover:scale-[1.2] ${className}`}
/>
