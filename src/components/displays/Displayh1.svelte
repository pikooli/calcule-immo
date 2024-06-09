<script lang="ts">
	export let className: string = '';
	export let text: string = '';
</script>

<div class={`block ${className}`}>
	<h1 class="text-lg font-bold">
		{text}
	</h1>
</div>
