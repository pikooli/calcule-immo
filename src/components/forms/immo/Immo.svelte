<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { AmountBlock } from '$components/forms/immo/amount';
	import { MortgageBlock } from '$components/forms/immo/mortgage';
	import { DepositBlock } from '$components/forms/immo/deposit';
	import { TotalBlock } from '$components/forms/immo/total';
	import { IconBtn } from '$components/buttons';
	import { modalStore } from '$lib/stores/modals';
	import { DisplayH1 } from '$components/displays';
	import { Card } from '$components/displays';
	import amortizationScheduleIcon from '$lib/assets/images/amortizationScheduleIcon.png';
	import downloadIcon from '$lib/assets/images/download.png';
	import './immo.scss';
</script>

<form class="relative rounded-md bg-blue-300 p-4" method="POST">
	<Card className="bg-none">
		<DisplayH1 className="">Calcule-immo</DisplayH1>
		<div class="absolute right-4 top-4 flex content-center justify-end">
			<IconBtn
				handleClick={modalStore.triggerModal}
				src={amortizationScheduleIcon}
				className="w-[2rem] h-[2rem] rounded-md transform transition-transform duration-200 ease-in-out hover:scale-110 mx-1"
			/>
			<IconBtn
				handleClick={(e) => {
					e.preventDefault();
					window.alert('abracadabra');
				}}
				src={downloadIcon}
				className="w-[2rem] h-[2rem] rounded-md transform transition-transform duration-200 ease-in-out hover:scale-110 mx-1"
			/>
		</div>
	</Card>
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
	<Card></Card>
</form>
