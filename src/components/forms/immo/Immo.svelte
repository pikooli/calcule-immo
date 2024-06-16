<script lang="ts">
	import { AmountBlock } from '$components/forms/immo/amount';
	import { MortgageBlock } from '$components/forms/immo/mortgage';
	import { DepositBlock } from '$components/forms/immo/deposit';
	import { TotalBlock } from '$components/forms/immo/total';
	import { Card } from '$components/displays';
	import './immo.scss';
</script>

<form method="POST">
	<AmountBlock />

	<DepositBlock />
	<MortgageBlock />
	<Card className="mt-4 border-t-2 pt-4">
		<TotalBlock />
	</Card>
</form>
