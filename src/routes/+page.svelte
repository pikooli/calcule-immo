<script lang="ts">
	import { immoValues } from '$lib/stores/immo';
	import { ImmoForm } from '$components/forms';
</script>

<ImmoForm />
<ul class="display">
	{#each Object.entries($immoValues) as [key, value]}
		{#if key !== 'lastUpdated'}
			<li><strong>{key.replace(/_/g, ' ')}:</strong> {value}</li>
		{/if}
	{/each}
</ul>

<style>
	.display {
		display: grid;
		grid-template-columns: repeat(2, 2fr);
		padding-left: 80px;
		padding-right: 80px;
		& > li {
			list-style-type: none;
			border: solid 1px #679;
			padding: 10px;
		}
	}
</style>
