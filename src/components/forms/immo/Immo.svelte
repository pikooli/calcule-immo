<script lang="ts">
	import InputNumber from '$components/inputs/InputNumber.svelte';
	import RangeInput from '$components/inputs/Range.svelte';
	import { immoValues } from '$lib/stores/immoValues';
	import { inputMortgage, inputNumber, inputRange } from './handle';
	import { NOTARY_PERCENT, MORTGAGE_DURATION_MIN, MORTGAGE_DURATION_MAX } from './constants';

	$: $immoValues.total =
		Number($immoValues.contribution_amount) +
		Number($immoValues.notary_fees) +
		Number($immoValues.mortgage_amount);
	$: $immoValues.notary_fees = (Number($immoValues.amount) * NOTARY_PERCENT).toFixed(0);

	$: if ($immoValues.lastUpdated === 'contribution_percent') {
		$immoValues.contribution_amount = (
			(Number($immoValues.amount) * Number($immoValues.contribution_percent)) /
			100
		).toFixed(2);
		$immoValues.mortgage_amount = (
			Number($immoValues.amount) - Number($immoValues.contribution_amount)
		).toFixed(2);
	}

	$: if ($immoValues.lastUpdated === 'contribution_amount') {
		$immoValues.contribution_percent = (
			(Number($immoValues.contribution_amount) / Number($immoValues.amount)) *
			100
		).toFixed(2);
		$immoValues.mortgage_amount = (
			Number($immoValues.amount) - Number($immoValues.contribution_amount)
		).toFixed(2);
	}

	$: if ($immoValues.lastUpdated === 'mortgage_amount') {
		const contribution_amount = (
			Number($immoValues.amount) - Number($immoValues.mortgage_amount)
		).toFixed(2);

		$immoValues.contribution_percent = (
			(Number(contribution_amount) / Number($immoValues.amount)) *
			100
		).toFixed(2);
		$immoValues.contribution_amount = contribution_amount;
	}

	// export let data: { data: string };
</script>

<form method="POST">
	<div class="immo-form">
		<InputNumber name="amount" bind:value={$immoValues.amount} />
		<RangeInput
			name="contribution_percent"
			min="0"
			max="100"
			step="1"
			bind:value={$immoValues.contribution_percent}
			onInput={inputRange}
		/>
		<InputNumber
			name="contribution_amount"
			bind:value={$immoValues.contribution_amount}
			onInput={inputNumber}
		/>
		<InputNumber
			name="mortgage_amount"
			bind:value={$immoValues.mortgage_amount}
			onInput={inputMortgage}
		/>
		<RangeInput
			name="mortgage_duration"
			min={MORTGAGE_DURATION_MIN}
			max={MORTGAGE_DURATION_MAX}
			step="1"
			bind:value={$immoValues.mortgage_duration}
		/>
	</div>

	<button type="submit">submit</button>
</form>

<style src="./immo.css"></style>
