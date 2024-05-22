<script lang="ts">
	export let className: string = '';
</script>

<div
	class={`block w-full rounded-none border-0 bg-transparent p-1.5 ring-1 ring-inset ring-transparent ${className}`}
>
	<slot />
</div>
