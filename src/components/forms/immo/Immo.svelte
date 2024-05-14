<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { Amount } from '$components/forms/immo/amount';
	import { MortageBlock } from '$components/forms/immo/mortage';
	import { DepositBlock } from '$components/forms/immo/deposit';
	import { NotaryBlock } from '$components/forms/immo/notary';
	import { AgencyBlock } from '$components/forms/immo/agency';

	import './immo.scss';

	// export let data: { data: string };
</script>

<form class="immo-form" method="POST">
	<Amount />

	<DepositBlock />

	<MortageBlock />
	<NotaryBlock />
	<AgencyBlock />

	<button class="btn-submit" type="submit">submit</button>
</form>
