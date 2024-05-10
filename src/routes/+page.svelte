<script lang="ts">
	import { immoValues } from '$lib/stores/immoValues';
	import { ImmoForm } from '$components/forms';
</script>

<ImmoForm />
<ul>
	{#each Object.entries($immoValues) as [key, value]}
		{#if key !== 'lastUpdated'}
			<li><strong>{key.replace(/_/g, ' ')}:</strong> {value}</li>
		{/if}
	{/each}
</ul>

<style>
	ul {
		list-style: none;
	}
	li {
		margin: 0.5rem 0;
	}
</style>
