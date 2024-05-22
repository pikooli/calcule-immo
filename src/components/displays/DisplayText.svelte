<script lang="ts">
	export let className: string = '';
</script>

<div class={`block w-full text-center ${className}`}>
	<slot />
</div>
