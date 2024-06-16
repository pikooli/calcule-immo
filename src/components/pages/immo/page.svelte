<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import { default as Compute } from '$components/pages/immo/Compute.svelte';
	import { default as Article } from '$components/pages/immo/Articles.svelte';
	export let form;

	onMount(() => {
		immoStore.init(form?.immoStore ? JSON.parse(form.immoStore) : null);
	});
</script>

<svelte:head>
	<title>{`${$t('website.title')} - ${$t('pages.immo.title')}`}</title>
	<meta name="description" content={$t('pages.immo.description')} />
</svelte:head>

<Compute />
<Article />
