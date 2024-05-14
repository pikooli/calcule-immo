<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { immoStore } from '$lib/stores/immo';
	import { formatNumber } from '$lib/utils/display';
	import './Report.scss';
</script>

<div class="report">
	<div class="group">
		<p class="euros">{$_('report.amount')}: {formatNumber($immoStore.amount)}</p>
		<p>
			{$_('report.mortgageDurationYears')}:
			{formatNumber($immoStore.mortgageDurationYears)}
		</p>
	</div>
	<div class="group">
		<p class="euros">{$_('report.depositeAmount')}: {formatNumber($immoStore.depositeAmount)}</p>
		<p>
			{$_('report.depositePercent')}:
			{formatNumber($immoStore.depositePercent)}
		</p>
	</div>
	<div class="group">
		<p class="euros">{$_('report.mortgageAmount')}: {formatNumber($immoStore.mortgageAmount)}</p>
		<p>
			{$_('report.mortgageAmountPercent')}:
			{formatNumber($immoStore.mortgageAmountPercent)}
		</p>
	</div>
	<div class="group">
		<p>
			{$_('report.mortgageRatePercent')}:
			{$immoStore.mortgageRatePercent}
		</p>
		<p>
			{$_('report.mortgageMonthlyRatePercent')}:
			{$immoStore.mortgageMonthlyRatePercent}
		</p>
		<p class="euros">
			{$_('report.mortgageMonthlyRateAmount')}:
			{formatNumber($immoStore.mortgageMonthlyRateAmount)}
		</p>
		<p class="euros">
			{$_('report.mortageTotalRateAmount')}:
			{formatNumber($immoStore.mortageTotalRateAmount)}
		</p>
	</div>
	<div class="group">
		<p class="euros">{$_('report.agencyFees')}: {formatNumber($immoStore.agencyFees)}</p>
		<p>
			{$_('report.agencyFeesPercent')}:
			{formatNumber($immoStore.agencyFeesPercent)}
		</p>
	</div>
	<div class="group">
		<p class="euros">{$_('report.notaryFees')}: {formatNumber($immoStore.notaryFees)}</p>
		<p>
			{$_('report.notaryFeesPercent')}:
			{formatNumber($immoStore.notaryFeesPercent)}
		</p>
	</div>
	<p class="euros">
		{$_('report.mortageInsuranceFees')}:
		{formatNumber($immoStore.mortageInsuranceFees)}
	</p>
	<p class="euros">{$_('report.total')}: {formatNumber($immoStore.total)}</p>
</div>
