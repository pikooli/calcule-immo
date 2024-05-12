<script lang="ts">
	import { immoStore } from '$lib/stores/immo';
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import { MortageBlock } from '$components/forms/immo/mortage';
	import { DepositBlock } from '$components/forms/immo/deposit';
	import { NotaryBlock } from '$components/forms/immo/notary';
	import { AgencyBlock } from '$components/forms/immo/agency';

	import './immo.scss';

	// export let data: { data: string };
</script>

<form method="POST">
	<div class="immo-form">
		<InputNumber
			name="amount"
			min={0}
			bind:value={$immoStore.amount}
			onInput={() => immoStore.updateValue('amount')}
		/>

		<AgencyBlock />
		<DepositBlock />

		<MortageBlock />
		<NotaryBlock />
	</div>

	<button type="submit">submit</button>
</form>
