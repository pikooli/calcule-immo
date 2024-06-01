<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { DisplayH1 } from '$components/displays';
	import { Card } from '$components/displays';
	import IconBar from './iconBar.svelte';
</script>

<Card className="bg-none">
	<DisplayH1 text="Compute" />
	<IconBar />
</Card>
