<script lang="ts">
	import { Icon } from '$components/icons';
	import type { Placement } from '@floating-ui/dom';
	export let handleClick: (e: MouseEvent) => void = () => {};
	export let src: string = '';
	export let alt: string = '';
	export let iconClass: string = '';
	export let className: string = '';
	export let toolTip: string = '';
	export let toolTipPlacement: Placement = 'top';
	export let iconId: string = '';
</script>

<button on:click={handleClick} class={className} id={`btn-${iconId}`} name={`btn-${iconId}`}>
	<Icon {src} {alt} className={iconClass} id={iconId} {toolTip} {toolTipPlacement} />
</button>
