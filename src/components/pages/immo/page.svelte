<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import { default as Compute } from '$components/pages/immo/Compute.svelte';

	onMount(() => {
		immoStore.init();
	});
</script>

<title>{$_('website')}</title>

<div class="mt-4">
	<Compute />
</div>
