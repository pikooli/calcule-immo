<script lang="ts">
	import { DisplayH1 } from '$components/displays';
	import { Card } from '$components/displays';
	import IconBar from './iconBar.svelte';
	import { t } from 'svelte-i18n';
</script>

<Card className="bg-none grid grid-cols-1 text-center md:grid-cols-3">
	<div />
	<DisplayH1 text={$t('pages.immo.title')} />
	<IconBar />
</Card>
