<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { AmountBlock } from '$components/forms/immo/amount';
	import { MortgageBlock } from '$components/forms/immo/mortgage';
	import { DepositBlock } from '$components/forms/immo/deposit';
	import { TotalBlock } from '$components/forms/immo/total';
	import { SubmitBtn } from '$components/buttons';
	import { modalStore } from '$lib/stores/modals';
	import './immo.scss';
	import { Card } from '$components/displays';
</script>

<form class="rounded-md bg-blue-300 p-4" method="POST">
	<Card className="bg-none">
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
	<Card className="mt-4 border-t-2 pt-4 text-end">
		<button on:click={modalStore.triggerModal}>openModal</button>
		<SubmitBtn txt={$_('form.submit')} />
	</Card>
</form>
