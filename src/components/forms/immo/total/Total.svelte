<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { DisplayAmount } from '$components/displays';
	import { immoStore } from '$lib/stores/immo';
	import { formatNumber } from '$lib/utils/display';
</script>

<DisplayAmount label={$_('report.total')} sign="€" value={formatNumber($immoStore.total)} />
