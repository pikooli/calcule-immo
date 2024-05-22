<script lang="ts">
	export let bgColor: string = 'bg-transparent';
	export let ringColor: string = 'ring-transparent';
	export let borderRadious: string = 'rounded-none';
	export let borderSize: string = 'border-0';
	export let padding: string = 'p-1.5';
</script>

<div
	class={`${bgColor} block w-full ${borderRadious} ${borderSize} ${padding} ring-1 ring-inset ${ringColor}`}
>
	<slot />
</div>
