<script lang="ts">
	export let className: string = '';
	export let text: string = '';
</script>

<div class={`block w-full text-center ${className}`}>
	{text}
</div>
