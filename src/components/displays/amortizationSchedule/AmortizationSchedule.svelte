<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { YearSchedule } from '$components/displays/amortizationSchedule/yearSchedule';
	import './AmortizationSchedule.scss';
	import downArrow from '$lib/assets/downArrow.svg';
	let isAmortizationActived = false;

	function toggleRotation() {
		isAmortizationActived = !isAmortizationActived;
	}
</script>

<div class="amortizationSchedule">
	<div class="amortizationScheduleHeader">
		<button class="downArrowContainer" on:click={toggleRotation}>
			<img
				src={downArrow}
				alt="Down Arrow"
				class="downArrow {isAmortizationActived ? 'active' : ''}"
			/>
		</button>

		<h1 class="amortizationSchedule-title">{$_('amortizationSchedule.title')}</h1>
	</div>
	<div class="amortizationSchedule-content {isAmortizationActived ? 'expanded' : ''}">
		{#each $amortizationScheduleStore as yearSchedule (yearSchedule)}
			<YearSchedule {yearSchedule} />
		{/each}
	</div>
</div>

<style>
	.downArrowContainer {
		background: none;
		border: none;
		padding: 0;
	}
	.downArrow {
		width: 50px;
		height: 50px;
		cursor: pointer;
		transition: transform 0.3s ease;
		transform: rotate(-180deg);
	}

	.downArrow.active {
		transform: rotate(0);
	}
	.amortizationScheduleHeader {
		display: flex;
		gap: 20px;
	}
</style>
