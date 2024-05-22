<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { AmountBlock } from '$components/forms/immo/amount';
	import { MortageBlock } from '$components/forms/immo/mortage';
	import { DepositBlock } from '$components/forms/immo/deposit';
	import { TotalBlock } from '$components/forms/immo/total';
	import './immo.scss';
	import { Card } from '$components/displays';

	// export let data: { data: string };
</script>

<form class="rounded-md bg-blue-300 p-4" method="POST">
	<Card bgColor="bg-none">
		<AmountBlock />
	</Card>
	<Card>
		<DepositBlock />
	</Card>
	<Card>
		<MortageBlock />
	</Card>
	<Card>
		<TotalBlock />
	</Card>
	<Card>
		<button class="btn-submit" type="submit">submit</button>
	</Card>
</form>
