<script>
	export let label = '';
</script>

<div class="inputCard">
	{#if label}
		<label class="block text-sm font-medium leading-6 text-gray-900">{label}</label>
	{/if}
	<div class="inputCard-content">
		<slot />
	</div>
</div>

<style>
	.inputCard {
		margin: 10px;
	}
	.inputCard-content {
		display: flex;
		flex-direction: column;
	}
</style>
