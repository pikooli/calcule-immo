<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
</script>

<div class="report">
	<p><strong>{$_('report.amount')}:</strong> {$immoStore.amount}</p>
	<p><strong>{$_('report.depositePercent')}:</strong> {$immoStore.depositePercent}</p>
	<p><strong>{$_('report.depositeAmount')}:</strong> {$immoStore.depositeAmount}</p>
	<p><strong>{$_('report.mortgageAmount')}:</strong> {$immoStore.mortgageAmount}</p>
	<p><strong>{$_('report.mortgageAmountPercent')}:</strong> {$immoStore.mortgageAmountPercent}</p>
	<p><strong>{$_('report.mortgageDurationYears')}:</strong> {$immoStore.mortgageDurationYears}</p>
	<p><strong>{$_('report.mortgageRatePercent')}:</strong> {$immoStore.mortgageRatePercent}</p>
	<p>
		<strong>{$_('report.mortgageMonthlyRatePercent')}:</strong>
		{$immoStore.mortgageMonthlyRatePercent}
	</p>
	<p>
		<strong>{$_('report.mortgageMonthlyRateAmount')}:</strong>
		{$immoStore.mortgageMonthlyRateAmount}
	</p>
	<p><strong>{$_('report.mortageTotalRateAmount')}:</strong> {$immoStore.mortageTotalRateAmount}</p>
	<p><strong>{$_('report.mortageInsuranceFees')}:</strong> {$immoStore.mortageInsuranceFees}</p>
	<p><strong>{$_('report.agencyFees')}:</strong> {$immoStore.agencyFees}</p>
	<p><strong>{$_('report.agencyFeesPercent')}:</strong> {$immoStore.agencyFeesPercent}</p>
	<p><strong>{$_('report.notaryFees')}:</strong> {$immoStore.notaryFees}</p>
	<p><strong>{$_('report.notaryFeesPercent')}:</strong> {$immoStore.notaryFeesPercent}</p>
	<p><strong>{$_('report.total')}:</strong> {$immoStore.total}</p>
</div>

<style>
	.report {
		display: grid;
		grid-template-columns: repeat(2, 2fr);
		padding-left: 80px;
		padding-right: 80px;
		& > p {
			list-style-type: none;
			border: solid 1px #679;
			padding: 10px;
			margin: 0;
		}
	}
</style>
