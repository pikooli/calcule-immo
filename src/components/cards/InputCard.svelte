<script>
	export let label = '';
</script>

<div class="inputCard">
	{#if label}
		<span>{label}</span>
	{/if}
	<div class="inputCard-content">
		<slot />
	</div>
</div>

<style>
	.inputCard {
		display: flex;
		justify-items: center;
		align-items: center;
		gap: 1rem;
		margin: 10px 2.5px;
	}
	.inputCard-content {
		display: flex;
		flex-direction: column;
	}
</style>
