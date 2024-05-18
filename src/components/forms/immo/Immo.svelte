<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { AmountBlock } from '$components/forms/immo/amount';
	import { MortageBlock } from '$components/forms/immo/mortage';
	import { DepositBlock } from '$components/forms/immo/deposit';
	import { NotaryBlock } from '$components/forms/immo/notary';
	import { AgencyBlock } from '$components/forms/immo/agency';

	import './immo.scss';

	// export let data: { data: string };
</script>

<form class="immo-form" method="POST">
	<AmountBlock />

	<DepositBlock />

	<MortageBlock />
	<NotaryBlock />
	<AgencyBlock />
	<div class="submit-block">
		<button class="btn-submit" type="submit">submit</button>
	</div>
</form>
