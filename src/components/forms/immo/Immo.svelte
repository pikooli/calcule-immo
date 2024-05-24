<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { AmountBlock } from '$components/forms/immo/amount';
	import { MortgageBlock } from '$components/forms/immo/mortgage';
	import { DepositBlock } from '$components/forms/immo/deposit';
	import { TotalBlock } from '$components/forms/immo/total';
	import { Card } from '$components/displays';
	import './immo.scss';
</script>

<form method="POST">
	<Card>
		<AmountBlock />
	</Card>

	<Card className="mt-4 border-t-2 pt-4">
		<DepositBlock />
	</Card>
	<Card className="mt-4 border-t-2 pt-4">
		<MortgageBlock />
	</Card>
	<Card className="mt-4 border-t-2 pt-4">
		<TotalBlock />
	</Card>
	<Card></Card>
</form>
