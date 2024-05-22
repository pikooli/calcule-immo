<script lang="ts">
	export let className: string = '';
</script>

<div class={`block w-full text-center ${className}`}>
	<h1 class="text-lg font-bold">
		<slot />
	</h1>
</div>
