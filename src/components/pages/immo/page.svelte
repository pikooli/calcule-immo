<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import { default as Compute } from '$components/pages/immo/Compute.svelte';

	onMount(() => {
		immoStore.init();
	});
</script>

<title>{`${$t('website')} - ${$t('pages.immo.title')}`}</title>

<Compute />
